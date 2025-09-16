import React from 'react';
import { BookOpen, Play } from 'lucide-react';

const courses = [
  {
    title: 'Advanced JavaScript',
    lessons: 12,
    progress: 75,
    level: 'Advanced'
  },
  {
    title: 'React Fundamentals',
    lessons: 8,
    progress: 30,
    level: 'Intermediate'
  }
];

export const ContinueLearning: React.FC = () => {
  return (
    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <BookOpen className="w-5 h-5 text-gray-400" />
        <h3 className="text-xl font-semibold text-white">Continue Learning</h3>
      </div>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="p-4 bg-white/5 dark:bg-black/10 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-medium">{course.title}</h4>
              <span className={`px-2 py-1 text-xs rounded-full ${
                course.level === 'Advanced' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {course.level}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-3">{course.lessons} lessons</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">{course.progress}% complete</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
              <Play className="w-4 h-4" />
              <span>Continue</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};