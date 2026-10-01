import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ImageReveal from '../common/ImageReveal';

const Introduction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const title = section.querySelector('.intro-title');
    const textElements = section.querySelectorAll('.intro-text');
    const imageContainer = section.querySelector('.introduction-image');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        toggleActions: 'play none none reverse',
        start: 'top 80%',
      },
    });

    if (title) {
      timeline.fromTo(
        title,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    }

    if (textElements.length > 0) {
      timeline.fromTo(
        textElements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
        }
      , '-=0.6');
    }

    if (imageContainer) {
      timeline.fromTo(
        imageContainer,
        { y: 50, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
        '-=0.8'
      );
    }

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="introduction-section" ref={sectionRef}>
      <div className="container">
        <div className="introduction-container">
          <div className="introduction-text">
            <h2 className="intro-title display-title">
              <span style={{ display: 'block' }}>THE T'BOLI</span>
              <span style={{ color: 'var(--color-gold)', display: 'block' }}>
                PEOPLE
              </span>
            </h2>

            <p className="intro-text lead">
              The T'boli are an indigenous group residing primarily in the
              municipality of Lake Sebu, South Cotabato, on the island of
              Mindanao in the Philippines. Their rich culture, traditions, and
              stories have been preserved through the generations.
            </p>

            <p className="intro-text">
              This digital archive serves to document and share the heritage of
              the T'boli people with the world, ensuring that future generations
              can access and appreciate their rich cultural legacy.
            </p>

            <Link to="/history" className="btn btn-primary mt-xl">
              OUR HISTORY
            </Link>
          </div>

          <div className="introduction-image">
            <ImageReveal
              src="/images/hero/south-cotabato.webp"
              alt="South Cotabato landscape"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
