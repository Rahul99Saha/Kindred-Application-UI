import { Button, Card, Avatar, Chip, Input, Textarea, IconButton, Header, Divider, Alert } from '../HiFiComponents';
import { Settings, ChevronRight, Shield, Bell, Lock, User, Heart, Download, Trash2, ChevronLeft } from 'lucide-react';

export function ProfileHomeScreen() {
  return (
    <div className="h-full bg-neutral-50 overflow-y-auto pb-24">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 px-6 pt-12 pb-20 text-white">
        <div className="flex items-center gap-4 mb-4">
          <Avatar size="xl" fallback="N" />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">night_owl_42</h1>
            <p className="text-primary-100 text-sm">Computer Science • '26</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 space-y-6">
        {/* Stats Card */}
        <Card padding="lg" className="shadow-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-neutral-900">5</div>
              <div className="text-sm text-neutral-600">Matches</div>
            </div>
            <div className="border-l border-r border-neutral-200">
              <div className="text-2xl font-bold text-neutral-900">2</div>
              <div className="text-sm text-neutral-600">Circles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">14</div>
              <div className="text-sm text-neutral-600">Days Active</div>
            </div>
          </div>
        </Card>

        {/* Interest Passport */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-neutral-900">Interest Passport</h3>
            <button className="text-sm font-semibold text-primary-600 flex items-center gap-1">
              Edit
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <Card padding="md">
            <p className="text-xs text-neutral-500 uppercase tracking-wide mb-3">Your interests (12)</p>
            <div className="flex flex-wrap gap-2">
              <Chip label="Sci-Fi Movies" selected size="sm" />
              <Chip label="Indie Games" selected size="sm" />
              <Chip label="Coffee" selected size="sm" />
              <Chip label="Photography" selected size="sm" />
              <Chip label="Hiking" selected size="sm" />
              <Chip label="Books" selected size="sm" />
              <Chip label="+6 more" size="sm" />
            </div>
          </Card>
        </div>

        {/* Settings Menu */}
        <div>
          <h3 className="font-bold text-neutral-900 mb-3">Settings</h3>
          <div className="space-y-2">
            {[
              { icon: Bell, title: 'Preferences', subtitle: 'Notifications, matching' },
              { icon: Shield, title: 'Privacy & Safety', subtitle: 'Who can see you, block list' },
              { icon: User, title: 'Identity Controls', subtitle: 'Username, profile, bio' },
              { icon: Settings, title: 'Help & Support', subtitle: 'FAQs, contact support' },
            ].map((item) => (
              <Card key={item.title} variant="interactive" padding="md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                    <p className="text-sm text-neutral-600">{item.subtitle}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neutral-400" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Button variant="ghost" size="lg" fullWidth>
          Log Out
        </Button>
      </div>
    </div>
  );
}

export function InterestPassportScreen() {
  const [interests, setInterests] = useState([
    'Sci-Fi Movies', 'Indie Games', 'Coffee', 'Photography', 'Hiking', 'Books',
    'Anime', 'Music Production', 'Cooking', 'Tech', 'Art', 'Podcasts'
  ]);

  return (
    <div className="h-full bg-white flex flex-col">
      <Header
        title="Interest Passport"
        subtitle="Manage your interests"
        leftAction={<IconButton icon={<ChevronLeft className="w-5 h-5" />} />}
      />

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <Alert variant="info">
          <p className="text-sm">
            💡 Your interests help us match you with people who share your passions.
          </p>
        </Alert>

        <div>
          <p className="text-sm font-semibold text-neutral-700 mb-3">
            Your Interests ({interests.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Chip
                key={interest}
                label={interest}
                selected
                onClick={() => setInterests(interests.filter(i => i !== interest))}
              />
            ))}
          </div>
          <p className="text-xs text-neutral-500 mt-2">Tap to remove</p>
        </div>

        <Divider />

        <div>
          <p className="text-sm font-semibold text-neutral-700 mb-3">Add More</p>
          <Input
            placeholder="Search interests..."
            icon={<Heart className="w-5 h-5" />}
          />

          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
              Popular Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {['Gaming', 'Sports', 'Travel', 'Fashion', 'Fitness'].map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  onClick={() => setInterests([...interests, interest])}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-neutral-200 space-y-3">
        <Button variant="primary" size="lg" fullWidth>
          Save Changes
        </Button>
        <Button variant="ghost" size="lg" fullWidth>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export function PreferencesScreen() {
  return (
    <div className="h-full bg-white flex flex-col">
      <Header
        title="Preferences"
        subtitle="Customize your experience"
        leftAction={<IconButton icon={<ChevronLeft className="w-5 h-5" />} />}
      />

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <div>
          <h3 className="font-semibold text-neutral-900 mb-4">Matching</h3>
          <div className="space-y-4">
            <Card padding="md">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-neutral-900">College only</h4>
                  <p className="text-sm text-neutral-600">Match with campus only</p>
                </div>
                <div className="w-12 h-6 bg-primary-600 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-neutral-900">Min match %</h4>
                  <span className="text-sm font-semibold text-primary-600">60%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-600 h-full w-3/5 rounded-full" />
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Divider />

        <div>
          <h3 className="font-semibold text-neutral-900 mb-4">Notifications</h3>
          <div className="space-y-3">
            {[
              { label: 'New matches', desc: 'When someone matches with you', on: true },
              { label: 'New messages', desc: 'Push notifications for messages', on: true },
              { label: 'Circle activity', desc: 'New posts in circles', on: false },
              { label: 'Daily mood', desc: 'Reminder to log mood', on: true },
            ].map((item) => (
              <Card key={item.label} padding="md">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900">{item.label}</h4>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                  <div className={`w-12 h-6 ${item.on ? 'bg-primary-600' : 'bg-neutral-300'} rounded-full flex items-center px-1 transition-colors`}>
                    <div className={`w-4 h-4 bg-white rounded-full ${item.on ? 'ml-auto' : ''} transition-all`} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-neutral-200">
        <Button variant="primary" size="lg" fullWidth>
          Save Preferences
        </Button>
      </div>
    </div>
  );
}

export function PrivacyScreen() {
  return (
    <div className="h-full bg-white flex flex-col">
      <Header
        title="Privacy & Safety"
        subtitle="Control your visibility"
        leftAction={<IconButton icon={<ChevronLeft className="w-5 h-5" />} />}
      />

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <Alert variant="success">
          <p className="text-sm">
            ✓ Your profile is only visible to people you match with
          </p>
        </Alert>

        <div>
          <h3 className="font-semibold text-neutral-900 mb-4">Visibility</h3>
          <div className="space-y-3">
            {[
              { label: 'Show in discovery', on: true },
              { label: 'Show mood publicly', on: false },
              { label: 'Show online status', on: false },
            ].map((item) => (
              <Card key={item.label} padding="md">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-neutral-900">{item.label}</h4>
                  <div className={`w-12 h-6 ${item.on ? 'bg-primary-600' : 'bg-neutral-300'} rounded-full flex items-center px-1`}>
                    <div className={`w-4 h-4 bg-white rounded-full ${item.on ? 'ml-auto' : ''}`} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Divider />

        <div>
          <h3 className="font-semibold text-neutral-900 mb-4">Safety</h3>
          <div className="space-y-2">
            {[
              { icon: Shield, label: 'Blocked users', detail: '0 users' },
              { icon: Settings, label: 'Report history', detail: 'View reports' },
              { icon: Lock, label: 'Safety resources', detail: 'Tips & support' },
            ].map((item) => (
              <Card key={item.label} variant="interactive" padding="md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900">{item.label}</h4>
                    <p className="text-sm text-neutral-600">{item.detail}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neutral-400" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Divider />

        <div>
          <h3 className="font-semibold text-neutral-900 mb-4">Data</h3>
          <div className="space-y-2">
            <Card variant="interactive" padding="md">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-neutral-600" />
                <div className="flex-1">
                  <h4 className="font-medium text-neutral-900">Download data</h4>
                </div>
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              </div>
            </Card>

            <Card variant="interactive" padding="md" className="border-red-200">
              <div className="flex items-center gap-3">
                <Trash2 className="w-5 h-5 text-red-600" />
                <div className="flex-1">
                  <h4 className="font-medium text-red-600">Delete account</h4>
                </div>
                <ChevronRight className="w-5 h-5 text-red-400" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Need to import useState
import { useState } from 'react';
