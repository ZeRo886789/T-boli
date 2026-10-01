import { useRef, useEffect, useState } from 'react';

const TextReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '50px' }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [threshold]);

  const textStyle = {
    transition: `all ${duration}s ease-out`,
    transitionDelay: `${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  };

  return (
    <div ref={containerRef} className={`text-reveal ${className}`}>
      <div style={textStyle}>{children}</div>
    </div>
  );
};

export default TextReveal;
