export function Screen13WaitingAnswers() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.1) 0%, rgba(79, 196, 160, 0.1) 100%)' }} />
        <div className="absolute inset-2 rounded-full bg-[#F8F7FB] flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="12" cy="20" r="3" fill="#7B6EF6" className="animate-pulse" />
            <circle cx="20" cy="20" r="3" fill="#4FC4A0" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            <circle cx="28" cy="20" r="3" fill="#F0956A" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          </svg>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1A1A2E', textAlign: 'center', marginBottom: '12px' }}>
        Answer submitted
      </h2>
      <p style={{ color: '#6B6A7A', fontSize: '14px', textAlign: 'center', lineHeight: '1.6', marginBottom: '32px' }}>
        Waiting for stargazer_23 to respond.<br />
        You'll both see answers at the same time.
      </p>

      <div className="w-full max-w-sm p-6 rounded-2xl bg-white border shadow-sm" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <div className="h-2 rounded-full bg-[#7B6EF6]" />
          </div>
          <span className="text-xs" style={{ color: '#4FC4A0', fontFamily: 'var(--font-mono)' }}>
            You
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="h-2 rounded-full" style={{ backgroundColor: 'rgba(26, 26, 46, 0.1)' }} />
          </div>
          <span className="text-xs" style={{ color: '#6B6A7A', fontFamily: 'var(--font-mono)' }}>
            stargazer_23
          </span>
        </div>
      </div>
    </div>
  );
}
