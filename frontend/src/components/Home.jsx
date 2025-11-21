import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import animationData from '../animations/1760540193944.json';
import Bottom from './Bottom';


const Home = () => {
  const navigate = useNavigate();
  
  const handleStartCourse = () => {
    navigate('/ourcourses');
  };
  return (
    <div className="relative w-full">
      {/* Hero Section with Background Animation */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 opacity-80 overflow-hidden">
          <div className="h-full w-full sm:h-auto sm:w-auto">
            <Lottie 
              animationData={animationData} 
              loop={true}
              style={{ 
                width: '150%',
                height: '150%',
                marginLeft: '-25%',
                marginTop: '-25%',
                objectFit: 'cover',
                transform: 'scale(1.2)'
              }}
              className="sm:!w-full sm:!h-full sm:!m-0 sm:!transform-none"
            />
          </div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-tr from-white/80 to-[#2A86F7D4]/80 sm:to-[#2A86F7A0]/80 md:to-[#2A86F780]/30 pt-24 sm:pt-24 lg:pt-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-2">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="max-w-3xl mt-8 sm:mt-0 mb-10 lg:mb-0 lg:mr-10">
                <p className="font-happy text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-5">
                  Start with your Favourite Courses
                </p>
                <h1 className="font-happy text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-7 leading-tight">
                  Now Learning from anywhere, and build your{' '}
                  <span className="text-blue-600 inline-block">bright career
                    <div className="w-full">
                      <svg width="100%" height="30" viewBox="0 0 230 30" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block">
                        <path d="M0.433594 32C0.433594 32 64.6375 1 224.434 1" stroke="#0A78FF" strokeWidth="3"/>
                        <path d="M28.9688 13C105.3 1.00004 154.523 1.00003 224.434 1" stroke="#0A78FF" strokeWidth="3"/>
                      </svg>
                    </div>
                  </span>
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-7 sm:mb-9 max-w-2xl">
                  Empower yourself with Quality Education and Lifelong Learning
                </p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 sm:px-9 py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-medium shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transform hover:-translate-y-0.5"
                  style={{ borderRadius: '10px' }}
                  onClick={handleStartCourse}
                >
                  Start Course
                </button>
              </div>
              {/* Image on the right with stats boxes */}
              <div className="w-full max-w-xl lg:max-w-2xl relative">
                {/* Stats Boxes */}
                <div className="relative w-full">
                  {/* Left Box */}
                  <div className="absolute top-0 left-0 ml-7 sm:ml-4" style={{ zIndex: 20 }}>
                    <div className="bg-white rounded-xl p-2 sm:p-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center w-[160px] sm:w-[220px] h-[50px] sm:h-[70px] transition-all duration-300 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
                      <div className="flex-shrink-0 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#68BDFF] flex items-center justify-center text-white">
                        <FaChalkboardTeacher className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="ml-2 sm:ml-3">
                        <p className="text-sm sm:text-lg font-semibold text-gray-800 leading-none">5000+</p>
                        <p className="text-[10px] sm:text-sm text-gray-500 leading-tight">Active Students</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Box */}
                  <div className="absolute top-0 right-0 mr-7 sm:mr-4" style={{ zIndex: 20 }}>
                    <div className="bg-white rounded-xl p-2 sm:p-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center w-[160px] sm:w-[220px] h-[50px] sm:h-[70px] transition-all duration-300 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
                      <div className="flex-shrink-0 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#FF6868] flex items-center justify-center text-white">
                        <FaGraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="ml-2 sm:ml-3">
                        <p className="text-sm sm:text-lg font-semibold text-gray-800 leading-none">1500+</p>
                        <p className="text-[10px] sm:text-sm text-gray-500 leading-tight">Online Courses</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative mt-24 sm:mt-28">
                  <img 
                    src="/Home.png" 
                    alt="Learning illustration"
                    className="w-full h-auto object-contain relative z-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - NRE Home Image */}
            <div className="w-full max-w-xl mb-12 lg:mb-0 lg:mr-16 xl:max-w-2xl">
              <img
                src="/nrethome.jpg"
                alt="NRE Home"
                className="w-full h-auto rounded-lg lg:scale-110 lg:transform lg:origin-left"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="w-full max-w-2xl relative">
              {/* Dotted circle in top right */}
              <div className="absolute -top-44 -right-12 w-[160px] h-[180px] hidden lg:block">
                <img 
                  src="/dottedcircle.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Learn & Grow Your Skills From <span className="text-blue-600">Anywhere</span>
                <div className="w-40 lg:w-48 xl:w-96 mt-2 lg:mt-4">
                  <svg width="100%" height="20" viewBox="0 0 230 30" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block">
                    <path d="M0.433594 32C0.433594 32 64.6375 1 224.434 1" stroke="#0A78FF" strokeWidth="2"/>
                    <path d="M28.9688 13C105.3 1.00004 154.523 1.00003 224.434 1" stroke="#0A78FF" strokeWidth="2"/>
                  </svg>
                </div>
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
                Upgrade your skills with expert-led online classes, remote learning flexibility, and lifetime access to all your lessons.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700 font-medium">Expert Trainers</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700 font-medium">Online Remote Learning</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700 font-medium">Lifetime Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* What We Offer Section */}
      <div className="py-10 sm:py-12 bg-white">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-2">What we offer?</h2>
            <div className="flex justify-center mb-6">
              <svg width="100%" height="30" viewBox="0 0 230 30" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-1/3">
                <path d="M0.433594 32C0.433594 32 64.6375 1 224.434 1" stroke="#0A78FF" strokeWidth="3"/>
                <path d="M28.9688 13C105.3 1.00004 154.523 1.00003 224.434 1" stroke="#0A78FF" strokeWidth="3"/>
              </svg>
            </div>
            <p className="text-sm sm:text-lg text-gray-600 px-2">
              Explore our range of hands-on courses, workshops, and skill-building programs designed to help you learn from experts, gain practical experience, and grow your career from anywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Skill Development Programs */}
            <div className="bg-[#22D3EE]/30 p-4 sm:p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#22D3EE]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 12.01L4.14 10 12 5.99 19.86 10 12 15.01z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Skill Development</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Build practical skills through hands-on projects and expert-guided learning.</p>
                </div>
              </div>
            </div>
            
            {/* Summer Camps */}
            <div className="bg-[#FACC15]/30 p-4 sm:p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L1 8l4 2.18v6L12 22l7-5.82v-6l2-1.09V17h2V8L12 2zm6.82 6L12 12.72 5.18 8 12 4.28 18.82 8zM17 15.99l-5 4.2-5-4.2V10.1L12 14l5-3.9v9.89z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Summer Camps</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Engage in fun, interactive learning activities and boost your skills.</p>
                </div>
              </div>
            </div>
            
            {/* Workshops */}
            <div className="bg-[#60A5FA]/30 p-4 sm:p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Workshops</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Gain hands-on experience through expert-led sessions and projects.</p>
                </div>
              </div>
            </div>
            
            {/* Internships */}
            <div className="bg-[#34D399]/30 p-4 sm:p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zm-1-8c0 .55-.45 1-1 1H10V10h3c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-1.5c-.55 0-1-.45-1-1v-4zm1 3.5H15V14h-1.5v-1.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Internships</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Get real-world experience on projects that enhance your professional growth.</p>
                </div>
              </div>
            </div>
            
            {/* Expert Instructors */}
            <div className="bg-[#A78BFA]/30 p-4 sm:p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Instructors</h3>
                  <p className="text-xs sm:text-sm text-gray-700">Learn from qualified instructors with industry experience.</p>
                </div>
              </div>
            </div>
            
            {/* Multiple Domains */}
            <div className="bg-[#F472B6]/30 p-4 sm:p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Domains</h3>
                  <p className="text-xs sm:text-sm text-gray-700">AI & ML, IoT, Embedded Systems, Robotics, Python, Cloud Computing, Web Development, Image Processing, Digital Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-10">
          {/* Light Blue Container */}
          <div className="bg-[#EDF5FF] rounded-3xl shadow-md p-8 sm:p-10 lg:p-14">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-3 underline decoration-2 underline-offset-4">
                Bootcamp Internship Programs
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Learn by building real projects through our hands-on workshops and internships.
              </p>
            </div>

            {/* Responsive Course Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                <img
                    src="/prg1.jpeg"
                    alt="Robotics Project"
                    className="h-44 sm:h-48 lg:h-52 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                    Robotics Project
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    Learn robotics by building and programming real projects.
                  </p>
                  <button className="mt-auto w-full border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-md text-sm font-medium transition-all duration-300">
                    Start Learning
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                <img
                    src="/prg2.jpeg"
                    alt="AI & Embed Workshop"
                    className="h-44 sm:h-48 lg:h-52 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                    AI & Embed Workshop
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    Learn AI and hardware integration through practical projects.
                  </p>
                  <button className="mt-auto w-full border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-md text-sm font-medium transition-all duration-300">
                    Start Learning
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                <img
                    src="/prg3.jpeg"
                    alt="UI/UX Designing"
                    className="h-44 sm:h-48 lg:h-52 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                    UI/UX Designing
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    Learn to design user-friendly, modern, and engaging digital experiences.
                  </p>
                  <button className="mt-auto w-full border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-md text-sm font-medium transition-all duration-300">
                    Start Learning
                  </button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                <img
                    src="/prg4.jpeg"
                    alt="IoT Internship"
                    className="h-44 sm:h-48 lg:h-52 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                    IoT Internship
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    Gain practical experience in building and connecting smart IoT devices.
                  </p>
                  <button className="mt-auto w-full border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-md text-sm font-medium transition-all duration-300">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
            
            {/* View All Button */}
            <div className="text-center mt-10">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                onClick={() => navigate('/internships')}
              >
                Other Internships...
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5">
            <div className="mb-10">
              <h2 className="text-4xl sm:text-4xl font-bold text-gray-900">
                The Advantages of the
              </h2>
              <div className="relative inline-block">
                <h2 className="text-4xl sm:text-4xl font-bold text-blue-600 mb-0">Upskill Programs.</h2>
                <div className="absolute -bottom-5 left-0 w-full">
                  <svg width="100%" height="20" viewBox="0 0 230 30" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.433594 32C0.433594 32 64.6375 1 224.434 1" stroke="#0A78FF" strokeWidth="2"/>
                    <path d="M28.9688 13C105.3 1.00004 154.523 1.00003 224.434 1" stroke="#0A78FF" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Relevant Skill Set</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Learn in-demand skills that keep you career-ready and confident in today's fast-changing job market.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Growth Mindset</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop a growth-oriented approach, embrace challenges, and keep improving both personally and professionally.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Hands-on Projects</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Work on real projects and exercises that make you job-ready and confident.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Real-World Experience</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get real-world experience on projects that enhance your professional growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT GRADIENT BOX */}
          <div className="w-full lg:w-2/6 flex justify-center">
            <div className="relative w-[90%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[30px] shadow-2xl bg-gradient-to-br from-[#9CC7FF] to-[#FFFFFF] overflow-hidden">
              <img 
                src="/prgteacher.png" 
                alt="Program Teacher" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white py-16 overflow-hidden">
        {/* Corner images */}
        <img
            src="/corner.png"
            alt="corner-top"
            className="absolute top-0 right-0 w-40 sm:w-48 md:w-56 opacity-70"
        />
        <img
            src="/corner.png"
            alt="corner-bottom"
            className="absolute bottom-0 left-0 w-40 sm:w-48 md:w-56 rotate-180 opacity-70"
        />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 underline decoration-2 underline-offset-4 text-center">
            Curriculum Advisors
          </h2>

          {/* Advisors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
            {/* Advisor 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md">
              <img
                  src="/girl.png"
                  alt="Dr Baba Fakruddin Ali"
                  className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="bg-[#0B2343] text-white p-6">
                <h3 className="text-lg font-semibold">
                  Dr. Kareem Unisa (PhD)
                </h3>
                <p className="text-sm mb-3">Founder, NRET</p>
                <ul className="text-sm space-y-1">
                  <li>• Research Development Program Director (NRET)</li>
                  <li>• PhD Researcher at VIT</li>
                  <li>• Focusing on AI-driven bots</li>
                </ul>
              </div>

            </div>

            {/* Advisor 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md">
              <img
                  src="/boy.png"
                  alt="Dr Baba Fakruddin Ali"
                  className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="bg-[#0B2343] text-white p-6">
                <h3 className="text-lg font-semibold">
                  Dr. Baba Fakruddin Ali
                </h3>
                <p className="text-sm mb-3">Co-founder, NRET</p>
                <ul className="text-sm space-y-1">
                  <li>• Specialized in Embedded Systems, IoT, AI & ML</li>
                  <li>• Author of “Introduction to ML”</li>
                  <li>• Holds 3 Patents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 w-full">
        <div className="max-w-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Workshops & Highlights
          </h2>
          <div className="flex justify-center mb-4">
            <svg width="100%" height="20" viewBox="0 0 230 30" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[230px]">
              <path d="M0.433594 32C0.433594 32 64.6375 1 224.434 1" stroke="#0A78FF" strokeWidth="2"/>
              <path d="M28.9688 13C105.3 1.00004 154.523 1.00003 224.434 1" stroke="#0A78FF" strokeWidth="2"/>
            </svg>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-sm sm:text-lg">
            Take a look at our workshops, events, and hands-on sessions at NRET — moments that capture learning, creativity, and student engagement.
          </p>

          {/* Logos / Image Grid */}
          <div className="relative w-full max-w-[100vw] overflow-hidden px-4 md:px-8">
            <div className="relative w-full">
              <div 
                className="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory scroll-smooth"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollBehavior: 'smooth'
                }}
              >
                <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div 
                      key={item}
                      className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] 2xl:w-[40vw] h-[60vw] sm:h-[50vw] md:h-[40vw] lg:h-[35vw] xl:h-[30vw] 2xl:h-[25vw] max-h-[500px] bg-[#EDF5FF] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center snap-center transform hover:scale-[1.02]"
                    >
                      <img 
                        src={`/src${(item % 4) + 1}.png`}
                        alt={`Partner ${item}`} 
                        className="max-h-[85%] max-w-[95%] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scroll indicator - only shows on devices that support hover */}
              <div className="hidden md:block">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/80 hover:bg-white text-blue-600 w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
                  ←
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/80 hover:bg-white text-blue-600 w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
                  →
                </div>
              </div>
            </div>
            
            {/* Scroll indicator for mobile */}
            <div className="md:hidden text-center text-sm text-gray-500 mt-4">
              ← Scroll to view more →
            </div>
          </div>
          <style jsx="true">{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none; /* Hide scrollbar for Chrome, Safari and Opera */
            }
            .hide-scrollbar {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
            .snap-x {
              scroll-snap-type: x mandatory;
            }
            .snap-center {
              scroll-snap-align: center;
            }
          `}</style>
        </div>
      </section>
      
      {/* Bottom Section */}
      <Bottom />
    </div>
  );
};

export default Home;
