import React from 'react';
import { Award, Trophy, Zap, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Problem Solver',
    description: 'Solved 100 problems',
    earned: true,
    rarity: 'gold'
  },
  {
    icon: Zap,
    title: 'Speed Demon',
    description: 'Completed 10 problems in under 5 minutes',
    earned: true,
    rarity: 'silver'
  },
  {
    icon: Star,
    title: 'Perfect Week',
    description: 'Maintained 7-day streak',
    earned: true,
    rarity: 'gold'
  },
  {
    icon: Award,
    title: 'Language Master',
    description: 'Master 5 programming languages',
    earned: false,
    rarity: 'platinum',
    progress: 60
  }
];

export const AchievementShowcase: React.FC = () => {
  return (
    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Award className="w-5 h-5 text-yellow-400" />
        <h3 className="text-xl font-semibold text-white">Recent Achievements</h3>
      </div>
      <div className="space-y-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div 
              key={index} 
              className={`p-4 rounded-lg border transition-all ${
                achievement.earned 
                  ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30' 
                  : 'bg-white/5 dark:bg-black/10 border-gray-700/50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  achievement.rarity === 'platinum' ? 'bg-gradient-to-r from-slate-400/20 to-slate-500/20' :
                  achievement.rarity === 'gold' ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20' :
                  'bg-gradient-to-r from-gray-400/20 to-gray-500/20'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    achievement.rarity === 'platinum' ? 'text-slate-400' :
                    achievement.rarity === 'gold' ? 'text-yellow-400' :
                    'text-gray-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium mb-1 ${
                    achievement.earned ? 'text-white' : 'text-gray-400'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">
                    {achievement.description}
                  </p>
                  {!achievement.earned && achievement.progress && (
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-500"
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                {achievement.earned && (
                  <div className="text-green-400 text-sm">✓</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};