import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaLaptopCode, FaGraduationCap, FaHome, FaInfoCircle, FaEnvelope, FaBook, FaCog, FaUser, FaUserPlus, FaChalkboardTeacher } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const desktopServicesRef = useRef(null);
  const mobileServicesRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(event.target)) {
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center h-full py-2">
              <img 
                src="/nret-logo.png" 
                alt="NRET Logo" 
                className="h-14 sm:h-12 md:h-16 lg:h-20 w-auto transition-all duration-300"
                style={{ maxHeight: '90px' }}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6 2xl:space-x-20">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 flex items-center">
              <FaHome className="mr-1.5 text-blue-600" />
              <span>Home</span>
            </Link>
            
            <div className="relative" ref={desktopServicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 flex items-center"
              >
                <FaChalkboardTeacher className="mr-2 text-blue-600" />
                Services
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      to="/projects"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      <FaProjectDiagram className="mr-2 text-blue-600" />
                      <span>Projects</span>
                    </Link>
                    <Link
                      to="/internships"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      <FaLaptopCode className="mr-2 text-blue-600" />
                      <span>Internships</span>
                    </Link>
                    <Link
                      to="/ourcourses"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      <FaGraduationCap className="mr-2 text-blue-600" />
                      <span>Courses</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle className="mr-1.5 text-blue-600" />
              <span>About Us</span>
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="mr-1.5 text-blue-600" />
              <span>Contact</span>
            </Link>
            <Link 
              to="/my-courses"
              className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.478 5.754 19 7.5 19s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.478 18.247 19 16.5 19c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>My Learning</span>
            </Link>
            <Link
                to="/settings"
                className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 flex items-center"
                onClick={() => setIsOpen(false)}
            >
              <FaCog className="mr-1.5 text-blue-600" />
              <span>Settings</span>
            </Link>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 ml-2">
              <Link 
                to="/login" 
                className="bg-transparent text-blue-600 hover:bg-blue-50 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium border border-blue-600 transition-colors duration-200 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="mr-1.5" />
                <span>Login</span>
              </Link>
              <Link 
                to="/register"
                className="bg-blue-600 text-white hover:bg-blue-700 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors duration-200 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FaUserPlus className="mr-1.5" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>

          {/* Tablet Navigation (shows menu items without hamburger) */}
          <div className="hidden md:flex lg:hidden items-center space-x-5 ml-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-2.5 py-2 text-base font-medium transition-colors duration-200 flex items-center">
              <FaHome className="mr-1.5 text-blue-600" />
              <span>Home</span>
            </Link>
            <div className="relative" ref={mobileServicesRef}>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-gray-700 hover:text-blue-600 px-2.5 py-2 text-base font-medium transition-colors duration-200 flex items-center"
              >
                <FaChalkboardTeacher className="mr-2 text-blue-600" />
                Services
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isMobileServicesOpen && (
                <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      to="/projects"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      <FaProjectDiagram className="mr-2 text-blue-600" />
                      <span>Projects</span>
                    </Link>
                    <Link
                      to="/internships"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      <FaLaptopCode className="mr-2 text-blue-600" />
                      <span>Internships</span>
                    </Link>
                    <Link
                      to="/ourcourses"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      <FaGraduationCap className="mr-2 text-blue-600" />
                      <span>Courses</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 px-2.5 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 px-2.5 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/my-courses"
              className="text-gray-700 hover:text-blue-600 px-2.5 py-2 text-base font-medium transition-colors duration-200 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <svg 
                className="w-4 h-4 mr-1.5 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.478 5.754 19 7.5 19s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.478 18.247 19 16.5 19c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>My Learning</span>
            </Link>
            <Link
                to="/settings"
                className="text-gray-700 hover:text-blue-600 px-2.5 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
            >
              <FaCog className="mr-1.5 text-blue-600" />
              <span>Settings</span>
            </Link>
            <div className="flex space-x-3 ml-2">
              <Link 
                to="/login" 
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="mr-2" />
                <span>Login</span>
              </Link>
              <Link 
                to="/register"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                <FaUserPlus className="mr-2" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center"
            >
              <FaHome className="mr-2 text-blue-600" />
              <span>Home</span>
            </Link>
            <div className="relative" ref={mobileServicesRef}>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center"
              >
                <FaChalkboardTeacher className="mr-2 text-blue-600" />
                Services
                <svg className={`ml-1 h-4 w-4 transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isMobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/projects"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsOpen(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    <FaProjectDiagram className="mr-2 text-blue-600" />
                    <span>Projects</span>
                  </Link>
                  <Link
                    to="/internships"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsOpen(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    <FaLaptopCode className="mr-2 text-blue-600" />
                    <span>Internships</span>
                  </Link>
                  <Link
                    to="/ourcourses"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsOpen(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    <FaGraduationCap className="mr-2 text-blue-600" />
                    <span>Courses</span>
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              <FaInfoCircle className="mr-2 text-blue-600" />
              <span>About Us</span>
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              <FaEnvelope className="mr-2 text-blue-600" />
              <span>Contact</span>
            </Link>
            <Link
                to="/settings"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              <FaCog className="mr-2 text-blue-600" />
              <span>Settings</span>
            </Link>
            <div className="pt-4 pb-2 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-3 px-1">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center bg-transparent text-blue-600 hover:bg-blue-50 px-4 py-2.5 rounded-md text-sm font-medium border border-blue-600 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="text-center bg-blue-600 text-white hover:bg-blue-700 px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <Link 
              to="/my-courses"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              <svg 
                className="w-4 h-4 mr-2 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.478 5.754 19 7.5 19s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.478 18.247 19 16.5 19c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>My Learning</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
