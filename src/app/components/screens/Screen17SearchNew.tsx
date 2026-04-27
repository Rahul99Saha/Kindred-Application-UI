import { BottomNav } from '../BottomNav';
import { Sparkles, Clock } from 'lucide-react';

export function Screen17SearchNew() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F8F7FB]">
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-24">
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.1) 0%, rgba(79, 196, 160, 0.1) 100%)' }} />
          <div className="absolute inset-4 rounded-full bg-[#F8F7FB] flex items-center justify-center">
            <Sparkles size={32} color="#7B6EF6" />
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1A1A2E', textAlign: 'center', marginBottom: '12px' }}>
          Find new connections
        </h2>
        <p style={{ color: '#6B6A7A', fontSize: '14px', textAlign: 'center', lineHeight: '1.6', marginBottom: '32px' }}>
          Ready to meet someone new?<br />
          We'll find people who share your interests.
        </p>

        <button
          className="w-full max-w-sm h-[52px] rounded-full flex items-center justify-center gap-2 mb-6 transition-opacity hover:opacity-90 shadow-md"
          style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
        >
          <Sparkles size={20} />
          Start searching
        </button>

        <div className="w-full max-w-sm p-4 rounded-2xl bg-white border shadow-sm flex items-start gap-3" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
          <Clock size={16} color="#6B6A7A" className="mt-1" />
          <p className="text-xs" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
            Searches are thoughtful, not instant. We take time to find good matches based on your interests and current mood.
          </p>
        </div>
      </div>

      <BottomNav active="search" />
    </div>
  );
}
