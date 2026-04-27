import { WFCircle } from '../WireframeScreen';

export function WF11Reveal() {
  const sharedInterests = ['Sci-Fi', 'Indie Music', 'Late-night walks'];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 bg-white">
      <h2 className="text-3xl text-center mb-8" style={{ fontFamily: 'serif', color: '#333' }}>
        It's a match!
      </h2>
      <div className="rounded-2xl p-6 w-full max-w-md mb-6 bg-gray-50 border-2 border-gray-300">
        <div className="flex items-center gap-4 mb-6">
          <WFCircle size="w-16 h-16" />
          <div>
            <p className="text-base mb-1" style={{ fontFamily: 'monospace', color: '#333' }}>
              stargazer_23
            </p>
            <p className="text-sm" style={{ color: '#666' }}>
              CSE, 2nd year
            </p>
          </div>
        </div>
        <p className="text-sm mb-3" style={{ color: '#666' }}>You both love:</p>
        <div className="space-y-2">
          {sharedInterests.map((interest) => (
            <div key={interest} className="h-10 bg-gray-200 border-2 border-gray-300 rounded-xl flex items-center px-4">
              <span className="text-sm" style={{ color: '#333' }}>{interest}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full max-w-md h-14 border-2 border-gray-400 rounded-full">
        <span className="text-base text-gray-500">Start with an ice breaker</span>
      </button>
    </div>
  );
}
