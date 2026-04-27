export function Screen01Splash() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7B6EF6] to-[#4FC4A0] flex items-center justify-center shadow-lg">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="20" cy="20" r="3" fill="white"/>
          </svg>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', color: '#1A1A2E' }}>
            Softline
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: '#6B6A7A', textAlign: 'center' }}>
            Find your people, quietly.
          </p>
        </div>
      </div>
      <div className="absolute bottom-16 left-0 right-0 px-8">
        <p className="text-center text-xs" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
          A safe space for meaningful connections.<br />
          No pressure. No performance. Just you.
        </p>
      </div>
    </div>
  );
}
