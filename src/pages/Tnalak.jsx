import { useRef } from 'react';
import TnalakHero from '../components/tnalak/TnalakHero';
import TnalakStory from '../components/tnalak/TnalakStory';
import WeavingProcess from '../components/tnalak/WeavingProcess';
import TnalakGallery from '../components/tnalak/TnalakGallery';
import TnalakDetail from '../components/tnalak/TnalakDetail';
import usePageMotion from '../hooks/usePageMotion';
import '../styles/tnalak.css';

const Tnalak = () => {
  const pageRef = useRef(null);
  usePageMotion(pageRef);

  return (
    <main ref={pageRef}>
      <TnalakHero />
      <section className="tnalak-page-header">
        <div className="container">
          <div className="section-label">Sacred Art</div>
          <h2 className="section-title">The Dream Weaving Tradition</h2>
        </div>
      </section>
      <TnalakStory />
      <WeavingProcess />
      <TnalakGallery />
      <TnalakDetail />
    </main>
  );
};

export default Tnalak;
