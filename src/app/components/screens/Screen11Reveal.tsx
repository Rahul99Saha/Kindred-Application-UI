import { Sparkles } from 'lucide-react';

export function Screen11Reveal() {
  const sharedInterests = ['Sci-Fi', 'Indie Music', 'Late-night walks'];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles size={24} color="#7B6EF6" />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1A1A2E' }}>
            It's a match!
          </h2>
          <Sparkles size={24} color="#4FC4A0" />
        </div>

        <div className="p-6 rounded-3xl bg-white border shadow-xl mb-6" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B6EF6] to-[#4FC4A0] shadow-lg" />
            <div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: '#1A1A2E', marginBottom: '4px' }}>
                stargazer_23
              </h3>
              <p style={{ color: '#6B6A7A', fontSize: '14px' }}>
                CSE, 2nd year
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs" style={{ color: '#6B6A7A', marginBottom: '8px' }}>
              You both love:
            </p>
            {sharedInterests.map((interest) => (
              <div
                key={interest}
                className="px-4 py-2 rounded-xl border"
                style={{ backgroundColor: 'rgba(123, 110, 246, 0.05)', borderColor: 'rgba(123, 110, 246, 0.15)', color: '#1A1A2E', fontFamily: 'var(--font-sans)', fontSize: '14px' }}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>

        <button
          className="w-full h-[52px] rounded-full flex items-center justify-center transition-opacity hover:opacity-90 shadow-md"
          style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
        >
          Start with an ice breaker
        </button>
      </div>
    </div>
  );
}
