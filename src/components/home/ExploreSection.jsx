import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageReveal from '../common/ImageReveal';
import SectionTitle from '../common/SectionTitle';

const exploreSections = [
  {
    id: 'land',
    title: 'Land & Geography',
    description:
      'Discover the majestic landscapes and geographic features of the Tboli territory.',
    image: '/images/landscapes/mindanao.webp',
    path: '/land',
  },
  {
    id: 'people',
    title: 'The Tboli People',
    description:
      'Learn about the community, their way of life, and their rich cultural heritage.',
    image: '/images/people/The T\'boli people.png',
    path: '/people',
  },
  {
    id: 'history',
    title: 'Historical Journey',
    description: 'Journey through the history of the Tboli people from ancient times to today.',
    image: '/images/history/history-01.webp',
    path: '/history',
  },
  {
    id: 'culture',
    title: 'Culture & Traditions',
    description: 'Explore the rich traditions, clothing, jewelry, and customs of the Tboli.',
    image: '/images/culture/clothing.webp',
    path: '/culture',
  },
  {
    id: 'tnalak',
    title: 'Tnalak: Dream Weaving',
    description: 'Discover the sacred art of Tnalak weaving and its significance to the Tboli.',
    image: '/images/tnalak/tnalak-01.webp',
    path: '/tnalak',
  },
  {
    id: 'knowledge',
    title: 'Indigenous Knowledge',
    description:
      'Explore the rich indigenous knowledge system of the Tboli people.',
    image: '/images/knowledge/language.webp',
    path: '/knowledge',
  },
];

const ExploreSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.explore-card');

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            toggleActions: 'play none none reverse',
            start: 'top 85%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section className="explore-section" ref={sectionRef}>
      <div className="container">
        <SectionTitle
          title="Explore Heritage"
          subtitle="03 / Journey"
          centered
        />

        <div className="explore-grid">
          {exploreSections.map((item, index) => (
            <Link
              to={item.path}
              key={item.id}
              className="explore-card"
              data-motion="magnetic"
            >
              <div className="explore-card-image" data-motion="image-hover">
                <ImageReveal src={item.image} alt={item.title} />
              </div>
              <div className="explore-card-content">
                <span className="mono-label">{index + 1}</span>
                <h3 className="h3">{item.title}</h3>
                <p className="explore-card-text">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
