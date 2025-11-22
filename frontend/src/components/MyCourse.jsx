import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaClock, FaPlay, FaRegBookmark, FaSearch, FaFilter, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../animations/1760540193944.json';

// Sample course data - In a real app, this would come from an API or context
const myCourses = [
  {
    id: 1,
    title: 'UI/UX Design Masterclass',
    progress: 75,
    lastAccessed: '1 week ago',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    modulesCompleted: 6,
    totalModules: 8,
    category: 'Design',
    duration: '10 weeks',
    level: 'Intermediate',
    instructor: 'Dr. Kareem Unisa (PhD)',
    rating: 4.8,
    students: 1245,
    description: 'Master the principles of UI/UX design and create stunning user experiences.'
  },
  {
    id: 2,
    title: 'Full Stack Development Bootcamp',
    progress: 30,
    lastAccessed: '3 days ago',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    modulesCompleted: 3,
    totalModules: 10,
    category: 'Development',
    duration: '12 weeks',
    level: 'Advanced',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.9,
    students: 2345,
    description: 'Become a full-stack developer with our comprehensive bootcamp.'
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    progress: 90,
    lastAccessed: '2 days ago',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    modulesCompleted: 9,
    totalModules: 10,
    category: 'Data Science',
    duration: '8 weeks',
    level: 'Beginner',
    instructor: 'Prof. Michael Chen',
    rating: 4.7,
    students: 1890,
    description: 'Learn the fundamentals of data science and machine learning.'
  },
  {
    id: 4,
    title: 'Digital Marketing Mastery',
    progress: 10,
    lastAccessed: 'Just now',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1704&q=80',
    modulesCompleted: 1,
    totalModules: 12,
    category: 'Marketing',
    duration: '6 weeks',
    level: 'All Levels',
    instructor: 'Alex Rivera',
    rating: 4.6,
    students: 3200,
    description: 'Master digital marketing strategies for business growth.'
  },
];

const MyCourse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourseExpand = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const filteredCourses = myCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'in-progress') return matchesSearch && course.progress > 0 && course.progress < 100;
    if (activeFilter === 'completed') return matchesSearch && course.progress === 100;
    if (activeFilter === 'not-started') return matchesSearch && course.progress === 0;
    
    return matchesSearch && course.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const categories = [...new Set(myCourses.map(course => course.category))];
  const totalInProgress = myCourses.filter(c => c.progress > 0 && c.progress < 100).length;
  const totalCompleted = myCourses.filter(c => c.progress === 100).length;
  const totalNotStarted = myCourses.filter(c => c.progress === 0).length;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900">
      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 opacity-20 overflow-hidden">
        <Lottie 
          animationData={animationData} 
          loop={true}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <Link to="/" className="flex items-center h-12 sm:h-20">
                <img 
                  src="/nret-logo.png" 
                  alt="NRET Logo" 
                  className="h-full w-auto object-contain"
                />
              </Link>
            </div>
            
            <div className="flex items-center space-x-1">
              <Link 
                to="/ourcourses" 
                className="hidden xs:block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                Browse Courses
              </Link>
              <Link
                to="/login"
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Hero Section */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
              My <span className="text-blue-600">Learning</span> Journey
            </h1>
            <p className="text-sm xs:text-base text-gray-600 max-w-3xl mx-auto">
              Continue your learning adventure. Pick up where you left off or discover new skills to master.
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 mb-6 sm:mb-8">
            <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-colors border border-gray-50">
              <div className="flex items-center">
                <div className="p-2 xs:p-2.5 rounded-lg bg-blue-50 text-blue-600 mr-2 xs:mr-3">
                  <FaBookOpen className="w-4 h-4 xs:w-5 xs:h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-500 truncate">Total Courses</p>
                  <h3 className="text-lg xs:text-xl font-bold text-gray-800">{myCourses.length}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-colors border border-gray-50">
              <div className="flex items-center">
                <div className="p-2 xs:p-2.5 rounded-lg bg-green-50 text-green-600 mr-2 xs:mr-3">
                  <FaPlay className="w-4 h-4 xs:w-5 xs:h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-500 truncate">In Progress</p>
                  <h3 className="text-lg xs:text-xl font-bold text-gray-800">{totalInProgress}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-colors border border-gray-50 hidden sm:block">
              <div className="flex items-center">
                <div className="p-2 xs:p-2.5 rounded-lg bg-purple-50 text-purple-600 mr-2 xs:mr-3">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-500 truncate">Completed</p>
                  <h3 className="text-lg xs:text-xl font-bold text-gray-800">{totalCompleted}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-colors border border-gray-50 hidden sm:block">
              <div className="flex items-center">
                <div className="p-2 xs:p-2.5 rounded-lg bg-yellow-50 text-yellow-600 mr-2 xs:mr-3">
                  <FaClock className="w-4 h-4 xs:w-5 xs:h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-500 truncate">Not Started</p>
                  <h3 className="text-lg xs:text-xl font-bold text-gray-800">{totalNotStarted}</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
              <div className="relative pb-2 md:pb-12 flex-1 max-w-2xl">
                <div className="absolute top-0 left-0 pl-3 h-full md:h-[calc(100%-3rem)] flex items-center pointer-events-none">
                  <FaSearch className="h-3.5 w-3.5 xs:h-4 xs:w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-9 pr-3 py-2 xs:py-2.5 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-400"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="relative flex-1 md:flex-none">
                <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-12 -mx-1 px-1 custom-scrollbar">
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setActiveFilter('all')}
                      className={`px-3 py-1.5 text-xs xs:text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                        activeFilter === 'all' 
                          ? 'bg-blue-600 text-white shadow-sm' 
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      All
                    </button>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setActiveFilter('in-progress')}
                      className={`px-3 py-1.5 text-xs xs:text-sm font-medium rounded-full whitespace-nowrap transition-colors flex items-center ${
                        activeFilter === 'in-progress' 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                      <span>In Progress</span>
                      {totalInProgress > 0 && (
                        <span className="ml-1.5 bg-white/80 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded-full">
                          {totalInProgress}
                        </span>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex-shrink-0 hidden xs:block">
                    <button
                      onClick={() => setActiveFilter('completed')}
                      className={`px-3 py-1.5 text-xs xs:text-sm font-medium rounded-full whitespace-nowrap transition-colors flex items-center ${
                        activeFilter === 'completed' 
                          ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1.5"></span>
                      <span>Completed</span>
                      {totalCompleted > 0 && (
                        <span className="ml-1.5 bg-white/80 text-purple-800 text-xs font-medium px-1.5 py-0.5 rounded-full">
                          {totalCompleted}
                        </span>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button 
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-white text-gray-700 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-xs xs:text-sm whitespace-nowrap"
                      onClick={() => setActiveFilter(activeFilter.startsWith('category-') ? 'all' : 'category-' + categories[0])}
                    >
                      <FaFilter className="w-3 h-3 text-gray-500" />
                      <span>Categories</span>
                      <FaChevronDown className={`w-2.5 h-2.5 transition-transform ${activeFilter.startsWith('category-') ? 'transform rotate-180' : ''}`} />
                    </button>
                  
                  {activeFilter.startsWith('category-') && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-10">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveFilter(`category-${category}`)}
                          className={`w-full text-left px-4 py-2 text-xs xs:text-sm ${
                            activeFilter === `category-${category}`
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className={`bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 ${
                  expandedCourse === course.id ? 'ring-1 sm:ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Course Header */}
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => toggleCourseExpand(course.id)}
                >
                  <div className="relative pt-[56.25%] overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x225/f5f5f5/cccccc?text=Course+Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 text-blue-600 transform transition-transform group-hover:scale-110">
                        {expandedCourse === course.id ? (
                          <FaChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        ) : (
                          <FaChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        )}
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gray-200">
                      <div 
                        className={`h-full ${
                          course.progress < 30 ? 'bg-red-500' : 
                          course.progress < 70 ? 'bg-yellow-500' : 'bg-green-500'
                        } transition-all duration-1000 ease-out`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between items-start">
                      <span className="px-1.5 sm:px-2 py-0.5 bg-white/90 text-[10px] xs:text-xs font-medium text-gray-800 rounded-full shadow-sm truncate max-w-[45%]">
                        {course.category}
                      </span>
                      <span className="px-1.5 sm:px-2 py-0.5 bg-blue-600 text-white text-[10px] xs:text-xs font-medium rounded-full whitespace-nowrap">
                        {course.progress}%
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm xs:text-base font-semibold text-gray-900 leading-tight line-clamp-2 pr-2">
                      {course.title}
                    </h3>
                    <button className="flex-shrink-0 text-gray-300 hover:text-blue-600 transition-colors ml-1">
                      <FaRegBookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center text-[11px] xs:text-xs text-gray-400 mb-3">
                    <div className="flex items-center mr-2 xs:mr-3">
                      <svg className="w-3 h-3 mr-0.5 text-yellow-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium text-gray-700">{course.rating}</span>
                      <span className="ml-0.5">({course.students > 1000 ? `${(course.students/1000).toFixed(1)}k` : course.students})</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 flex-shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  {/* Progress Details */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedCourse === course.id ? 'max-h-32 sm:max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex justify-between text-[11px] xs:text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span className="font-medium">{course.modulesCompleted}/{course.totalModules} modules</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 sm:h-2 mb-2">
                        <div 
                          className={`h-full rounded-full ${
                            course.progress < 30 ? 'bg-red-500' : 
                            course.progress < 70 ? 'bg-yellow-500' : 'bg-green-500'
                          } transition-all duration-1000 ease-out`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="text-[11px] xs:text-xs text-gray-500 space-y-1">
                        <div className="flex justify-between">
                          <span>Last accessed:</span>
                          <span className="font-medium text-gray-700">{course.lastAccessed}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Instructor:</span>
                          <span className="font-medium text-gray-700 truncate ml-2 max-w-[60%] text-right">{course.instructor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-3 pt-2 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <Link 
                        to={`/courses/${course.id}`}
                        className={`flex-1 text-center px-2 sm:px-3 py-1.5 text-xs xs:text-sm font-medium rounded-lg transition-colors ${
                          course.progress === 0 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : course.progress === 100
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                      >
                        {course.progress === 0 
                          ? 'Start' 
                          : course.progress === 100 
                            ? 'Certificate' 
                            : 'Continue'}
                      </Link>
                      <button 
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-blue-600 transition-colors flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle menu click
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-10 md:py-12 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-xs sm:max-w-md mx-auto px-4 sm:px-6">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-blue-50 text-blue-500 mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                {searchQuery ? 'No matching courses' : 'No courses found'}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
                {searchQuery 
                  ? `No courses match "${searchQuery}"`
                  : activeFilter === 'in-progress'
                    ? "You don't have any courses in progress yet."
                    : activeFilter === 'completed'
                      ? "You haven't completed any courses yet."
                      : activeFilter === 'not-started'
                        ? "All your courses have been started."
                        : activeFilter.startsWith('category-')
                          ? `No ${activeFilter.replace('category-', '')} courses.`
                          : "You haven't enrolled in any courses yet."}
              </p>
              <div className="flex flex-col xs:flex-row justify-center gap-2 sm:gap-3">
                <Link
                  to="/ourcourses"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Browse All Courses
                </Link>
                {(searchQuery || activeFilter !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveFilter('all');
                    }}
                    className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </main>
      
     {/* Footer */}
     <footer className="mt-auto bg-white/90 backdrop-blur-md border-t border-gray-100 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-0">
              <div className="h-12 sm:h-14 md:h-14 w-auto flex items-center">
                <img 
                  src="/nret-logo.png" 
                  alt="NRET Logo"
                  className="h-full w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">Lifelong Learning Platform</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-center">
              <Link to="/about" className="text-xs xs:text-sm text-gray-500 hover:text-blue-600 transition-colors px-1">About</Link>
              <Link to="/contact" className="text-xs xs:text-sm text-gray-500 hover:text-blue-600 transition-colors px-1">Contact</Link>
              <Link to="/privacy" className="text-xs xs:text-sm text-gray-500 hover:text-blue-600 transition-colors px-1">Privacy</Link>
              <Link to="/terms" className="text-xs xs:text-sm text-gray-500 hover:text-blue-600 transition-colors px-1">Terms</Link>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 text-center sm:text-left">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Nano Robotics Embed Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyCourse;
