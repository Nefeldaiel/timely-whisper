'use client';

interface Letter {
  id: number;
  title: string;
  date: string;
}

interface LetterListProps {
  onMenuClick: () => void;
}

const sampleLetters: Letter[] = [
  { id: 1, title: "Weekly Newsletter", date: "2024-03-20" },
  { id: 2, title: "Meeting Invitation", date: "2024-03-19" },
  { id: 3, title: "Project Update", date: "2024-03-18" },
  { id: 4, title: "Important Announcement", date: "2024-03-17" },
  { id: 5, title: "Team Building Event", date: "2024-03-16" },
];

export function LetterList({ onMenuClick }: LetterListProps) {
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
            className="w-6 h-6 text-gray-600 transition-transform duration-200"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Letters list with responsive styles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {sampleLetters.map((letter) => (
          <div
            key={letter.id}
            className="border-b border-gray-50 last:border-b-0 p-4 md:p-5 hover:bg-gray-50/50 cursor-pointer transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
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
        ))}
      </div>
    </div>
  );
} 