import { Search, ChevronRight } from 'lucide-react';

export function Screen02College() {
  const colleges = [
    'IIIT Hyderabad',
    'IIT Bombay',
    'IIT Delhi',
    'BITS Pilani',
    'NIT Trichy',
    'VIT Vellore',
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-16 pb-6">
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1A1A2E', marginBottom: '8px' }}>
          Where are you studying?
        </h2>
        <p style={{ color: '#6B6A7A', fontSize: '14px' }}>
          We'll connect you with people from your campus
        </p>
      </div>

      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={20} color="#6B6A7A" />
          <input
            type="text"
            placeholder="Search colleges..."
            className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white border text-[#1A1A2E] placeholder:text-[#6B6A7A] shadow-sm"
            style={{ fontFamily: 'var(--font-sans)', borderColor: 'rgba(26, 26, 46, 0.1)' }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {colleges.map((college, idx) => (
          <button
            key={college}
            className="w-full flex items-center justify-between p-4 rounded-2xl mb-3 transition-colors shadow-sm"
            style={{ backgroundColor: idx === 0 ? '#F0EEF8' : 'white', border: '1px solid rgba(26, 26, 46, 0.08)' }}
          >
            <span style={{ color: '#1A1A2E', fontFamily: 'var(--font-sans)' }}>
              {college}
            </span>
            <ChevronRight size={20} color="#6B6A7A" />
          </button>
        ))}
      </div>

      <div className="px-6 pb-8">
        <button
          className="w-full h-[52px] rounded-full flex items-center justify-center transition-opacity hover:opacity-90 shadow-md"
          style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
