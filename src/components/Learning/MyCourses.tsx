import React, { useState } from 'react';
import { BookOpen, Clock, Star, Filter, Search } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Python Fundamentals',
    description: 'Learn Python from basics to advanced concepts',
    progress: 85,
    duration: '12 hours',
    lessons: 24,
    difficulty: 'Beginner',
    category: 'Programming',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    enrolled: true
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    description: 'Master advanced JavaScript concepts and ES6+',
    progress: 45,
    duration: '15 hours',
    lessons: 30,
    difficulty: 'Advanced',
    category: 'Web Development',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    enrolled: true
  },
  {
    id: 3,
    title: 'Data Structures & Algorithms',
    description: 'Essential DSA concepts for coding interviews',
    progress: 20,
    duration: '25 hours',
    lessons: 45,
    difficulty: 'Intermediate',
    category: 'DSA',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    enrolled: true
  },
  {
    id: 4,
    title: 'Machine Learning Basics',
    description: 'Introduction to ML concepts and algorithms',
    progress: 0,
    duration: '20 hours',
    lessons: 35,
    difficulty: 'Intermediate',
    category: 'Data Science',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    enrolled: false
  },
  {
    id: 5,
    title: 'DevOps Essentials',
    description: 'Learn Docker, Kubernetes, and CI/CD',
    progress: 0,
    duration: '18 hours',
    lessons: 28,
    difficulty: 'Advanced',
    category: 'DevOps',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    enrolled: false
  }
];

const categories = ['All', 'Programming', 'Web Development', 'DSA', 'Data Science', 'DevOps'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export const MyCourses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showEnrolledOnly, setShowEnrolledOnly] = useState(false);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEnrollment = !showEnrolledOnly || course.enrolled;
    
    return matchesCategory && matchesDifficulty && matchesSearch && matchesEnrollment;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
          <p className="text-gray-400">Continue your learning journey</p>
        </div>
        <div className="flex items-center space-x-2">
          <label className="flex items-center space-x-2 text-gray-300">
            <input
              type="checkbox"
              checked={showEnrolledOnly}
              onChange={(e) => setShowEnrolledOnly(e.target.checked)}
              className="rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
            />
            <span>Show enrolled only</span>
          </label>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Category Filter */}
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

          {/* Difficulty Filter */}
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
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl overflow-hidden hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300">
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  course.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {course.difficulty}
                </span>
              </div>
              {course.enrolled && course.progress > 0 && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>
              
              <button className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                course.enrolled 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  : 'bg-white/10 dark:bg-black/20 text-gray-300 border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-black/30'
              }`}>
                {course.enrolled ? (course.progress > 0 ? 'Continue' : 'Start Course') : 'Enroll Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">No courses found matching your criteria</div>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedDifficulty('All');
              setSearchTerm('');
              setShowEnrolledOnly(false);
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