import { food } from '../../data/culture';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FoodSection = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="food-section" id="food" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{food.title}</h2>
        <p className="section-description text-center">
          Traditional Tboli cuisine passed down through generations
        </p>

        <div
          className={`food-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="food-image">
            <ImageReveal src="/images/culture/food.webp" alt="Tboli traditional food" />
          </div>
          <div className="food-content">
            {food.dishes.map((dish) => (
              <div key={dish.name} className="food-item">
                <h3 className="h3">{dish.name}</h3>
                <p>{dish.description}</p>
                <p>
                  <strong>Occasion:</strong> {dish.occasion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
