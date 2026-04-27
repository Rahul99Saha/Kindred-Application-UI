import { Button, Card, Avatar, Chip, Badge, Alert, IconButton } from '../HiFiComponents';
import { Heart, MessageCircle, Users, Sparkles, TrendingUp, ChevronRight, Plus } from 'lucide-react';
import { useState } from 'react';

import { Logo } from '../Logo';

export function HomeScreen() {
  const moods = [
    { emoji: '😊', label: 'Happy', color: 'from-emerald-400/30 to-emerald-500/30' },
    { emoji: '😌', label: 'Calm', color: 'from-sky-400/30 to-sky-500/30' },
    { emoji: '😔', label: 'Down', color: 'from-slate-400/30 to-slate-500/30' },
    { emoji: '😰', label: 'Anxious', color: 'from-amber-400/30 to-amber-500/30' },
    { emoji: '🤔', label: 'Thoughtful', color: 'from-violet-400/30 to-violet-500/30' },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-violet-50 to-neutral-50 overflow-y-auto pb-24">
      {/* Header - Improved visibility */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-600 to-cyan-600 px-6 pt-14 pb-10 text-white shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 drop-shadow-sm">
              Good evening, night_owl
            </h1>
            <p className="text-white/90 text-base font-medium">
              How are you feeling today?
            </p>
          </div>
          <Logo size="md" variant="icon" className="opacity-20" />
        </div>

        {/* Mood Selection - Improved design */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2 -mx-2 px-2">
          {moods.map((mood) => (
            <button
              key={mood.label}
              className={`flex-shrink-0 w-18 h-18 bg-gradient-to-br ${mood.color} hover:bg-white/30 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 border border-white/20 shadow-lg`}
            >
              <span className="text-3xl mb-1">{mood.emoji}</span>
              <span className="text-xs font-semibold text-white/95">{mood.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 -mt-6 space-y-6 pb-6">
        {/* Primary CTA Card - Enhanced */}
        <Card padding="lg" className="shadow-xl bg-gradient-to-br from-white via-violet-50/30 to-cyan-50/30 border-violet-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/10 to-transparent rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full -ml-12 -mb-12" />

          <div className="text-center space-y-5 relative">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-violet-400 to-cyan-500 rounded-3xl flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Find Someone Like You
              </h2>
              <p className="text-neutral-600 text-base">
                Match based on shared interests
              </p>
            </div>
            <Button variant="primary" size="lg" fullWidth className="shadow-lg shadow-primary-500/30">
              Start Matching
            </Button>
          </div>
        </Card>

        {/* Active Chats - Enhanced */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-neutral-900">Active Chats</h3>
            <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors">
              See all
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <Card variant="interactive" padding="md" className="border-l-4 border-l-primary-500">
              <div className="flex items-center gap-3">
                <Avatar size="md" fallback="U" status="online" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-neutral-900">username_42</h4>
                    <Badge count={2} variant="danger" />
                  </div>
                  <p className="text-sm text-neutral-600 truncate">
                    That sounds really interesting! I'd love to...
                  </p>
                  <div className="flex gap-1 mt-2">
                    <Chip label="Sci-Fi" size="sm" />
                    <Chip label="Gaming" size="sm" />
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-neutral-400 font-medium">2h</span>
                </div>
              </div>
            </Card>

            <Card variant="interactive" padding="md">
              <div className="flex items-center gap-3">
                <Avatar size="md" fallback="N" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-neutral-900 mb-1">night_reader</h4>
                  <p className="text-sm text-neutral-600 truncate">
                    Thanks for the recommendation!
                  </p>
                  <div className="flex gap-1 mt-2">
                    <Chip label="Books" size="sm" />
                  </div>
                </div>
                <span className="text-xs text-neutral-400 font-medium">5h</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Your Circles - Enhanced */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-neutral-900">Your Circles</h3>
            <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors">
              Explore
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <Card variant="interactive" padding="md" className="bg-gradient-to-br from-white to-violet-50/30 border-violet-100 relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-400/10 to-transparent rounded-full -mr-12 -mt-12" />

            <div className="space-y-3 relative">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-bold text-neutral-900 mb-1 text-base">Sci-Fi Enthusiasts</h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Users className="w-4 h-4" />
                    <span>5 members</span>
                    <span>•</span>
                    <MessageCircle className="w-4 h-4" />
                    <span>3 new</span>
                  </div>
                </div>
                <Badge count={3} variant="primary" />
              </div>
              <div className="flex gap-2">
                <Chip label="Sci-Fi" size="sm" selected variant="primary" />
                <Chip label="Movies" size="sm" selected variant="primary" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function MoodBoardScreen() {
  const [selectedMood, setSelectedMood] = useState('😊 Happy');

  const moods = ['😊 Happy', '😌 Calm', '😔 Down', '😰 Anxious', '🤔 Thoughtful'];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-6 bg-gradient-to-br from-purple-50 to-white border-b border-neutral-200">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          Feeling Board
        </h1>
        <p className="text-neutral-600 text-sm">
          See who shares similar feelings today
        </p>
      </div>

      {/* Mood Filter */}
      <div className="px-6 py-4 border-b border-neutral-200 bg-white">
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Filter by mood
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {moods.map((mood) => (
            <Chip
              key={mood}
              label={mood}
              selected={selectedMood === mood}
              onClick={() => setSelectedMood(mood)}
              variant="primary"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Users className="w-5 h-5 text-primary-600" />
          <span>12 people feeling similar (Anonymous)</span>
        </div>

        {[1, 2, 3].map((i) => (
          <Card key={i} variant="hover" padding="md">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-xl">
                  😊
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900">Anonymous User</h4>
                  <p className="text-xs text-neutral-500">2 hours ago</p>
                </div>
              </div>
              <p className="text-sm text-neutral-700">
                "Feeling great about finishing my project! Ready to connect with others who love creative work."
              </p>
              <div className="flex gap-2">
                <Chip label="Movies" size="sm" />
                <Chip label="Art" size="sm" />
                <Chip label="Gaming" size="sm" />
              </div>
            </div>
          </Card>
        ))}

        <Alert variant="info">
          <p className="text-sm">
            All users on the feeling board remain anonymous until you match. Your identity is always protected.
          </p>
        </Alert>
      </div>
    </div>
  );
}

export function MoodReflectionScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col justify-center p-6">
      <div className="text-center space-y-6">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-green-500 rounded-3xl flex items-center justify-center text-6xl shadow-xl">
          😊
        </div>

        <div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            You selected: Happy
          </h1>
          <p className="text-neutral-600">
            Great! We found 12 people feeling similar today.
          </p>
        </div>

        <div className="space-y-3 max-w-sm mx-auto">
          <Button variant="primary" size="lg" fullWidth>
            See Feeling Board
          </Button>
          <Button variant="secondary" size="lg" fullWidth>
            Continue to Matching
          </Button>
          <Button variant="ghost" size="lg" fullWidth>
            Skip for now
          </Button>
        </div>

        <Alert variant="success">
          <p className="text-sm">
            Your mood helps us understand you better. It's never shared with specific individuals.
          </p>
        </Alert>
      </div>
    </div>
  );
}
