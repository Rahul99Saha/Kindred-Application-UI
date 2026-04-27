interface WireframeScreenProps {
  number: string;
  children: React.ReactNode;
}

export function WireframeScreen({ number, children }: WireframeScreenProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-[10px] tracking-wider" style={{ color: '#999', fontFamily: 'monospace' }}>
        {number}
      </div>
      <div
        className="bg-white border-2 relative"
        style={{
          width: '140px',
          height: '280px',
          borderColor: '#ccc',
          borderRadius: '8px'
        }}
      >
        {/* Phone notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-white border-2 border-t-0"
          style={{
            width: '40px',
            height: '10px',
            borderColor: '#ccc',
            borderRadius: '0 0 8px 8px'
          }}
        />
        <div className="h-full pt-3 pb-2">
          {children}
        </div>
      </div>
    </div>
  );
}

// Reusable wireframe components
export const WFCircle = ({ size = 'w-10 h-10', className = '' }: { size?: string; className?: string }) => (
  <div className={`bg-gray-100 border border-gray-300 rounded-full ${size} ${className}`} />
);

export const WFButton = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <div className={`h-8 border-2 border-gray-400 rounded-full flex items-center justify-center ${className}`}>
    {children && <div className="text-[8px] text-gray-500">{children}</div>}
  </div>
);
