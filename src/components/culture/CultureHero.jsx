import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const CultureHero = () => {
  return (
    <section className="culture-hero-section">
      <div className="culture-hero-background">
        <ImageReveal
          src="/images/culture/culture.png"
          alt="T'boli traditional culture"
          className="culture-hero-image"
          reveal={false}
          lazy={false}
        />
        <div className="culture-hero-overlay" />
      </div>

      <div className="container culture-hero-content">
        <TextReveal delay={200}>
          <div className="culture-hero-eyebrow">Culture Archive</div>
        </TextReveal>

        <TextReveal delay={300}>
          <div className="culture-hero-index">
            <span>02</span> / 05 — CULTURE
          </div>
        </TextReveal>

        <div className="culture-hero-divider" />

        <TextReveal delay={400}>
          <h1 className="culture-hero-title">
            Culture & <span className="gold">Traditions</span>
          </h1>
        </TextReveal>

        <TextReveal delay={600}>
          <p className="culture-hero-description">
            The rich and vibrant traditions of the T'boli people — where
            ancestral wisdom lives on through cloth, craft, song, and belief.
          </p>
        </TextReveal>

        <TextReveal delay={800}>
          <div className="culture-hero-scroll">
            <span className="mono-label">Scroll</span>
            <div className="culture-hero-scroll-icon">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.5 0.5v7M0.5 7.5l3 3 3-3" />
              </svg>
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default CultureHero;
