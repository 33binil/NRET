import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Extended course data with more details
const courseDetails = {
  1: {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Master modern web development with MERN stack (MongoDB, Express, React, Node.js) and build real-world applications.',
    longDescription: 'This comprehensive course will take you from the fundamentals of web development to building full-stack applications. You\'ll learn to create responsive front-ends with React, build robust back-ends with Node.js and Express, and work with MongoDB databases. By the end, you\'ll have a portfolio of projects to showcase your skills.',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    price: '₹12,999',
    image: '/fullstack-interface.png',
    languages: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'React'],
    tools: ['VS Code', 'Git', 'Postman', 'MongoDB Compass'],
    modules: [
      {
        title: 'Frontend Development',
        topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React Fundamentals', 'State Management', 'Responsive Design']
      },
      {
        title: 'Backend Development',
        topics: ['Node.js & Express', 'RESTful APIs', 'Authentication & Authorization', 'Error Handling', 'API Documentation']
      },
      {
        title: 'Database & Deployment',
        topics: ['MongoDB & Mongoose', 'Data Modeling', 'Cloud Deployment', 'Performance Optimization', 'Security Best Practices']
      }
    ],
    projects: [
      'E-commerce Website',
      'Social Media Dashboard',
      'Task Management App',
      'Real-time Chat Application'
    ],
    requirements: [
      'Basic understanding of programming concepts',
      'Laptop with 8GB RAM (minimum)',
      'Internet connection',
      'No prior web development experience required'
    ],
    whatYouGet: [
      '80+ hours of video content',
      '50+ coding exercises',
      '4 real-world projects',
      'Certificate of completion',
      'Lifetime access to course materials',
      'Q&A support',
      'Access to private community'
    ]
  },
  // Add more courses with similar structure
  2: {
    id: 2,
    title: 'Data Science & ML',
    description: 'Learn data analysis, visualization, and machine learning algorithms using Python, Pandas, and Scikit-learn.',
    longDescription: 'Dive into the world of data science and machine learning with this comprehensive course. Learn to analyze data, build predictive models, and extract valuable insights using Python and popular data science libraries.',
    duration: '16 weeks',
    level: 'Intermediate',
    price: '₹14,999',
    image: '/datascience-interface.png',
    languages: ['Python', 'SQL'],
    tools: ['Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    modules: [
      {
        title: 'Data Analysis',
        topics: ['Data Cleaning', 'Exploratory Data Analysis', 'Data Visualization', 'Statistical Analysis']
      },
      {
        title: 'Machine Learning',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering']
      },
      {
        title: 'Advanced Topics',
        topics: ['Neural Networks', 'Deep Learning', 'Natural Language Processing', 'Model Deployment']
      }
    ],
    projects: [
      'Predictive Analytics Project',
      'Customer Segmentation',
      'Sentiment Analysis',
      'Image Classification'
    ],
    requirements: [
      'Basic Python programming knowledge',
      'Understanding of basic statistics',
      'Laptop with 8GB RAM (minimum)'
    ],
    whatYouGet: [
      '100+ hours of video content',
      '60+ coding exercises',
      '4 capstone projects',
      'Certificate of completion',
      'Lifetime access to course materials',
      'Q&A support',
      'Access to private community'
    ]
  },
  // Add more courses with similar structure
};

const OurCourseDetails = () => {
  const { courseId } = useParams();
  const course = courseDetails[courseId];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The requested course could not be found.</p>
          <Link 
            to="/ourcourses" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans text-gray-800">
      {/* Top Bar - Mobile First */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Back Button - Hidden on mobile, shown on sm+ */}
            <div className="hidden sm:flex items-center">
              <Link to="/ourcourses" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back</span>
              </Link>
            </div>
            
            {/* Mobile Menu Button - Only on mobile */}
            <div className="sm:hidden">
              <Link to="/ourcourses" className="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
            
            {/* Centered Logo - Responsive Sizing */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="/nret-logo.png" 
                alt="NRET Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 transition-all duration-300"
                loading="lazy"
              />
            </div>
            
            {/* Login Button - Responsive Sizing */}
            <div className="flex items-center">
              <Link 
                to="/login" 
                className="px-3 py-1.5 text-xs sm:text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition whitespace-nowrap focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Responsive Padding */}
      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Course Header - Stacked on mobile, side by side on md+ */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* Left Column - Course Info */}
          <div className="md:flex-1">
            {/* Course Title and Badge - Stacked on mobile, side by side on sm+ */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{course.title}</h1>
              <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 rounded-full self-start sm:self-center">
                {course.level} • {course.duration}
              </span>
            </div>
            
            {/* Course Image - Centered on mobile, left-aligned on md+ */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/course-placeholder.jpg';
                }}
              />
            </div>
            
            {/* Course Description */}
            <div className="prose prose-sm sm:prose max-w-none text-gray-600 mb-6">
              <p>{course.longDescription || course.description}</p>
            </div>
            
            {/* Languages/Tags */}
            {course.languages?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {course.languages.map((language, index) => (
                  <span key={index} className="px-2.5 py-1 text-xs sm:text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-200">
                    {language}
                  </span>
                ))}
              </div>
            )}
            
            {/* Prerequisites */}
            {course.requirements?.length > 0 && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Prerequisites</h3>
                    <ul className="mt-2 text-sm text-blue-700 space-y-1">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-1.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Pricing Card (Sticky on larger screens) */}
          <div className="md:w-80 lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-5 sm:p-6">
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                  <span className="ml-2 text-sm text-gray-500">one-time payment</span>
                </div>
                
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
                  onClick={() => {}}
                >
                  Enroll Now
                </button>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-3">This course includes:</h3>
                  <ul className="space-y-2.5">
                    {course.whatYouGet?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-2 text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Course Modules Section */}
      <section className="bg-gray-50 py-12 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">What You'll Learn</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {course.modules?.map((module, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                      <span className="font-medium">{index + 1}</span>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">{module.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {module.topics?.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-2 text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-12 px-3 sm:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Tools & Technologies</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {course.tools?.map((tool, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center mb-2">
                  <span className="text-2xl">🔧</span>
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700 text-center">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to start your learning journey?</h2>
          <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students who have already transformed their careers with our courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Enroll Now - {course.price}
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Request Syllabus
            </button>
          </div>
        </div>
      </section>

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


      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Back to top"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      </main>
    </div>
  );
};

export default OurCourseDetails;
