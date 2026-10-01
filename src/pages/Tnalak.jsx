import TnalakHero from '../components/tnalak/TnalakHero';
import TnalakStory from '../components/tnalak/TnalakStory';
import WeavingProcess from '../components/tnalak/WeavingProcess';
import TnalakGallery from '../components/tnalak/TnalakGallery';
import TnalakDetail from '../components/tnalak/TnalakDetail';
import '../styles/tnalak.css';

const Tnalak = () => {
  return (
    <>
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
    </>
  );
};

export default Tnalak;
