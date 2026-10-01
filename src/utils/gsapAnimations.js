import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGSAPAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        toggleActions: options.toggleActions || 'play none none reverse',
        ...options.scrollTrigger,
      },
    });

    if (options.y !== false) {
      timeline.fromTo(
        element,
        { y: options.yStart ?? 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 1.2,
          ease: options.ease ?? 'power3.out',
        }
      );
    }

    return () => {
      timeline.kill();
    };
  }, [options]);

  return ref;
};

export const useGSAPStagger = (selector, options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.querySelectorAll(selector);
    if (!children.length) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        toggleActions: options.toggleActions || 'play none none reverse',
        ...options.scrollTrigger,
      },
    });

    timeline.fromTo(
      children,
      { y: options.yStart ?? 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: options.duration ?? 0.8,
        stagger: options.stagger ?? 0.1,
        ease: options.ease ?? 'power2.out',
      }
    );

    return () => {
      timeline.kill();
    };
  }, [options, selector]);

  return ref;
};

export const useImageHover = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const image = element.querySelector('img') || element;
    if (!image) return;

    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: options.scale ?? 1.05,
        duration: options.duration ?? 0.6,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: options.duration ?? 0.6,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [options]);

  return ref;
};
