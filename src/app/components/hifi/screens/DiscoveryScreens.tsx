import { Button, Card, Avatar, Chip, Alert, IconButton, LoadingSpinner } from '../HiFiComponents';
import { Logo } from '../Logo';
import { Heart, X, Sparkles, Clock, Check, ChevronRight, TrendingUp, Users, UserPlus, Shield } from 'lucide-react';

export function DiscoveryHomeScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-violet-50 via-white to-cyan-50 flex flex-col justify-center p-6">
      <div className="space-y-8">
        <div className="text-center">
          {/* App Logo */}
          <Logo size="lg" variant="icon" className="mx-auto mb-6" />

          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Ready to Discover?
          </h1>
          <p className="text-neutral-600 text-lg max-w-sm mx-auto">
            We'll show you people who share your interests. No pressure to connect immediately.
          </p>
        </div>

        <div className="space-y-4">
          <Card padding="md" className="bg-white shadow-sm border-violet-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-violet-500/30">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">STEP 1</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">See shared interests</h3>
                <p className="text-sm text-neutral-600">Identity hidden for comfort</p>
              </div>
            </div>
          </Card>

          <Card padding="md" className="bg-white shadow-sm border-cyan-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/30">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-cyan-600 bg-cyan-100 px-2 py-0.5 rounded-full">STEP 2</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Both say yes to reveal</h3>
                <p className="text-sm text-neutral-600">Mutual interest required</p>
              </div>
            </div>
          </Card>

          <Card padding="md" className="bg-white shadow-sm border-emerald-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">STEP 3</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Start chatting</h3>
                <p className="text-sm text-neutral-600">Ice breaker prompts included</p>
              </div>
            </div>
          </Card>
        </div>

        <Button variant="primary" size="lg" fullWidth>
          Start Discovery
        </Button>
      </div>
    </div>
  );
}

export function SoftMatchScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-violet-50 via-white to-white flex flex-col">
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center p-6">
        <Card padding="lg" className="shadow-2xl border-violet-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/5 to-transparent rounded-full -mr-16 -mt-16" />

          <div className="text-center space-y-6 relative">
            {/* Anonymous Avatar - Improved */}
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-100 to-cyan-100 rounded-full flex items-center justify-center text-7xl shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-200 to-cyan-200 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-violet-600" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md border border-neutral-200">
                <span className="text-xs font-bold text-neutral-600">Anonymous</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Someone on Campus
              </h2>
              <p className="text-sm text-neutral-600 font-medium">
                IIIT H • Computer Science
              </p>
            </div>

            {/* Match Percentage - Enhanced */}
            <div className="bg-gradient-to-br from-violet-50 to-cyan-50 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-700">Match Score</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">75%</span>
              </div>
              <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-primary-500 to-cyan-500 h-full w-3/4 transition-all duration-500 rounded-full shadow-sm" />
              </div>
              <p className="text-xs text-neutral-600">Great compatibility!</p>
            </div>

            {/* Shared Interests */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                Shared interests
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Chip label="Sci-Fi Movies" selected size="sm" icon={<Heart className="w-3 h-3" fill="currentColor" />} />
                <Chip label="Indie Games" selected size="sm" icon={<Heart className="w-3 h-3" fill="currentColor" />} />
                <Chip label="Coffee Culture" selected size="sm" icon={<Heart className="w-3 h-3" fill="currentColor" />} />
              </div>
            </div>

            {/* Their Unique Interests */}
            <div className="space-y-3 pt-2 border-t border-neutral-200">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                Their interests
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Chip label="Photography" size="sm" />
                <Chip label="Hiking" size="sm" />
                <Chip label="Music Production" size="sm" />
              </div>
            </div>
          </div>
        </Card>

        <Alert variant="info" className="mt-6">
          <p className="text-sm">
            They won't know if you skip. No pressure to decide right now.
          </p>
        </Alert>
      </div>

      {/* Actions */}
      <div className="p-6 bg-white border-t border-neutral-200 space-y-3">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          icon={<Heart className="w-5 h-5" />}
        >
          I'm interested
        </Button>
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          icon={<X className="w-5 h-5" />}
        >
          Skip
        </Button>
      </div>
    </div>
  );
}

export function MatchWaitingScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col justify-center p-6">
      <div className="text-center space-y-8">
        {/* Animated Circles */}
        <div className="flex items-center justify-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full animate-pulse shadow-lg" />
          <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full animate-pulse animation-delay-200 shadow-lg" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-3">
            Waiting for response...
          </h1>
          <p className="text-neutral-600 max-w-sm mx-auto">
            We've sent your interest. We'll notify you when they respond. This might take up to 24 hours.
          </p>
        </div>

        <Card padding="md" className="bg-blue-50 border-blue-200 max-w-sm mx-auto">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
              Sent 2 hours ago. Most people respond within 12 hours.
            </p>
          </div>
        </Card>

        <div className="space-y-3 max-w-sm mx-auto">
          <Button variant="primary" size="lg" fullWidth>
            Keep Browsing
          </Button>
          <Button variant="ghost" size="lg" fullWidth>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export function MatchRevealScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 via-white to-cyan-50 flex flex-col">
      {/* Celebration Header - Improved */}
      <div className="px-6 py-10 text-center bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

        <div className="relative">
          {/* Icon instead of emoji */}
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>
          <h1 className="text-4xl font-bold mb-2 drop-shadow-sm">It's a Match!</h1>
          <p className="text-white/90 text-lg font-medium">You both said yes 🎉</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
        <Card padding="lg" className="shadow-lg border-emerald-100">
          <div className="text-center space-y-5">
            {/* Avatar with success indicator */}
            <div className="relative inline-block">
              <Avatar size="xl" fallback="U" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-1">
                @username_42
              </h2>
              <p className="text-sm text-neutral-600">
                Computer Science • Class of 2026
              </p>
            </div>

            {/* Shared Interests Reminder */}
            <div className="pt-4 border-t border-neutral-200 space-y-3">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" fill="white" />
                </div>
                <p className="text-sm font-semibold text-neutral-700">You both love</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Chip label="Sci-Fi Movies" selected variant="success" />
                <Chip label="Indie Games" selected variant="success" />
                <Chip label="Coffee Culture" selected variant="success" />
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-emerald-900 mb-1">Great Match!</p>
              <p className="text-sm text-emerald-800">
                You share 75% of interests. Start with something you both love.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-6 bg-white border-t border-neutral-200 space-y-3">
        <Button variant="primary" size="lg" fullWidth>
          Start Conversation
        </Button>
        <Button variant="secondary" size="lg" fullWidth>
          Save for Later
        </Button>
      </div>
    </div>
  );
}

export function NoMatchScreen() {
  return (
    <div className="h-full bg-white flex flex-col justify-center p-6">
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full flex items-center justify-center">
          <TrendingUp className="w-12 h-12 text-neutral-500" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            No match this time
          </h1>
          <p className="text-neutral-600 max-w-sm mx-auto">
            That's okay! There are plenty of other people to connect with. Keep exploring.
          </p>
        </div>

        <div className="space-y-3 max-w-sm mx-auto">
          <Button variant="primary" size="lg" fullWidth>
            Continue Discovering
          </Button>
          <Button variant="ghost" size="lg" fullWidth>
            Back to Home
          </Button>
        </div>

        <Alert variant="info">
          <p className="text-sm">
            We never share who said no. Your privacy is always protected.
          </p>
        </Alert>
      </div>
    </div>
  );
}

export function MatchQueueScreen() {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-6 bg-gradient-to-br from-amber-50 to-white border-b border-neutral-200">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          Match Queue
        </h1>
        <p className="text-neutral-600">
          Track your pending connections
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Waiting for Response */}
        <div className="space-y-3">
          <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            Waiting for response (2)
          </h3>

          {[1, 2].map((i) => (
            <Card key={i} variant="hover" padding="md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  ?
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-neutral-900">Someone interested in Sci-Fi</h4>
                  <p className="text-sm text-neutral-500">Sent {i === 1 ? '2 hours' : '5 hours'} ago</p>
                </div>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              </div>
            </Card>
          ))}
        </div>

        {/* Interested in You */}
        <div className="space-y-3">
          <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
            Interested in you (1)
          </h3>

          <Card variant="interactive" padding="md" className="border-2 border-primary-200 bg-primary-50">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  ?
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900">Someone on campus</h4>
                  <p className="text-sm text-neutral-600">3 shared interests</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="primary" size="sm" fullWidth>
                  View Profile
                </Button>
                <Button variant="secondary" size="sm" fullWidth>
                  Skip
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
