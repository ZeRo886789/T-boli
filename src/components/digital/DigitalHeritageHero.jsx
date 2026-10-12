import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const DigitalHeritageHero = () => {
  return (
    <section className="digital-hero-section">
      <div className="digital-hero-background" data-motion="parallax-slow">
        <ImageReveal
          src="/images/tnalak/tnalak-02.webp"
          alt="T'nalak textile detail"
          className="digital-hero-image"
          reveal={false}
          lazy={false}
        />
        <div className="digital-hero-overlay" />
      </div>

      <div className="container digital-hero-content">
        <TextReveal delay={200}>
          <div className="digital-hero-eyebrow">
            Digital Archive
          </div>
        </TextReveal>

        <TextReveal delay={300}>
          <div className="digital-hero-index">
            <span>09</span> / 10 — DIGITAL HERITAGE
          </div>
        </TextReveal>

        <div className="digital-hero-divider" />

        <TextReveal delay={400}>
          <h1 className="digital-hero-title">
            Digital <span className="gold">Heritage</span>
          </h1>
        </TextReveal>

        <TextReveal delay={600}>
          <p className="digital-hero-description">
            Preserving and sharing T'boli culture through digital technology —
            interactive maps, timelines, galleries, and audio archives that
            carry ancestral knowledge into the digital age.
          </p>
        </TextReveal>

        <TextReveal delay={800}>
          <div className="digital-hero-scroll">
            <span className="mono-label">Scroll</span>
            <div className="digital-hero-scroll-icon">
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

export default DigitalHeritageHero;
