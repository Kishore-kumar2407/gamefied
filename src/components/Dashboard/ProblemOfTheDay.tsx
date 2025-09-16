import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Star } from 'lucide-react';

export const ProblemOfTheDay: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Problem of the Day</h3>
        </div>
        <div className="flex items-center space-x-1 text-sm text-purple-400">
          <Clock className="w-4 h-4" />
          <span>{timeLeft}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-lg font-medium text-white mb-2">Two Sum Challenge</h4>
        <p className="text-gray-300 text-sm mb-3">
          Given an array of integers and a target sum, find two numbers that add up to the target.
        </p>
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Easy</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Array</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">+150 XP</span>
          </div>
        </div>
      </div>
      
      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
        Start Challenge
      </button>
    </div>
  );
};