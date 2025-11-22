import React from 'react';
import { Link } from 'react-router-dom';

// Internship data - Will be moved to a database/API later for admin panel
const internships = [
    {
        id: 1,
        title: 'Full Stack Web Development',
        description: 'Learn to build dynamic and responsive web applications using MERN or Python-Django stack. Work on real-world projects from frontend to backend.',
        image: '/internships/fullstack.png',
    },
    {
        id: 2,
        title: 'Artificial Intelligence & ML',
        description: 'Gain hands-on experience in AI and ML algorithms, data preprocessing, and model training using Python libraries like TensorFlow and Scikit-learn.',
        image: '/internships/ai.png'
    },
    {
        id: 3,
        title: 'Mobile App Development',
        description: 'Develop Android and iOS apps using React Native or Flutter, focusing on UI design, API integration, and performance optimization.',
        image: '/internships/appdevelop.png'
    },
    {
        id: 4,
        title: 'Cybersecurity & Ethical Hacking',
        description: 'Understand system vulnerabilities, perform penetration testing, and learn practical methods to protect networks and applications.',
        image: '/internships/data.png'
    },
    {
        id: 5,
        title: 'Embedded Systems & IoT',
        description: 'Work with microcontrollers, sensors, and IoT protocols to build smart hardware projects and automation systems.',
        image: '/internships/embed.png'
    },
    {
        id: 6,
        title: 'Cloud Computing',
        description: 'Deploy and manage applications on cloud platforms, using Docker, CI/CD pipelines, and scalable infrastructure tools.',
        image: '/internships/cloud.png'
    }
];

const Internships = () => {
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
                        backgroundImage: 'url(/internshiphead.png)',
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
                        Real-World Internship Programs
                    </h1>
                    <p className="text-white text-xs xs:text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
                        Gain hands-on experience through our industry-focused internships designed to bridge the gap between academics and real-world applications. 
                        <span className="hidden xs:inline">
                            Work on live projects, learn from professionals, and build a strong foundation for your career.
                        </span>
                        <span className="xs:hidden">Work on live projects with industry experts.</span>
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                
                {/* Internship Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-0">
                    {internships.map((internship) => (
                        <div key={internship.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            {/* Internship Image */}
                            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                                <img 
                                    src={internship.image} 
                                    alt={internship.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/internship-placeholder.jpg';
                                    }}
                                />
                            </div>
                            
                            {/* Content */}
                            <div className="p-4 sm:p-5 md:p-6">
                                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2">{internship.title}</h2>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{internship.description}</p>
                                
                                <div className="mt-4">
                                    <Link 
                                        to={`/internships/${internship.id}`}
                                        className="block w-full text-center py-1.5 sm:py-2 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors"
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

export default Internships;
