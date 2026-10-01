import { useState } from 'react';
import { historicalArtifacts } from '../../data/history';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const HistoricalGallery = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  const handleSelect = (artifact) => {
    setSelectedArtifact(artifact);
  };

  const handleClose = () => {
    setSelectedArtifact(null);
  };

  return (
    <section className="historical-gallery-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Historical Artifacts</h2>

        <div
          className={`artifacts-grid ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {historicalArtifacts.map((artifact) => (
            <button
              key={artifact.id}
              className={`artifact-card ${
                selectedArtifact?.id === artifact.id ? 'selected' : ''
              }`}
              onClick={() => handleSelect(artifact)}
            >
              <div className="artifact-image">
                <ImageReveal
                  src="/images/history/history-02.webp"
                  alt={artifact.name}
                />
              </div>
              <h3 className="h3">{artifact.name}</h3>
              <p className="artifact-period">{artifact.period}</p>
            </button>
          ))}
        </div>

        {selectedArtifact && (
          <div className="artifact-modal-overlay" onClick={handleClose}>
            <div
              className="artifact-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="artifact-modal-close" onClick={handleClose}>
                ×
              </button>
              <div className="artifact-modal-image">
                <ImageReveal
                  src="/images/history/history-03.webp"
                  alt={selectedArtifact.name}
                />
              </div>
              <div className="artifact-modal-content">
                <h2 className="h2">{selectedArtifact.name}</h2>
                <p>{selectedArtifact.description}</p>
                <p>
                  <strong>Period:</strong> {selectedArtifact.period}
                </p>
                <p>
                  <strong>Materials:</strong> {selectedArtifact.material}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HistoricalGallery;
