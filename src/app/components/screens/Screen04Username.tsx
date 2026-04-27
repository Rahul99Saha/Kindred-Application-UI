import { Lock } from 'lucide-react';

export function Screen04Username() {
  return (
    <div className="w-full h-full flex flex-col justify-between px-6 py-16">
      <div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1A1A2E', marginBottom: '8px' }}>
          Choose your username
        </h2>
        <p style={{ color: '#6B6A7A', fontSize: '14px' }}>
          This is how others will see you. Pick a pseudonym if you prefer.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <input
            type="text"
            placeholder="username"
            className="w-full h-14 px-5 rounded-2xl bg-white border text-[#1A1A2E] placeholder:text-[#6B6A7A] shadow-sm"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', borderColor: 'rgba(26, 26, 46, 0.1)' }}
            defaultValue="night_owl_42"
          />
          <p className="mt-2 text-xs flex items-center gap-2" style={{ color: '#4FC4A0' }}>
            <Lock size={12} />
            Your real name stays private
          </p>
        </div>

        <div className="p-4 rounded-2xl border" style={{ backgroundColor: 'rgba(123, 110, 246, 0.05)', borderColor: 'rgba(123, 110, 246, 0.15)' }}>
          <p className="text-xs" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
            <strong style={{ color: '#1A1A2E' }}>Privacy first:</strong> We never share your real identity without your consent. Use any username you're comfortable with.
          </p>
        </div>
      </div>

      <button
        className="w-full h-[52px] rounded-full flex items-center justify-center transition-opacity hover:opacity-90 shadow-md"
        style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
      >
        Continue
      </button>
    </div>
  );
}
