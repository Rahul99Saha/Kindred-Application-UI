import { WFCircle } from '../WireframeScreen';

export function WF16HomeMatches() {
  const matches = [
    { username: 'stargazer_23', msg: 'That sounds amazing!', time: '2h' },
    { username: 'coffee_philosopher', msg: 'Have you seen that new documentary?', time: '1d' }
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 px-6 pt-16 pb-4">
        <h1 className="text-2xl mb-2" style={{ fontFamily: 'serif', color: '#333' }}>
          Your connections
        </h1>
        <p className="text-sm mb-6" style={{ color: '#666' }}>
          2 active conversations
        </p>
        <div className="p-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 mb-4">
          <p className="text-base mb-2" style={{ color: '#333' }}>Daily mood check</p>
          <p className="text-sm mb-3 leading-relaxed" style={{ color: '#666' }}>How are you feeling today?</p>
          <div className="h-12 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
            <span className="text-sm" style={{ color: '#333' }}>Share your pulse</span>
          </div>
        </div>
        <div className="mb-6">
          <button className="w-full h-12 rounded-full border-2 border-gray-400 flex items-center justify-center">
            <span className="text-sm text-gray-500">✏️ Update interests</span>
          </button>
        </div>
        <p className="text-base mb-3" style={{ color: '#333' }}>Active chats</p>
        <div className="space-y-3">
          {matches.map((match) => (
            <div key={match.username} className="h-20 rounded-xl bg-gray-50 border-2 border-gray-300 flex items-center px-4 gap-3">
              <WFCircle size="w-12 h-12" />
              <div className="flex-1">
                <p className="text-sm mb-1" style={{ fontFamily: 'monospace', color: '#333' }}>{match.username}</p>
                <p className="text-sm" style={{ color: '#666' }}>{match.msg}</p>
              </div>
              <span className="text-xs" style={{ color: '#999' }}>{match.time}</span>
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
