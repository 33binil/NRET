import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Lottie from 'lottie-react';
import Bottom from './Bottom';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="font-medium text-gray-800">{question}</span>
        <svg 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Contact = () => {
    const [animationData, setAnimationData] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What programs do you offer for beginners?",
            answer: "We offer a variety of beginner-friendly programs including Introduction to Robotics, Basic Electronics, and Programming Fundamentals. Our courses are designed to provide hands-on experience with expert guidance."
        },
        {
            question: "How can I register for a course?",
            answer: "You can register for any of our courses through our website or by visiting our training center. Simply select your preferred course, choose a batch, and complete the registration process online."
        },
        {
            question: "What are the payment options available?",
            answer: "We accept various payment methods including credit/debit cards, net banking, UPI, and cash payments at our center. We also offer flexible EMI options for certain courses."
        },
        {
            question: "Do you provide certificates after course completion?",
            answer: "Yes, we provide certificates to all participants who successfully complete our courses. Our certificates are recognized by industry partners and can be a valuable addition to your professional portfolio."
        },
        {
            question: "Can I get a demo class before enrolling?",
            answer: "Absolutely! We encourage prospective students to attend a free demo session. Please contact our support team to schedule a demo class at your convenience."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        fetch('/Electronicmail.json')
            .then(response => response.json())
            .then(data => setAnimationData(data))
            .catch(error => console.error('Error loading animation:', error));
    }, []);

    return (
        <div>
            {/* Header Section */}
            <div className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left md:w-1/2 font-alata">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
                            <div className="w-60 h-1 bg-blue-600 mb-6 md:mx-0 mx-auto"></div>
                            <p className="text-lg text-gray-600">
                                Have questions about our internships, workshops, or training programs? We'd love to hear from you! Reach out to our team for course details, partnership opportunities, or any technical support. We'll get back to you as soon as Possible.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div style={{ width: '100%', maxWidth: '400px' }}>
                                {animationData ? (
                                    <Lottie 
                                        animationData={animationData}
                                        loop={true}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                ) : (
                                    <div className="flex justify-center items-center" style={{ height: '300px' }}>
                                        <div className="animate-pulse text-gray-400">Loading animation...</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section with Light Blue Background */}
            <div className="bg-[#F1F7FF] py-16 px-4 font-afacad">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info - Moved to Left */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                                <h2 className="text-2xl font-bold mb-4  text-gray-800">Get In Touch</h2>
                                <p className="text-gray-600 mb-6">
                                    We're here to help you grow your skills and career. Whether you have questions about our internships, workshops, or training programs — feel free to reach out. Our team will get back to you soon!
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            <FaEnvelope className="text-blue-600 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Email Us</h3>
                                            <p className="text-gray-600">info@nret.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            <FaPhone className="text-blue-600 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Call Us</h3>
                                            <p className="text-gray-600">‪+91 99641 37725‬</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            <FaMapMarkerAlt className="text-blue-600 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Visit Us</h3>
                                            <p className="text-gray-600">NANO ROBOTICS EMBED TECHNOLOGIES, 14th Main Rd, Gokula 1st Stage, HMT Layout, Mathikere, Bengaluru, Karnataka 560054</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                            <FaFacebook className="text-xl" />
                                        </a>
                                        <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-400 transition-colors">
                                            <FaTwitter className="text-xl" />
                                        </a>
                                        <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                                            <FaLinkedin className="text-xl" />
                                        </a>
                                        <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-colors">
                                            <FaInstagram className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Moved to Right */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        rows={5} 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Google Maps Section */}
                    <div className="mt-12 w-full">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Location</h2>
                        <div className="relative w-full overflow-hidden">
                            <div className="aspect-square md:aspect-auto md:pb-[30%] relative">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3801!2d77.5551691!3d13.0333187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d5e17683fff%3A0xad7244ea06d40c10!2sNANO%20ROBOTICS%20EMBED%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                                    width="1120"
                                    height="230"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0,
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                    }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="NANO ROBOTICS EMBED TECHNOLOGIES Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 px-4 max-w-6xl mx-auto font-afacad bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our programs, registration, and more.</p>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
            
            {/* Bottom Component */}
            <Bottom />
        </div>
    );
};

export default Contact;
