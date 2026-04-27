import { Button, Card, Avatar, Chip, Badge, Input, Textarea, IconButton, Alert, Header } from '../HiFiComponents';
import { Users, Plus, MessageCircle, Send, Smile, Lock, ChevronLeft, MoreVertical, Image as ImageIcon, Clock } from 'lucide-react';

// CIRCLES SCREENS

export function CirclesHomeScreen() {
  return (
    <div className="h-full bg-neutral-50 overflow-y-auto pb-24">
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Circles</h1>
            <p className="text-neutral-600">Small groups, big connections</p>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          fullWidth
          icon={<Plus className="w-5 h-5" />}
          className="mb-8"
        >
          Form a New Circle
        </Button>

        {/* Your Circles */}
        <div className="space-y-4 mb-8">
          <h3 className="font-semibold text-neutral-700">Your Circles (2)</h3>

          <Card variant="interactive" padding="md" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-transparent rounded-bl-[100px]" />
            <div className="space-y-3 relative">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-bold text-neutral-900 mb-1">Sci-Fi Enthusiasts</h4>
                  <p className="text-sm text-neutral-600">5 members</p>
                </div>
                <Badge count={3} variant="primary" />
              </div>
              <div className="flex gap-2">
                <Chip label="Sci-Fi" selected size="sm" />
                <Chip label="Movies" selected size="sm" />
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <MessageCircle className="w-4 h-4" />
                <span>3 new messages</span>
              </div>
            </div>
          </Card>

          <Card variant="interactive" padding="md" className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-neutral-900">Night Owls</h4>
                    <Lock className="w-4 h-4 text-purple-600" />
                  </div>
                  <p className="text-sm text-neutral-600">12 members • Anonymous</p>
                </div>
                <Badge count={1} variant="primary" />
              </div>
              <div className="flex gap-2">
                <Chip label="Late Night" selected size="sm" variant="primary" />
                <Chip label="Anonymous" selected size="sm" variant="primary" />
              </div>
            </div>
          </Card>
        </div>

        {/* Discover Circles */}
        <div className="space-y-4">
          <h3 className="font-semibold text-neutral-700">Discover Circles</h3>

          {['Indie Game Devs', 'Coffee Lovers'].map((name, i) => (
            <Card key={name} variant="hover" padding="md">
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">{name}</h4>
                  <p className="text-sm text-neutral-600">{i === 0 ? '8' : '15'} members</p>
                </div>
                <div className="flex gap-2">
                  <Chip label={i === 0 ? "Gaming" : "Coffee"} size="sm" />
                  <Chip label={i === 0 ? "Dev" : "Cafes"} size="sm" />
                </div>
                <Button variant="secondary" size="sm" fullWidth>
                  Join Circle
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CircleRoomScreen() {
  return (
    <div className="h-full bg-white flex flex-col">
      <Header
        title="Sci-Fi Enthusiasts"
        subtitle="5 members"
        leftAction={<IconButton icon={<ChevronLeft className="w-5 h-5" />} />}
        rightAction={<IconButton icon={<MoreVertical className="w-5 h-5" />} />}
      />

      {/* Tab Navigation */}
      <div className="flex border-b border-neutral-200 bg-white px-2">
        <button className="flex-1 py-3 px-4 border-b-2 border-primary-600 text-primary-600 font-semibold text-sm">
          Chat
        </button>
        <button className="flex-1 py-3 px-4 text-neutral-600 font-medium text-sm">
          Prompts
        </button>
        <button className="flex-1 py-3 px-4 text-neutral-600 font-medium text-sm">
          Members
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
        {[1, 2, 3].map((i) => (
          <Card key={i} padding="md" className="bg-white">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar size="sm" fallback="U" />
                <span className="font-semibold text-neutral-900 text-sm">username_{i}</span>
                <span className="text-xs text-neutral-400">{i}h ago</span>
              </div>
              <p className="text-sm text-neutral-700">
                {i === 1 && "Just watched Blade Runner 2049 again. The cinematography is incredible!"}
                {i === 2 && "The score is amazing too. Hans Zimmer outdid himself."}
                {i === 3 && "Have you all seen Arrival? Similar vibes but more emotional."}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-neutral-200">
        <div className="flex items-center gap-2">
          <IconButton icon={<ImageIcon className="w-5 h-5" />} variant="ghost" />
          <IconButton icon={<Smile className="w-5 h-5" />} variant="ghost" />
          <Input placeholder="Type a message..." className="flex-1" />
          <IconButton icon={<Send className="w-5 h-5" />} variant="solid" />
        </div>
      </div>
    </div>
  );
}

// CHAT SCREENS

export function ChatListScreen() {
  return (
    <div className="h-full bg-white flex flex-col pb-24">
      <div className="px-6 py-6 border-b border-neutral-200">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Chats</h1>
        <p className="text-neutral-600">Your conversations</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Active Chats */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
            Active (3)
          </h3>

          <div className="space-y-2">
            <Card variant="interactive" padding="md" className="border-l-4 border-l-primary-600">
              <div className="flex items-center gap-3">
                <Avatar size="md" fallback="U" status="online" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-neutral-900">username_42</h4>
                    <span className="text-xs text-neutral-400">2h</span>
                  </div>
                  <p className="text-sm text-neutral-600 truncate">
                    That sounds really interesting! I'd love to...
                  </p>
                  <div className="flex gap-1 mt-2">
                    <Chip label="Sci-Fi" size="sm" />
                    <Chip label="Gaming" size="sm" />
                  </div>
                </div>
                <Badge count={2} variant="danger" />
              </div>
            </Card>

            {[1, 2].map((i) => (
              <Card key={i} variant="interactive" padding="md">
                <div className="flex items-center gap-3">
                  <Avatar size="md" fallback="N" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-neutral-900">night_reader</h4>
                      <span className="text-xs text-neutral-400">{i === 1 ? '5h' : 'Yesterday'}</span>
                    </div>
                    <p className="text-sm text-neutral-600 truncate">
                      Thanks for the recommendation!
                    </p>
                    <div className="flex gap-1 mt-2">
                      <Chip label="Books" size="sm" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Silence Mode */}
        <div className="px-6 py-4 border-t border-neutral-200">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3 flex items-center gap-2">
            Shared Silence (1)
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </h3>

          <Card variant="interactive" padding="md" className="bg-purple-50 border-purple-200">
            <div className="flex items-center gap-3">
              <Avatar size="md" fallback="S" status="online" />
              <div className="flex-1">
                <h4 className="font-semibold text-neutral-900 mb-1">study_buddy</h4>
                <p className="text-sm text-purple-700 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  In silence mode
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-500">Active now</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function ChatThreadScreen() {
  return (
    <div className="h-full bg-white flex flex-col">
      <Header
        leftAction={<IconButton icon={<ChevronLeft className="w-5 h-5" />} />}
        rightAction={<IconButton icon={<MoreVertical className="w-5 h-5" />} />}
      >
        <div className="flex items-center gap-3">
          <Avatar size="sm" fallback="U" />
          <div>
            <h2 className="font-semibold text-neutral-900">username_42</h2>
            <div className="flex gap-1">
              <Chip label="Sci-Fi" size="sm" />
              <Chip label="Gaming" size="sm" />
            </div>
          </div>
        </div>
      </Header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
        <Card padding="sm" className="bg-blue-50 border-blue-200 max-w-[85%]">
          <div className="text-sm">
            <div className="flex items-center gap-2 mb-1 text-blue-700">
              <span className="text-xl">🧊</span>
              <span className="font-semibold text-xs uppercase">Ice Breaker</span>
            </div>
            <p className="text-blue-900 font-medium">What got you into sci-fi?</p>
          </div>
        </Card>

        <div className="flex justify-end">
          <div className="bg-primary-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
            <p className="text-sm">I got into it through books first - read Ender's Game in middle school and was hooked!</p>
            <p className="text-xs text-primary-200 mt-1">2h ago</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-white border border-neutral-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
            <p className="text-sm text-neutral-900">Oh nice! For me it was watching Star Wars with my dad. Those movies opened up a whole new world.</p>
            <p className="text-xs text-neutral-500 mt-1">2h ago</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-primary-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
            <p className="text-sm">Star Wars is classic! Have you seen The Expanse? I'm watching it right now.</p>
            <p className="text-xs text-primary-200 mt-1">1h ago</p>
          </div>
        </div>
      </div>

      {/* Silence Mode Suggestion */}
      <div className="px-4 py-2 border-t border-neutral-200 bg-purple-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-purple-600" />
            <p className="text-sm text-purple-800">Want to study together in silence?</p>
          </div>
          <Button variant="secondary" size="sm">
            Start
          </Button>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-neutral-200">
        <div className="flex items-center gap-2">
          <IconButton icon={<Smile className="w-5 h-5" />} variant="ghost" />
          <Input placeholder="Type a message..." className="flex-1" />
          <IconButton icon={<Send className="w-5 h-5" />} variant="solid" />
        </div>
      </div>
    </div>
  );
}

export function SilenceModeScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col">
      <Header
        transparent
        leftAction={<IconButton icon={<ChevronLeft className="w-5 h-5 text-white" />} />}
        rightAction={<IconButton icon={<MoreVertical className="w-5 h-5 text-white" />} />}
      />

      <div className="flex-1 flex flex-col justify-center items-center p-6 text-white">
        <div className="w-40 h-40 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 animate-pulse">
          <Lock className="w-20 h-20" />
        </div>

        <h1 className="text-3xl font-bold mb-2">Shared Silence</h1>
        <p className="text-purple-100 mb-8 text-center max-w-sm">
          You're both here, studying in comfortable silence
        </p>

        <Card padding="md" className="mb-8 bg-white bg-opacity-10 backdrop-blur-md border-white border-opacity-20">
          <div className="flex items-center gap-4 text-white">
            <Clock className="w-8 h-8" />
            <div>
              <div className="text-3xl font-bold">45:32</div>
              <div className="text-sm text-purple-200">Time together</div>
            </div>
          </div>
        </Card>

        <div className="flex gap-4 mb-8">
          <button className="w-14 h-14 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl transition-all">
            👍
          </button>
          <button className="w-14 h-14 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl transition-all">
            ☕
          </button>
          <button className="w-14 h-14 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl transition-all">
            📚
          </button>
        </div>

        <Button variant="secondary" size="lg">
          End Session
        </Button>

        <p className="text-xs text-purple-200 mt-6 text-center max-w-sm">
          You can leave anytime. They'll see you disconnected but won't get a notification.
        </p>
      </div>
    </div>
  );
}
