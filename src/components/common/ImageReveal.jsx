import { useRef, useEffect, useState } from 'react';

const ImageReveal = ({
  src,
  alt,
  className = '',
  reveal = true,
  lazy = true,
  ...props
}) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);

  useEffect(() => {
    if (!lazy) return;

    const node = imgRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`image-reveal ${className} ${
        reveal ? (isLoaded && isInView ? 'loaded' : 'loading') : ''
      }`}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`image-reveal-img ${isLoaded ? 'visible' : ''}`}
          loading={lazy ? 'lazy' : 'eager'}
          {...props}
        />
      )}
      {!isLoaded && reveal && (
        <div className="image-reveal-placeholder">
          <div className="image-reveal-shimmer"></div>
        </div>
      )}
    </div>
  );
};

export default ImageReveal;
