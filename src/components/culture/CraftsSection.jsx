import { crafts } from '../../data/culture';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CraftsSection = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="crafts-section" id="crafts" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{crafts.title}</h2>

        <div
          className={`crafts-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="crafts-image">
            <ImageReveal src="/images/culture/crafts.webp" alt="Tboli crafts" />
          </div>
          <div className="crafts-content">
            {crafts.items.map((item) => (
              <div key={item.name} className="craft-item">
                <h3 className="h3">{item.name}</h3>
                <p>{item.description}</p>
                <div className="craft-details">
                  <div className="craft-detail-group">
                    <strong>Techniques:</strong>
                    <ul>
                      {item.techniques.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="craft-detail-group">
                    <strong>Products:</strong>
                    <ul>
                      {item.items.map((prod) => (
                        <li key={prod}>{prod}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsSection;
