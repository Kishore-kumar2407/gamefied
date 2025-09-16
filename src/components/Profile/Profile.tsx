import React, { useState } from 'react';
import { User, Edit2, Calendar, Trophy, Star, Target, Award } from 'lucide-react';

const achievements = [
  { title: 'First Steps', description: 'Completed first problem', date: '2024-01-15', type: 'milestone' },
  { title: 'Speed Demon', description: 'Solved 10 problems under 5 minutes', date: '2024-02-20', type: 'performance' },
  { title: 'Streak Master', description: '30-day coding streak', date: '2024-03-01', type: 'consistency' },
  { title: 'Language Explorer', description: 'Coded in 5 different languages', date: '2024-03-15', type: 'diversity' }
];

const skills = [
  { name: 'Python', level: 85, problems: 45 },
  { name: 'JavaScript', level: 90, problems: 52 },
  { name: 'Java', level: 70, problems: 28 },
  { name: 'C++', level: 65, problems: 22 },
  { name: 'SQL', level: 75, problems: 18 }
];

const activityData = [
  { month: 'Jan', problems: 12 },
  { month: 'Feb', problems: 19 },
  { month: 'Mar', problems: 25 },
  { month: 'Apr', problems: 32 },
  { month: 'May', problems: 28 },
  { month: 'Jun', problems: 35 }
];

export const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    bio: 'Full-stack developer passionate about algorithms and clean code',
    location: 'San Francisco, CA',
    joinDate: 'January 2024',
    website: 'https://alexjohnson.dev'
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-gray-400">Track your progress and achievements</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 text-white rounded-lg transition-all border border-white/20 dark:border-gray-700"
        >
          <Edit2 className="w-4 h-4" />
          <span>{isEditing ? 'Save Profile' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
            {/* Avatar and Basic Info */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="text-xl font-bold text-white bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none text-center mb-2"
                />
              ) : (
                <h2 className="text-xl font-bold text-white mb-2">{profile.name}</h2>
              )}
              <p className="text-purple-400 mb-2">Level 15 - Code Ninja</p>
              <div className="flex items-center justify-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Joined {profile.joinDate}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Problems Solved</span>
                <span className="text-white font-semibold">147</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Current Streak</span>
                <span className="text-white font-semibold">🔥 7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total XP</span>
                <span className="text-white font-semibold">2,450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Global Rank</span>
                <span className="text-white font-semibold">#342</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-white font-semibold mb-2">About</h3>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  className="w-full p-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg text-white text-sm resize-none"
                  rows={3}
                />
              ) : (
                <p className="text-gray-400 text-sm">{profile.bio}</p>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills */}
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Target className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Skills & Languages</h3>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.problems} problems</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-1">
                    {skill.level}% mastery
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Graph */}
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">Activity Overview</h3>
            </div>
            <div className="flex items-end justify-between h-32 space-x-2">
              {activityData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-purple-600 to-blue-500 rounded-t"
                    style={{ height: `${(data.problems / 40) * 100}%`, minHeight: '8px' }}
                  ></div>
                  <span className="text-xs text-gray-400 mt-2">{data.month}</span>
                  <span className="text-xs text-white">{data.problems}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">Recent Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 dark:bg-black/10 rounded-lg">
                  <div className={`p-3 rounded-lg ${
                    achievement.type === 'milestone' ? 'bg-green-500/20' :
                    achievement.type === 'performance' ? 'bg-red-500/20' :
                    achievement.type === 'consistency' ? 'bg-blue-500/20' :
                    'bg-purple-500/20'
                  }`}>
                    <Trophy className={`w-5 h-5 ${
                      achievement.type === 'milestone' ? 'text-green-400' :
                      achievement.type === 'performance' ? 'text-red-400' :
                      achievement.type === 'consistency' ? 'text-blue-400' :
                      'text-purple-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {achievement.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};