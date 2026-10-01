import CommunityCard from './CommunityCard';
import { communities } from '../../data/communities';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CommunityGrid = () => {

  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <section
      className="community-grid-section"
      ref={ref}
    >

      <div className="community-background" />

      <div className="community-overlay" />

      <div className="community-pattern" />

      <div className="container community-container">

        <div
          className={`community-heading ${
            isVisible
              ? 'reveal-visible'
              : 'reveal-hidden'
          }`}
        >

          <div className="community-heading-text">

            <span className="people-eyebrow">
              OUR COMMUNITIES
            </span>

            <h2>
              Three Communities,
              <br />
              One People
            </h2>

            <p>
              The T'boli people mainly reside around the
              three sacred lakes of South Cotabato.
              Each community has its own stories,
              landscapes, and traditions, yet all are
              united by a shared identity.
            </p>

            <div className="community-heading-line" />

          </div>

        </div>

        <div
          className={`community-grid ${
            isVisible
              ? 'reveal-visible'
              : 'reveal-hidden'
          }`}
        >

          {communities.map((community) => (
            <CommunityCard
              key={community.id}
              community={community}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default CommunityGrid;