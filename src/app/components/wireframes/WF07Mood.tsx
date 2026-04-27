export function WF07Mood() {
  const moods = [
    { label: 'Happy', emoji: '😊' },
    { label: 'Calm', emoji: '😌' },
    { label: 'Down', emoji: '😔' },
    { label: 'Stressed', emoji: '😤' },
    { label: 'Thoughtful', emoji: '🤔' },
    { label: 'Tired', emoji: '😴' }
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 px-6 pt-16 pb-2">
        <h2 className="text-2xl mb-2" style={{ fontFamily: 'serif', color: '#333' }}>
          How are you feeling today?
        </h2>
        <p className="text-sm mb-8" style={{ color: '#666' }}>
          Your daily pulse—disappears in 24h
        </p>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {moods.map((mood, idx) => (
            <div
              key={mood.label}
              className="h-24 border-2 border-gray-300 rounded-xl flex flex-col items-center justify-center"
              style={{ backgroundColor: idx === 1 ? '#ddd' : '#f5f5f5' }}
            >
              <div className="text-3xl mb-2">{mood.emoji}</div>
              <span className="text-sm" style={{ color: '#333' }}>{mood.label}</span>
            </div>
          ))}
        </div>
        <textarea
          placeholder="Anything on your mind? (optional)"
          className="w-full h-24 p-4 text-sm rounded-xl bg-gray-50 border-2 border-gray-300 resize-none"
          style={{ color: '#333' }}
          readOnly
        />
      </div>
      <div className="h-20 bg-gray-100 border-t-2 border-gray-300 flex items-center justify-around px-8">
        {['Home', 'Chats', 'Settings'].map((item) => (
          <span key={item} className="text-sm" style={{ color: '#666' }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
