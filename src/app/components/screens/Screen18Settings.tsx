import { BottomNav } from '../BottomNav';
import { User, Bell, Lock, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

export function Screen18Settings() {
  const sections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Edit profile', sublabel: 'night_owl_42' },
        { icon: Bell, label: 'Notifications', sublabel: 'Customized' },
        { icon: Lock, label: 'Privacy', sublabel: 'Manage visibility' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & FAQ', sublabel: null },
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#F8F7FB]">
      <div className="flex-1 overflow-y-auto px-6 pt-16 pb-24">
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1A1A2E', marginBottom: '32px' }}>
          Settings
        </h1>

        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="text-xs mb-3" style={{ color: '#6B6A7A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {section.title}
            </h3>
            <div className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="w-full p-4 rounded-2xl bg-white border flex items-center gap-4 transition-all hover:bg-[#F0EEF8] shadow-sm"
                    style={{ borderColor: 'rgba(26, 26, 46, 0.08)' }}
                  >
                    <Icon size={20} color="#6B6A7A" />
                    <div className="flex-1 text-left">
                      <p style={{ color: '#1A1A2E', fontSize: '14px', fontFamily: 'var(--font-sans)' }}>
                        {item.label}
                      </p>
                      {item.sublabel && (
                        <p className="text-xs mt-1" style={{ color: '#6B6A7A' }}>
                          {item.sublabel}
                        </p>
                      )}
                    </div>
                    <ChevronRight size={20} color="#6B6A7A" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <button
          className="w-full p-4 rounded-2xl bg-white border flex items-center gap-4 transition-all hover:bg-[#F0EEF8] shadow-sm"
          style={{ color: '#F0956A', borderColor: 'rgba(26, 26, 46, 0.08)' }}
        >
          <LogOut size={20} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px' }}>
            Log out
          </span>
        </button>

        <p className="mt-8 text-center text-xs" style={{ color: '#6B6A7A', lineHeight: '1.6' }}>
          Softline v1.0.0<br />
          Made with care for meaningful connections
        </p>
      </div>

      <BottomNav active="settings" />
    </div>
  );
}
