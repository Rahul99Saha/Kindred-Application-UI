import { Users } from 'lucide-react';

export function Screen05Interests() {
  const categories = ['Movies', 'Music', 'Books', 'Sports', 'Tech', 'Art'];
  const interests = {
    Movies: ['Sci-Fi', 'Horror', 'Indie', 'K-Drama', 'Anime', 'Documentary'],
    Music: ['Indie', 'Rock', 'Hip-Hop', 'Classical', 'Jazz', 'Electronic'],
  };

  const selected = ['Sci-Fi', 'Indie', 'K-Drama'];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 pt-16 pb-6">
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1A1A2E', marginBottom: '8px' }}>
          What are you into?
        </h2>
        <p style={{ color: '#6B6A7A', fontSize: '14px' }}>
          Select interests to build your passport
        </p>
      </div>

      <div className="flex gap-2 px-6 pb-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full whitespace-nowrap transition-colors shadow-sm"
            style={{
              backgroundColor: cat === 'Movies' ? '#7B6EF6' : 'white',
              color: cat === 'Movies' ? 'white' : '#6B6A7A',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              border: cat === 'Movies' ? 'none' : '1px solid rgba(26, 26, 46, 0.1)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="flex flex-wrap gap-3">
          {interests.Movies.map((interest) => (
            <button
              key={interest}
              className="px-4 py-2 rounded-full border transition-all hover:scale-[1.05] shadow-sm"
              style={{
                backgroundColor: selected.includes(interest) ? '#7B6EF6' : 'white',
                borderColor: selected.includes(interest) ? '#7B6EF6' : 'rgba(26, 26, 46, 0.1)',
                color: selected.includes(interest) ? 'white' : '#1A1A2E',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
              }}
            >
              {interest}
            </button>
          ))}
        </div>

        {selected.length > 0 && (
          <div className="mt-6 p-4 rounded-2xl bg-white border shadow-sm flex items-center gap-3" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
            <Users size={16} color="#4FC4A0" />
            <p className="text-sm" style={{ color: '#6B6A7A' }}>
              <strong style={{ color: '#4FC4A0' }}>12 people</strong> from your campus also chose Sci-Fi
            </p>
          </div>
        )}
      </div>

      <div className="px-6 pb-8">
        <button
          className="w-full h-[52px] rounded-full flex items-center justify-center transition-opacity hover:opacity-90 shadow-md"
          style={{ backgroundColor: '#7B6EF6', color: 'white', fontFamily: 'var(--font-sans)' }}
        >
          Continue ({selected.length}/3 selected)
        </button>
      </div>
    </div>
  );
}
