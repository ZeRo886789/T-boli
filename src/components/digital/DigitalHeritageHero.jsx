import ImageReveal from '../common/ImageReveal';
import TextReveal from '../common/TextReveal';

const DigitalHeritageHero = () => {
  return (
    <section className="digital-hero-section">
      <div className="digital-hero-background">
        <ImageReveal
          src="/images/tnalak/tnalak-02.webp"
          alt="Digital heritage background"
          className="digital-hero-image"
          reveal={false}
        />
        <div className="digital-hero-overlay" />
      </div>

      <div className="container digital-hero-content">
        <TextReveal delay={200}>
          <h1 className="hero-title">Digital Heritage</h1>
        </TextReveal>
        <TextReveal delay={400}>
          <p className="hero-subtitle">
            Preserving and sharing Tboli culture through digital technology
          </p>
        </TextReveal>
      </div>
    </section>
  );
};

export default DigitalHeritageHero;
