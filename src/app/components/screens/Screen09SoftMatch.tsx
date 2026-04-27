import { X, Eye } from 'lucide-react';

export function Screen09SoftMatch() {
  const sharedInterests = ['Sci-Fi', 'Indie Music', 'Late-night walks'];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="p-8 rounded-3xl bg-white border shadow-xl" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7B6EF6] to-[#4FC4A0] flex items-center justify-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <span className="text-2xl">?</span>
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#1A1A2E', textAlign: 'center', marginBottom: '8px' }}>
            We found someone!
          </h3>
          <p style={{ color: '#6B6A7A', fontSize: '14px', textAlign: 'center', marginBottom: '24px' }}>
            You share some interests
          </p>

          <div className="space-y-2 mb-6">
            {sharedInterests.map((interest) => (
              <div
                key={interest}
                className="px-4 py-3 rounded-xl border text-center"
                style={{ backgroundColor: 'rgba(123, 110, 246, 0.05)', borderColor: 'rgba(123, 110, 246, 0.15)', color: '#1A1A2E', fontFamily: 'var(--font-sans)', fontSize: '14px' }}
              >
                {interest}
              </div>
            ))}
          </div>

          <p className="text-xs text-center mb-6" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
            If you both choose to connect, we'll reveal identities.
            <br />
            Otherwise, they'll never know.
          </p>

          <div className="flex gap-3">
            <button
              className="flex-1 h-[52px] rounded-full flex items-center justify-center gap-2 border transition-all hover:bg-[#F0EEF8] shadow-sm"
              style={{ color: '#6B6A7A', fontFamily: 'var(--font-sans)', borderColor: 'rgba(26, 26, 46, 0.15)' }}
            >
              <X size={20} />
              Not now
            </button>
            <button
              className="flex-1 h-[52px] rounded-full flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-md"
              style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
            >
              <Eye size={20} />
              Show me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
