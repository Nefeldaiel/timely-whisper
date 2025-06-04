'use client';

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ConfirmDialog } from "@/components/ConfirmDialog";

export default function SettingPage() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Add any logout logic here (clear session, cookies, etc.)
    router.push('/welcome');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Header with mobile menu */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Settings</h1>
            {/* Mobile menu button - only visible on mobile */}
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6 text-gray-600"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Account Section */}
            <div className="p-6 border-b border-gray-50">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Account</h2>
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Log Out
              </button>
            </div>

            {/* Future settings sections can be added here */}
          </div>
        </div>
      </main>

      {/* Logout Confirmation Dialog */}
      <ConfirmDialog
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
      />
    </div>
  );
} 