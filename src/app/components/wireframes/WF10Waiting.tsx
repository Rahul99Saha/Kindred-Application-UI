import { WFCircle } from '../WireframeScreen';

export function WF10Waiting() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 bg-white">
      <WFCircle size="w-24 h-24" className="mb-8" />
      <h2 className="text-2xl text-center mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
        Waiting for their response
      </h2>
      <p className="text-sm text-center leading-relaxed mb-12" style={{ color: '#666' }}>
        If they're interested too, you'll both be revealed.<br />
        If not, they'll never know you showed interest.
      </p>
      <div className="w-full max-w-md p-6 rounded-xl bg-gray-50 border-2 border-gray-300">
        <p className="text-sm text-center leading-relaxed" style={{ color: '#666' }}>
          No notifications sent. No pressure created.<br />
          Just quiet mutual consent.
        </p>
      </div>
    </div>
  );
}
