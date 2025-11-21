import React, { useState, useEffect } from 'react';
import { 
  FaUser, 
  FaLock, 
  FaBell, 
  FaCheck, 
  FaArrowLeft, 
  FaBook, 
  FaArrowRight, 
  FaPlay,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Settings = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('account');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Close mobile menu when route changes or window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (windowWidth < 768 && isMobileMenuOpen && !e.target.closest('.settings-sidebar')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen, windowWidth]);

  // Courses data from MyCourse component
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
    }
  ];

  const [purchasedCourses] = useState(myCourses);

  const [formData, setFormData] = useState({
    // Account Section
    profileImage: null,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    gender: 'male',
    dateOfBirth: '1990-01-01',
    address: '123 Main St',
    city: 'New York',
    postalCode: '10001',
    highestQualification: "Bachelor's Degree",
    currentInstitution: 'XYZ University',
    
    // Password Section
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    
    // Notifications Section
    emailNotifications: true,
    courseUpdates: true,
    promotional: false,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const [saveStatus, setSaveStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save action
    setSaveStatus('Saving...');
    setTimeout(() => {
      setSaveStatus('Changes saved successfully!');
      setTimeout(() => setSaveStatus(''), 3000);
    }, 1000);
  };

  // Tabs configuration
  const tabs = [
    { id: 'account', icon: <FaUser className="mr-3 flex-shrink-0" />, label: 'Account' },
    { id: 'password', icon: <FaLock className="mr-3 flex-shrink-0" />, label: 'Password' },
    { id: 'my-courses', icon: <FaBook className="mr-3 flex-shrink-0" />, label: 'My Courses' },
    { id: 'notifications', icon: <FaBell className="mr-3 flex-shrink-0" />, label: 'Notifications' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile header */}
      <div className="md:hidden bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <Link to="/" className="text-blue-600 hover:text-blue-800 mr-4">
                <FaArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Settings</h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        {/* Desktop header */}
        <div className="hidden md:block mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg flex flex-col md:flex-row relative h-[calc(100vh-12rem)] max-h-[800px] min-h-[600px]">
          {/* Mobile Sidebar Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}
          
          {/* Vertical Tabs - Responsive */}
          <div 
            className={`settings-sidebar w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 bg-white fixed md:static left-0 top-0 bottom-0 z-30 transform ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto`}
            style={{
              maxWidth: '16rem',
              height: '100vh',
              maxHeight: '100vh',
              top: '0',
              bottom: '0',
              '@media (min-width: 768px)': {
                height: 'calc(100vh - 8rem)',
                maxHeight: '800px',
                minHeight: '600px',
                position: 'relative',
                top: 'auto',
                bottom: 'auto'
              }
            }}
          >
            <div className="p-4 md:p-0">
              <div className="flex items-center justify-between p-4 md:hidden">
                <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              </div>
              
              <nav className="flex flex-col py-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (windowWidth < 768) {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`px-4 py-3 text-sm font-medium w-full text-left flex items-center ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-6 w-full overflow-x-hidden overflow-y-auto">
            {/* Mobile Tab Indicator */}
            <div className="md:hidden mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h2>
            </div>
            {activeTab === 'account' && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                    <p className="mt-1 text-sm text-gray-500">Update your account's profile information and email address.</p>
                  </div>

                  {/* Profile Image Upload */}
                  <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <div className="flex flex-col items-center mb-6">
                        <div className="relative">
                          <div className="h-32 w-32 rounded-full bg-gray-100 overflow-hidden border-4 border-white shadow-md">
                            {formData.profileImage ? (
                              <img 
                                src={formData.profileImage} 
                                alt="Profile" 
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
                                <FaUser className="h-16 w-16 text-blue-400" />
                              </div>
                            )}
                          </div>
                          <label 
                            htmlFor="profile-upload"
                            className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors shadow-md"
                            title="Change photo"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <input 
                              id="profile-upload" 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </label>
                        </div>
                        <p className="mt-3 text-sm text-gray-500">Click the icon to change your photo</p>
                      </div>
                    </div>
                    
                    <div className="sm:col-span-6 md:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 md:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 md:col-span-3">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 md:col-span-3">
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <div className="mt-1">
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6 md:col-span-3">
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                        Date of Birth
                      </label>
                      <div className="mt-1">
                        <input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address Line
                      </label>
                      <div className="mt-1">
                        <input
                          id="address"
                          name="address"
                          type="text"
                          value={formData.address}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Street address"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 md:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <div className="mt-1">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 md:col-span-2">
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                        Postal Code
                      </label>
                      <div className="mt-1">
                        <input
                          id="postalCode"
                          name="postalCode"
                          type="text"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6 md:col-span-3">
                      <label htmlFor="highestQualification" className="block text-sm font-medium text-gray-700">
                        Highest Qualification
                      </label>
                      <div className="mt-1">
                        <select
                          id="highestQualification"
                          name="highestQualification"
                          value={formData.highestQualification}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="High School">High School</option>
                          <option value="Associate's Degree">Associate's Degree</option>
                          <option value="Bachelor's Degree">Bachelor's Degree</option>
                          <option value="Master's Degree">Master's Degree</option>
                          <option value="Doctorate">Doctorate</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="currentInstitution" className="block text-sm font-medium text-gray-700">
                        Current College/School
                      </label>
                      <div className="mt-1">
                        <input
                          id="currentInstitution"
                          name="currentInstitution"
                          type="text"
                          value={formData.currentInstitution}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Name of your current institution"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center pt-6 mt-8 border-t border-gray-200">
                    <div className="mt-4 sm:mt-0">
                      <span className={`inline-flex items-center text-sm ${saveStatus === 'Changes saved successfully!' ? 'text-green-600' : 'text-gray-500'}`}>
                        {saveStatus && (
                          <>
                            {saveStatus === 'Changes saved successfully!' ? (
                              <FaCheck className="mr-1.5 h-4 w-4 flex-shrink-0" />
                            ) : null}
                            <span>{saveStatus}</span>
                          </>
                        )}
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 w-full sm:w-auto"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            )}

            {activeTab === 'my-courses' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">My Learning</h2>
                    <p className="mt-1 text-sm text-gray-500">Track your course progress and continue learning.</p>
                  </div>
                  <Link 
                    to="/my-courses" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View All Courses
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>

                {purchasedCourses && purchasedCourses.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {purchasedCourses.map((course) => (
                      <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="h-40 bg-gray-100 overflow-hidden">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {course.category} • {course.duration} • {course.level}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            Instructor: {course.instructor}
                          </p>
                          <div className="mt-2">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <div className="mt-2 flex justify-between text-xs text-gray-500">
                              <span>{course.modulesCompleted} of {course.totalModules} modules</span>
                              <span>Last: {course.lastAccessed}</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Link
                              to={`/courses/${course.id}`}
                              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              {course.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                              <FaArrowRight className="ml-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
                    <FaBook className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No courses yet</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by exploring our courses.</p>
                    <div className="mt-6">
                      <Link
                        to="/ourcourses"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Browse Available Courses
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'notifications' && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">Notification Preferences</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Control how you receive notifications.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="emailNotifications"
                          name="emailNotifications"
                          type="checkbox"
                          checked={formData.emailNotifications}
                          onChange={handleChange}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="emailNotifications" className="font-medium text-gray-700">
                          Email Notifications
                        </label>
                        <p className="text-gray-500">Receive email notifications about your account.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="courseUpdates"
                          name="courseUpdates"
                          type="checkbox"
                          checked={formData.courseUpdates}
                          onChange={handleChange}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="courseUpdates" className="font-medium text-gray-700">
                          Course Updates
                        </label>
                        <p className="text-gray-500">Get notified about new courses and updates.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="promotional"
                          name="promotional"
                          type="checkbox"
                          checked={formData.promotional}
                          onChange={handleChange}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="promotional" className="font-medium text-gray-700">
                          Promotional Offers
                        </label>
                        <p className="text-gray-500">Receive promotional offers and discounts.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </form>
            )}

            {activeTab === 'password' && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">Update Password</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Ensure your account is using a long, random password to stay secure.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          autoComplete="new-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          autoComplete="new-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {saveStatus && (
          <div className="mt-4 p-4 bg-green-50 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaCheck className="h-5 w-5 text-green-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">{saveStatus}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Add custom styles for better mobile experience
const styles = `
  @media (max-width: 767px) {
    .settings-sidebar {
      box-shadow: 4px 0 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
  
  /* Improve touch targets */
  @media (pointer: coarse) {
    button, [role="button"], input[type="submit"], input[type="button"], .btn {
      min-height: 44px;
      min-width: 44px;
    }
    
    input, select, textarea {
      font-size: 16px; /* Prevents iOS zoom on focus */
    }
  }
`;

// Add styles to the document head
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

export default Settings;
