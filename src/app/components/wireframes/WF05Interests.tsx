export function WF05Interests() {
  const categories = [
    { name: 'Movies', selected: true },
    { name: 'Music', selected: false },
    { name: 'Books', selected: false },
    { name: 'Sports', selected: false }
  ];

  const movieGenres = ['Sci-Fi', 'Horror', 'Indie', 'K-Drama', 'Anime', 'Documentary'];
  const selectedGenres = ['Sci-Fi', 'Indie'];

  const sciFiMovies = ['Blade Runner', 'Dune', 'Arrival', 'Her', 'Ex Machina', 'Interstellar'];
  const selectedMovies = ['Blade Runner', 'Arrival'];

  return (
    <div className="h-full flex flex-col bg-white px-6">
      <div className="pt-16 pb-4">
        <h2 className="text-3xl mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
          What are you into?
        </h2>
        <p className="text-sm" style={{ color: '#666' }}>
          Select categories, genres, and specific favorites
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="h-10 px-4 border-2 border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ backgroundColor: cat.selected ? '#ddd' : '#f5f5f5' }}
          >
            <span className="text-sm" style={{ color: '#333' }}>{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Genres Section */}
      <div className="mb-4">
        <p className="text-xs mb-2" style={{ color: '#666', textTransform: 'uppercase' }}>
          Movie Genres
        </p>
        <div className="grid grid-cols-3 gap-2">
          {movieGenres.map((genre) => (
            <div
              key={genre}
              className="h-10 border-2 border-gray-300 rounded-full flex items-center justify-center"
              style={{ backgroundColor: selectedGenres.includes(genre) ? '#ddd' : '#f5f5f5' }}
            >
              <span className="text-xs" style={{ color: '#333' }}>{genre}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Movies Section */}
      <div className="flex-1 mb-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs" style={{ color: '#666', textTransform: 'uppercase' }}>
            Sci-Fi Favorites
          </p>
          <span className="text-xs" style={{ color: '#999' }}>✨ AI suggested</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {sciFiMovies.map((movie) => (
            <div
              key={movie}
              className="h-10 border-2 border-gray-300 rounded-full flex items-center justify-center px-2"
              style={{ backgroundColor: selectedMovies.includes(movie) ? '#ddd' : '#f5f5f5' }}
            >
              <span className="text-xs text-center" style={{ color: '#333' }}>{movie}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 p-3 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
          <p className="text-xs leading-relaxed" style={{ color: '#666' }}>
            Pick specific favorites for better matches. These deeper tags help us find people who share your exact tastes.
          </p>
        </div>
      </div>

      <div className="pb-8">
        <button className="w-full h-14 border-2 border-gray-400 rounded-full">
          <span className="text-base text-gray-500">Continue (4 items selected)</span>
        </button>
      </div>
    </div>
  );
}
