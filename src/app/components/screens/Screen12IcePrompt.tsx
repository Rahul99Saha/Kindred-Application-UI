import { RefreshCw } from 'lucide-react';

export function Screen12IcePrompt() {
  return (
    <div className="w-full h-full flex flex-col px-6 pt-16 pb-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B6EF6] to-[#4FC4A0] shadow-md" />
          <div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: '#1A1A2E' }}>
              stargazer_23
            </h3>
            <p style={{ color: '#6B6A7A', fontSize: '12px' }}>
              Ice breaker question
            </p>
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#1A1A2E', marginBottom: '16px' }}>
          Ice breaker
        </h2>
      </div>

      <div className="flex-1">
        <div className="p-6 rounded-3xl border shadow-sm mb-6" style={{ background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.05) 0%, rgba(79, 196, 160, 0.05) 100%)', borderColor: 'rgba(123, 110, 246, 0.15)' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#1A1A2E', lineHeight: '1.6' }}>
            "If you could watch only one sci-fi movie for the rest of your life, which would it be and why?"
          </p>
        </div>

        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full border mb-8 transition-all hover:bg-[#F0EEF8] shadow-sm"
          style={{ color: '#6B6A7A', fontFamily: 'var(--font-sans)', fontSize: '14px', borderColor: 'rgba(26, 26, 46, 0.15)' }}
        >
          <RefreshCw size={16} />
          Swap question (1 left)
        </button>

        <p className="text-xs mb-4" style={{ color: '#6B6A7A' }}>
          Your answer:
        </p>
        <textarea
          placeholder="Take your time..."
          className="w-full h-32 p-4 rounded-2xl bg-white border text-[#1A1A2E] placeholder:text-[#6B6A7A] resize-none shadow-sm"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', borderColor: 'rgba(26, 26, 46, 0.1)' }}
        />

        <p className="mt-4 text-xs" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
          They won't see your answer until you both respond.
        </p>
      </div>

      <button
        className="w-full h-[52px] rounded-full flex items-center justify-center transition-opacity hover:opacity-90 shadow-md"
        style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
      >
        Submit answer
      </button>
    </div>
  );
}
