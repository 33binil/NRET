import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const Loading = () => {
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load animation data
    fetch('/Livechatbot.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));

    // Set timer to hide loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-50">
      <div className="w-full h-full flex flex-col items-center justify-center px-4">
        <div className="flex-shrink-0 mb-8 sm:mb-12">
          {animationData ? (
            <div className="relative">
              <Lottie 
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ 
                  width: 'clamp(150px, 40vw, 400px)', 
                  height: 'clamp(150px, 40vw, 400px)',
                  display: 'block',
                  margin: '0 auto'
                }}
                onComplete={handleAnimationComplete}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center" style={{ width: 'clamp(150px, 40vw, 400px)', height: 'clamp(150px, 40vw, 400px)' }}>
              <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
        <div className="space-y-4 text-center max-w-md w-full">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 animate-pulse">
            Loading Amazing Content...
          </h1>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 px-4">
            Please wait while we prepare everything for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
