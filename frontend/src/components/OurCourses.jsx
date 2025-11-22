import React from 'react';
import { Link } from 'react-router-dom';

// Course data - Will be moved to a database/API later for admin panel
const courses = [
    {
        id: 1,
        title: 'Full Stack Web Development',
        description: 'Master modern web development with MERN stack (MongoDB, Express, React, Node.js) and build real-world applications.',
        duration: '12 weeks',
        level: 'Beginner to Advanced',
        price: '₹12,999',
        image: '/fullstack-interface.png'
    },
    {
        id: 2,
        title: 'Data Science & ML',
        description: 'Learn data analysis, visualization, and machine learning algorithms using Python, Pandas, and Scikit-learn.',
        duration: '16 weeks',
        level: 'Intermediate',
        price: '₹14,999',
        image: '/datascience-interface.png'
    },
    {
        id: 3,
        title: 'Mobile App Development',
        description: 'Build cross-platform mobile applications using React Native or Flutter with Firebase backend integration.',
        duration: '10 weeks',
        level: 'Beginner',
        price: '₹10,999',
        image: '/mobileapp-interface.png'
    },
    {
        id: 4,
        title: 'Python Programming',
        description: 'Master Python programming from basics to advanced concepts, including OOP, data structures, and algorithms.',
        duration: '8 weeks',
        level: 'Beginner',
        price: '₹8,999',
        image: '/python-interface.png'
    },
    {
        id: 5,
        title: 'UI/UX Design',
        description: 'Learn user interface and experience design principles, tools like Figma, and create stunning designs.',
        duration: '10 weeks',
        level: 'Beginner to Intermediate',
        price: '₹11,999',
        image: '/uiux-interface.png'
    },
    {
        id: 6,
        title: 'Ethical Hacking',
        description: 'Learn penetration testing, vulnerability assessment, and security best practices to protect systems from cyber threats.',
        duration: '16 weeks',
        level: 'Advanced',
        price: '₹18,999',
        image: '/ethicalhacking-interface.png'
    }
];

const OurCourses = () => {
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
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/ourcourses.jpg)',
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
                        Our Professional Courses
                    </h1>
                    <p className="text-white text-xs xs:text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
                        Explore our comprehensive range of courses designed to equip you with in-demand skills for the digital age.
                        <span className="hidden xs:inline">
                            Learn from industry experts and gain practical knowledge to advance your career.
                        </span>
                        <span className="xs:hidden">Learn from industry experts.</span>
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                
                {/* Course Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-0">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            {/* Course Image */}
                            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                                <img 
                                    src={course.image} 
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/placeholder-course.png';
                                    }}
                                />
                            </div>
                            
                            {/* Content */}
                            <div className="p-4 sm:p-5 md:p-6">
                                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2">{course.title}</h2>
                                <p className="text-sm sm:text-base text-gray-600 mb-2 line-clamp-2">{course.description}</p>
                                <p className="text-sm text-gray-500 mb-3">{course.duration} • {course.level}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-blue-600 font-medium">{course.price}</span>
                                    <Link 
                                        to={`/course-details/${course.id}`}
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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

export default OurCourses;
