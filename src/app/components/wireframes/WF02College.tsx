export function WF02College() {
  const colleges = ['IIIT Hyderabad', 'IIT Bombay', 'IIT Delhi', 'BITS Pilani', 'NIT Trichy', 'VIT Vellore'];

  return (
    <div className="h-full flex flex-col bg-white px-6">
      <div className="pt-16 pb-6">
        <h2 className="text-3xl mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
          Where are you studying?
        </h2>
        <p className="text-sm" style={{ color: '#666' }}>
          We'll connect you with people from your campus
        </p>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search colleges..."
          className="w-full h-14 px-4 text-base rounded-xl bg-gray-50 border-2 border-gray-300"
          style={{ color: '#333' }}
          readOnly
        />
      </div>
      <div className="flex-1 space-y-3 overflow-hidden pb-6">
        {colleges.map((college, idx) => (
          <div
            key={college}
            className="h-16 rounded-xl border-2 border-gray-300 flex items-center px-4"
            style={{ backgroundColor: idx === 0 ? '#f0f0f0' : '#f5f5f5' }}
          >
            <span className="text-base" style={{ color: '#333' }}>{college}</span>
          </div>
        ))}
      </div>
      <div className="pb-8">
        <button className="w-full h-14 border-2 border-gray-400 rounded-full">
          <span className="text-base text-gray-500">Continue</span>
        </button>
      </div>
    </div>
  );
}
