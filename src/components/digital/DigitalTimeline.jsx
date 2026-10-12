import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { timelineEvents } from '../../data/history';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const categories = [
  { id: 'all', name: 'All periods' },
  { id: 'origins', name: 'Early settlement' },
  { id: 'colonial', name: 'Colonial period' },
  { id: 'modern', name: 'Modern era' },
  { id: 'development', name: 'Development' },
  { id: 'preservation', name: 'Preservation' },
];

function readEventText(event) {
  return [event.title, event.year, event.date, event.category, event.description]
    .filter(Boolean)
    .join(' ')
    .toLocaleLowerCase();
}

const DigitalTimeline = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const listRef = useRef(null);

  const visibleEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return timelineEvents.filter((event) => {
      const categoryMatches = selectedCategory === 'all' || event.category === selectedCategory;
      const searchMatches = !normalizedQuery || readEventText(event).includes(normalizedQuery);
      return categoryMatches && searchMatches;
    });
  }, [query, selectedCategory]);

  useLayoutEffect(() => {
    if (!listRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = gsap.context(() => {
      const items = listRef.current?.querySelectorAll('[data-timeline-motion-item]');
      if (!items?.length) return;

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 15 },
        { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.045, ease: 'power3.out', clearProps: 'transform' },
      );
    }, listRef);

    return () => context.revert();
  }, [visibleEvents]);

  const activeCategoryLabel =
    categories.find((cat) => cat.id === selectedCategory)?.name ?? 'Archive';

  return (
    <section className="timeline-section" ref={ref}>
      <div className="container">
        <div className={`timeline-filters ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="motion-search">
            <span className="motion-search__label">Search timeline</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a year, title, or subject…"
              aria-label="Search historical events"
            />
          </div>
          {query && (
            <button type="button" className="motion-link motion-search__clear" onClick={() => setQuery('')}>
              Clear search
            </button>
          )}
        </div>

        <div className="motion-filter-list" role="group" aria-label="Filter timeline by period">
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? timelineEvents.length
                : timelineEvents.filter((event) => event.category === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`motion-filter${isActive ? ' is-active' : ''}`}
                aria-pressed={isActive}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenId(null);
                }}
              >
                <span>{cat.name}</span>
                <span className="motion-filter__count">{count}</span>
              </button>
            );
          })}
        </div>

        <p className="motion-timeline-demo__result-count" aria-live="polite">
          {visibleEvents.length} {visibleEvents.length === 1 ? 'event' : 'events'} found · {activeCategoryLabel}
        </p>

        {visibleEvents.length === 0 ? (
          <div className="motion-empty-state">
            <p className="motion-empty-state__title">No matching events</p>
            <p>Try a different search term or choose another period.</p>
            <button
              type="button"
              className="motion-button motion-button--outline"
              onClick={() => {
                setQuery('');
                setSelectedCategory('all');
              }}
            >
              <span className="motion-button__label">Reset filters</span>
              <span className="motion-button__arrow" aria-hidden="true">↺</span>
            </button>
          </div>
        ) : (
          <div className="motion-timeline" ref={listRef}>
            {visibleEvents.map((event) => {
              const eventId = event.id;
              const expanded = openId === eventId;
              const detailsId = `digital-detail-${event.id}`;
              const details = event.longDescription || event.description;

              return (
                <article
                  className="motion-timeline__item"
                  key={eventId}
                  data-timeline-motion-item
                  aria-current={expanded ? 'true' : undefined}
                >
                  <span className="motion-timeline__marker" aria-hidden="true" />
                  <div className="motion-card motion-timeline__card">
                    <div className="motion-card__content">
                      <p className="motion-timeline__date">{event.year}</p>
                      <p className="motion-card__eyebrow">{activeCategoryLabel}</p>
                      <button
                        className="motion-timeline__toggle"
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={detailsId}
                        onClick={() => setOpenId(expanded ? null : eventId)}
                      >
                        <span className="motion-timeline__toggle-title">{event.title}</span>
                        <span className="motion-timeline__toggle-icon" aria-hidden="true">+</span>
                      </button>
                      <div id={detailsId} className="motion-timeline__details" hidden={!expanded}>
                        {event.imageUrl && (
                          <div className="motion-timeline__detail-image">
                            <img src={event.imageUrl} alt={event.title} loading="lazy" />
                          </div>
                        )}
                        <p>{details}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default DigitalTimeline;
