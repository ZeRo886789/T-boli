import { contemporaryLife } from '../../data/contemporary';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const educationSection = contemporaryLife.sections[0];

  return (
    <section className="education-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{educationSection.title}</h2>
        <p className="section-description text-center">
          {educationSection.description}
        </p>

        <div
          className={`education-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="education-image">
            <ImageReveal
              src="/images/today/education.webp"
              alt="Tboli education"
            />
          </div>

          <div className="education-content">
            <h3 className="h3">Educational Initiatives</h3>
            <div className="initiatives-list">
              {educationSection.initiatives.map((initiative) => (
                <div key={initiative} className="initiative-item">
                  <span className="initiative-bullet" />
                  <span className="initiative-text">{initiative}</span>
                </div>
              ))}
            </div>

            <div className="education-challenges mt-md">
              <h4 className="h4">Current Challenges</h4>
              <ul>
                {educationSection.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
