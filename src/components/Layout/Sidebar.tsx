import React from 'react';
import { 
  Home, 
  BookOpen, 
  Target, 
  Code, 
  User, 
  Trophy, 
  Award, 
  Settings,
  Zap
} from 'lucide-react';
import type { ActiveSection } from '../../App';

interface SidebarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

const sidebarItems = [
  {
    section: 'dashboard' as ActiveSection,
    icon: Home,
    label: 'Dashboard',
    category: 'LEARNING'
  },
  {
    section: 'courses' as ActiveSection,
    icon: BookOpen,
    label: 'My Courses',
    category: 'LEARNING'
  },
  {
    section: 'practice' as ActiveSection,
    icon: Target,
    label: 'Practice',
    category: 'LEARNING',
    badge: 'New'
  },
  {
    section: 'playground' as ActiveSection,
    icon: Code,
    label: 'Playground',
    category: 'LEARNING'
  },
  {
    section: 'profile' as ActiveSection,
    icon: User,
    label: 'Profile',
    category: 'PROGRESS'
  },
  {
    section: 'leaderboard' as ActiveSection,
    icon: Trophy,
    label: 'Leaderboard',
    category: 'PROGRESS'
  },
  {
    section: 'certificates' as ActiveSection,
    icon: Award,
    label: 'Certificates',
    category: 'PROGRESS',
    count: 3
  },
  {
    section: 'settings' as ActiveSection,
    icon: Settings,
    label: 'Settings',
    category: 'OTHER'
  }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const groupedItems = sidebarItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof sidebarItems>);

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white/5 dark:bg-black/10 backdrop-blur-lg border-r border-white/20 dark:border-gray-800/50 overflow-y-auto">
      <div className="p-4">
        {/* User Level Card */}
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Level 15</span>
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-sm text-gray-300 mb-3">Code Ninja</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">XP Progress</span>
              <span className="text-purple-400">2450 / 3000</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: '81.7%' }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between mt-3 text-sm">
            <div className="text-center">
              <div className="text-yellow-400 font-semibold">🔥 7</div>
              <div className="text-gray-400">Streak</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 font-semibold">⭐ 145</div>
              <div className="text-gray-400">Points</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 font-semibold">🏆 23</div>
              <div className="text-gray-400">Badges</div>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              {category}
            </h3>
            <nav className="space-y-1">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.section;
                
                return (
                  <button
                    key={item.section}
                    onClick={() => onSectionChange(item.section)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white'
                        : 'text-gray-300 hover:bg-white/5 dark:hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : ''}`} />
                    <span className="flex-1 font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
};