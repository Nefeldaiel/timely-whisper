'use client';

import { 
  IoMailUnreadOutline, 
  IoMailOpenOutline, 
  IoPaperPlaneOutline,
  IoPencilOutline 
} from "react-icons/io5";
import { useState } from 'react';

type LetterType = 'unread' | 'read' | 'sent' | 'draft';

interface Letter {
  id: number;
  title: string;
  date: string;
  type: LetterType;
}

interface LetterListProps {
  onMenuClick: () => void;
}

const sampleLetters: Letter[] = [
  { id: 1, title: "Weekly Newsletter", date: "2024-03-20", type: 'unread' },
  { id: 2, title: "Meeting Invitation", date: "2024-03-19", type: 'read' },
  { id: 3, title: "Project Update", date: "2024-03-18", type: 'sent' },
  { id: 4, title: "Important Announcement Draft", date: "2024-03-17", type: 'draft' },
  { id: 5, title: "Important Announcement", date: "2024-03-17", type: 'unread' },
  { id: 6, title: "Team Building Event", date: "2024-03-16", type: 'read' },
];

const letterTypeConfig = {
  unread: {
    icon: IoMailUnreadOutline,
    iconColor: 'text-blue-600',
  },
  read: {
    icon: IoMailOpenOutline,
    iconColor: 'text-gray-400',
  },
  sent: {
    icon: IoPaperPlaneOutline,
    iconColor: 'text-green-600',
  },
  draft: {
    icon: IoPencilOutline,
    iconColor: 'text-amber-500',
  },
};

export function LetterList({ onMenuClick }: LetterListProps) {
  const [selectedTypes, setSelectedTypes] = useState<LetterType[]>([]);

  const toggleFilter = (type: LetterType) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const filteredLetters = selectedTypes.length > 0
    ? sampleLetters.filter(letter => selectedTypes.includes(letter.type))
    : sampleLetters;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header with responsive styles */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800">Inbox</h1>
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

      {/* Filter Panel */}
      <div className="mb-6 flex flex-wrap gap-2">
        {Object.entries(letterTypeConfig).map(([type, config]) => {
          const TypeIcon = config.icon;
          const isSelected = selectedTypes.includes(type as LetterType);
          return (
            <button
              key={type}
              onClick={() => toggleFilter(type as LetterType)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full
                transition-all duration-200 border
                ${isSelected 
                  ? `${config.iconColor} border-current bg-gray-50` 
                  : 'text-gray-500 border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <TypeIcon className="w-4 h-4" />
              <span className="capitalize text-sm">
                {type}
                {selectedTypes.length > 0 && isSelected && 
                  ` (${filteredLetters.filter(l => l.type === type).length})`
                }
              </span>
            </button>
          );
        })}
        {selectedTypes.length > 0 && (
          <button
            onClick={() => setSelectedTypes([])}
            className="flex items-center gap-2 px-4 py-2 rounded-full
              text-gray-500 border border-gray-200 hover:border-gray-300
              transition-all duration-200"
          >
            <span className="text-sm">Clear filters</span>
          </button>
        )}
      </div>

      {/* Letters list with responsive styles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {filteredLetters.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No letters match the selected filters
          </div>
        ) : (
          filteredLetters.map((letter) => {
            const TypeIcon = letterTypeConfig[letter.type].icon;
            return (
              <div
                key={letter.id}
                className="border-b border-gray-50 last:border-b-0 p-4 md:p-5 hover:bg-gray-50/50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`${letterTypeConfig[letter.type].iconColor}`}
                    title={`${letter.type.charAt(0).toUpperCase() + letter.type.slice(1)} letter`}
                  >
                    <TypeIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 flex-1">
                    <h2 className="text-base md:text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                      {letter.title}
                    </h2>
                    <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                      {new Date(letter.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
} 