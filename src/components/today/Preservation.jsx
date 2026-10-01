import { preservationEfforts } from '../../data/contemporary';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Preservation = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="preservation-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">
          {preservationEfforts.title}
        </h2>
        <p className="section-description text-center">
          Ongoing efforts to preserve and revitalize Tboli culture
        </p>

        <div
          className={`preservation-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="preservation-image">
            <ImageReveal
              src="/images/today/preservation.webp"
              alt="Cultural preservation"
            />
          </div>

          <div className="preservation-programs">
            {preservationEfforts.programs.map((program) => (
              <div key={program.name} className="program-card">
                <h3 className="h3">{program.name}</h3>
                <p>{program.description}</p>
                <div className="program-focus">
                  <strong>Focus Areas:</strong> {program.focusAreas.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preservation;
