import { ChevronLeft, MoreVertical } from 'lucide-react';

export function Screen15SlowChat() {
  const messages = [
    { sender: 'them', text: 'So you like Arrival! Have you read the short story it\'s based on?', time: '2h ago' },
    { sender: 'you', text: 'Not yet! Is it different from the movie?', time: '1h ago' },
    { sender: 'them', text: 'It\'s called "Story of Your Life" by Ted Chiang. Similar vibe but the structure is even more mind-bending.', time: '45m ago' },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#F8F7FB]">
      <div className="px-6 pt-16 pb-4 bg-white/80 backdrop-blur-lg border-b" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button>
              <ChevronLeft size={24} color="#6B6A7A" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B6EF6] to-[#4FC4A0] shadow-sm" />
              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: '#1A1A2E' }}>
                  stargazer_23
                </h3>
                <p style={{ color: '#6B6A7A', fontSize: '12px' }}>
                  CSE, 2nd year
                </p>
              </div>
            </div>
          </div>
          <button>
            <MoreVertical size={24} color="#6B6A7A" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.sender === 'you' ? 'items-end' : 'items-start'}`}>
            <div
              className="max-w-[80%] px-4 py-3 rounded-2xl shadow-sm"
              style={{
                backgroundColor: msg.sender === 'you' ? '#7B6EF6' : 'white',
                color: msg.sender === 'you' ? 'white' : '#1A1A2E',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                lineHeight: '1.6',
                border: msg.sender === 'them' ? '1px solid rgba(26, 26, 46, 0.08)' : 'none',
              }}
            >
              {msg.text}
            </div>
            <span className="text-xs mt-1" style={{ color: '#6B6A7A' }}>
              {msg.time}
            </span>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-white/80 backdrop-blur-lg border-t" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Take your time..."
            className="flex-1 h-12 px-4 rounded-full bg-white border text-[#1A1A2E] placeholder:text-[#6B6A7A] shadow-sm"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', borderColor: 'rgba(26, 26, 46, 0.1)' }}
          />
        </div>
        <p className="text-xs mt-2 text-center" style={{ color: '#6B6A7A' }}>
          No read receipts • No typing indicators • No pressure
        </p>
      </div>
    </div>
  );
}
