import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  dark = false,
  reveal = true,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!reveal) return;
    const container = containerRef.current;
    if (!container) return;

    const titleEl = container.querySelector('h2');
    const subtitleEl = container.querySelector('.section-subtitle');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: 'play none none reverse',
      },
    });

    if (titleEl) {
      timeline.fromTo(
        titleEl,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }

    if (subtitleEl) {
      timeline.fromTo(
        subtitleEl,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
    }

    return () => {
      timeline.kill();
    };
  }, [reveal]);

  return (
    <div
      ref={containerRef}
      className={`section-title-wrapper ${centered ? 'centered' : ''} ${
        dark ? 'dark' : ''
      }`}
    >
      {subtitle && <span className="section-subtitle mono-label">{subtitle}</span>}
      <h2 className="section-title h2">{title}</h2>
      <span className="golden-line" />
    </div>
  );
};

export default SectionTitle;
