import { useRef } from 'react';
import PeopleHero from '../components/people/PeopleHero';
import CommunityGrid from '../components/people/CommunityGrid';
import usePageMotion from '../hooks/usePageMotion';

const People = () => {
  const pageRef = useRef(null);
  usePageMotion(pageRef);

  return (
    <main className="people-page" ref={pageRef}>

      <PeopleHero />

      <section
        className="heritage-section"
        style={{
          backgroundImage:
            'url("/images/people/Guardians of heritage.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <div className="heritage-texture" />

        <div className="heritage-image-shade" />

        <div className="heritage-quote">
          "Our people,
          <br />
          our stories,
          <br />
          our home."
        </div>

        <div className="container heritage-container">

          <div className="heritage-content">

            <span className="people-eyebrow">
              PEOPLE OVERVIEW
            </span>

            <h2>
              Guardians of
              <br />
              Heritage
            </h2>

            <p>
              The T'boli are known for their deep spiritual
              beliefs, strong community ties, and extraordinary
              artistry. They live in harmony with nature,
              preserving their traditions through generations.
            </p>

            <div className="heritage-line" />

            <div className="heritage-stats">

              <div className="heritage-stat">
                <strong>3</strong>
                <span>Major Communities</span>
              </div>

              <div className="heritage-stat">
                <strong>~70,000</strong>
                <span>Estimated Population</span>
              </div>

              <div className="heritage-stat">
                <strong>Rich</strong>
                <span>Cultural Heritage</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      <CommunityGrid />

      <section className="people-ending">

        <div className="people-ending-background" />

        <div className="people-ending-overlay" />

        <div className="people-ending-content">

          <span className="ending-small">
            T'BOLI DIGITAL HERITAGE
          </span>

          <p>
            "A people rooted in the land,
            <br />
            guided by their ancestors,
            <br />
            and living through their art."
          </p>

          <div className="ending-symbol">
            ✦
          </div>

        </div>

      </section>

    </main>
  );
};

export default People;