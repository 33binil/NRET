import React, { useState, useEffect } from 'react';
import { FiUser, FiLock, FiBook, FiBell, FiClock, FiPlay, FiBookmark } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Settings = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [activeTab, setActiveTab] = useState('profile');
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 234 567 890',
        gender: '',
        dateOfBirth: '',
        address: '',
        city: '',
        postalCode: '',
        qualification: '',
        institution: '',
        bio: 'Web Developer & Designer',
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [notifications, setNotifications] = useState({
        email: true,
        courseUpdates: true,
        promotions: false,
        news: true
    });

    // Import the courses data from MyCourse component
    const courses = [
        {
            id: 1,
            title: 'UI/UX Design Masterclass',
            progress: 75,
            lastAccessed: '1 week ago',
            duration: '10 weeks',
            level: 'Intermediate',
            instructor: 'Dr. Kareem Unisa (PhD)',
            modulesCompleted: 6,
            totalModules: 8,
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            category: 'Design',
            rating: 4.8,
            students: 1245,
            description: 'Master the principles of UI/UX design and create stunning user experiences.'
        },
        {
            id: 2,
            title: 'Full Stack Development Bootcamp',
            progress: 30,
            lastAccessed: '3 days ago',
            duration: '12 weeks',
            level: 'Advanced',
            instructor: 'Dr. Sarah Johnson',
            modulesCompleted: 3,
            totalModules: 10,
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
            category: 'Development',
            rating: 4.9,
            students: 2345,
            description: 'Become a full-stack developer with our comprehensive bootcamp.'
        },
        {
            id: 3,
            title: 'Data Science Fundamentals',
            progress: 90,
            lastAccessed: '2 days ago',
            duration: '8 weeks',
            level: 'Beginner',
            instructor: 'Prof. Michael Chen',
            modulesCompleted: 9,
            totalModules: 10,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            category: 'Data Science',
            rating: 4.7,
            students: 1890,
            description: 'Learn the fundamentals of data science and machine learning.'
        },
        {
            id: 4,
            title: 'Digital Marketing Mastery',
            progress: 10,
            lastAccessed: 'Just now',
            duration: '6 weeks',
            level: 'All Levels',
            instructor: 'Alex Rivera',
            modulesCompleted: 1,
            totalModules: 12,
            image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1704&q=80',
            category: 'Marketing',
            rating: 4.6,
            students: 3200,
            description: 'Master digital marketing strategies for business growth.'
        }
    ];

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNotificationToggle = (type) => {
        setNotifications(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert('Settings saved successfully!');
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                <FiUser className="w-12 h-12 text-gray-400" />
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Change Photo
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={profileData.name}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={profileData.email}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={profileData.phone}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                    <select
                                        name="gender"
                                        value={profileData.gender}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                        <option value="prefer-not-to-say">Prefer not to say</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={profileData.dateOfBirth}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address Line</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={profileData.address}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={profileData.city}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={profileData.postalCode}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
                                    <select
                                        name="qualification"
                                        value={profileData.qualification}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Qualification</option>
                                        <option value="high-school">High School</option>
                                        <option value="associate">Associate's Degree</option>
                                        <option value="bachelor">Bachelor's Degree</option>
                                        <option value="master">Master's Degree</option>
                                        <option value="doctorate">Doctorate</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Current College/School</label>
                                    <input
                                        type="text"
                                        name="institution"
                                        value={profileData.institution}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                    <textarea
                                        name="bio"
                                        value={profileData.bio}
                                        onChange={handleProfileChange}
                                        rows="3"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={profileData.email}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={profileData.phone}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                    <textarea
                                        name="bio"
                                        value={profileData.bio}
                                        onChange={handleProfileChange}
                                        rows="3"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                );
            
            case 'password':
                return (
                    <div className="max-w-lg">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={passwordData.currentPassword}
                                    onChange={handlePasswordChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={passwordData.confirmPassword}
                                    onChange={handlePasswordChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Update Password
                            </button>
                        </form>
                    </div>
                );
            
            case 'courses':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800">My Learning</h3>
                            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                View All Courses
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {courses.map(course => (
                                <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="h-32 overflow-hidden">
                                        <img 
                                            src={course.image} 
                                            alt={course.title} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="text-lg font-semibold text-gray-900">{course.title}</h4>
                                            <button className="text-gray-400 hover:text-blue-500">
                                                <FiBookmark className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <FiClock className="w-4 h-4 mr-1" />
                                            <span className="mr-3">{course.duration}</span>
                                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                                                {course.level}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 mb-4">
                                            Instructor: <span className="text-gray-700">{course.instructor}</span>
                                        </div>
                                        <div className="mb-3">
                                            <div className="flex justify-between text-sm text-gray-500 mb-1">
                                                <span>Progress</span>
                                                <span>{course.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-blue-600 h-2 rounded-full" 
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                                            <span>{course.modulesCompleted} of {course.totalModules} modules</span>
                                            <span>Last accessed: {course.lastAccessed}</span>
                                        </div>
                                        <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                                            <FiPlay className="w-4 h-4 mr-2" />
                                            Continue Learning
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            
            case 'notifications':
                return (
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
                            {Object.entries({
                                email: 'Account notifications',
                                courseUpdates: 'Course updates',
                                promotions: 'Promotions and offers',
                                news: 'News and announcements'
                            }).map(([key, label]) => (
                                <div key={key} className="flex items-center justify-between">
                                    <span className="text-gray-700">{label}</span>
                                    <button
                                        onClick={() => handleNotificationToggle(key)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                            notifications[key] ? 'bg-blue-600' : 'bg-gray-200'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                notifications[key] ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="pushNotifications"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="pushNotifications" className="ml-2 block text-sm text-gray-700">
                                        Enable push notifications
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="emailDigest"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        defaultChecked
                                    />
                                    <label htmlFor="emailDigest" className="ml-2 block text-sm text-gray-700">
                                        Receive weekly email digest
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                Save Notification Preferences
                            </button>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    const tabs = [
        { id: 'profile', icon: <FiUser className="mr-2 h-4 w-4" />, label: 'Profile' },
        { id: 'password', icon: <FiLock className="mr-2 h-4 w-4" />, label: 'Password' },
        { id: 'courses', icon: <FiBook className="mr-2 h-4 w-4" />, label: 'Courses' },
        { id: 'notifications', icon: <FiBell className="mr-2 h-4 w-4" />, label: 'Notifications' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center pt-16 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex min-h-[600px]">
                            {/* Sidebar - Hidden on mobile, shown on medium screens and up */}
                            <div className="hidden md:flex md:flex-col md:w-64 bg-gray-800 text-white p-6">
                                <h2 className="text-2xl font-bold mb-8">Settings</h2>
                                <nav className="space-y-1 flex-1">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full text-left flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                                                activeTab === tab.id 
                                                    ? 'bg-blue-700 text-white' 
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`}
                                        >
                                            {tab.icon}
                                            {tab.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                            
                            {/* Mobile Tab Selector - Only shown on mobile */}
                            <div className="md:hidden mb-4 bg-white sticky top-16 z-10 border-b border-gray-200">
                                <div className="flex overflow-x-auto py-2 px-1">
                                    <div className="flex space-x-2">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                                                    activeTab === tab.id
                                                        ? 'bg-blue-600 text-white'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                {tab.icon}
                                                <span>{tab.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Main Content */}
                            <div className="flex-1 p-4 sm:p-6 md:p-8">
                                <div className="mb-6">
                                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                        {activeTab === 'profile' && 'Profile Settings'}
                                        {activeTab === 'password' && 'Change Password'}
                                        {activeTab === 'courses' && 'My Courses'}
                                        {activeTab === 'notifications' && 'Notification Settings'}
                                    </h1>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {activeTab === 'profile' && 'Update your profile information and photo'}
                                        {activeTab === 'password' && 'Change your password to secure your account'}
                                        {activeTab === 'courses' && 'View and manage your enrolled courses'}
                                        {activeTab === 'notifications' && 'Manage your notification preferences'}
                                    </p>
                                </div>
                                
                                <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                                    {renderTabContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
