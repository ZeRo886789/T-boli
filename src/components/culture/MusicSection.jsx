import { music } from '../../data/culture';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const MusicSection = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="music-section" id="music" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{music.title}</h2>
        <p className="section-description text-center">
          The rhythmic traditions of the Tboli people
        </p>

        <div
          className={`music-content ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="music-dances">
            <h3 className="h3">Traditional Dances</h3>
            {music.dances.map((dance) => (
              <div key={dance.name} className="dance-item">
                <h4 className="h4">{dance.name}</h4>
                <p>{dance.description}</p>
                <div className="dance-details">
                  <span>
                    <strong>Instruments:</strong> {dance.instruments.join(', ')}
                  </span>
                  <span>
                    <strong>Occasions:</strong> {dance.occasions.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="music-instruments">
            <h3 className="h3">Traditional Instruments</h3>
            <div className="instruments-grid">
              {music.instruments.map((instr) => (
                <div key={instr.name} className="instrument-card">
                  <h4 className="h4">{instr.name}</h4>
                  <p>{instr.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="music-image">
            <ImageReveal src="/images/culture/music.webp" alt="Tboli music" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
