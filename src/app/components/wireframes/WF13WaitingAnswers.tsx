import { WFCircle } from '../WireframeScreen';

export function WF13WaitingAnswers() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 bg-white">
      <WFCircle size="w-24 h-24" className="mb-8" />
      <h2 className="text-2xl text-center mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
        Answer submitted
      </h2>
      <p className="text-sm text-center leading-relaxed mb-12" style={{ color: '#666' }}>
        Waiting for stargazer_23 to respond.<br />
        You'll both see answers at the same time.
      </p>
      <div className="w-full max-w-md p-6 rounded-xl bg-gray-50 border-2 border-gray-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-2 flex-1 bg-gray-400 rounded" />
          <span className="text-sm" style={{ color: '#666' }}>You</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 bg-gray-200 rounded" />
          <span className="text-sm" style={{ color: '#666' }}>stargazer_23</span>
        </div>
      </div>
    </div>
  );
}
