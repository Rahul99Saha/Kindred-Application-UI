import { BottomNav } from '../BottomNav';

export function Screen07Mood() {
  const moods = [
    { emoji: '😊', label: 'Happy', selected: false },
    { emoji: '😌', label: 'Calm', selected: true },
    { emoji: '😔', label: 'Down', selected: false },
    { emoji: '😤', label: 'Stressed', selected: false },
    { emoji: '🤔', label: 'Thoughtful', selected: false },
    { emoji: '😴', label: 'Tired', selected: false },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 px-6 pt-16 pb-24">
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1A1A2E', marginBottom: '8px' }}>
          How are you feeling today?
        </h2>
        <p style={{ color: '#6B6A7A', fontSize: '14px', marginBottom: '32px' }}>
          Your daily pulse—disappears in 24h
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {moods.map((mood) => (
            <button
              key={mood.label}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all hover:scale-[1.05] shadow-sm"
              style={{
                backgroundColor: mood.selected ? '#7B6EF6' : 'white',
                borderColor: mood.selected ? '#7B6EF6' : 'rgba(26, 26, 46, 0.1)',
              }}
            >
              <span className="text-4xl">{mood.emoji}</span>
              <span className="text-sm" style={{ color: mood.selected ? 'white' : '#1A1A2E', fontFamily: 'var(--font-sans)' }}>
                {mood.label}
              </span>
            </button>
          ))}
        </div>

        <textarea
          placeholder="Anything on your mind? (optional)"
          className="w-full h-24 p-4 rounded-2xl bg-white border text-[#1A1A2E] placeholder:text-[#6B6A7A] resize-none shadow-sm"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', borderColor: 'rgba(26, 26, 46, 0.1)' }}
        />

        <p className="mt-4 text-xs text-center" style={{ color: '#6B6A7A' }}>
          Only visible to matches. Helps find people in similar headspaces.
        </p>
      </div>

      <BottomNav active="home" />
    </div>
  );
}
