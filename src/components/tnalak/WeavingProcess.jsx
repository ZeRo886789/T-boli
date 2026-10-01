import { tnalakInfo } from '../../data/tnalak';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const WeavingProcess = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="weaving-process-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">The Weaving Process</h2>
        <p className="section-description text-center">
          Traditional steps passed down through generations
        </p>

        <div
          className={`weaving-process ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="weaving-steps">
            {tnalakInfo.weavingProcess.map((step) => (
              <div key={step.step} className="weaving-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3 className="h3">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="weaving-image-placeholder">
            <img
              src="/images/tnalak/tnalak-weaving.webp"
              alt="Traditional weaving process"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeavingProcess;
