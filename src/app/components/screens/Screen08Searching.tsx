export function Screen08Searching() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full border-4" style={{ borderColor: 'rgba(123, 110, 246, 0.15)' }} />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#7B6EF6] animate-spin" />
        <div className="absolute inset-4 rounded-full border-4" style={{ borderColor: 'rgba(79, 196, 160, 0.15)' }} />
        <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-[#4FC4A0] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
      </div>

      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1A1A2E', textAlign: 'center', marginBottom: '12px' }}>
        Finding someone similar...
      </h2>
      <p style={{ color: '#6B6A7A', fontSize: '14px', textAlign: 'center', lineHeight: '1.6' }}>
        Looking for people who share your interests.<br />
        This might take a moment.
      </p>
    </div>
  );
}
