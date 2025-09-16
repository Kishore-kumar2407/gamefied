import React, { useState } from 'react';
import { Trophy, Medal, Crown, Star, Zap, Filter } from 'lucide-react';

const leaderboardData = [
  { 
    rank: 1, 
    name: 'Sarah Chen', 
    points: 4850, 
    solved: 235, 
    streak: 45, 
    level: 18,
    avatar: 'SC',
    badge: 'Algorithm Master',
    country: 'US'
  },
  { 
    rank: 2, 
    name: 'Marcus Johnson', 
    points: 4620, 
    solved: 198, 
    streak: 32, 
    level: 17,
    avatar: 'MJ',
    badge: 'Speed Demon',
    country: 'CA'
  },
  { 
    rank: 3, 
    name: 'Elena Rodriguez', 
    points: 4350, 
    solved: 189, 
    streak: 28, 
    level: 16,
    avatar: 'ER',
    badge: 'Problem Solver',
    country: 'ES'
  },
  { 
    rank: 4, 
    name: 'Ahmed Hassan', 
    points: 4180, 
    solved: 175, 
    streak: 25, 
    level: 16,
    avatar: 'AH',
    badge: 'Code Ninja',
    country: 'EG'
  },
  { 
    rank: 5, 
    name: 'Lisa Wang', 
    points: 3950, 
    solved: 162, 
    streak: 22, 
    level: 15,
    avatar: 'LW',
    badge: 'Data Wizard',
    country: 'CN'
  },
  { 
    rank: 342, 
    name: 'Alex Johnson (You)', 
    points: 2450, 
    solved: 147, 
    streak: 7, 
    level: 15,
    avatar: 'AJ',
    badge: 'Code Ninja',
    country: 'US',
    isCurrentUser: true
  }
];

const timeRanges = ['This Week', 'This Month', 'All Time'];
const categories = ['Overall', 'Algorithms', 'Data Structures', 'Web Development'];

export const Leaderboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('All Time');
  const [selectedCategory, setSelectedCategory] = useState('Overall');

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="text-gray-400 font-bold text-lg">#{rank}</span>;
  };

  const topThree = leaderboardData.slice(0, 3);
  const otherUsers = leaderboardData.slice(3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
          <p className="text-gray-400">See how you rank against other coders</p>
        </div>
        
        {/* Filters */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {timeRanges.map(range => (
                <option key={range} value={range} className="bg-gray-800">
                  {range}
                </option>
              ))}
            </select>
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Top Performers</h2>
        <div className="flex justify-center items-end space-x-8">
          {/* 2nd Place */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {topThree[1]?.avatar}
              </div>
              <div className="absolute -top-2 -right-2">
                <Medal className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <div className="bg-gradient-to-t from-gray-600/20 to-gray-500/20 border border-gray-500/30 rounded-lg p-4 w-32">
              <p className="text-white font-semibold text-sm">{topThree[1]?.name.split(' ')[0]}</p>
              <p className="text-gray-300 text-xs">{topThree[1]?.points} pts</p>
              <div className="text-2xl font-bold text-gray-400 mt-2">2</div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {topThree[0]?.avatar}
              </div>
              <div className="absolute -top-3 -right-3">
                <Crown className="w-10 h-10 text-yellow-500" />
              </div>
            </div>
            <div className="bg-gradient-to-t from-yellow-600/20 to-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 w-36">
              <p className="text-white font-semibold">{topThree[0]?.name.split(' ')[0]}</p>
              <p className="text-gray-300 text-sm">{topThree[0]?.points} pts</p>
              <div className="text-3xl font-bold text-yellow-400 mt-2">1</div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {topThree[2]?.avatar}
              </div>
              <div className="absolute -top-2 -right-2">
                <Medal className="w-8 h-8 text-amber-600" />
              </div>
            </div>
            <div className="bg-gradient-to-t from-amber-700/20 to-amber-600/20 border border-amber-600/30 rounded-lg p-4 w-32">
              <p className="text-white font-semibold text-sm">{topThree[2]?.name.split(' ')[0]}</p>
              <p className="text-gray-300 text-xs">{topThree[2]?.points} pts</p>
              <div className="text-2xl font-bold text-amber-600 mt-2">3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/20 dark:border-gray-800/50">
          <h3 className="text-xl font-semibold text-white">Full Rankings</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 dark:bg-black/10">
              <tr>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Rank</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">User</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Points</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Solved</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Streak</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Level</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-white/10 dark:border-gray-800/30 hover:bg-white/5 dark:hover:bg-black/10 transition-all ${
                    user.isCurrentUser ? 'bg-purple-500/10 border-purple-500/30' : ''
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      {getRankIcon(user.rank)}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                        user.isCurrentUser 
                          ? 'bg-gradient-to-r from-purple-500 to-blue-600' 
                          : 'bg-gradient-to-r from-gray-600 to-gray-700'
                      }`}>
                        {user.avatar}
                      </div>
                      <div>
                        <p className={`font-medium ${user.isCurrentUser ? 'text-purple-400' : 'text-white'}`}>
                          {user.name}
                        </p>
                        <p className="text-gray-400 text-sm">{user.badge}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white font-medium">{user.points.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-300">{user.solved}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-300">{user.streak}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-purple-400 font-medium">{user.level}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Your Stats */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Your Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">342</div>
            <div className="text-gray-400 text-sm">Current Rank</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">+15</div>
            <div className="text-gray-400 text-sm">This Week</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">2,450</div>
            <div className="text-gray-400 text-sm">Total Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">147</div>
            <div className="text-gray-400 text-sm">Problems Solved</div>
          </div>
        </div>
      </div>
    </div>
  );
};