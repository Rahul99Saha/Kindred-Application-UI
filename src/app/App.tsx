import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home as HomeIcon, Compass, Users, MessageCircle, User } from 'lucide-react';
import { BottomNav } from './components/hifi/HiFiComponents';

// Onboarding
import { SplashScreen, CollegeSelectScreen, LoginScreen, UsernameScreen, InterestSelectionScreen, MoodCheckScreen } from './components/hifi/screens/OnboardingScreens';

// Home
import { HomeScreen, MoodBoardScreen, MoodReflectionScreen } from './components/hifi/screens/HomeScreens';

// Discovery
import { DiscoveryHomeScreen, SoftMatchScreen, MatchWaitingScreen, MatchRevealScreen, NoMatchScreen, MatchQueueScreen } from './components/hifi/screens/DiscoveryScreens';

// Circles & Chat
import { CirclesHomeScreen, CircleRoomScreen, ChatListScreen, ChatThreadScreen, SilenceModeScreen } from './components/hifi/screens/CirclesAndChatScreens';

// Profile
import { ProfileHomeScreen, InterestPassportScreen, PreferencesScreen, PrivacyScreen } from './components/hifi/screens/ProfileScreens';

type ScreenConfig = {
  id: string;
  title: string;
  component: JSX.Element;
  section?: string;
  showNav?: boolean;
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const screens: ScreenConfig[] = [
    // Onboarding
    { id: 'onb-01', title: 'Splash', component: <SplashScreen />, section: 'Onboarding' },
    { id: 'onb-02', title: 'College Selection', component: <CollegeSelectScreen />, section: 'Onboarding' },
    { id: 'onb-03', title: 'Login', component: <LoginScreen />, section: 'Onboarding' },
    { id: 'onb-04', title: 'Username', component: <UsernameScreen />, section: 'Onboarding' },
    { id: 'onb-05', title: 'Interest Selection', component: <InterestSelectionScreen />, section: 'Onboarding' },
    { id: 'onb-06', title: 'Mood Check', component: <MoodCheckScreen />, section: 'Onboarding' },

    // Home
    { id: 'home-01', title: 'Home', component: <HomeScreen />, section: 'Home', showNav: true },
    { id: 'home-02', title: 'Mood Board', component: <MoodBoardScreen />, section: 'Home', showNav: true },
    { id: 'home-03', title: 'Mood Reflection', component: <MoodReflectionScreen />, section: 'Home' },

    // Discovery
    { id: 'disc-01', title: 'Discovery Home', component: <DiscoveryHomeScreen />, section: 'Discovery', showNav: true },
    { id: 'disc-02', title: 'Soft Match', component: <SoftMatchScreen />, section: 'Discovery' },
    { id: 'disc-03', title: 'Match Waiting', component: <MatchWaitingScreen />, section: 'Discovery' },
    { id: 'disc-04', title: 'Match Reveal', component: <MatchRevealScreen />, section: 'Discovery' },
    { id: 'disc-05', title: 'No Match', component: <NoMatchScreen />, section: 'Discovery' },
    { id: 'disc-06', title: 'Match Queue', component: <MatchQueueScreen />, section: 'Discovery', showNav: true },

    // Circles
    { id: 'circ-01', title: 'Circles Home', component: <CirclesHomeScreen />, section: 'Circles', showNav: true },
    { id: 'circ-02', title: 'Circle Room', component: <CircleRoomScreen />, section: 'Circles' },

    // Chat
    { id: 'chat-01', title: 'Chat List', component: <ChatListScreen />, section: 'Chat', showNav: true },
    { id: 'chat-02', title: 'Chat Thread', component: <ChatThreadScreen />, section: 'Chat' },
    { id: 'chat-03', title: 'Silence Mode', component: <SilenceModeScreen />, section: 'Chat' },

    // Profile
    { id: 'prof-01', title: 'Profile', component: <ProfileHomeScreen />, section: 'Profile', showNav: true },
    { id: 'prof-02', title: 'Interest Passport', component: <InterestPassportScreen />, section: 'Profile' },
    { id: 'prof-03', title: 'Preferences', component: <PreferencesScreen />, section: 'Profile' },
    { id: 'prof-04', title: 'Privacy & Safety', component: <PrivacyScreen />, section: 'Profile' },
  ];

  const currentScreenData = screens[currentScreen];

  const navItems = [
    { icon: <HomeIcon className="w-6 h-6" />, label: 'Home', active: activeTab === 0, badge: 0, onClick: () => { setActiveTab(0); setCurrentScreen(6); } },
    { icon: <Compass className="w-6 h-6" />, label: 'Discovery', active: activeTab === 1, badge: 0, onClick: () => { setActiveTab(1); setCurrentScreen(9); } },
    { icon: <Users className="w-6 h-6" />, label: 'Circles', active: activeTab === 2, badge: 3, onClick: () => { setActiveTab(2); setCurrentScreen(15); } },
    { icon: <MessageCircle className="w-6 h-6" />, label: 'Chat', active: activeTab === 3, badge: 2, onClick: () => { setActiveTab(3); setCurrentScreen(17); } },
    { icon: <User className="w-6 h-6" />, label: 'Profile', active: activeTab === 4, badge: 0, onClick: () => { setActiveTab(4); setCurrentScreen(20); } },
  ];

  return (
    <div className="size-full bg-neutral-100 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 text-white shadow-lg">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div>
            <h1 className="text-2xl font-bold mb-1">
              Kindred — Hi-Fi Prototype
            </h1>
            <p className="text-sm text-primary-100">
              {currentScreenData.section && `${currentScreenData.section} → `}
              {currentScreenData.title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono bg-white bg-opacity-20 px-3 py-1 rounded-lg">
              {String(currentScreen + 1).padStart(2, '0')} / {screens.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="relative">
          {/* Phone Frame */}
          <div
            className="bg-neutral-900 relative mx-auto shadow-2xl"
            style={{
              width: '393px',
              height: '852px',
              borderRadius: '50px',
              padding: '12px'
            }}
          >
            {/* Phone notch */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-900 z-10"
              style={{
                width: '150px',
                height: '30px',
                borderRadius: '0 0 20px 20px'
              }}
            />

            {/* Screen Content */}
            <div className="h-full bg-white overflow-hidden relative" style={{ borderRadius: '40px' }}>
              {currentScreenData.component}

              {/* Bottom Navigation - Only show on main screens */}
              {currentScreenData.showNav && (
                <div className="absolute bottom-0 left-0 right-0">
                  <BottomNav items={navItems} />
                </div>
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentScreen(Math.max(0, currentScreen - 1))}
            disabled={currentScreen === 0}
            className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-2 border-neutral-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-50 hover:scale-105 transition-all shadow-lg"
          >
            <ChevronLeft size={28} className="text-neutral-700" />
          </button>
          <button
            onClick={() => setCurrentScreen(Math.min(screens.length - 1, currentScreen + 1))}
            disabled={currentScreen === screens.length - 1}
            className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-2 border-neutral-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-50 hover:scale-105 transition-all shadow-lg"
          >
            <ChevronRight size={28} className="text-neutral-700" />
          </button>
        </div>
      </div>

      {/* Footer - Section Quick Nav */}
      <div className="bg-white border-t-2 border-neutral-200 px-6 py-4 shadow-lg">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            {['Onboarding', 'Home', 'Discovery', 'Circles', 'Chat', 'Profile'].map((section) => {
              const sectionScreens = screens.filter((s) => s.section === section);
              const isActive = currentScreenData.section === section;
              const firstScreenIdx = screens.findIndex((s) => s.section === section);

              return (
                <button
                  key={section}
                  onClick={() => firstScreenIdx !== -1 && setCurrentScreen(firstScreenIdx)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md scale-105'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {section} ({sectionScreens.length})
                </button>
              );
            })}
          </div>

          {/* Screen Dots */}
          <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-2">
            {screens.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => setCurrentScreen(idx)}
                className={`transition-all flex-shrink-0 ${
                  currentScreen === idx ? 'scale-125' : 'hover:scale-110'
                }`}
                style={{
                  width: currentScreen === idx ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: currentScreen === idx ? '#8b5cf6' : '#d1d5db',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}