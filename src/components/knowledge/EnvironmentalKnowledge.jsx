import { environmentalKnowledge } from '../../data/knowledge';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const EnvironmentalKnowledge = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="environmental-knowledge-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">
          {environmentalKnowledge.title}
        </h2>
        <p className="section-description text-center">
          Traditional wisdom for living in harmony with nature
        </p>

        <div
          className={`env-knowledge-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="env-knowledge-image">
            <ImageReveal
              src="/images/knowledge/environment.webp"
              alt="Tboli environmental knowledge"
            />
          </div>

          <div className="env-knowledge-content">
            {environmentalKnowledge.sustainablePractices.map((practice) => (
              <div key={practice.name} className="env-practice">
                <h3 className="h3">{practice.name}</h3>
                <p>{practice.description}</p>
                <ul>
                  {practice.practices.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="climate-indicators mt-xl">
          <h3 className="h3 text-center">Traditional Climate Indicators</h3>
          <div className="indicators-grid">
            {environmentalKnowledge.climateIndicators.map((indicator) => (
              <div key={indicator.indicator} className="indicator-card">
                <h4 className="h4">{indicator.indicator}</h4>
                <p>{indicator.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalKnowledge;
