import { useRef } from 'react';
import HistoryHero from '../components/history/HistoryHero';
import Timeline from '../components/history/Timeline';
import HistoricalGallery from '../components/history/HistoricalGallery';
import usePageMotion from '../hooks/usePageMotion';
import '../styles/history.css';

const History = () => {
  const pageRef = useRef(null);
  usePageMotion(pageRef);

  return (
    <main ref={pageRef}>
      <HistoryHero />
      <Timeline />
      <HistoricalGallery />
    </main>
  );
};

export default History;
