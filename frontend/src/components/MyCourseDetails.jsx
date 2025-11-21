import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample course data - In a real app, this would come from an API
const courseData = {
  1: {
    id: 1,
    title: 'UI/UX Design',
    instructor: 'Dr. Kareem Unisa (PhD)',
    description: 'Master the principles of UI/UX design and create beautiful, user-friendly interfaces.',
    thumbnail: '/uiux-interface.png',
    modules: [
      {
        id: 'm1',
        title: 'Introduction to UI/UX Design',
        duration: '15:30',
        completed: true,
        lessons: [
          { id: 'l1', title: 'What is UI/UX Design?', duration: '5:20', videoUrl: 'https://www.youtube.com/embed/X-_eMAaPv5I' },
          { id: 'l2', title: 'Importance of Good Design', duration: '6:10', videoUrl: 'https://example.com/video2' },
          { id: 'l3', title: 'Design Thinking Process', duration: '4:00', videoUrl: 'https://example.com/video3' },
        ]
      },
      {
        id: 'm2',
        title: 'User Research',
        duration: '22:15',
        completed: true,
        lessons: [
          { id: 'l4', title: 'Conducting User Interviews', duration: '8:30', videoUrl: 'https://example.com/video4' },
          { id: 'l5', title: 'Creating User Personas', duration: '7:45', videoUrl: 'https://example.com/video5' },
          { id: 'l6', title: 'User Journey Mapping', duration: '6:00', videoUrl: 'https://example.com/video6' },
        ]
      },
      {
        id: 'm3',
        title: 'Wireframing and Prototyping',
        duration: '18:45',
        completed: true,
        lessons: [
          { id: 'l7', title: 'Introduction to Wireframing', duration: '5:20', videoUrl: 'https://example.com/video7' },
          { id: 'l8', title: 'Tools for Prototyping', duration: '6:30', videoUrl: 'https://example.com/video8' },
          { id: 'l9', title: 'Creating Interactive Prototypes', duration: '6:55', videoUrl: 'https://example.com/video9' },
        ]
      },
      {
        id: 'm4',
        title: 'UI Design Principles',
        duration: '25:10',
        completed: false,
        lessons: [
          { id: 'l10', title: 'Color Theory', duration: '8:20', videoUrl: 'https://example.com/video10' },
          { id: 'l11', title: 'Typography', duration: '7:30', videoUrl: 'https://example.com/video11' },
          { id: 'l12', title: 'Layout and Composition', duration: '9:20', videoUrl: 'https://example.com/video12' },
        ]
      },
      // Add more modules as needed
    ]
  },
  2: {
    id: 2,
    title: 'Full Stack Development',
    instructor: 'Dr. Kareem Unisa (PhD)',
    description: 'Learn full stack development with modern technologies and build real-world applications.',
    thumbnail: '/fullstack-interface.png',
    modules: [
      // Similar structure as above for Full Stack Development course
    ]
  }
};

const MyCourseDetails = () => {
  const { courseId } = useParams();
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [expandedModules, setExpandedModules] = useState({});
  
  const course = courseData[courseId];
  
  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Not Found</h2>
          <p className="text-gray-600 mb-4">The requested course could not be found.</p>
          <Link 
            to="/my-courses" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to My Courses
          </Link>
        </div>
      </div>
    );
  }

  const toggleModule = (moduleId) => {
    // Create a new object with all modules collapsed
    const newExpandedModules = {};
    
    // If the clicked module is not currently expanded, expand it and close others
    if (!expandedModules[moduleId]) {
      newExpandedModules[moduleId] = true;
      
      // Select the first lesson of the opened module
      const moduleToOpen = course.modules.find(m => m.id === moduleId);
      if (moduleToOpen?.lessons?.length > 0) {
        setSelectedLesson(moduleToOpen.lessons[0]);
      }
    }
    // If the module is already expanded, it will be closed (all modules collapsed)
    
    setExpandedModules(newExpandedModules);
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  // On component mount or when course changes, expand the first module and select its first lesson
  React.useEffect(() => {
    if (course?.modules?.length > 0) {
      const firstModule = course.modules[0];
      const firstLesson = firstModule.lessons?.[0];
      
      if (firstLesson) {
        setSelectedLesson(firstLesson);
        setExpandedModules({
          [firstModule.id]: true
        });
      }
    }
  }, [courseId, course]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleSidebar}
                className="md:hidden p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                aria-label="Toggle sidebar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link to="/my-courses" className="flex items-center text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium hidden sm:inline">Back to My Courses</span>
              </Link>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 truncate max-w-[50vw] sm:max-w-none">{course.title}</h1>
            <div className="w-8 sm:w-28"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        {isMobile && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Sidebar - Course Content */}
        <div 
          className={`fixed md:static inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out w-4/5 sm:w-96 md:w-1/3 lg:w-1/4 bg-white border-r border-gray-200 overflow-y-auto z-30 h-[calc(100vh-64px)] md:h-auto`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Course Content</h2>
              <button 
                onClick={toggleSidebar}
                className="md:hidden p-1 text-gray-500 hover:text-gray-700"
                aria-label="Close sidebar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {course.modules.map((module) => (
                <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className={`w-full flex justify-between items-center p-3 text-left ${expandedModules[module.id] ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-50 transition-colors`}
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex items-center min-w-0">
                      {module.completed ? (
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <span className="font-medium truncate">{module.title}</span>
                    </div>
                    <div className="flex items-center flex-shrink-0 ml-2">
                      <span className="text-xs text-gray-500 mr-2 whitespace-nowrap">{module.duration}</span>
                      <svg 
                        className={`w-4 h-4 text-gray-500 transform transition-transform ${expandedModules[module.id] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {expandedModules[module.id] && (
                    <div className="bg-gray-50 border-t border-gray-100">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          className={`w-full text-left px-4 py-3 text-sm flex items-center ${selectedLesson?.id === lesson.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'} transition-colors`}
                          onClick={() => {
                            handleLessonSelect(lesson);
                            if (isMobile) toggleSidebar();
                          }}
                        >
                          <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-2">
                            {selectedLesson?.id === lesson.id ? (
                              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                              </svg>
                            )}
                          </span>
                          <span className="truncate flex-1 text-left">{lesson.title}</span>
                          <span className="ml-2 text-xs text-gray-500 whitespace-nowrap">{lesson.duration}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Video Player and Lesson Content */}
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          {/* Video Player */}
          <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
            {selectedLesson ? (
              <div className="absolute inset-0">
                <div className="h-full w-full bg-black">
                  {selectedLesson.videoUrl.includes('youtube.com') || selectedLesson.videoUrl.includes('youtu.be') ? (
                    <div className="h-full w-full">
                      <div className="aspect-w-16 aspect-h-9 w-full h-full">
                        <iframe
                          className="w-full h-full"
                          src={selectedLesson.videoUrl}
                          title={selectedLesson.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-900">
                      <div className="text-center text-white p-4 sm:p-6 max-w-2xl">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{selectedLesson.title}</h2>
                        <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                          <div className="text-center p-4">
                            <svg className="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="mt-2 text-xs sm:text-sm text-gray-300">Video player not available</p>
                            <p className="text-xs text-gray-500 mt-1 truncate max-w-xs mx-auto">Video URL: {selectedLesson.videoUrl}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
                <div className="text-center p-4">
                  <svg className="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                  <h3 className="mt-2 text-base sm:text-lg font-medium">Select a lesson to begin</h3>
                  <p className="mt-1 text-sm text-gray-400">Choose a lesson from the sidebar to start watching</p>
                </div>
              </div>
            )}
          </div>

          {/* Lesson Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="max-w-4xl mx-auto">
              {selectedLesson ? (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{selectedLesson.title}</h2>
                  <div className="prose prose-sm sm:prose max-w-none">
                    <p className="text-gray-700">
                      This is a placeholder for the lesson content. In a real implementation, this would include:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                      <li>Detailed lesson notes and explanations</li>
                      <li>Code examples (if applicable)</li>
                      <li>Downloadable resources</li>
                      <li>Interactive exercises</li>
                      <li>Discussion forum link</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <svg className="mx-auto h-10 sm:h-12 w-10 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="mt-2 text-base sm:text-lg font-medium text-gray-900">No lesson selected</h3>
                  <p className="mt-1 text-sm text-gray-500">Select a lesson from the sidebar to view its content.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourseDetails;
