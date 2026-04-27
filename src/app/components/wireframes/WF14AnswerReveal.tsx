import { WFCircle } from '../WireframeScreen';

export function WF14AnswerReveal() {
  return (
    <div className="h-full flex flex-col bg-white px-6">
      <div className="pt-16 pb-4">
        <h2 className="text-2xl mb-6" style={{ fontFamily: 'serif', color: '#333' }}>
          Both answers revealed
        </h2>
      </div>
      <div className="flex-1 space-y-6 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <WFCircle size="w-10 h-10" />
            <span className="text-sm" style={{ fontFamily: 'monospace', color: '#333' }}>stargazer_23</span>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 border-2 border-gray-300">
            <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
              Definitely Blade Runner. The visuals, the questions about what makes us human, the atmosphere—it's perfect.
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <WFCircle size="w-10 h-10" />
            <span className="text-sm" style={{ fontFamily: 'monospace', color: '#333' }}>You</span>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 border-2 border-gray-300">
            <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
              Arrival, hands down. The way it handles language and time is beautiful.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <button className="w-full h-14 border-2 border-gray-400 rounded-full">
          <span className="text-base text-gray-500">Start conversation</span>
        </button>
      </div>
    </div>
  );
}
