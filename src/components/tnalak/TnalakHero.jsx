import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const TnalakHero = () => {
  return (
    <section className="tnalak-hero-section">
      <div className="tnalak-hero-background">
        <ImageReveal
          src="/images/tnalak/t%27nalak.png"
          alt="Tnalak fabric"
          className="tnalak-hero-image"
          reveal={false}
          lazy={false}
        />
        <div className="tnalak-hero-overlay" />
      </div>

      <div className="container tnalak-hero-content">
        <TextReveal delay={200}>
          <div className="tnalak-hero-eyebrow">Sacred Textile</div>
        </TextReveal>

        <TextReveal delay={300}>
          <div className="tnalak-hero-index">
            <span>03</span> / 05 — TNALAK
          </div>
        </TextReveal>

        <div className="tnalak-hero-divider" />

        <TextReveal delay={400}>
          <h1 className="tnalak-hero-title">
            Tnalak: <span className="gold">Dream</span> Weaving
          </h1>
        </TextReveal>

        <TextReveal delay={600}>
          <p className="tnalak-hero-description">
            The sacred art of Tnalak weaving, passed down through dreams —
            where patterns revealed by the goddess Fion breathe ancestral
            stories into cloth.
          </p>
        </TextReveal>

        <TextReveal delay={800}>
          <div className="tnalak-hero-scroll">
            <span className="mono-label">Scroll</span>
            <div className="tnalak-hero-scroll-icon">
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

export default TnalakHero;
