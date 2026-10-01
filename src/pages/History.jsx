import HistoryHero from '../components/history/HistoryHero';
import Timeline from '../components/history/Timeline';
import HistoricalGallery from '../components/history/HistoricalGallery';
import '../styles/history.css';

const History = () => {
  return (
    <>
      <HistoryHero />
      <Timeline />
      <HistoricalGallery />
    </>
  );
};

export default History;
