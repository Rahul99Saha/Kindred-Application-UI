import { WFCircle } from '../WireframeScreen';

export function WF09SoftMatch() {
  const sharedInterests = ['Sci-Fi', 'Indie Music', 'Late-night walks'];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 bg-white">
      <div className="rounded-2xl p-8 w-full max-w-md bg-gray-50 border-2 border-gray-300">
        <WFCircle size="w-20 h-20" className="mx-auto mb-6" />
        <h3 className="text-2xl text-center mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
          We found someone
        </h3>
        <p className="text-sm text-center mb-6" style={{ color: '#666' }}>
          You share some interests
        </p>
        <div className="space-y-3 mb-6">
          {sharedInterests.map((interest) => (
            <div key={interest} className="h-12 bg-gray-200 border-2 border-gray-300 rounded-xl flex items-center justify-center">
              <span className="text-sm" style={{ color: '#333' }}>{interest}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-center mb-6 leading-relaxed" style={{ color: '#666' }}>
          If you both choose to connect, we'll reveal identities.
        </p>
        <div className="flex gap-3">
          <button className="flex-1 h-14 border-2 border-gray-400 rounded-full">
            <span className="text-base text-gray-500">Not now</span>
          </button>
          <button className="flex-1 h-14 border-2 border-gray-400 rounded-full">
            <span className="text-base text-gray-500">Show me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
