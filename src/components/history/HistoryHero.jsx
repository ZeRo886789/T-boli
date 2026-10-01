import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const HistoryHero = () => {
  return (
    <section className="history-hero-section">
      <div className="history-hero-background">
        <ImageReveal
          src="/images/history/history.png"
          alt="Historical T'boli"
          className="history-hero-image"
          reveal={false}
          lazy={false}
        />
        <div className="history-hero-overlay" />
      </div>

      <div className="container history-hero-content">
        <TextReveal delay={200}>
          <div className="history-hero-eyebrow">
            Heritage Journey — Historical Archive
          </div>
        </TextReveal>

        <TextReveal delay={300}>
          <div className="history-hero-index">
            <span>01</span> / 05 — HISTORY
          </div>
        </TextReveal>

        <div className="history-hero-divider" />

        <TextReveal delay={400}>
          <h1 className="history-hero-title">
            Historical <span className="gold">Journey</span>
          </h1>
        </TextReveal>

        <TextReveal delay={600}>
          <p className="history-hero-description">
            The story of the T'boli people from ancient times to the present —
            a continuous thread of tradition, resilience, and cultural identity
            woven into the highlands of Southern Cotabato.
          </p>
        </TextReveal>

        <TextReveal delay={800}>
          <div className="history-hero-scroll">
            <span className="mono-label">Scroll</span>
            <div className="history-hero-scroll-icon">
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

export default HistoryHero;
