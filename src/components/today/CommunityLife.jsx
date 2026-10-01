import { contemporaryLife } from '../../data/contemporary';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CommunityLife = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const communitySection = contemporaryLife.sections[1];

  return (
    <section className="community-life-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{communitySection.title}</h2>
        <p className="section-description text-center">
          {communitySection.description}
        </p>

        <div
          className={`community-life-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="community-life-image">
            <ImageReveal
              src="/images/today/community.webp"
              alt="Contemporary Tboli community life"
            />
          </div>

          <div className="community-life-content">
            {communitySection.initiatives.map((initiative) => (
              <div key={initiative} className="initiative-item">
                <span className="initiative-bullet" />
                <span className="initiative-text">{initiative}</span>
              </div>
            ))}

            <div className="community-achievements mt-md">
              <h3 className="h3">Community Achievements</h3>
              {communitySection.achievements.map((achievement) => (
                <div key={achievement} className="achievement-item">
                  <span className="achievement-bullet" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLife;
