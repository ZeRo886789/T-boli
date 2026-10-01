import { useEffect, useState, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true, offset = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: offset,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, offset]);

  return [ref, isVisible];
};

export default useScrollAnimation;
