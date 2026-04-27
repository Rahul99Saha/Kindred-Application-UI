import { BottomNav } from '../BottomNav';
import { Heart, Calendar } from 'lucide-react';

export function Screen16HomeMatches() {
  const activeMatches = [
    { username: 'stargazer_23', lastMsg: 'That sounds amazing!', time: '2h', unread: true },
    { username: 'coffee_philosopher', lastMsg: 'Have you seen that new documentary?', time: '1d', unread: false },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#F8F7FB]">
      <div className="flex-1 overflow-y-auto px-6 pt-16 pb-24">
        <div className="mb-8">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1A1A2E', marginBottom: '8px' }}>
            Your connections
          </h1>
          <p style={{ color: '#6B6A7A', fontSize: '14px' }}>
            2 active conversations
          </p>
        </div>

        <div className="mb-8">
          <div className="p-6 rounded-2xl border shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.05) 0%, rgba(79, 196, 160, 0.05) 100%)', borderColor: 'rgba(123, 110, 246, 0.15)' }}>
            <div className="flex items-start gap-3 mb-4">
              <Heart size={20} color="#7B6EF6" className="mt-1" />
              <div>
                <h3 style={{ color: '#1A1A2E', fontSize: '16px', marginBottom: '4px', fontFamily: 'var(--font-sans)' }}>
                  Daily mood check
                </h3>
                <p style={{ color: '#6B6A7A', fontSize: '14px', lineHeight: '1.6' }}>
                  How are you feeling today?
                </p>
              </div>
            </div>
            <button
              className="w-full h-10 rounded-full flex items-center justify-center shadow-sm"
              style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)', fontSize: '14px' }}
            >
              Share your pulse
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ color: '#1A1A2E', fontSize: '18px', marginBottom: '16px', fontFamily: 'var(--font-sans)' }}>
            Active chats
          </h3>
          <div className="space-y-3">
            {activeMatches.map((match) => (
              <button
                key={match.username}
                className="w-full p-4 rounded-2xl bg-white border flex items-center gap-4 transition-all hover:bg-[#F0EEF8] shadow-sm"
                style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B6EF6] to-[#4FC4A0] shadow-sm" />
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#1A1A2E' }}>
                      {match.username}
                    </h4>
                    <span className="text-xs" style={{ color: '#6B6A7A' }}>
                      {match.time}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: match.unread ? '#1A1A2E' : '#6B6A7A' }}>
                    {match.lastMsg}
                  </p>
                </div>
                {match.unread && (
                  <div className="w-2 h-2 rounded-full bg-[#7B6EF6]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}
