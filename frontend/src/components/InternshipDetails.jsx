import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Icons as components
const CalendarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MapPinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const DocumentTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CurrencyRupeeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// This would typically come from an API in a real application
const internshipDetails = {
    1: {
        title: 'Full Stack Web Development',
        image: '/internships/fullstack.png',
        description: 'Learn to build dynamic and responsive web applications using MERN or Python-Django stack. Work on real-world projects from frontend to backend.',
        duration: '3-6 Months',
        startDate: 'Flexible',
        location: 'Remote/On-site',
        price: '₹3,999',
        requirements: [
            'Basic understanding of programming concepts',
            'Familiarity with HTML, CSS, and JavaScript',
            'Eagerness to learn full-stack development'
        ],
        whatYoullLearn: [
            'Frontend development with React.js',
            'Backend development with Node.js/Express or Python/Django',
            'Database design and management',
            'API development and integration',
            'Version control with Git'
        ]
    },
    // Add other internship details here with their respective IDs
};

const InternshipDetails = () => {
    const { id } = useParams();
    const internship = internshipDetails[id];

    if (!internship) {
        return (
            <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Internship not found</h2>
                    <Link to="/internships" className="text-blue-600 hover:underline">
                        Back to Internships
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f5f0] font-sans">
            {/* Top Bar - Same as Internships page */}
            <div className="w-full bg-white shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6">
                    <div className="flex items-center justify-between">
                        <Link to="/internships" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium">Back to Internships</span>
                        </Link>
                        
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <img 
                                src="/nret-logo.png" 
                                alt="NRET Logo" 
                                className="h-12 sm:h-14 md:h-16 transition-all duration-300"
                            />
                        </div>
                        
                        <div className="invisible">
                            {/* Empty div for balance */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Hero Section */}
                    <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <img 
                            src={internship.image} 
                            alt={internship.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/internship-placeholder.jpg';
                            }}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center leading-tight">
                                {internship.title}
                            </h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">About the Internship</h2>
                                <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{internship.description}</p>
                                
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">What You'll Learn</h3>
                                <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base mb-6 sm:mb-8">
                                    {internship.whatYoullLearn?.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                <div className="bg-blue-50 p-4 sm:p-5 md:p-6 rounded-lg border border-blue-100">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                        </svg>
                                        How to Apply
                                    </h3>
                                    <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-5 pl-1">
                                        Ready to kickstart your career with hands-on experience? Click the button below to apply for this internship program.
                                    </p>
                                    <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2.5 px-4 sm:px-6 rounded-lg transition-colors shadow-sm hover:shadow-md">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg lg:sticky lg:top-6">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Internship Details</h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                                                <ClockIcon className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700">Duration</h4>
                                                <p className="mt-1 text-sm text-gray-600">{internship.duration}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                                                <CalendarIcon className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700">Start Date</h4>
                                                <p className="mt-1 text-sm text-gray-600">{internship.startDate}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                                                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700">Location</h4>
                                                <p className="mt-1 text-sm text-gray-600">{internship.location}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-green-600 mr-3 mt-0.5">
                                                <CurrencyRupeeIcon className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700">Price</h4>
                                                <p className="mt-1 text-sm font-semibold text-green-700">{internship.price} <span className="font-normal text-gray-500 text-xs">(Inclusive of all taxes)</span></p>
                                            </div>
                                        </div>
                                        
                                        <div className="pt-2">
                                            <div className="flex items-start mb-2">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-0.5">
                                                    <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                                <h4 className="text-sm font-medium text-gray-700">Requirements</h4>
                                            </div>
                                            <ul className="space-y-2 pl-9">
                                                {internship.requirements?.map((req, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" aria-hidden="true" />
                                                        <span className="text-sm text-gray-600">{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default InternshipDetails;
