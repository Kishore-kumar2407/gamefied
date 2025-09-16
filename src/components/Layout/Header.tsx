import React, { useState } from 'react';
import { Search, Bell, User, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [notifications] = useState(3);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/20 backdrop-blur-lg border-b border-white/20 dark:border-gray-800/50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            CodeQuest
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses, problems, tutorials..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-all"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-purple-400" />
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-all">
            <Bell className="w-5 h-5 text-gray-300" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          {/* Profile */}
          <button className="flex items-center space-x-2 p-2 rounded-lg bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-all">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-medium hidden md:block">Alex</span>
          </button>
        </div>
      </div>
    </header>
  );
};