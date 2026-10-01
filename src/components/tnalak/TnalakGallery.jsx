import { useState } from 'react';
import { masterWeavers } from '../../data/tnalak';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const TnalakGallery = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedWeaver, setSelectedWeaver] = useState(null);

  const handleViewProfile = (weaver) => {
    setSelectedWeaver(weaver);
  };

  const handleClose = () => {
    setSelectedWeaver(null);
  };

  return (
    <section className="tnalak-gallery-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Master Weavers</h2>

        <div
          className={`tnalak-gallery-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {masterWeavers.map((weaver) => (
            <div key={weaver.id} className="weaver-card">
              <div className="weaver-image">
                <ImageReveal src={weaver.image} alt={weaver.name} />
              </div>
              <div className="weaver-info">
                <h3 className="h3">{weaver.name}</h3>
                <p className="weaver-title">{weaver.title}</p>
                <p>{weaver.description.slice(0, 80)}...</p>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => handleViewProfile(weaver)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedWeaver && (
          <div className="weaver-modal-overlay" onClick={handleClose}>
            <div className="weaver-modal" onClick={(e) => e.stopPropagation()}>
              <button className="weaver-modal-close" onClick={handleClose}>
                ×
              </button>
              <div className="weaver-modal-content">
                <div className="weaver-modal-image">
                  <ImageReveal
                    src={selectedWeaver.image}
                    alt={selectedWeaver.name}
                  />
                </div>
                <div className="weaver-modal-info">
                  <h2 className="h2">{selectedWeaver.name}</h2>
                  <p className="weaver-title">{selectedWeaver.title}</p>
                  <p>{selectedWeaver.description}</p>
                  <div className="weaver-recognition">
                    <h4 className="h4">Recognition</h4>
                    <ul>
                      {selectedWeaver.recognition.map((rec) => (
                        <li key={rec}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TnalakGallery;
