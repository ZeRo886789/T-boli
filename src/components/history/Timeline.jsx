import { useState } from 'react';
import { timelineEvents } from '../../data/history';
import TimelineItem from './TimelineItem';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const categories = [
    { id: 'all', name: 'All Periods' },
    { id: 'origins', name: 'Early Settlement' },
    { id: 'colonial', name: 'Colonial Period' },
    { id: 'modern', name: 'Modern Era' },
    { id: 'development', name: 'Development' },
    { id: 'preservation', name: 'Preservation' },
  ];

  const filteredEvents =
    selectedCategory === 'all'
      ? timelineEvents
      : timelineEvents.filter((event) => event.category === selectedCategory);

  return (
    <section className="timeline-section" ref={ref}>
      <div className="container">
        <div
          className={`timeline-filters ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`timeline-filter-btn ${
                selectedCategory === cat.id ? 'active' : ''
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {filteredEvents.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
