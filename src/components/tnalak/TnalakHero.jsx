import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const TnalakHero = () => {
  return (
    <section className="tnalak-hero-section">
      <div className="tnalak-hero-background" data-motion="parallax-slow">
        <ImageReveal
          src="/images/tnalak/t%27nalak.png"
          alt="T’nalak textile detail"
          className="tnalak-hero-image"
          reveal={false}
          lazy={false}
        />
        <div className="tnalak-hero-overlay" />
      </div>

      <div className="container tnalak-hero-content">
        <TextReveal delay={200}>
          <div className="tnalak-hero-eyebrow">T’BOLI TEXTILE TRADITION</div>
        </TextReveal>

        <TextReveal delay={300}>
          <div className="tnalak-hero-index">
            <span>03</span> / 05 — T’NALAK
          </div>
        </TextReveal>

        <div className="tnalak-hero-divider" />

        <TextReveal delay={400}>
          <h1 className="tnalak-hero-title">
            T’nalak: <span className="gold">Pattern</span>, fiber, and memory
          </h1>
        </TextReveal>

        <TextReveal delay={600}>
          <p className="tnalak-hero-description">
            T’nalak is a T’boli textile tradition made from abaca fiber, carefully prepared,
            dyed, and woven into patterns that carry identity, story, and technical skill.
          </p>
        </TextReveal>

        <TextReveal delay={800}>
          <div className="tnalak-hero-scroll">
            <span className="mono-label">Scroll</span>
            <div className="tnalak-hero-scroll-icon">
              <svg width="7" height="11" viewBox="0 0 7 11" fill="currentColor" aria-hidden="true">
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
