'use client';

import { useState } from 'react';
import { Sidebar } from "@/components/Sidebar";
import { LetterList } from "@/components/LetterList";

export default function ListPage() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar - always render but control visibility with state */}
      <Sidebar isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <LetterList onMenuClick={toggleMobileSidebar} />
      </main>
    </div>
  );
} 