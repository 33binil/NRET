import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-web';

const Login = () => {
    const forgotPwdAnim = useRef(null);
    const blueArrowAnim = useRef(null);

    useEffect(() => {
        // Load animations
        if (forgotPwdAnim.current) {
            Lottie.loadAnimation({
                container: forgotPwdAnim.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/Forgotpassword.json'
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
            {/* Top Bar */}
            <div className="w-full bg-white shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* Left side - Back button and Logo (stacked on mobile, separate on larger screens) */}
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
                        
                        {/* Navigation Buttons - Stack on small screens, side by side on larger */}
                        <div className="flex-1 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
                            <Link 
                                to="/register" 
                                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-400 rounded-full hover:bg-gray-100 transition whitespace-nowrap text-center"
                            >
                                Register
                            </Link>
                            <Link 
                                to="/contact" 
                                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition whitespace-nowrap text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div> {/* Close flex justify-between items-center relative */}
                </div> {/* Close container */}
            </div>

            <div className="container mx-auto px-6 flex-1 flex items-center justify-center pt-4 sm:pt-6 md:pt-8">
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between max-w-7xl gap-0 sm:gap-16 md:gap-20 lg:gap-24">
                    {/* Left Section - Welcome */}
                    <div className="w-full lg:w-1/4 mb-12 lg:mb-0 flex flex-col items-center justify-center mt-8 sm:mt-0 lg:mt-0">
                        <h1 className="text-4xl font-bold text-gray-800 mb-8 leading-tight max-w-xs text-center">
                            Welcome to <span className="text-blue-600">Student Login</span> Portal
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

                    {/* Middle Section - Login Form */}
                    <div className="w-full max-w-md lg:max-w-xl bg-white p-8 rounded-2xl shadow-lg mx-auto font-['AFACAD']">
                        <div className="text-center">
                            <h2 className="text-5xl font-bold text-gray-800 mb-6">Student Login</h2>
                            <p className="text-2xl text-gray-600 mb-20">
                                Hey, enter your Email/Phone.no and Password to get in to your Account
                            </p>
                        </div>

                        <form className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email/Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email or phone number"
                                />
                            </div>

                            <div className="relative">
                                <div className="flex justify-between items-center mb-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <a href="#" className="text-sm text-blue-600 hover:underline">
                                        Having trouble in Sign in ?
                                    </a>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                            >
                                Login
                            </button>
                        </form>



                        <p className="mt-10 text-center text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-blue-600 font-medium hover:underline">
                                Register Now
                            </Link>
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="hidden lg:flex flex-col items-center justify-center w-1/5">

                        <div className="w-48 h-48 relative">
                            <div ref={blueArrowAnim} className="w-full h-full transform rotate-180"></div>
                        </div>
                        <div className="text-center text-lg mb-4 text-gray-700 font-medium">
                            Login to Access your Account
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
};

export default Login;
