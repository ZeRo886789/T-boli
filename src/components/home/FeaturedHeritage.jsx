import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageReveal from '../common/ImageReveal';
import SectionTitle from '../common/SectionTitle';
import { featuredCommunities } from '../../data/communities';

const cardImages = [
  '/images/people/Guardians of heritage.png',
  '/images/people/lakeSebu.webp',
  '/images/people/lakeSeloton.jpg',
];

const FeaturedHeritage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.featured-card');

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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
    <section className="featured-section" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="Featured Heritage" subtitle="02 / Explore" centered />

        <div className="featured-grid">
          {featuredCommunities.map((community, index) => (
             <Link to="/people" key={community.id} className="featured-card" data-motion="magnetic">
              <div className="featured-card-image">
                <ImageReveal src={cardImages[index] || cardImages[0]} alt={community.name} />
              </div>
              <div className="featured-card-content">
                <h3 className="h3">{community.name}</h3>
                <p className="featured-card-text">
                  {community.description.length > 120 ? `${community.description.slice(0, 120)}...` : community.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHeritage;
