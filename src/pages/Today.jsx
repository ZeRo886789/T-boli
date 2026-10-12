import { useRef } from 'react';
import TodayHero from '../components/today/TodayHero';
import CommunityLife from '../components/today/CommunityLife';
import Education from '../components/today/Education';
import ContemporaryPractices from '../components/today/ContemporaryPractices';
import CurrentChallenges from '../components/today/CurrentChallenges';
import Preservation from '../components/today/Preservation';
import usePageMotion from '../hooks/usePageMotion';
import '../styles/today.css';

const Today = () => {
  const pageRef = useRef(null);
  usePageMotion(pageRef);

  return (
    <main ref={pageRef}>
      <TodayHero />
      <section className="today-page-header">
        <div className="container">
          <div className="section-label">Present Day</div>
          <h2 className="section-title">Contemporary T'boli Life</h2>
        </div>
      </section>
      <CommunityLife />
      <Education />
      <ContemporaryPractices />
      <CurrentChallenges />
      <Preservation />
    </main>
  );
};

export default Today;
