import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ParallaxImage = ({
  src,
  alt,
  speed = 0.3,
  className = '',
  height = 'auto',
  ...props
}) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const yPercent = speed * 100;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    });

    gsap.to(image, {
      yPercent: yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      trigger.kill();
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`parallax-image-container ${className}`}
      style={{ height, overflow: 'hidden' }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="parallax-image"
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default ParallaxImage;
