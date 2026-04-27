import { WFCircle } from '../WireframeScreen';

export function WF08Searching() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 bg-white">
      <div className="relative mb-12">
        <WFCircle size="w-32 h-32" />
        <WFCircle size="w-24 h-24" className="absolute top-4 left-4" />
      </div>
      <h2 className="text-2xl text-center mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
        Finding someone similar...
      </h2>
      <p className="text-sm text-center leading-relaxed" style={{ color: '#666' }}>
        Looking for people who share your interests.<br />
        This might take a moment.
      </p>
    </div>
  );
}
