import React from 'react';
import { Zap } from 'lucide-react';

export const WelcomeCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <h2 className="text-3xl font-bold text-white">Welcome back, Alex!</h2>
            <span className="text-2xl">👋</span>
          </div>
          <p className="text-gray-300 mb-4">You're on a 7-day streak! Keep the momentum going.</p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white">Level 15 - Code Ninja</span>
            </div>
            <div className="text-purple-400">📈 83% this week</div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
            alt="Coding illustration"
            className="w-32 h-32 rounded-xl object-cover"
          />
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl"></div>
    </div>
  );
};