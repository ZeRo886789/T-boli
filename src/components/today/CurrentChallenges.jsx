import useScrollAnimation from '../../hooks/useScrollAnimation';
import { currentChallenges } from '../../data/contemporary';
import ImageReveal from '../common/ImageReveal';

const CurrentChallenges = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="current-challenges-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">
          {currentChallenges.title}
        </h2>
        <p className="section-description text-center">
          Challenges facing the Tboli community today and ongoing efforts to
          address them
        </p>

        <div
          className={`challenges-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="challenges-image">
            <ImageReveal
              src="/images/today/preservation.webp"
              alt="Preservation efforts"
            />
          </div>

          <div className="challenges-list">
            {currentChallenges.challenges.map((challenge) => (
              <div key={challenge.id} className="challenge-item">
                <h3 className="h3">{challenge.title}</h3>
                <p>{challenge.description}</p>
                <div className="challenge-details">
                  <p>
                    <strong>Impact:</strong> {challenge.impact}
                  </p>
                  <div className="efforts">
                    <strong>Efforts:</strong>
                    <ul>
                      {challenge.efforts.map((effort) => (
                        <li key={effort}>{effort}</li>
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

export default CurrentChallenges;
