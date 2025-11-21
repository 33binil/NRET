import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Project Types
const projectTypes = [
  'Embedded Projects',
  'IoT Projects',
  'AI Projects',
  'Web Application',
  'BCA Projects',
  'MCA Projects',
  'UI UX Designs',
  'Big Data Projects'
];

// Projects Data
const projects = [
  {
    id: 1,
    type: 'Embedded Projects',
    title: 'Real-Time Gesture-Based Robotic Arm Control with Accelerometer and Flex',
    price: '₹17,000.00',
    originalPrice: '₹13,600.00',
    image: '/projects/project1.png'
  },
  {
    id: 2,
    type: 'Embedded Projects',
    title: 'An Intelligent Vending Machine Style Automated Bartender for Personalized Cocktails',
    price: '₹38,000.00',
    originalPrice: '₹28,000.00',
    image: '/projects/projectx.png'
  },
  {
    id: 3,
    type: 'Embedded Projects',
    title: 'Smart Home Automation System with Voice Control',
    price: '₹25,000.00',
    originalPrice: '₹19,999.00',
    image: '/projects/projectx.png'
  },
  {
    id: 4,
    type: 'AI Projects',
    title: 'Facial Recognition Attendance System',
    price: '₹32,000.00',
    originalPrice: '₹25,600.00',
    image: '/projects/projectx.png'
  },
  {
    id: 5,
    type: 'Web Application',
    title: 'E-learning Platform with Live Classes',
    price: '₹45,000.00',
    originalPrice: '₹36,000.00',
    image: '/projects/projectx.png'
  },
  {
    id: 6,
    type: 'IoT Projects',
    title: 'Smart Agriculture Monitoring System',
    price: '₹28,500.00',
    originalPrice: '₹22,800.00',
    image: '/projects/projectx.png'
  }
];

const Projects = () => {
  const [selectedType, setSelectedType] = useState('All Projects');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (type) => {
    setSelectedType(type);
    setShowMobileMenu(false); // Close mobile menu after selection
    if (type === 'All Projects') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.type === type));
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans">
      {/* Top Bar */}
      <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <div className="flex items-center">
              <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">Back</span>
              </Link>
            </div>
            
            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="/nret-logo.png" 
                alt="NRET Logo" 
                className="h-12 sm:h-14 md:h-16 transition-all duration-300"
              />
            </div>
            
            {/* Login Button */}
            <div className="flex items-center">
              <Link 
                to="/login" 
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition whitespace-nowrap"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/projecthead1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-[#004599] opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto font-['AFACAD']">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            Innovate. Create. Build the Future.
          </h1>
          <p className="text-white text-xs xs:text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            Work on hands-on, real-world projects designed to strengthen your practical skills and portfolio. 
            <span className="hidden xs:inline">
              Each project challenges you to apply what you learn — from building dynamic web apps and AI models 
              to developing IoT devices, cloud systems, and secure networks.
            </span>
            <span className="xs:hidden">Build skills through practical, industry-relevant projects.</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 md:px-5 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Project Types Sidebar - Hidden on mobile */}
          <div className="hidden lg:block w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4">Project Types</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <button
                    onClick={() => filterProjects('All Projects')}
                    className={`w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-md transition-colors ${selectedType === 'All Projects' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    All Projects
                  </button>
                </li>
                {projectTypes.map((type) => (
                  <li key={type}>
                    <button
                      onClick={() => filterProjects(type)}
                      className={`w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-md transition-colors ${selectedType === type ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex-1 w-full">
            {/* Mobile Type Selector - Only visible on small/medium screens */}
            <div className="lg:hidden mb-4 sm:mb-6 relative">
              <button
                onClick={toggleMobileMenu}
                className="w-full flex justify-between items-center px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-expanded={showMobileMenu}
                aria-haspopup="listbox"
              >
                <span className="text-sm sm:text-base text-gray-700 truncate pr-2">{selectedType}</span>
                <svg 
                  className={`h-5 w-5 text-gray-500 transform transition-transform flex-shrink-0 ${showMobileMenu ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Mobile Dropdown Menu */}
              {showMobileMenu && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-y-auto">
                  <div className="py-1">
                    <button
                      onClick={() => filterProjects('All Projects')}
                      className={`block w-full text-left px-4 py-2.5 text-sm sm:text-base ${selectedType === 'All Projects' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      All Projects
                    </button>
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => filterProjects(type)}
                        className={`block w-full text-left px-4 py-2.5 text-sm sm:text-base ${selectedType === type ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Title */}
            <h2 className="hidden lg:block text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
              {selectedType} {selectedType !== 'All Projects' && 'Projects'}
            </h2>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="bg-white rounded-lg shadow-sm sm:shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100"
                  >
                    <div className="h-40 sm:h-48 md:h-52 lg:h-48 xl:h-52 bg-gray-100 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/projects/placeholder.jpg';
                        }}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <span className="text-xs sm:text-sm font-medium text-blue-600">{project.type}</span>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base mt-1 line-clamp-2 h-10 sm:h-12 flex items-center">
                        {project.title}
                      </h3>
                      <div className="mt-2 sm:mt-3">
                        <span className="text-base sm:text-lg font-bold text-gray-900">{project.price}</span>
                        <span className="ml-2 text-xs sm:text-sm text-gray-500 line-through">{project.originalPrice}</span>
                      </div>
                      <button 
                        className="mt-3 sm:mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label={`View details for ${project.title}`}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No projects found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
