import React from 'react';
import { Link } from 'react-router-dom';

// Sample course data - In a real app, this would come from an API or context
const myCourses = [
  {
    id: 1,
    title: 'UI/UX Design',
    progress: 30,
    lastAccessed: '1 week ago',
    image: '/uiux-interface.png',
    modulesCompleted: 3,
    totalModules: 10,
    category: 'Design',
    duration: '10 weeks',
    level: 'Intermediate',
    instructor: 'Dr. Kareem Unisa (PhD)'
  },
  {
    id: 2,
    title: 'Full Stack Development',
    progress: 15,
    lastAccessed: '3 days ago',
    image: '/fullstack-interface.png',
    modulesCompleted: 2,
    totalModules: 12,
    category: 'Development',
    duration: '12 weeks',
    level: 'Advanced',
    instructor: 'Dr. Kareem Unisa (PhD)'
  },
];

const MyCourse = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f0] font-sans">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">Back</span>
              </Link>
            </div>
            
            <h1 className="text-xl font-bold text-gray-800">My Learning</h1>
            
            <div className="w-8"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>
      {/* Main Content - Takes remaining space and adds padding for fixed header */}
      <div className="flex-grow pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">My Courses</h2>
            <div className="mt-2 md:mt-0">
              <select className="block w-full md:w-48 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Courses</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Not Started</option>
              </select>
            </div>
          </div>
        
        {myCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {myCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Course Image */}
                <div className="relative pt-[56.25%] overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-course.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {course.category}
                      </span>
                      <span className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full shadow-sm">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{course.title}</h3>
                      <span className="ml-2 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full whitespace-nowrap">
                        {course.progress}%
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-1">by {course.instructor}</p>
                    
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{course.modulesCompleted}/{course.totalModules} modules</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center text-xs text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                      <span className="mx-2">•</span>
                      <span>Last accessed: {course.lastAccessed}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex space-x-3">
                      <Link 
                        to={`/courses/${course.id}`}
                        className="flex-1 text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                      >
                        {course.progress > 0 ? 'Continue' : 'Start Learning'}
                      </Link>
                      <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <div className="max-w-md mx-auto">
              <svg 
                className="mx-auto h-16 w-16 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No courses yet</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by browsing our available courses.</p>
              <div className="mt-6">
                <Link
                  to="/ourcourses"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
      
      {/* Footer - Pushed to the bottom */}
      <div className="bg-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Nano Robotics Embed Technologies. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
