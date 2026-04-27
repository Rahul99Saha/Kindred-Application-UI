export function PhoneFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <div className="text-sm" style={{ color: '#6B6A7A', fontFamily: 'var(--font-mono)' }}>
        {title}
      </div>
      <div className="relative" style={{ width: '393px', height: '852px' }}>
        <div className="absolute inset-0 rounded-[60px] shadow-2xl" style={{ padding: '20px', background: 'linear-gradient(135deg, #E5E3F0 0%, #D8D6E8 100%)' }}>
          <div className="relative w-full h-full rounded-[45px] overflow-hidden bg-[#F8F7FB]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] rounded-b-3xl z-50" style={{ background: 'linear-gradient(135deg, #E5E3F0 0%, #D8D6E8 100%)' }} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
