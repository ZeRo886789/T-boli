import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== displayLocation) {
      const timer = setTimeout(() => {
        setDisplayLocation(location.pathname);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  const isLoading = location.pathname !== displayLocation;

  return (
    <>
      {isLoading && <div className="page-transition-overlay animate-fadeIn" />}
      <div
        className={`page-transition-content ${
          isLoading ? 'loading' : 'loaded'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
