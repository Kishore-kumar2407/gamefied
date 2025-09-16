import React from 'react';
import { Target, BookCheck, Zap, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Target,
    label: 'Problems Solved',
    value: '147',
    change: '+12 this week',
    color: 'text-blue-400'
  },
  {
    icon: BookCheck,
    label: 'Courses Completed',
    value: '8',
    change: '+2 this month',
    color: 'text-green-400'
  },
  {
    icon: Zap,
    label: 'Total XP',
    value: '2,450',
    change: '+340 this week',
    color: 'text-yellow-400'
  },
  {
    icon: Trophy,
    label: 'Global Rank',
    value: '#342',
    change: '+15 positions',
    color: 'text-purple-400'
  }
];

export const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6 hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${
                stat.color === 'text-blue-400' ? 'from-blue-500/20 to-blue-600/20' :
                stat.color === 'text-green-400' ? 'from-green-500/20 to-green-600/20' :
                stat.color === 'text-yellow-400' ? 'from-yellow-500/20 to-yellow-600/20' :
                'from-purple-500/20 to-purple-600/20'
              }`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
            <p className="text-sm text-green-400">{stat.change}</p>
          </div>
        );
      })}
    </div>
  );
};