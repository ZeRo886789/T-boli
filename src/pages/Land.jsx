import { useRef } from 'react';
import LandHero from '../components/land/LandHero';
import MindanaoMap from '../components/land/MindanaoMap';
import GeographicInfo from '../components/land/GeographicInfo';
import usePageMotion from '../hooks/usePageMotion';

const Land = () => {
  const pageRef = useRef(null);
  usePageMotion(pageRef);

  return (
    <main className="land-page" ref={pageRef}>
      <LandHero />

      <section className="land-location-section">
        <img
          src="/images/land/in-the-highlands-of-mindanao.png"
          alt=""
          className="land-location-bg"
          aria-hidden="true"
          loading="lazy"
        />

        <div className="land-location-overlay" />

        <div className="container">
          <div className="land-location-grid">
            <div className="land-location-copy">
              <span className="section-label">
                LOCATION
              </span>

              <h2>
                In the Highlands
                <br />
                <span>of Mindanao</span>
              </h2>

              <div className="golden-line" />

              <p>
                The T'boli people inhabit the mountainous
                areas of South Cotabato, Mindanao, in the
                Philippines. Their ancestral domain is
                characterized by rolling hills, forests,
                rivers, and the interconnected lakes of
                Lake Sebu.
              </p>

              <div className="land-location-facts">
                <div>
                  <span>REGION</span>
                  <strong>SOCCSKSARGEN</strong>
                </div>

                <div>
                  <span>ISLAND</span>
                  <strong>MINDANAO</strong>
                </div>

                <div>
                  <span>PROVINCE</span>
                  <strong>SOUTH COTABATO</strong>
                </div>
              </div>
            </div>

            <div className="land-location-map">
              <MindanaoMap />
            </div>
          </div>
        </div>
      </section>

      <GeographicInfo />
    </main>
  );
};

export default Land;
