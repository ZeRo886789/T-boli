import { tnalakInfo } from '../../data/tnalak';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const TnalakStory = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="tnalak-story-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{tnalakInfo.title}</h2>
        <p className="section-description text-center">
          {tnalakInfo.subtitle}
        </p>

        <div
          className={`tnalak-story-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="tnalak-story-text">
            {tnalakInfo.originStory.map((story) => (
              <div key={story.id} className="story-item">
                <h3 className="h3">{story.title}</h3>
                <p>{story.content}</p>
              </div>
            ))}
          </div>

          <div className="tnalak-story-image">
            <ImageReveal
              src={tnalakInfo.originStory[0].image}
              alt="Tnalak origin story"
            />
          </div>
        </div>

        <div className="tnalak-patterns-summary">
          <h3 className="h3 text-center mt-xl">
            Sacred Patterns of Tnalak
          </h3>
          <div className="patterns-grid">
            {tnalakInfo.patterns.map((pattern) => (
              <div key={pattern.id} className="pattern-card">
                <div
                  className="pattern-color"
                  style={{ backgroundColor: pattern.color === 'Red' ? '#d43b3b' : pattern.color === 'Black' ? '#1a1a1a' : '#ffffff' }}
                />
                <h4 className="h4">{pattern.name}</h4>
                <p>{pattern.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TnalakStory;
