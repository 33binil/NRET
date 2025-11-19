import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaLaptopCode, FaGraduationCap, FaChevronDown } from 'react-icons/fa';

const ServicesDropdown = ({ isOpen, onMouseEnter, onMouseLeave, onBlur }) => {
  return (
    <div 
      className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
    >
      <div className="py-2">
        <Link
          to="/projects"
          className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <FaProjectDiagram className="w-5 h-5 mr-3 text-blue-600" />
          <span>Projects</span>
        </Link>
        <Link
          to="/internships"
          className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <FaLaptopCode className="w-5 h-5 mr-3 text-blue-600" />
          <span>Internships</span>
        </Link>
        <Link
          to="/courses"
          className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <FaGraduationCap className="w-5 h-5 mr-3 text-blue-600" />
          <span>Courses</span>
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200">
              Home
            </Link>
            <div className="relative" ref={servicesRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 focus:outline-none"
              >
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <FaChevronDown className="w-4 h-4" />
                </svg>
              </button>
              <ServicesDropdown 
                isOpen={isServicesOpen} 
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onBlur={() => setIsServicesOpen(false)}
              />
            </div>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 ml-2">
              <Link 
                to="/login" 
                className="bg-transparent text-blue-600 hover:bg-blue-50 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium border border-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register"
                className="bg-blue-600 text-white hover:bg-blue-700 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Tablet Navigation (shows menu items without hamburger) */}
          <div className="hidden md:flex lg:hidden items-center space-x-5 ml-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-2.5 py-2 text-base font-medium transition-colors duration-200">
              Home
            </Link>
            <div className="relative" ref={servicesRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center text-gray-700 hover:text-blue-600 px-2.5 py-2 text-base font-medium transition-colors duration-200 focus:outline-none"
              >
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <FaChevronDown className="w-4 h-4" />
                </svg>
              </button>
              <ServicesDropdown 
                isOpen={isServicesOpen} 
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onBlur={() => setIsServicesOpen(false)}
              />
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
            <div className="flex space-x-3 ml-2">
              <Link 
                to="/login" 
                className="bg-transparent text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium border border-blue-600 transition-colors duration-200 hover:shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register"
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:shadow-sm whitespace-nowrap"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
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
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Home
            </Link>
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                Services
                <svg 
                  className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <FaChevronDown className="w-4 h-4" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="mt-1 space-y-1">
                  <Link
                    to="/projects"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-8 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <FaProjectDiagram className="w-4 h-4 mr-3 text-blue-600" />
                    <span>Projects</span>
                  </Link>
                  <Link
                    to="/internships"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-8 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <FaLaptopCode className="w-4 h-4 mr-3 text-blue-600" />
                    <span>Internships</span>
                  </Link>
                  <Link
                    to="/courses"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-8 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <FaGraduationCap className="w-4 h-4 mr-3 text-blue-600" />
                    <span>Courses</span>
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Contact
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
