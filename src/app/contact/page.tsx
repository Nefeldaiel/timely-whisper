'use client';

import { useState } from 'react';
import { Sidebar } from "@/components/Sidebar";
import { ContactList } from '@/components/ContactList';

export default function ContactPage() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <ContactList onMenuClick={handleMenuClick} />
      </main>
    </div>
  );
} 