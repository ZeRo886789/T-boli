import { Link } from 'react-router-dom';
import { culturalCategories } from '../../data/culture';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CultureGallery = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="culture-gallery-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Cultural Categories</h2>
        <p className="section-description text-center">
          Explore the different aspects of Tboli culture
        </p>

        <div
          className={`culture-gallery-grid ${
            isVisible ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          {culturalCategories.map((category) => (
            <Link
              to={`/culture#${category.id}`}
              key={category.id}
              className="culture-gallery-card"
            >
              <div className="culture-gallery-image">
                <ImageReveal src={category.image} alt={category.name} />
                <div className="culture-gallery-overlay" />
              </div>
              <div className="culture-gallery-content">
                <h3 className="h3">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureGallery;
