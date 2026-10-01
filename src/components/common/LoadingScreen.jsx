import { useState, useEffect } from 'react';
import ImageReveal from './ImageReveal';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${progress === 100 ? 'fade-out' : ''}`}>
      <div className="loading-screen-content">
        <div className="loading-screen-logo">
          <ImageReveal
            src="/icons/logo.svg"
            alt="Tboli Digital Heritage"
            reveal={false}
          />
        </div>
        <div className="loading-screen-progress">
          <div
            className="loading-screen-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="loading-screen-text">Loading Heritage... {progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
