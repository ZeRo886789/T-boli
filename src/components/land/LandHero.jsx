import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const LandHero = () => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
  });

  const scrollToContent = () => {
    document
      .querySelector('.land-location-section')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <section className="land-hero-section" ref={ref}>
      <div className="land-hero-background">
        <ImageReveal
          src="/images/land/land-and-geography.png"
          alt="T'boli ancestral land and geography"
          className="land-hero-image"
          reveal={false}
        />

        <div className="land-hero-overlay" />
        <div className="land-hero-vignette" />
      </div>

      <div className="container land-hero-content">
        <div className="land-hero-copy">
          <TextReveal delay={100}>
            <span className="land-hero-eyebrow">
              THE ANCESTRAL DOMAIN
            </span>
          </TextReveal>

          <TextReveal delay={250}>
            <h1 className="land-hero-title">
              Land &<br />
              <span>Geography</span>
            </h1>
          </TextReveal>

          <div className="land-hero-divider" />

          <TextReveal delay={400}>
            <p className="land-hero-description">
              The ancestral domain of the T'boli people
              spans the mountainous highlands of South
              Cotabato, Mindanao, rich in forests, rivers,
              lakes, and sacred landscapes.
            </p>
          </TextReveal>

          <TextReveal delay={550}>
            <button
              className="land-hero-button"
              onClick={scrollToContent}
            >
              <span>Explore the land</span>
              <span className="land-button-arrow">→</span>
            </button>
          </TextReveal>
        </div>
      </div>

      {isVisible && (
        <button
          className="land-hero-scroll"
          onClick={scrollToContent}
          aria-label="Scroll to explore"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="land-scroll-circle">
            ↓
          </div>
        </button>
      )}
    </section>
  );
};

export default LandHero;
