import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const KnowledgeHero = () => {
  return (
    <section className="knowledge-hero-section">
      <div className="knowledge-hero-background" data-motion="parallax-slow">
        <ImageReveal
          src="/images/knowledge/knowledge.png"
          alt="T'boli language and knowledge"
          className="knowledge-hero-image"
          reveal={false}
          lazy={false}
        />
        <div className="knowledge-hero-overlay" />
      </div>

      <div className="container knowledge-hero-content">
        <TextReveal delay={200}>
          <div className="knowledge-hero-eyebrow">Indigenous Wisdom</div>
        </TextReveal>

        <TextReveal delay={300}>
          <div className="knowledge-hero-index">
            <span>04</span> / 05 — KNOWLEDGE
          </div>
        </TextReveal>

        <div className="knowledge-hero-divider" />

        <TextReveal delay={400}>
          <h1 className="knowledge-hero-title">
            Indigenous <span className="gold">Knowledge</span>
          </h1>
        </TextReveal>

        <TextReveal delay={600}>
          <p className="knowledge-hero-description">
            The rich knowledge system of the T'boli people — language, oral
            traditions, sustainable livelihood, and environmental wisdom
            preserved across generations.
          </p>
        </TextReveal>

        <TextReveal delay={800}>
          <div className="knowledge-hero-scroll">
            <span className="mono-label">Scroll</span>
            <div className="knowledge-hero-scroll-icon">
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

export default KnowledgeHero;
