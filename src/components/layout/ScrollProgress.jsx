import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const handleScroll = () => {
        const totalHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
        setScrollProgress(progress);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const animation = gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.15,
          onUpdate: (self) => setScrollProgress(self.progress * 100),
        },
      },
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        ref={barRef}
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
