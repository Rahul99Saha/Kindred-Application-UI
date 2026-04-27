export function WF06SubInterests() {
  const subInterests = ['Blade Runner', 'Dune', 'Arrival', 'Her', 'Ex Machina', 'Interstellar'];

  return (
    <div className="h-full flex flex-col bg-white px-6">
      <div className="pt-16 pb-4">
        <p className="text-sm mb-3" style={{ color: '#666' }}>← Back</p>
        <h2 className="text-3xl mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
          Tell us more about Sci-Fi
        </h2>
        <p className="text-sm" style={{ color: '#666' }}>
          Pick specific favorites for better matches
        </p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-3 pb-6">
        {subInterests.map((sub, idx) => (
          <div
            key={sub}
            className="h-12 border-2 border-gray-300 rounded-full flex items-center justify-center"
            style={{ backgroundColor: idx < 2 ? '#ddd' : '#f5f5f5' }}
          >
            <span className="text-sm" style={{ color: '#333' }}>{sub}</span>
          </div>
        ))}
      </div>
      <div className="mb-6 p-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
        <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
          These deeper tags help us find people who share your specific tastes.
        </p>
      </div>
      <div className="pb-8">
        <button className="w-full h-14 border-2 border-gray-400 rounded-full">
          <span className="text-base text-gray-500">Done</span>
        </button>
      </div>
    </div>
  );
}
