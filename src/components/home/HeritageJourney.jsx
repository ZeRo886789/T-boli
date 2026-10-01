import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const sections = [
  {
    number: '02',
    title: 'THE LAND',
    subtitle: 'MOUNTAINS, LAKES, AND LIVING ROOTS',
    description:
      'The T\'boli people call the highlands of South Cotabato home — a land of lakes, forests, and mountains that shape their identity, beliefs, and way of life.',
    image: '/images/landscapes/theland.png',
    focus: 'center',
    path: '/land',
    position: 'left',
  },

  {
     number: '03',
    title: 'THE PEOPLE',
    subtitle: 'A COMMUNITY OF RESILIENCE',
    description:
      'Discover the T\'boli community, their traditions, relationships, daily life, and the knowledge passed from one generation to another.',
    image: '/images/tnalak/t%27nalak.png',
    focus: 'center',
    path: '/people',
    position: 'left',
  },

  {
    number: '04',
    title: 'HISTORY',
    subtitle: 'STORIES THROUGH GENERATIONS',
    description:
      'Explore the history of the T\'boli people through stories of survival, adaptation, identity, and cultural preservation.',
    image: '/images/history/history.png',
    focus: 'center',
    path: '/history',
    position: 'left',
  },

  {
    number: '05',
    title: 'CULTURE',
    subtitle: 'TRADITIONS THAT LIVE',
    description:
      'Music, clothing, beliefs, food, ceremonies, and artistic traditions continue to shape T\'boli identity.',
    image: '/images/culture/culture.png',
    focus: 'center',
    path: '/culture',
    position: 'right',
  },

  {
    number: '06',
    title: 'T\'NALAK',
    subtitle: 'A WOVEN LEGACY',
    description:
      'T\'nalak is more than a textile. It carries stories, dreams, patterns, knowledge, and the creative spirit of the T\'boli people.',
    image: '/images/tnalak/t%27nalak.png',
    focus: 'center',
    path: '/tnalak',
    position: 'left',
  },

  {
    number: '07',
    title: 'KNOWLEDGE',
    subtitle: 'WISDOM FOR THE FUTURE',
    description:
      'Traditional knowledge in agriculture, language, healing, craftsmanship, and environmental stewardship continues to guide the community.',
    image: '/images/knowledge/knowledge.png',
    focus: 'center',
    path: '/knowledge',
    position: 'right',
  },

  {
    number: '08',
    title: 'TODAY',
    subtitle: 'KEEPING HERITAGE ALIVE',
    description:
      'The T\'boli continue to adapt and thrive while carrying their cultural identity into a changing world.',
    image: '/images/today/today.png',
    focus: 'center',
    path: '/today',
    position: 'left',
  },
];

const HeritageJourney = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.heritage-panel');

      items.forEach((item) => {
        const image = item.querySelector('.heritage-panel__image');
        const content = item.querySelector('.heritage-panel__content');

        gsap.fromTo(
          image,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          content,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 72%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="heritage-journey"
      ref={sectionRef}
      aria-label="Explore T'boli heritage"
    >
      <div className="heritage-journey__intro">
        <span className="mono-label">THE JOURNEY</span>

        <h2>
          Threads that connect
          <br />
          <span>land, people, and memory.</span>
        </h2>
      </div>

      <div className="heritage-panels">
        {sections.map((section) => (
          <article
            className={`heritage-panel heritage-panel--${section.position}`}
            key={section.number}
          >
            <div className="heritage-panel__media">
              <img
                src={section.image}
                alt={section.title}
                className="heritage-panel__image"
                style={{ objectPosition: section.focus ?? 'center' }}
                loading="lazy"
                width="1600"
                height="2000"
              />
              <div className="heritage-panel__image-overlay" />
            </div>

            <div className="heritage-panel__content">
              <div className="heritage-panel__number">
                <span>{section.number}</span>
                <i />
              </div>

              <p className="heritage-panel__eyebrow">
                {section.subtitle}
              </p>

              <h2 className="heritage-panel__title">
                {section.title}
              </h2>

              <p className="heritage-panel__description">
                {section.description}
              </p>

              <Link
                to={section.path}
                className="heritage-panel__link"
              >
                <span>LEARN MORE</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HeritageJourney;