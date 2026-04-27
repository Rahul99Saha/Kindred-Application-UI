import { WFCircle } from '../WireframeScreen';

export function WF01Splash() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 bg-white">
      <WFCircle size="w-20 h-20" className="mb-6" />
      <h1 className="text-5xl mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
        Kindred
      </h1>
      <p className="text-base text-center mb-32" style={{ color: '#666' }}>
        Find your people, make real bonds
      </p>
      <div className="absolute bottom-16 px-8">
        <p className="text-sm text-center leading-relaxed" style={{ color: '#999' }}>
          A safe space for meaningful connections.
        </p>
      </div>
    </div>
  );
}
