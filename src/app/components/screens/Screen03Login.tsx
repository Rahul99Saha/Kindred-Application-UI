import { Mail, Building2 } from 'lucide-react';

export function Screen03Login() {
  return (
    <div className="w-full h-full flex flex-col justify-between px-6 py-16">
      <div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1A1A2E', marginBottom: '8px' }}>
          Welcome to Softline
        </h2>
        <p style={{ color: '#6B6A7A', fontSize: '14px' }}>
          Sign in to start connecting
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          className="w-full h-[52px] rounded-full flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-md"
          style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
        >
          <Building2 size={20} />
          Continue with College SSO
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(26, 26, 46, 0.1)' }} />
          <span className="text-xs" style={{ color: '#6B6A7A' }}>or</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(26, 26, 46, 0.1)' }} />
        </div>

        <button
          className="w-full h-[52px] rounded-full flex items-center justify-center gap-3 border transition-all hover:bg-[#F0EEF8] shadow-sm"
          style={{ color: '#1A1A2E', fontFamily: 'var(--font-sans)', borderColor: 'rgba(26, 26, 46, 0.15)' }}
        >
          <Mail size={20} />
          Continue with Email
        </button>
      </div>

      <p className="text-center text-xs" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
        By continuing, you agree to our Terms of Service<br />
        and Privacy Policy
      </p>
    </div>
  );
}
