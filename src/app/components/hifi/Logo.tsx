// Professional Application Logo Component

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
  className?: string;
}

export function Logo({ size = 'md', variant = 'full', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon - Modern "K" with connection dots */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gradient definition */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          {/* Rounded background */}
          <rect width="48" height="48" rx="14" fill="url(#logoGradient)" />

          {/* Stylized "K" letter */}
          <path
            d="M16 12 L16 36 M16 24 L30 12 M16 24 L30 36"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Connection dots */}
          <circle cx="32" cy="14" r="2.5" fill="white" opacity="0.9" />
          <circle cx="32" cy="34" r="2.5" fill="white" opacity="0.9" />
          <circle cx="18" cy="24" r="2.5" fill="white" opacity="0.9" />
        </svg>
      </div>

      {/* Text logo */}
      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent`}>
            Kindred
          </span>
        </div>
      )}
    </div>
  );
}

// Simple icon-only version for small spaces
export function LogoIcon({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  return <Logo size={size} variant="icon" className={className} />;
}
