import { beliefs } from '../../data/culture';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const BeliefsSection = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="beliefs-section" id="beliefs" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{beliefs.title}</h2>

        <div
          className={`beliefs-content ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="beliefs-description">{beliefs.beliefSystem}</p>

          <div className="beliefs-deities">
            <h3 className="h3">Deities and Spirits</h3>
            <div className="deities-grid">
              {beliefs.deities.map((deity) => (
                <div key={deity.name} className="deity-card">
                  <h4 className="h4">{deity.name}</h4>
                  <p>{deity.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="beliefs-rituals">
            <h3 className="h3">Traditional Rituals</h3>
            <div className="rituals-grid">
              {beliefs.rituals.map((ritual) => (
                <div key={ritual.name} className="ritual-card">
                  <h4 className="h4">{ritual.name}</h4>
                  <p>{ritual.description}</p>
                  <span>
                    <strong>Duration:</strong> {ritual.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;
