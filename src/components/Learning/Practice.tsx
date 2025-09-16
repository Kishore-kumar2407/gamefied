import React, { useState } from 'react';
import { Target, Filter, Search, Clock, Star, Code2 } from 'lucide-react';

const problems = [
  {
    id: 1,
    title: 'Two Sum',
    description: 'Given an array of integers, find two numbers that add up to a specific target.',
    difficulty: 'Easy',
    category: 'Array',
    language: 'Multiple',
    timeLimit: '30 min',
    points: 50,
    solved: true,
    attempts: 245,
    successRate: 78
  },
  {
    id: 2,
    title: 'Binary Tree Traversal',
    description: 'Implement different methods to traverse a binary tree.',
    difficulty: 'Medium',
    category: 'Tree',
    language: 'Multiple',
    timeLimit: '45 min',
    points: 100,
    solved: true,
    attempts: 189,
    successRate: 62
  },
  {
    id: 3,
    title: 'Dynamic Programming - Fibonacci',
    description: 'Solve the Fibonacci sequence using dynamic programming.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    language: 'Multiple',
    timeLimit: '40 min',
    points: 100,
    solved: false,
    attempts: 156,
    successRate: 45
  },
  {
    id: 4,
    title: 'Graph Shortest Path',
    description: 'Find the shortest path between two nodes in a weighted graph.',
    difficulty: 'Hard',
    category: 'Graph',
    language: 'Multiple',
    timeLimit: '60 min',
    points: 200,
    solved: false,
    attempts: 98,
    successRate: 34
  },
  {
    id: 5,
    title: 'String Manipulation',
    description: 'Implement various string manipulation algorithms.',
    difficulty: 'Easy',
    category: 'String',
    language: 'Multiple',
    timeLimit: '25 min',
    points: 50,
    solved: true,
    attempts: 312,
    successRate: 85
  },
  {
    id: 6,
    title: 'Sorting Algorithms',
    description: 'Implement and compare different sorting algorithms.',
    difficulty: 'Medium',
    category: 'Sorting',
    language: 'Multiple',
    timeLimit: '50 min',
    points: 100,
    solved: false,
    attempts: 203,
    successRate: 58
  }
];

const categories = ['All', 'Array', 'Tree', 'Graph', 'String', 'Sorting', 'Dynamic Programming'];
const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
const languages = ['All', 'Python', 'JavaScript', 'Java', 'C++', 'C'];

export const Practice: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSolvedOnly, setShowSolvedOnly] = useState(false);

  const filteredProblems = problems.filter(problem => {
    const matchesCategory = selectedCategory === 'All' || problem.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSolved = !showSolvedOnly || problem.solved;
    
    return matchesCategory && matchesDifficulty && matchesSearch && matchesSolved;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Practice Problems</h1>
          <p className="text-gray-400">Sharpen your coding skills with challenging problems</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <input
              type="checkbox"
              checked={showSolvedOnly}
              onChange={(e) => setShowSolvedOnly(e.target.checked)}
              className="rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
            />
            <span>Show solved only</span>
          </div>
          <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
            New
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Problems Solved</p>
              <p className="text-2xl font-bold text-white">147</p>
            </div>
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Target className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Success Rate</p>
              <p className="text-2xl font-bold text-white">78%</p>
            </div>
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Star className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Points</p>
              <p className="text-2xl font-bold text-white">2,450</p>
            </div>
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="lg:col-span-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
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

          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty} className="bg-gray-800">
                  {difficulty}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {languages.map(language => (
                <option key={language} value={language} className="bg-gray-800">
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {filteredProblems.map(problem => (
          <div key={problem.id} className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6 hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  {problem.solved && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    problem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-3">{problem.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Code2 className="w-4 h-4" />
                    <span>{problem.category}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{problem.timeLimit}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{problem.points} points</span>
                  </div>
                  <div>
                    <span>{problem.attempts} attempts</span>
                  </div>
                  <div>
                    <span>{problem.successRate}% success rate</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                  {problem.solved ? 'Solve Again' : 'Solve'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProblems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">No problems found matching your criteria</div>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedDifficulty('All');
              setSelectedLanguage('All');
              setSearchTerm('');
              setShowSolvedOnly(false);
            }}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};