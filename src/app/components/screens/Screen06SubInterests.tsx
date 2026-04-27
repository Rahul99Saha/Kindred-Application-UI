import { ChevronLeft, Sparkles } from 'lucide-react';

export function Screen06SubInterests() {
  const subInterests = [
    { main: 'Sci-Fi', subs: ['Blade Runner', 'Dune', 'Arrival', 'Her', 'Ex Machina', 'Interstellar'] },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-16 pb-6">
        <button className="flex items-center gap-2 mb-4" style={{ color: '#6B6A7A' }}>
          <ChevronLeft size={20} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px' }}>Back</span>
        </button>
        <div className="flex items-center gap-2 mb-2">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1A1A2E' }}>
            Tell us more about Sci-Fi
          </h2>
          <Sparkles size={20} color="#7B6EF6" />
        </div>
        <p style={{ color: '#6B6A7A', fontSize: '14px' }}>
          Pick specific favorites for better matches
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="flex flex-wrap gap-3">
          {subInterests[0].subs.map((sub, idx) => (
            <button
              key={sub}
              className="px-4 py-2 rounded-full border transition-all hover:scale-[1.05] shadow-sm"
              style={{
                backgroundColor: idx < 2 ? '#7B6EF6' : 'white',
                borderColor: idx < 2 ? '#7B6EF6' : 'rgba(26, 26, 46, 0.1)',
                color: idx < 2 ? 'white' : '#1A1A2E',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
              }}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-2xl border" style={{ background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.05) 0%, rgba(79, 196, 160, 0.05) 100%)', borderColor: 'rgba(123, 110, 246, 0.15)' }}>
          <div className="flex items-start gap-3">
            <Sparkles size={16} color="#7B6EF6" className="mt-1" />
            <p className="text-xs" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
              These deeper tags help us find people who share your specific tastes—not just broad categories.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8">
        <button
          className="w-full h-[52px] rounded-full flex items-center justify-center transition-opacity hover:opacity-90 shadow-md"
          style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
        >
          Done
        </button>
      </div>
    </div>
  );
}
