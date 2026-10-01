import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const PeopleHero = () => {
  return (
    <section className="people-hero-section">

      <div className="people-hero-background">

        <ImageReveal
          src="/images/people/The T'boli people.png"
          alt="T'boli village"
          className="people-hero-image"
          reveal={false}
        />

        <div className="people-hero-overlay" />

      </div>

      <div className="people-hero-vignette" />

      <div className="people-hero-pattern" />

      <div className="people-hero-content">

        <TextReveal delay={150}>
          <span className="people-eyebrow">
            THE PEOPLE
          </span>
        </TextReveal>

        <TextReveal delay={250}>
          <h1>
            The T'boli
            <br />
            People
          </h1>
        </TextReveal>

        <TextReveal delay={450}>
          <p>
            A resilient and artistic indigenous community
            of South Cotabato, deeply connected to their
            land, spirituality, and rich cultural traditions.
          </p>
        </TextReveal>

        <TextReveal delay={650}>
          <div className="people-scroll">

            <span className="people-scroll-circle">
              ↓
            </span>

            <span>
              SCROLL DOWN
            </span>

          </div>
        </TextReveal>

      </div>

      <div className="hero-bottom-decoration" />

    </section>
  );
};

export default PeopleHero;