import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import OurCourses from "./components/OurCourses.jsx";
import Refresh from './components/Refresh';
import Loading from './components/Loading';
import Projects from "./components/Projects.jsx";
import Internships from "./components/Internships.jsx";
import InternshipDetails from "./components/InternshipDetails.jsx";
import MyCourse from "./components/MyCourse.jsx";
import Settings from "./components/Settings.jsx";
import MyCourseDetails from "./components/MyCourseDetails.jsx";
import OurCourseDetails from "./components/OurCourseDetails.jsx";

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();
  
  // Only these routes will show the Navbar
  const routesWithNavbar = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> }
  ];
  
  // These routes will not show the Navbar
  const routesWithoutNavbar = [
    "/login",
    "/register",
    "/ourcourses",
    "/projects",
    "/internships",
    "/internships/:id", // Add this to hide navbar on InternshipDetails
    "/my-courses",
    "/course-details",
    "/settings",
  ];

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 3000); // Show Loading.jsx for 3 seconds on initial load
    
    return () => clearTimeout(timer);
  }, []);

  // Handle route changes
  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    const handleComplete = () => {
      setIsNavigating(false);
    };

    // Set navigating to true when route changes
    handleStart();
    // Set navigating to false after a small delay to show the refresh animation
    const timer = setTimeout(handleComplete, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  // Check if current route should show navbar
  const showNavbar = routesWithNavbar.some(route => route.path === location.pathname);
  const hideNavbar = routesWithoutNavbar.includes(location.pathname);


  // Show Loading component only on initial load
  if (isInitialLoad) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {isNavigating && <Refresh />}
      <div className={`${isNavigating ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
        <Suspense fallback={<Refresh />}>
          <Routes>
            {/* Routes with Navbar */}
            {routesWithNavbar.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <>
                    <Navbar />
                    <main className="flex-grow">
                      {route.element}
                    </main>
                  </>
                }
              />
            ))}
            
            {/* Routes without Navbar */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ourcourses" element={<OurCourses />} />
            <Route path="/course-details/:courseId" element={<OurCourseDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/internships/:id" element={<InternshipDetails />} />
            <Route path="/my-courses" element={<MyCourse />} />
            <Route path="/courses/:courseId" element={<MyCourseDetails />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
