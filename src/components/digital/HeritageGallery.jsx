import { useState } from 'react';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const HeritageGallery = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 'tnalak-1', category: 'tnalak', src: '/images/tnalak/tnalak-01.webp', title: 'Tnalak Fabric' },
    { id: 'tnalak-2', category: 'tnalak', src: '/images/tnalak/tnalak-02.webp', title: 'Tnalak Weaving' },
    { id: 'clothing', category: 'culture', src: '/images/culture/clothing.webp', title: 'Traditional Clothing' },
    { id: 'jewelry', category: 'culture', src: '/images/culture/jewelry.webp', title: 'Traditional Jewelry' },
    { id: 'community', category: 'people', src: '/images/people/tboli-community.webp', title: 'Community Gathering' },
    { id: 'portraits', category: 'people', src: '/images/people/portraits.webp', title: 'Portraits' },
    { id: 'history-1', category: 'history', src: '/images/history/history-01.webp', title: 'Historical Photo 1' },
    { id: 'history-2', category: 'history', src: '/images/history/history-02.webp', title: 'Historical Photo 2' },
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'tnalak', name: 'Tnalak' },
    { id: 'culture', name: 'Culture' },
    { id: 'people', name: 'People' },
    { id: 'history', name: 'History' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className="heritage-gallery-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Heritage Gallery</h2>

        <div
          className={`gallery-filters ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`gallery-filter-btn ${
                activeFilter === filter.id ? 'active' : ''
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              className="gallery-item"
              onClick={() => handleImageClick(item)}
            >
              <ImageReveal src={item.src} alt={item.title} />
              <div className="gallery-item-overlay">
                <span className="gallery-item-title">{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-modal-overlay" onClick={handleClose}>
            <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
              <button className="gallery-modal-close" onClick={handleClose}>
                ×
              </button>
              <div className="gallery-modal-content">
                <ImageReveal src={selectedImage.src} alt={selectedImage.title} />
                <h3 className="h3">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeritageGallery;
