import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Bottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-10 sm:gap-8 lg:gap-16 mb-8">
          {/* About Section */}
          <div className="space-y-4 flex-1 min-w-[200px]">
            <div className="flex items-center">
              <img src="/nret-logo.png" alt="NRET Academy" className="h-32 w-auto" />
            </div>
            <p className="text-sm md:text-base text-gray-400">Empowering futures through quality education and innovative learning solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/ourcourses" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">All Courses</a></li>
              <li><a href="/about" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Programs / Categories */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Programs / Categories</h4>
            <ul className="space-y-2">
              <li><a href="/programs/robotics" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Robotics Projects</a></li>
              <li><a href="/programs/ai-embedded" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">AI & Embedded Workshop</a></li>
              <li><a href="/programs/ui-ux" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">UI/UX Designing</a></li>
              <li><a href="/programs/iot-internship" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">IoT Internship</a></li>
              <li><a href="/programs/upskill" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Upskill Program</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Us</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                NANO ROBOTICS EMBED TECHNOLOGIES,<br/>  14th Main Rd, Gokula 1st Stage,<br/> HMT Layout, Mathikere,<br/> Bengaluru, Karnataka 560054
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@nretacademy.com
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                ‪+91 99641 37725‬
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Newsletter</h4>
            <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p className="text-xs md:text-sm">© {currentYear} Nano Robotics & Embed Technologies. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3 md:gap-6">
            <a href="/privacy-policy" className="text-xs md:text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-xs md:text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="text-xs md:text-sm hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
