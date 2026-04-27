export function Screen10Waiting() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.1) 0%, rgba(79, 196, 160, 0.1) 100%)' }} />
        <div className="absolute inset-2 rounded-full bg-[#F8F7FB] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#7B6EF6] animate-pulse" />
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1A1A2E', textAlign: 'center', marginBottom: '12px' }}>
        Waiting for their response
      </h2>
      <p style={{ color: '#6B6A7A', fontSize: '14px', textAlign: 'center', lineHeight: '1.6' }}>
        If they're interested too, you'll both be revealed.<br />
        If not, they'll never know you showed interest.
      </p>

      <div className="mt-12 p-4 rounded-2xl bg-white border shadow-sm max-w-sm" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
        <p className="text-xs text-center" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
          No notifications sent. No pressure created.<br />
          Just quiet mutual consent.
        </p>
      </div>
    </div>
  );
}
