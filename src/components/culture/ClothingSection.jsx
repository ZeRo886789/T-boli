import { clothing } from '../../data/culture';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ClothingSection = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="clothing-section" id="clothing" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{clothing.title}</h2>

        <div
          className={`clothing-grid ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="clothing-image">
            <ImageReveal src="/images/culture/clothing.webp" alt="Tboli clothing" />
          </div>
          <div className="clothing-content">
            {clothing.items.map((item) => (
              <div key={item.name} className="clothing-item">
                <h3 className="h3">{item.name}</h3>
                <p>{item.description}</p>
                <p>
                  <strong>Significance:</strong> {item.significance}
                </p>
                <p>
                  <strong>Materials:</strong> {item.materials.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;
