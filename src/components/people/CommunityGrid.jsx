import CommunityCard from './CommunityCard';
import { communities } from '../../data/communities';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CommunityGrid = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="community-grid-section" ref={ref}>
      <div className="community-background" />
      <div className="community-overlay" />
      <div className="community-pattern" />

      <div className="container community-container">
        <div className={`community-heading ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="community-heading-text">
            <span className="people-eyebrow">LAKE COUNTRY AND COMMUNITY LIFE</span>
            <h2>Land, lake, and belonging</h2>
            <p>
              The T’boli are associated with the upland and lake landscapes of South Cotabato,
              especially around Lake Sebu. The three lake locations are best understood as part of
              a shared geographic and cultural setting rather than as three separate ethnic communities.
            </p>
            <div className="community-heading-line" />
          </div>
        </div>

        <div className={`community-grid ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          {communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGrid;