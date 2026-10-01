const TimelineItem = ({ event, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-marker">{event.id}</div>
      <div className="timeline-content">
        <div className="timeline-year">{event.year}</div>
        <h3 className="timeline-title">{event.title}</h3>
        <p className="timeline-description">{event.description}</p>
        <span className={`timeline-category ${event.category}`}>
          {event.category}
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;
