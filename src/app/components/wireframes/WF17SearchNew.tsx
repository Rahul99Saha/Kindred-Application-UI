import { WFCircle } from '../WireframeScreen';

export function WF17SearchNew() {
  const chats = [
    { name: 'stargazer_23', lastMsg: 'That sounds amazing!', time: '2h', type: 'person', unread: true },
    { name: 'Sci-Fi Lovers', lastMsg: 'Anyone watched Dune 2?', time: '4h', type: 'group', unread: false, members: '12' },
    { name: 'coffee_philosopher', lastMsg: 'Have you seen that new documentary?', time: '1d', type: 'person', unread: false },
    { name: 'IIIT Night Owls', lastMsg: 'Late night study session?', time: '2d', type: 'group', unread: true, members: '8' },
    { name: 'book_worm_42', lastMsg: 'Just finished reading it!', time: '3d', type: 'person', unread: false },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 px-6 pt-16 pb-4">
        <h1 className="text-2xl mb-2" style={{ fontFamily: 'serif', color: '#333' }}>
          Chats & Groups
        </h1>
        <p className="text-sm mb-6" style={{ color: '#666' }}>
          5 conversations
        </p>

        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full h-12 px-4 text-sm rounded-full bg-gray-50 border-2 border-gray-300"
            style={{ color: '#333' }}
            readOnly
          />
        </div>

        {/* Chat list */}
        <div className="space-y-3">
          {chats.map((chat, idx) => (
            <div key={idx} className="h-20 rounded-xl bg-gray-50 border-2 border-gray-300 flex items-center px-4 gap-3">
              <div className="relative">
                <WFCircle size="w-12 h-12" />
                {chat.type === 'group' && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                    <span className="text-[8px]" style={{ color: '#666' }}>{chat.members}</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm truncate" style={{ fontFamily: chat.type === 'person' ? 'monospace' : 'sans-serif', color: '#333' }}>
                    {chat.name}
                  </p>
                  {chat.type === 'group' && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200" style={{ color: '#666' }}>
                      Group
                    </span>
                  )}
                </div>
                <p className="text-sm truncate" style={{ color: '#666' }}>{chat.lastMsg}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs" style={{ color: '#999' }}>{chat.time}</span>
                {chat.unread && (
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-20 bg-gray-100 border-t-2 border-gray-300 flex items-center justify-around px-8">
        {['Home', 'Chats', 'Settings'].map((item) => (
          <span key={item} className="text-sm" style={{ color: '#666' }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
