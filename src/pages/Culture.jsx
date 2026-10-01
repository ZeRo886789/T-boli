import CultureHero from '../components/culture/CultureHero';
import CultureGallery from '../components/culture/CultureGallery';
import ClothingSection from '../components/culture/ClothingSection';
import CraftsSection from '../components/culture/CraftsSection';
import MusicSection from '../components/culture/MusicSection';
import FoodSection from '../components/culture/FoodSection';
import BeliefsSection from '../components/culture/BeliefsSection';
import '../styles/culture.css';

const Culture = () => {
  return (
    <>
      <CultureHero />
      <section className="culture-page-header">
        <div className="container">
          <div className="section-label">Ways of Life</div>
          <h2 className="section-title text-center">Cultural Expressions</h2>
          <p className="culture-page-description">
            Every thread, song, and rite carries the memory of the T'boli
            ancestors, sustaining a living heritage in Southern Cotabato.
          </p>
        </div>
      </section>
      <CultureGallery />
      <ClothingSection />
      <CraftsSection />
      <MusicSection />
      <FoodSection />
      <BeliefsSection />
    </>
  );
};

export default Culture;
