import { useState } from 'react';
import { timelineEvents } from '../../data/history';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const DigitalTimeline = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedEra, setSelectedEra] = useState('all');

  const eras = [
    { id: 'all', name: 'All Eras' },
    { id: 'origins', name: 'Early Settlement' },
    { id: 'colonial', name: 'Colonial Era' },
    { id: 'modern', name: 'Modern Era' },
    { id: 'development', name: 'Development' },
    { id: 'preservation', name: 'Preservation' },
  ];

  const filteredEvents =
    selectedEra === 'all'
      ? timelineEvents
      : timelineEvents.filter((event) => event.category === selectedEra);

  const handleSelect = (eraId) => {
    setSelectedEra(eraId);
  };

  return (
    <section className="digital-timeline-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Digital Timeline</h2>
        <p className="section-description text-center">
          Interactive timeline of Tboli history
        </p>

        <div
          className={`timeline-filters ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => handleSelect(era.id)}
              className={`timeline-era-btn ${
                selectedEra === era.id ? 'active' : ''
              }`}
            >
              {era.name}
            </button>
          ))}
        </div>

        <div className="digital-timeline">
          <div className="timeline-line" />
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`timeline-event ${
                index % 2 === 0 ? 'left' : 'right'
              }`}
            >
              <div className="timeline-event-content">
                <span className="timeline-event-year">{event.year}</span>
                <h3 className="h3">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalTimeline;
