import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { tnalakInfo } from '../../data/tnalak';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const WeavingProcess = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef(null);
  const steps = tnalakInfo.weavingProcess;
  const activeStep = steps[activeIndex];

  useLayoutEffect(() => {
    if (!panelRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power3.out', clearProps: 'transform' },
      );
    }, panelRef);

    return () => context.revert();
  }, [activeIndex]);

  const goTo = (index) => {
    setActiveIndex(Math.max(0, Math.min(steps.length - 1, index)));
  };

  return (
    <section className="weaving-process-section" ref={ref}>
      <div className="container">
        <header className="motion-stepper-section__header">
          <p className="motion-card__eyebrow">Interactive guide</p>
          <h2 className="section-title text-center">The weaving process</h2>
        </header>

        <div className={`weaving-process ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="motion-stepper">
            <nav className="motion-stepper__nav" aria-label="Choose a weaving step">
              {steps.map((step, index) => (
                <button
                  key={step.step}
                  type="button"
                  className="motion-step-button"
                  aria-current={index === activeIndex ? 'step' : undefined}
                  onClick={() => goTo(index)}
                >
                  <span className="motion-step-button__number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{step.title}</span>
                </button>
              ))}
            </nav>

            <div className="motion-stepper__panel" ref={panelRef} aria-live="polite">
              <div className="motion-stepper__image">
                <img
                  src="/images/tnalak/tnalak-weaving.webp"
                  alt={activeStep.title}
                  loading="lazy"
                />
              </div>

              <div className="motion-stepper__meta">
                <span>Step {String(activeIndex + 1).padStart(2, '0')}</span>
                <span>{String(steps.length).padStart(2, '0')} steps</span>
              </div>

              <h3 className="motion-stepper__title">{activeStep.title}</h3>
              <p className="motion-stepper__description">{activeStep.description}</p>

              <div className="motion-stepper__controls">
                <button
                  type="button"
                  className="motion-icon-button"
                  aria-label="Previous step"
                  onClick={() => goTo(activeIndex - 1)}
                  disabled={activeIndex === 0}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="motion-icon-button"
                  aria-label="Next step"
                  onClick={() => goTo(activeIndex + 1)}
                  disabled={activeIndex === steps.length - 1}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeavingProcess;
