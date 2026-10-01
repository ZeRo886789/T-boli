import { traditionalTechnology } from '../../data/knowledge';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const TraditionalTechnology = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="traditional-tech-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">
          {traditionalTechnology.title}
        </h2>
        <p className="section-description text-center">
          Ingenious technologies passed down through generations
        </p>

        <div
          className={`tech-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="tech-image">
            <ImageReveal
              src="/images/knowledge/technology.webp"
              alt="Traditional technology"
            />
          </div>

          <div className="tech-content">
            {traditionalTechnology.technologies.map((tech) => (
              <div key={tech.name} className="tech-item">
                <h3 className="h3">{tech.name}</h3>
                <p>{tech.description}</p>
                {tech.materials && (
                  <p>
                    <strong>Materials:</strong> {tech.materials.join(', ')}
                  </p>
                )}
                {tech.usage && (
                  <p>
                    <strong>Usage:</strong> {tech.usage}
                  </p>
                )}
                {tech.features && (
                  <ul>
                    <strong>Features:</strong>
                    {tech.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
                {tech.sources && (
                  <p>
                    <strong>Sources:</strong> {tech.sources.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalTechnology;
