import { oralTraditions } from '../../data/knowledge';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const OralTraditions = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="oral-traditions-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">
          {oralTraditions.title}
        </h2>
        <p className="section-description text-center">
          Stories and chants passed down through generations
        </p>

        <div
          className={`oral-traditions-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="oral-traditions-image">
            <ImageReveal
              src="/images/today/education.webp"
              alt="Storyteller"
            />
          </div>

          <div className="oral-traditions-list">
            {oralTraditions.traditions.map((tradition) => (
              <div key={tradition.id} className="tradition-card">
                <h3 className="h3">{tradition.name}</h3>
                <p>{tradition.description}</p>
                <div className="tradition-meta">
                  <span>
                    <strong>Format:</strong> {tradition.format}
                  </span>
                  <span>
                    <strong>Length:</strong> {tradition.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="storytellers mt-xl">
          <h3 className="h3 text-center">Traditional Storytellers</h3>
          <div className="storytellers-list">
            {oralTraditions.storytellers.map((storyteller) => (
              <span key={storyteller} className="storyteller-tag">
                {storyteller}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OralTraditions;
