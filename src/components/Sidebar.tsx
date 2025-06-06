'use client';

import { useState, useEffect } from 'react';
import { IoMdMail } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/context/UserContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  useEffect(() => {
    // Only collapse on desktop
    setIsCollapsed(false);
  }, [isMobile]);

  const menuItems = [
    { icon: <IoMdMail className="w-5 h-5" />, label: 'Inbox', href: '/list' },
    { icon: <IoPersonOutline className="w-5 h-5" />, label: 'Contact', href: '/contact' },
    { icon: <IoSettingsOutline className="w-5 h-5" />, label: 'Setting', href: '/setting' },
  ];

  // Determine if sidebar should be collapsed (only on desktop)
  const shouldCollapse = !isMobile && isCollapsed;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed md:static inset-y-0 left-0 z-50 bg-white/70 backdrop-blur-sm min-h-screen transition-all duration-300 border-r border-gray-100 shadow-sm ${
          shouldCollapse ? 'w-20' : 'w-64'
        } ${isOpen || !isMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Account Section */}
        <div className="p-6 border-b border-gray-50">
          <div className={`flex ${shouldCollapse ? 'justify-center' : 'items-center gap-4'}`}>
            <div className={`relative ${shouldCollapse ? 'w-10 h-10' : 'w-12 h-12'} shadow-sm rounded-full overflow-hidden`}>
              {user && (
                <Image
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatarSeed}`}
                  alt="Account avatar"
                  fill
                  className="rounded-full"
                />
              )}
            </div>
            {!shouldCollapse && user && (
              <div>
                <h3 className="font-medium text-gray-700">{user.name}</h3>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
            )}
          </div>
        </div>

        {/* Collapse Button - Only show on desktop */}
        <div className="hidden md:flex p-4 justify-end">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {shouldCollapse ? (
              <IoChevronForward className="w-4 h-4" />
            ) : (
              <IoChevronBack className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-2 px-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => isMobile && onClose()}
              className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={`flex items-center justify-center ${
                pathname === item.href ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
              }`}>
                {item.icon}
              </span>
              {!shouldCollapse && (
                <span className="ml-4 font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

// Add this to make the Sidebar component available to parent components
export function toggleMobileSidebar() {
  const event = new CustomEvent('toggle-mobile-sidebar');
  window.dispatchEvent(event);
} 