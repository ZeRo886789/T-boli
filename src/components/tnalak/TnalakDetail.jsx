import { tnalakInfo } from '../../data/tnalak';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const TnalakDetail = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="tnalak-detail-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Tnalak Patterns & Symbolism</h2>

        <div
          className={`tnalak-detail-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="tnalak-detail-image">
            <ImageReveal
              src="/images/tnalak/tnalak-detail.webp"
              alt="Tnalak pattern detail"
            />
          </div>

          <div className="tnalak-detail-content">
            {tnalakInfo.patterns.map((pattern) => (
              <div key={pattern.id} className="pattern-detail">
                <div className="pattern-header">
                  <div
                    className="pattern-swatch"
                    style={{
                      backgroundColor:
                        pattern.color === 'Red'
                          ? '#d43b3b'
                          : pattern.color === 'Black'
                          ? '#1a1a1a'
                          : pattern.color === 'White'
                          ? '#e8e8e8'
                          : '#d43b3b',
                    }}
                  />
                  <h3 className="h3">{pattern.name}</h3>
                </div>
                <p>
                  <strong>Color:</strong> {pattern.color}
                </p>
                <p>{pattern.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TnalakDetail;
