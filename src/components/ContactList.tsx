'use client';

import { useState } from 'react';
import { IoStarOutline, IoStar } from 'react-icons/io5';
import Image from 'next/image';
import { useUser } from '@/context/UserContext';

interface ContactListProps {
  onMenuClick: () => void;
}

export function ContactList({ onMenuClick }: ContactListProps) {
  const { user, toggleContactFavorite, isLoading } = useUser();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = user?.contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const sortedContacts = [...filteredContacts].sort((a, b) => {
    // Sort by favorite status first
    if (a.isFavorite !== b.isFavorite) {
      return a.isFavorite ? -1 : 1;
    }
    // Then sort by name
    return a.name.localeCompare(b.name);
  });

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-gray-200 rounded mb-8"></div>
          <div className="h-12 w-full bg-gray-200 rounded mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 w-full bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header with responsive styles */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800">Contacts</h1>
        {/* Mobile menu button - only visible on mobile */}
        <button 
          onClick={onMenuClick}
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

      {/* Search input */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Contacts list */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {sortedContacts.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No contacts found
          </div>
        ) : (
          sortedContacts.map((contact) => (
            <div
              key={contact.id}
              className="border-b border-gray-50 last:border-b-0 p-4 md:p-5 hover:bg-gray-50/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.avatarSeed}`}
                    alt={`${contact.name}'s avatar`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contact info */}
                <div className="flex-1">
                  <h2 className="text-base md:text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    {contact.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {contact.email}
                  </p>
                </div>

                {/* Favorite button */}
                <button
                  onClick={() => toggleContactFavorite(contact.id)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  {contact.isFavorite ? (
                    <IoStar className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <IoStarOutline className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 