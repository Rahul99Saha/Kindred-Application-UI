export function WF03Login() {
  return (
    <div className="h-full flex flex-col justify-between px-8 py-16 bg-white">
      <div>
        <h2 className="text-3xl mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
          Welcome to Kindred
        </h2>
        <p className="text-sm" style={{ color: '#666' }}>
          Sign in to start connecting
        </p>
      </div>
      <div className="space-y-4">
        <button className="w-full h-14 border-2 border-gray-400 rounded-full">
          <span className="text-base text-gray-500">Continue with College SSO</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-[2px] bg-gray-300" />
          <span className="text-sm" style={{ color: '#999' }}>or</span>
          <div className="flex-1 h-[2px] bg-gray-300" />
        </div>
        <button className="w-full h-14 border-2 border-gray-400 rounded-full">
          <span className="text-base text-gray-500">Continue with Email</span>
        </button>
      </div>
      <div>
        <p className="text-sm text-center leading-relaxed" style={{ color: '#999' }}>
          By continuing, you agree to our Terms of Service<br />
          and Privacy Policy
        </p>
      </div>
    </div>
  );
}
