import { WFCircle } from '../WireframeScreen';

export function WF12IcePrompt() {
  return (
    <div className="h-full flex flex-col bg-white px-6">
      <div className="pt-16 pb-4">
        <div className="flex items-center gap-3 mb-6">
          <WFCircle size="w-12 h-12" />
          <div>
            <p className="text-base" style={{ fontFamily: 'monospace', color: '#333' }}>stargazer_23</p>
            <p className="text-xs" style={{ color: '#666' }}>Ice breaker question</p>
          </div>
        </div>
        <h2 className="text-xl mb-4" style={{ fontFamily: 'serif', color: '#333' }}>
          Ice breaker
        </h2>
      </div>
      <div className="flex-1 flex flex-col pb-8">
        <div className="p-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 mb-4">
          <p className="text-sm leading-relaxed" style={{ fontFamily: 'serif', color: '#333' }}>
            "If you could watch only one sci-fi movie for the rest of your life, which would it be and why?"
          </p>
        </div>
        <p className="text-xs mb-3" style={{ color: '#666' }}>↻ Swap question (1 left)</p>
        <p className="text-xs mb-2" style={{ color: '#666' }}>Your answer:</p>
        <textarea
          placeholder="Take your time..."
          className="w-full flex-1 p-3 text-sm rounded-xl bg-gray-50 border-2 border-gray-300 resize-none mb-3"
          style={{ color: '#333' }}
          readOnly
        />
        <p className="text-xs leading-relaxed mb-4" style={{ color: '#666' }}>
          They won't see your answer until you both respond.
        </p>
        <button
          className="w-full h-14 border-2 border-gray-400 rounded-full flex items-center justify-center"
        >
          <span className="text-base text-gray-500">Submit answer</span>
        </button>
      </div>
    </div>
  );
}
