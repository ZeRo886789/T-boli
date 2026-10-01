import useScrollAnimation from '../../hooks/useScrollAnimation';
import ImageReveal from '../common/ImageReveal';

const ContemporaryPractices = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="contemporary-practices-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">
          Contemporary Cultural Practices
        </h2>
        <p className="section-description text-center">
          How Tboli traditions adapt in the modern world
        </p>

        <div
          className={`practices-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="practices-image">
            <ImageReveal
              src="/images/today/contemporary-life.webp"
              alt="Contemporary Tboli practices"
            />
          </div>

          <div className="practices-content">
            <div className="practice-item">
              <h3 className="h3">Digital Storytelling</h3>
              <p>
                Young Tboli are using digital platforms to share their stories,
                language, and cultural practices with a global audience.
              </p>
            </div>

            <div className="practice-item">
              <h3 className="h3">Modern Tnalak Designs</h3>
              <p>
                Master weavers are creating contemporary Tnalak pieces that blend
                traditional patterns with modern fashion and design applications.
              </p>
            </div>

            <div className="practice-item">
              <h3 className="h3">Cultural Tourism</h3>
              <p>
                Tboli communities are developing community-based tourism
                initiatives that allow visitors to experience authentic Tboli
                culture.
              </p>
            </div>

            <div className="practice-item">
              <h3 className="h3">Language Revitalization Apps</h3>
              <p>
                Technology is being used to create mobile apps and online
                resources for learning the Tboli language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContemporaryPractices;
