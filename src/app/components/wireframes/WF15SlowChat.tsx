import { WFCircle } from '../WireframeScreen';

export function WF15SlowChat() {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="h-20 bg-gray-50 border-b-2 border-gray-300 flex items-center px-6 gap-3">
        <span className="text-base" style={{ color: '#666' }}>←</span>
        <WFCircle size="w-12 h-12" className="flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm truncate" style={{ fontFamily: 'monospace', color: '#333' }}>stargazer_23</p>
          <p className="text-xs" style={{ color: '#666' }}>CSE, 2nd year</p>
        </div>
      </div>
      <div className="flex-1 px-6 py-6 space-y-4">
        <div className="flex justify-start">
          <div className="max-w-[70%] p-4 rounded-2xl bg-gray-100 border-2 border-gray-300">
            <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
              So you like Arrival! Have you read the short story?
            </p>
            <p className="text-xs mt-2" style={{ color: '#999' }}>2h ago</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] p-4 rounded-2xl bg-gray-200 border-2 border-gray-300">
            <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
              Not yet! Is it different?
            </p>
            <p className="text-xs mt-2" style={{ color: '#999' }}>1h ago</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-t-2 border-gray-300 px-6 py-4">
        <input
          type="text"
          placeholder="Take your time..."
          className="w-full h-14 px-5 text-base rounded-full bg-white border-2 border-gray-300"
          style={{ color: '#333' }}
          readOnly
        />
      </div>
    </div>
  );
}
