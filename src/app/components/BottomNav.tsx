import { Home, Search, MessageCircle, Settings } from 'lucide-react';

export function BottomNav({ active }: { active?: 'home' | 'search' | 'chats' | 'settings' }) {
  const items = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'chats', icon: MessageCircle, label: 'Chats' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-lg border-t flex items-center justify-around px-8" style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            className="flex flex-col items-center gap-1 transition-colors"
            style={{ color: isActive ? '#7B6EF6' : '#6B6A7A' }}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
