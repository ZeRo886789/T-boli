import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const TodayHero = () => {
  return (
    <section className="today-hero-section">
      <div className="today-hero-background">
        <ImageReveal
          src="/images/today/today.png"
          alt="Contemporary T'boli life"
          className="today-hero-image"
          reveal={false}
          lazy={false}
        />
        <div className="today-hero-overlay" />
      </div>

      <div className="container today-hero-content">
        <TextReveal delay={200}>
          <div className="today-hero-eyebrow">Present Day</div>
        </TextReveal>

        <TextReveal delay={300}>
          <div className="today-hero-index">
            <span>05</span> / 05 — TODAY <span>· 2026</span>
          </div>
        </TextReveal>

        <div className="today-hero-divider" />

        <TextReveal delay={400}>
          <h1 className="today-hero-title">
            Contemporary <span className="gold">Life</span>
          </h1>
        </TextReveal>

        <TextReveal delay={600}>
          <p className="today-hero-description">
            The T'boli people today — preserving traditions while embracing
            modernity, carrying ancestral wisdom into the future.
          </p>
        </TextReveal>

        <TextReveal delay={800}>
          <div className="today-hero-scroll">
            <span className="mono-label">Scroll</span>
            <div className="today-hero-scroll-icon">
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

export default TodayHero;
