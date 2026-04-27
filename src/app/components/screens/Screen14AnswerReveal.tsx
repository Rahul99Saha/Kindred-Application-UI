import { MessageCircle } from 'lucide-react';

export function Screen14AnswerReveal() {
  return (
    <div className="w-full h-full flex flex-col px-6 pt-16 pb-8 overflow-y-auto">
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#1A1A2E', marginBottom: '24px' }}>
        Both answers revealed
      </h2>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B6EF6] to-[#4FC4A0] shadow-sm" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#1A1A2E' }}>
              stargazer_23
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white border shadow-sm" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
            <p style={{ color: '#1A1A2E', fontSize: '14px', lineHeight: '1.6', fontFamily: 'var(--font-sans)' }}>
              Definitely Blade Runner. The visuals, the questions about what makes us human, the atmosphere—it's perfect. Plus, the soundtrack is incredible.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F0956A] to-[#4FC4A0] shadow-sm" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#1A1A2E' }}>
              You
            </span>
          </div>
          <div className="p-4 rounded-2xl border shadow-sm" style={{ backgroundColor: 'rgba(123, 110, 246, 0.05)', borderColor: 'rgba(123, 110, 246, 0.15)' }}>
            <p style={{ color: '#1A1A2E', fontSize: '14px', lineHeight: '1.6', fontFamily: 'var(--font-sans)' }}>
              Arrival, hands down. The way it handles language and time is beautiful. I cry every time I watch it.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl border shadow-sm mb-6" style={{ background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.05) 0%, rgba(79, 196, 160, 0.05) 100%)', borderColor: 'rgba(123, 110, 246, 0.15)' }}>
        <p className="text-xs text-center" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
          Great answers! You can now start chatting.
        </p>
      </div>

      <button
        className="w-full h-[52px] rounded-full flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-md"
        style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
      >
        <MessageCircle size={20} />
        Start conversation
      </button>
    </div>
  );
}
