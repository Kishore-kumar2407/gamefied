import React from 'react';
import { Clock } from 'lucide-react';

const activities = [
  {
    title: 'Completed Python Basics',
    time: '2 hours ago',
    xp: '+50 XP',
    type: 'course'
  },
  {
    title: 'Solved Array Problem',
    time: '4 hours ago',
    xp: '+25 XP',
    type: 'problem'
  },
  {
    title: 'Daily Challenge Completed',
    time: '1 day ago',
    xp: '+100 XP',
    type: 'challenge'
  },
  {
    title: 'Earned "Problem Solver" Badge',
    time: '2 days ago',
    xp: '+75 XP',
    type: 'badge'
  }
];

export const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-5 h-5 text-gray-400" />
        <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white/5 dark:bg-black/10 rounded-lg hover:bg-white/10 dark:hover:bg-black/20 transition-all">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                activity.type === 'course' ? 'bg-blue-500' :
                activity.type === 'problem' ? 'bg-green-500' :
                activity.type === 'challenge' ? 'bg-purple-500' :
                'bg-yellow-500'
              }`}></div>
              <div>
                <p className="text-white font-medium">{activity.title}</p>
                <p className="text-gray-400 text-sm">{activity.time}</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 text-sm font-medium rounded-full">
              {activity.xp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};