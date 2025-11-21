import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-web';

const Register = () => {
    const forgotPwdAnim = useRef(null);
    const blueArrowAnim = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        // Clear error when user types
        if (errors.confirmPassword && (id === 'password' || id === 'confirmPassword')) {
            setErrors(prev => ({
                ...prev,
                confirmPassword: ''
            }));
        }
        
        // Clear email/phone error when typing in email field
        if (id === 'email' && errors.email) {
            setErrors(prev => ({
                ...prev,
                email: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Password match validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        
        // Email/Phone validation
        const emailPhone = formData.email.trim();
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailPhone);
        const isPhone = /^\d{10}$/.test(emailPhone);
        
        if (!emailPhone) {
            newErrors.email = 'Email or phone number is required';
        } else if (!isEmail && !isPhone) {
            newErrors.email = 'Please enter a valid 10-digit phone number or email address';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, proceed with registration
            console.log('Form submitted:', formData);
            // Add your registration logic here
        }
    };

    useEffect(() => {
        // Load animations
        if (forgotPwdAnim.current) {
            Lottie.loadAnimation({
                container: forgotPwdAnim.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/PasswordAuthentication.json'
            });
        }

        if (blueArrowAnim.current) {
            Lottie.loadAnimation({
                container: blueArrowAnim.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/bluearrow.json'
            });
        }

        return () => {
            Lottie.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#f5f5f0] font-sans flex flex-col">
            {/* Top Bar - Same as Login */}
            <div className="w-full bg-white shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* Left side - Back button and Logo */}
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span className="text-xs sm:text-sm font-medium">Back</span>
                            </Link>
                            
                            {/* Logo - Visible next to back button on mobile, centered on larger screens */}
                            <div className="lg:hidden">
                                <img 
                                    src="/nret-logo.png" 
                                    alt="NRET Logo" 
                                    className="h-16"
                                />
                            </div>
                        </div>
                        
                        {/* Centered Logo - Only visible on larger screens */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                            <img 
                                src="/nret-logo.png" 
                                alt="NRET Logo" 
                                className="h-14 sm:h-16 md:h-20 transition-all duration-300"
                            />
                        </div>
                        
                        {/* Navigation Buttons */}
                        <div className="flex-1 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
                            <Link 
                                to="/login" 
                                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-400 rounded-full hover:bg-gray-100 transition whitespace-nowrap text-center"
                            >
                                Login
                            </Link>
                            <Link 
                                to="/contact" 
                                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition whitespace-nowrap text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 flex-1 flex items-center justify-center pt-4 sm:pt-6 md:pt-8">
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between max-w-7xl gap-0 sm:gap-16 md:gap-20 lg:gap-24">
                    {/* Left Section - Welcome */}
                    <div className="w-full lg:w-1/4 mb-12 lg:mb-0 flex flex-col items-center justify-center mt-8 sm:mt-0 lg:mt-0">
                        <h1 className="text-4xl font-bold text-gray-800 mb-8 leading-tight max-w-xs text-center">
                            Welcome to <span className="text-blue-600">Student Register</span> Portal
                        </h1>
                        <div className="relative w-64 h-64">
                            <img 
                                src="/dottedcircle.png" 
                                alt="Dotted Circle" 
                                className="w-full h-full object-contain"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div ref={forgotPwdAnim} className="w-56 h-56"></div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section - Register Form */}
                    <div className="w-full max-w-md lg:max-w-xl bg-white p-8 rounded-2xl shadow-lg mx-auto font-['AFACAD']">
                        <div className="text-center">
                            <h2 className="text-5xl font-bold text-gray-800 mb-6">Create Your Account</h2>
                            <p className="text-2xl text-gray-600 mb-20">
                                Create your account to explore internships, workshops, and training opportunities.
                            </p>
                        </div>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email/Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    placeholder="Enter your email or phone number"
                                    required
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="relative">
                                <div className="flex justify-between items-center mb-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    placeholder="Create a password"
                                    required
                                    minLength={6}
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    placeholder="Confirm your password"
                                    required
                                />
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                            >
                                Register
                            </button>
                        </form>

                        <p className="mt-10 text-center text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-600 font-medium hover:underline">
                                Login Now
                            </Link>
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="hidden lg:flex flex-col items-center justify-center w-1/5">
                        <div className="w-48 h-48 relative">
                            <div ref={blueArrowAnim} className="w-full h-full transform rotate-180"></div>
                        </div>
                        <div className="text-center text-lg mb-4 text-gray-700 font-medium">
                            Register to Create your Account
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center py-6 text-gray-500 text-sm">
                © 2025 Nano Robotics Embed Technologies. All rights reserved.
            </div>
        </div>
    );
}
export default Register
