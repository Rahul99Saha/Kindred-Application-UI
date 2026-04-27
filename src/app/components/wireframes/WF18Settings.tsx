export function WF18Settings() {
  const accountItems = ['Edit profile', 'Notifications', 'Privacy'];

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 px-6 pt-16 pb-4">
        <h1 className="text-2xl mb-8" style={{ fontFamily: 'serif', color: '#333' }}>
          Settings
        </h1>
        <p className="text-xs mb-3" style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          ACCOUNT
        </p>
        <div className="space-y-3 mb-6">
          {accountItems.map((item) => (
            <div key={item} className="h-16 rounded-xl bg-gray-50 border-2 border-gray-300 flex items-center px-4">
              <span className="text-sm" style={{ color: '#333' }}>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-xs mb-3" style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          SUPPORT
        </p>
        <div className="h-16 rounded-xl bg-gray-50 border-2 border-gray-300 flex items-center px-4 mb-6">
          <span className="text-sm" style={{ color: '#333' }}>Help & FAQ</span>
        </div>
        <div className="h-16 rounded-xl bg-gray-50 border-2 border-gray-300 flex items-center px-4 mb-6">
          <span className="text-sm" style={{ color: '#666' }}>Log out</span>
        </div>
      </div>
      <div className="h-20 bg-gray-100 border-t-2 border-gray-300 flex items-center justify-around px-8">
        {['Home', 'Chats', 'Settings'].map((item) => (
          <span key={item} className="text-sm" style={{ color: '#666' }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
