import React, { useState, useEffect, useRef } from 'react';
import Bottom from './Bottom';

const AboutUs = () => {
    const [scrollX, setScrollX] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) return;
        
        const startDelay = setTimeout(() => {
            const intervalId = setInterval(() => {
                if (scrollRef.current) {
                    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                    if (scrollX >= maxScroll) {
                        setScrollX(0);
                    } else {
                        setScrollX(prevScrollX => prevScrollX + 1);
                    }
                }
            }, 10);
            
            return () => clearInterval(intervalId);
        }, 1000);

        return () => clearTimeout(startDelay);
    }, [scrollX, isMobile]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollX;
        }
    }, [scrollX]);

    return (
        <>
            <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-white/80 to-[#2A86F7D4]/80 sm:to-[#2A86F7A0]/80 md:to-[#2A86F780]/30 pt-24 sm:pt-24 lg:pt-0 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex flex-col lg:top-12 sm:top-0 top-0 relative lg:flex-row px-6 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-16 gap-0 sm:gap-12 lg:gap-12 max-w-[1500px] mx-auto">
                {/* Left side with circles */}
                <div className="flex-1 lg:pr-12 self-center">
                    <div className="grid grid-cols-2 sm:grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 h-auto sm:h-[600px] lg:h-[880px]">
                        <div className="w-[150px] sm:w-[290px] lg:w-[290px] h-[250px] sm:h-[440px] lg:h-[440px] bg-black rounded-[125px_125px_125px_0px] mx-auto sm:mx-0 overflow-hidden shadow-lg">
                                <img src="/abou1.png" alt="About Us" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[130px] sm:w-[265px] lg:w-[265px] h-[130px] sm:h-[265px] lg:h-[265px] bg-black rounded-full self-center mx-auto sm:mx-0 overflow-hidden shadow-lg">
                                <img src="/about2.png" alt="About Us 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[130px] sm:w-[265px] lg:w-[265px] h-[80px] sm:h-[145px] lg:h-[145px] bg-[#C5DFFF] rounded-[60px_0px_60px_60px] top-1 sm:top-44 lg:top-0 relative mx-auto sm:mx-0 flex items-center px-3 sm:px-4 shadow-lg">
                                <img src="/coaching.png" alt="Hands-on guidance" className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mr-2 sm:mr-3 object-contain" />
                                <p className="text-xs sm:text-sm font-['Afacad'] text-black">Hands-on guidance in robotics and embedded systems.</p>
                        </div>
                        <div className="w-[150px] sm:w-[290px] lg:w-[290px] h-[130px] sm:h-[400px] lg:h-[400px] bg-black rounded-[0px_125px_125px_125px] mx-auto sm:mx-0 overflow-hidden shadow-lg">
                                <img src="/about3.png" alt="About Us 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                
                {/* Right side with content */}
                <div className="flex-1 lg:pl-8 top-0 sm:top-20 relative flex flex-col justify-center gap-6">
                    <h2 className="font-['Afacad'] text-2xl sm:text-3xl m-0 text-gray-800 text-center sm:text-left"># About Us</h2>
                    <h1 className="font-['Happy_Monkey'] text-3xl sm:text-4xl lg:text-[52px] m-0 leading-tight text-black text-center sm:text-left">Shaping Future Innovators in Robotics & Embedded Systems</h1>
                    <p className="font-['Happy_Monkey'] text-base sm:text-lg leading-relaxed m-0 text-gray-600 max-w-2xl text-center sm:text-left">
                        We provide hands-on learning through internships, workshops, and weekend training programs, empowering students and professionals to gain real-world skills in robotics, embedded systems, and emerging technologies. Our goal is to bridge the gap between theory and practice, preparing learners for successful careers in the tech industry.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row lg:flex-row gap-8 mt-4">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col sm:flex-row items-start gap-3">
                                <div className="w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-[#94CAE0] rounded-full flex-shrink-0 mx-auto sm:mx-0 flex items-center justify-center">
                                    <img src="/best-practice.png" alt="Practical Learning" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain" />
                                </div>
                                <div className="flex flex-col text-center sm:text-left">
                                    <h3 className="font-['Afacad'] text-base sm:text-lg m-0 text-gray-800">Practical Learning</h3>
                                    <p className="font-['Happy_Monkey'] w-full sm:w-64 text-sm leading-relaxed m-0 text-gray-600">Hands-on internships, workshops, and training programs to build real-world skills in robotics and embedded systems.</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-start gap-3">
                                <div className="w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-[#94CAE0] rounded-full flex-shrink-0 mx-auto sm:mx-0 flex items-center justify-center">
                                    <img src="/skill.png" alt="Practical Learning" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain" />
                                </div>
                                <div className="flex flex-col text-center sm:text-left">
                                    <h3 className="font-['Afacad'] text-base sm:text-lg m-0 text-gray-800">Skill Development</h3>
                                    <p className="font-['Happy_Monkey'] w-full sm:w-64 text-sm leading-relaxed m-0 text-gray-600">Gain expertise through structured courses and projects that prepare you for successful tech careers.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full sm:w-[245px] lg:w-[245px] h-auto sm:h-[250px] lg:h-[250px] bg-[#BAD2DC] p-6 sm:p-8 flex flex-col justify-between rounded-xl flex-shrink-0 mx-auto sm:ml-auto">
                            <p className="font-['Happy_Monkey'] text-sm sm:text-base leading-relaxed m-0 text-gray-800 text-center sm:text-left">Learning by doing is the key to mastering technology. Every project is a step closer to innovation.</p>
                            <p className="font-['Happy_Monkey'] text-xs sm:text-sm m-0 text-gray-700 self-center sm:self-end">-Dr. Kareem unisa(PhD)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Statistics Section with Black Background */}
        <div className="w-full bg-black py-12 sm:py-16 lg:py-20 relative">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/about2.jpg')"}}></div>
            <div className="absolute inset-0 bg-[#0D325E] opacity-75"></div>
            <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
                    {/* Active Students */}
                    <div className="flex flex-col items-center text-center relative">
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 lg:w-28 h-auto mb-4 absolute top-0 left-1/2 transform -translate-x-1/2">
                            <path d="M73.9254 1.90079C86.7527 -3.20261 100.676 6.27326 100.634 20.0784L100.435 85.87C100.388 101.502 82.8873 110.727 69.9639 101.932L9.0311 60.4619C-3.89195 51.6663 -1.73067 32.0017 12.7943 26.2228L73.9254 1.90079Z" stroke="white"/>
                        </svg>
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 lg:w-28 h-auto mb-4 relative right-2 bottom-1 z-10">
                            <path d="M73.7406 1.43649C86.8969 -3.79789 101.177 5.92085 101.134 20.0801L100.935 85.8716C100.887 101.905 82.9373 111.366 69.6825 102.345L8.75016 60.8754C-4.50461 51.8544 -2.28808 31.6853 12.6095 25.7582L73.7406 1.43649Z" fill="white"/>
                            <foreignObject x="25" y="25" width="52" height="56" className="flex items-center justify-center">
                                <img src="/education.png" alt="Active Students" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain" />
                            </foreignObject>
                        </svg>
                        <h3 className="font-['Afacad'] text-2xl sm:text-3xl lg:text-3xl font-bold text-white m-0 mb-2">5000+</h3>
                        <p className="font-['afacad'] text-sm sm:text-base lg:text-lg text-gray-300 m-0">Active Students</p>
                    </div>
                    
                    {/* Online Video Courses */}
                    <div className="flex flex-col items-center text-center relative">
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 lg:w-28 h-auto mb-4 absolute top-0 left-1/2 transform -translate-x-1/2">
                            <path d="M73.9254 1.90079C86.7527 -3.20261 100.676 6.27326 100.634 20.0784L100.435 85.87C100.388 101.502 82.8873 110.727 69.9639 101.932L9.0311 60.4619C-3.89195 51.6663 -1.73067 32.0017 12.7943 26.2228L73.9254 1.90079Z" stroke="white"/>
                        </svg>
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 lg:w-28 h-auto mb-4 relative z-10 right-2 bottom-1">
                            <path d="M73.7406 1.43649C86.8969 -3.79789 101.177 5.92085 101.134 20.0801L100.935 85.8716C100.887 101.905 82.9373 111.366 69.6825 102.345L8.75016 60.8754C-4.50461 51.8544 -2.28808 31.6853 12.6095 25.7582L73.7406 1.43649Z" fill="white"/>
                            <foreignObject x="25" y="25" width="52" height="56" className="flex items-center justify-center">
                                <img src="/online-learning.png" alt="Online Video Courses" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain" />
                            </foreignObject>
                        </svg>
                        <h3 className="font-['Afacad'] text-2xl sm:text-3xl lg:text-3xl font-bold text-white m-0 mb-2">1500+</h3>
                        <p className="font-['afacad'] text-sm sm:text-base lg:text-lg text-gray-300 m-0">Online Video Courses</p>
                    </div>
                    
                    {/* Expert Tutors */}
                    <div className="flex flex-col items-center text-center relative">
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 lg:w-28 h-auto mb-4 absolute top-0 left-1/2 transform -translate-x-1/2">
                            <path d="M73.9254 1.90079C86.7527 -3.20261 100.676 6.27326 100.634 20.0784L100.435 85.87C100.388 101.502 82.8873 110.727 69.9639 101.932L9.0311 60.4619C-3.89195 51.6663 -1.73067 32.0017 12.7943 26.2228L73.9254 1.90079Z" stroke="white"/>
                        </svg>
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 lg:w-28 h-auto mb-4 relative z-10 right-2 bottom-1">
                            <path d="M73.7406 1.43649C86.8969 -3.79789 101.177 5.92085 101.134 20.0801L100.935 85.8716C100.887 101.905 82.9373 111.366 69.6825 102.345L8.75016 60.8754C-4.50461 51.8544 -2.28808 31.6853 12.6095 25.7582L73.7406 1.43649Z" fill="white"/>
                            <foreignObject x="25" y="25" width="52" height="56" className="flex items-center justify-center">
                                <img src="/teacher.png" alt="Expert Tutors" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain" />
                            </foreignObject>
                        </svg>
                        <h3 className="font-['Afacad'] text-2xl sm:text-3xl lg:text-3xl font-bold text-white m-0 mb-2">10+</h3>
                        <p className="font-['afacad'] text-sm sm:text-base lg:text-lg text-gray-300 m-0">Expert Tutors</p>
                    </div>
                    
                    {/* Years of Experience */}
                    <div className="flex flex-col items-center text-center relative">
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 lg:w-28 h-auto mb-4 absolute top-0 left-1/2 transform -translate-x-1/2">
                            <path d="M73.9254 1.90079C86.7527 -3.20261 100.676 6.27326 100.634 20.0784L100.435 85.87C100.388 101.502 82.8873 110.727 69.9639 101.932L9.0311 60.4619C-3.89195 51.6663 -1.73067 32.0017 12.7943 26.2228L73.9254 1.90079Z" stroke="white"/>
                        </svg>
                        <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 lg:w-28 h-auto mb-4 relative z-10 right-2 bottom-1">
                            <path d="M73.7406 1.43649C86.8969 -3.79789 101.177 5.92085 101.134 20.0801L100.935 85.8716C100.887 101.905 82.9373 111.366 69.6825 102.345L8.75016 60.8754C-4.50461 51.8544 -2.28808 31.6853 12.6095 25.7582L73.7406 1.43649Z" fill="white"/>
                            <foreignObject x="25" y="25" width="52" height="56" className="flex items-center justify-center">
                                <img src="/expertise.png" alt="Years of Experience" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain" />
                            </foreignObject>
                        </svg>
                        <h3 className="font-['Afacad'] text-2xl sm:text-3xl lg:text-3xl font-bold text-white m-0 mb-2">10+</h3>
                        <p className="font-['afacad'] text-sm sm:text-base lg:text-lg text-gray-300 m-0">Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-['Afacad'] text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 m-0 mb-4">
                        What our Students <span className="text-blue-600 ml-2">Say's</span>
                    </h2>
                    <p className="font-['Happy_Monkey'] text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Hear from our students about their hands-on learning experiences, skill development, and career growth through our internships, workshops, and training programs.
                    </p>
                </div>

                <div ref={scrollRef} className="lg:grid lg:grid-cols-4 gap-[60px] flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-hide scroll-smooth">
                    {/* Testimonial 1 */}
                    <div className="relative flex-shrink-0 w-[85vw] lg:w-auto snap-start mr-6 lg:mr-0 last:mr-0">
                        <svg width="500" height="530" viewBox="0 0 335 356" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <g filter="url(#filter0_d_336_36)">
                                <g filter="url(#filter1_d_336_36)">
                                    <path d="M26 86C26 52.8629 52.8629 26 86 26H301V262C301 295.137 274.137 322 241 322H26V86Z" fill="white" stroke="black" stroke-width="2"/>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_336_36" x="0" y="0" width="335" height="356" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="4" dy="4"/>
                                    <feGaussianBlur stdDeviation="15"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_36"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_36" result="shape"/>
                                </filter>
                                <filter id="filter1_d_336_36" x="22" y="26" width="283" height="306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="6"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_36"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_36" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                            <p className="font-['Happy_Monkey'] text-sm sm:text-base text-gray-700 mb-4">
                                "The internship program was amazing! I learned so much and gained real-world experience."
                            </p>
                            <h4 className="font-['Afacad'] text-lg font-bold text-gray-800">Sarah Johnson</h4>
                            <p className="font-['Happy_Monkey'] text-xs text-gray-600">Web Development Intern</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="relative flex-shrink-0 w-[85vw] lg:w-auto snap-start mr-6 lg:mr-0 last:mr-0">
                        <svg width="500" height="530" viewBox="0 0 335 356" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <g filter="url(#filter0_d_336_36)">
                                <g filter="url(#filter1_d_336_36)">
                                    <path d="M26 86C26 52.8629 52.8629 26 86 26H301V262C301 295.137 274.137 322 241 322H26V86Z" fill="white" stroke="black" stroke-width="2"/>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_336_36" x="0" y="0" width="335" height="356" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="4" dy="4"/>
                                    <feGaussianBlur stdDeviation="15"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_36"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_36" result="shape"/>
                                </filter>
                                <filter id="filter1_d_336_36" x="22" y="26" width="283" height="306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="6"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_36"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_36" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                            <p className="font-['Happy_Monkey'] text-sm sm:text-base text-gray-700 mb-4">
                                "The workshops were hands-on and practical. I built my first app in just 2 weeks!"
                            </p>
                            <h4 className="font-['Afacad'] text-lg font-bold text-gray-800">Mike Chen</h4>
                            <p className="font-['Happy_Monkey'] text-xs text-gray-600">Mobile App Developer</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="relative flex-shrink-0 w-[85vw] lg:w-auto snap-start mr-6 lg:mr-0 last:mr-0">
                        <svg width="500" height="530" viewBox="0 0 335 356" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <g filter="url(#filter0_d_336_36)">
                                <g filter="url(#filter1_d_336_36)">
                                    <path d="M26 86C26 52.8629 52.8629 26 86 26H301V262C301 295.137 274.137 322 241 322H26V86Z" fill="white" stroke="black" stroke-width="2"/>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_336_36" x="0" y="0" width="335" height="356" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="4" dy="4"/>
                                    <feGaussianBlur stdDeviation="15"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_36"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_36" result="shape"/>
                                </filter>
                                <filter id="filter1_d_336_36" x="22" y="26" width="283" height="306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="6"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_36"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_36" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                            <p className="font-['Happy_Monkey'] text-sm sm:text-base text-gray-700 mb-4">
                                "Great mentors and supportive environment. I landed my dream job after the training!"
                            </p>
                            <h4 className="font-['Afacad'] text-lg font-bold text-gray-800">Emily Davis</h4>
                            <p className="font-['Happy_Monkey'] text-xs text-gray-600">Data Science Trainee</p>
                        </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="relative flex-shrink-0 w-[85vw] lg:w-auto snap-start mr-6 lg:mr-0 last:mr-0">
                        <svg width="500" height="530" viewBox="0 0 335 356" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <g filter="url(#filter0_d_336_36)">
                                <g filter="url(#filter1_d_336_36)">
                                    <path d="M26 86C26 52.8629 52.8629 26 86 26H301V262C301 295.137 274.137 322 241 322H26V86Z" fill="white" stroke="black" stroke-width="2"/>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_336_36" x="0" y="0" width="335" height="356" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="4" dy="4"/>
                                    <feGaussianBlur stdDeviation="15"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_36"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_36" result="shape"/>
                                </filter>
                                <filter id="filter1_d_336_36" x="22" y="26" width="283" height="306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="6"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_36"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_36" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                            <p className="font-['Happy_Monkey'] text-sm sm:text-base text-gray-700 mb-4">
                                "The project-based learning approach helped me build a strong portfolio."
                            </p>
                            <h4 className="font-['Afacad'] text-lg font-bold text-gray-800">Alex Thompson</h4>
                            <p className="font-['Happy_Monkey'] text-xs text-gray-600">UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Reviews Text Section */}
        <div className="w-full py-8 bg-gray-50">
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20">
                <div className="text-center">
                    <p className="font-['afacad'] text-xl sm:text-xl lg:text-xl text-gray-800 ">
                        "Reviews from our learners on Google"
                    </p>
                </div>
            </div>
        </div>
        
        <Bottom />
    </>
    )
}

export default AboutUs
