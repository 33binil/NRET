import React from 'react';

const Courses = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 text-4xl font-bold">Course 1</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h2>
              <p className="text-gray-600 mb-4">Learn modern web development with the latest technologies.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Course Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-4xl font-bold">Course 2</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Development</h2>
              <p className="text-gray-600 mb-4">Build cross-platform mobile applications with React Native.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Course Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 text-4xl font-bold">Course 3</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Science</h2>
              <p className="text-gray-600 mb-4">Master data analysis and machine learning techniques.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
