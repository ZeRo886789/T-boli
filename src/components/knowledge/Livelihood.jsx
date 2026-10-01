import { livelihood } from '../../data/knowledge';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Livelihood = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="livelihood-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{livelihood.title}</h2>

        <div
          className={`livelihood-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="livelihood-image">
            <ImageReveal
              src="/images/knowledge/livelihood.webp"
              alt="Tboli livelihood"
            />
          </div>

          <div className="livelihood-activities">
            {livelihood.activities.map((activity) => (
              <div key={activity.name} className="livelihood-item">
                <h3 className="h3">{activity.name}</h3>
                <p>{activity.description}</p>
                {activity.crops && (
                  <div className="livelihood-detail">
                    <strong>Crops:</strong> {activity.crops.join(', ')}
                  </div>
                )}
                {activity.methods && (
                  <div className="livelihood-detail">
                    <strong>Methods:</strong> {activity.methods.join(', ')}
                  </div>
                )}
                {activity.tools && (
                  <div className="livelihood-detail">
                    <strong>Tools:</strong> {activity.tools.join(', ')}
                  </div>
                )}
                {activity.products && (
                  <div className="livelihood-detail">
                    <strong>Products:</strong> {activity.products.join(', ')}
                  </div>
                )}
                {activity.significance && (
                  <div className="livelihood-detail">
                    <strong>Significance:</strong> {activity.significance}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Livelihood;
