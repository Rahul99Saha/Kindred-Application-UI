import { Button, Input, Chip, Alert, Card, Avatar } from '../HiFiComponents';
import { Logo } from '../Logo';
import { Heart, Lock, Search, Check, Sparkles, Shield, Users, Building2, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export function SplashScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-violet-50 via-white to-cyan-50 flex flex-col items-center justify-between p-8">
      {/* Logo/Brand */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <Logo size="xl" variant="icon" className="mb-8" />

        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent mb-4 text-center">
          Kindred
        </h1>

        <p className="text-xl text-neutral-600 text-center max-w-sm mb-10 font-medium">
          Find your people, make real bonds
        </p>

        <div className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-2xl p-5 shadow-sm max-w-sm">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-sm mb-1">Safe & Private</p>
              <p className="text-sm text-neutral-600">A safe space for meaningful connections</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full space-y-3">
        <Button variant="primary" size="lg" fullWidth className="shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40">
          Get Started
        </Button>
        <p className="text-xs text-neutral-500 text-center">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}

export function CollegeSelectScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const colleges = [
    { name: 'IIIT Hyderabad', shortName: 'IIIT H', count: '1.2k students', color: 'from-blue-400 to-blue-500' },
    { name: 'IIT Bombay', shortName: 'IIT B', count: '3.4k students', color: 'from-indigo-400 to-indigo-500' },
    { name: 'IIT Delhi', shortName: 'IIT D', count: '3.1k students', color: 'from-violet-400 to-violet-500' },
    { name: 'BITS Pilani', shortName: 'BITS', count: '2.8k students', color: 'from-purple-400 to-purple-500' },
    { name: 'NIT Trichy', shortName: 'NIT T', count: '2.2k students', color: 'from-pink-400 to-pink-500' },
    { name: 'VIT Vellore', shortName: 'VIT', count: '4.1k students', color: 'from-rose-400 to-rose-500' },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-violet-50 via-white to-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-10 bg-gradient-to-br from-violet-50 to-white">
        <h1 className="text-4xl font-bold text-neutral-900 mb-3">
          Welcome to IIIT H
        </h1>
        <p className="text-lg text-neutral-600">
          Connect with people on your campus
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <Input
          placeholder="Search for your college..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<Search className="w-5 h-5" />}
          className="mb-6 shadow-sm"
        />

        <div className="space-y-3">
          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
            Popular Colleges
          </p>

          {colleges.map((college) => (
            <Card
              key={college.name}
              variant="interactive"
              padding="none"
              className={`group overflow-hidden transition-all duration-200 ${
                selected === college.name
                  ? 'ring-2 ring-primary-500 shadow-lg shadow-primary-500/20'
                  : 'hover:shadow-md'
              }`}
              onClick={() => setSelected(college.name)}
            >
              <div className="flex items-center gap-4 p-4">
                {/* College Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${college.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>

                {/* College Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-neutral-900 mb-0.5 text-base">
                    {college.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{college.count}</p>
                </div>

                {/* Selection Radio */}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selected === college.name
                    ? 'border-primary-600 bg-primary-600'
                    : 'border-neutral-300 group-hover:border-primary-400'
                }`}>
                  {selected === college.name && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-6 bg-white border-t border-neutral-100">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!selected}
          className="shadow-lg shadow-primary-500/30"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export function LoginScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-violet-50 via-white to-cyan-50 flex flex-col justify-center p-6">
      <div className="mb-12 text-center">
        <Logo size="lg" variant="icon" className="mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          Welcome Back
        </h1>
        <p className="text-neutral-600 text-lg">
          Sign in to continue to Kindred
        </p>
      </div>

      <div className="space-y-4">
        {/* Primary SSO Button - More prominent */}
        <Button
          variant="primary"
          size="lg"
          fullWidth
          icon={<Lock className="w-5 h-5" />}
          className="shadow-lg shadow-primary-500/40 hover:shadow-xl hover:shadow-primary-500/50 transform hover:scale-[1.02] transition-all"
        >
          Sign In with College SSO
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3 py-2">
          <div className="flex-1 h-px bg-neutral-200" />
          <span className="text-sm text-neutral-500 font-medium">or</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        {/* Email Option */}
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          className="border-2 hover:border-primary-300 hover:bg-primary-50"
        >
          Sign In with Email
        </Button>

        {/* Sign Up Link */}
        <div className="text-center pt-4">
          <p className="text-sm text-neutral-600">
            Don't have an account?{' '}
            <button className="text-primary-600 font-semibold hover:text-primary-700 hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </div>

      <div className="mt-8 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Lock className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-900 mb-1">Your Privacy Matters</p>
            <p className="text-sm text-emerald-800">
              Your email is never shared and only used for verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UsernameScreen() {
  const [username, setUsername] = useState('night_owl_42');

  return (
    <div className="h-full bg-white flex flex-col justify-between p-6">
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Choose your username
          </h1>
          <p className="text-neutral-600">
            This is how others will see you. Pick a pseudonym that you feel fits you best.
          </p>
        </div>

        <div className="space-y-4">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g., night_owl_42"
            helper="Usernames can include letters, numbers, and underscores"
          />

          <Card padding="md" className="bg-purple-50 border-purple-200">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-purple-900 text-sm">Privacy first:</p>
                <p className="text-sm text-purple-800">
                  We never share your real identity without your consent. Use any username you're comfortable with.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Button variant="primary" size="lg" fullWidth>
        Continue
      </Button>
    </div>
  );
}

export function InterestSelectionScreen() {
  const [selectedInterests, setSelectedInterests] = useState(['Movies', 'Gaming', 'Music', 'Food']);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Movies');

  const categories = [
    'Movies', 'TV', 'Music', 'Gaming', 'Internet', 'Art',
    'Tech', 'Sports', 'Fitness', 'Food', 'Travel', 'Fashion'
  ];

  const subInterests: Record<string, string[]> = {
    Movies: ['Sci-Fi', 'Horror', 'Indie Films', 'Documentaries', 'Animation'],
    Gaming: ['RPGs', 'Indie Games', 'FPS', 'Strategy', 'Souls-like'],
    Music: ['Indie Rock', 'Electronic', 'Hip Hop', 'Jazz', 'K-Pop'],
    Food: ['Coffee', 'Baking', 'Cooking', 'Restaurants', 'Vegan'],
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
      if (expandedCategory === interest) setExpandedCategory(null);
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-6 bg-gradient-to-br from-secondary-50 to-white border-b border-neutral-200">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          What are you into?
        </h1>
        <p className="text-neutral-600">
          Select 5 or more interests
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 bg-neutral-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full transition-all duration-300"
              style={{ width: `${(selectedInterests.length / 5) * 100}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-neutral-600">
            {selectedInterests.length}/5
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <div>
          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
            Categories
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                selected={selectedInterests.includes(category)}
                onClick={() => {
                  toggleInterest(category);
                  if (subInterests[category]) {
                    setExpandedCategory(expandedCategory === category ? null : category);
                  }
                }}
                variant="primary"
              />
            ))}
          </div>
        </div>

        {/* Sub-interests for selected categories */}
        {expandedCategory && subInterests[expandedCategory] && selectedInterests.includes(expandedCategory) && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <p className="text-sm font-semibold text-neutral-700 mb-3 flex items-center gap-2">
              <span>{expandedCategory}</span>
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-xs text-neutral-500 font-normal">AI suggested</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {subInterests[expandedCategory].map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  selected={selectedInterests.includes(interest)}
                  onClick={() => toggleInterest(interest)}
                  size="sm"
                />
              ))}
            </div>
          </div>
        )}

        <Card padding="md" className="bg-blue-50 border-blue-200">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">💡 Tip:</span> Pick specific interests for better matches. These help us find people who share your exact tastes.
          </p>
        </Card>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-neutral-200 bg-white">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={selectedInterests.length < 5}
        >
          Continue ({selectedInterests.length} selected)
        </Button>
      </div>
    </div>
  );
}

export function MoodCheckScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { emoji: '😊', label: 'Happy', color: 'from-emerald-400 to-emerald-500', shadow: 'shadow-emerald-500/40' },
    { emoji: '😌', label: 'Calm', color: 'from-sky-400 to-sky-500', shadow: 'shadow-sky-500/40' },
    { emoji: '😔', label: 'Down', color: 'from-slate-400 to-slate-500', shadow: 'shadow-slate-500/40' },
    { emoji: '😰', label: 'Anxious', color: 'from-amber-400 to-amber-500', shadow: 'shadow-amber-500/40' },
    { emoji: '🤔', label: 'Thoughtful', color: 'from-violet-400 to-violet-500', shadow: 'shadow-violet-500/40' },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-violet-50 via-white to-sky-50 flex flex-col justify-center p-6">
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            How are you feeling?
          </h1>
          <p className="text-neutral-600 text-lg">
            Share your mood to connect with similar people
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4 px-2">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.label)}
              className={`relative aspect-square rounded-3xl bg-gradient-to-br ${mood.color} ${
                selectedMood === mood.label
                  ? `ring-4 ring-offset-4 ring-${mood.color.split('-')[1]}-500 scale-110 ${mood.shadow} shadow-xl`
                  : `hover:scale-105 ${mood.shadow} shadow-lg hover:shadow-xl`
              } transition-all duration-300 flex flex-col items-center justify-center text-white group`}
            >
              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {mood.emoji}
              </span>
              <span className="text-xs font-bold uppercase tracking-wide opacity-90">
                {mood.label}
              </span>

              {selectedMood === mood.label && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-2xl p-5 shadow-sm">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-neutral-900 text-sm">Your Mood is Private</p>
              <p className="text-sm text-neutral-600">
                Shared anonymously only. Auto-deletes in 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            disabled={!selectedMood}
            className="shadow-lg shadow-primary-500/30"
          >
            Continue
          </Button>
          <Button variant="ghost" size="lg" fullWidth className="text-neutral-600">
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  );
}
