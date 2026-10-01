import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const InteractiveMap = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [activeMarker, setActiveMarker] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const markers = [
    {
      id: 'lake-sebling',
      name: 'Lake Sebu',
      lat: 6.4333,
      lng: 124.8667,
      description:
        'The heart of Tboli territory with three pristine lakes and rich cultural heritage.',
    },
    {
      id: 'tboli-mun',
      name: 'Tboli Municipality',
      lat: 6.15,
      lng: 124.95,
      description:
        'The main municipality where many Tboli communities reside.',
    },
    {
      id: 'mt-pandan',
      name: 'Mount Pandan',
      lat: 6.2833,
      lng: 124.75,
      description:
        'Sacred mountain that holds significant spiritual importance to the Tboli people.',
    },
  ];

  const handleMarkerClick = (markerData) => {
    setActiveMarker(markerData);
    setShowModal(true);
  };

  const handleClose = () => {
    setActiveMarker(null);
    setShowModal(false);
  };

  return (
    <section className="interactive-map-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Interactive Cultural Map</h2>
        <p className="section-description text-center">
          Explore the locations of Tboli communities and cultural sites
        </p>

        <div
          className={`map-wrapper ${
            isVisible ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <div className="interactive-map">
            <svg viewBox="0 0 500 400" className="map-svg">
              <rect
                x="0"
                y="0"
                width="500"
                height="400"
                fill="#e9f5e9"
                stroke="#ddd"
                strokeWidth="1"
              />

              <path
                d="M100,50 C130,40 160,60 190,70 C220,80 250,100 270,90 C290,80 310,100 330,110 C350,120 370,140 380,160 C390,180 385,200 375,220 C365,240 345,260 330,270 C315,280 295,290 275,295 C255,300 235,305 215,300 C195,295 175,290 155,280 C135,270 115,260 100,245 C85,230 75,210 80,190 C85,170 95,155 105,140 C115,125 125,105 110,85 C125,75 140,70 160,60 C130,70 110,65 100,50 Z"
                fill="#1a5d3a"
                opacity="0.3"
              />

              {markers.map((marker) => (
                <g key={marker.id}>
                  <circle
                    cx={100 + marker.lat * 30}
                    cy={100 + marker.lng * 25}
                    r="8"
                    fill={marker.id === activeMarker?.id ? '#d4a76a' : '#1a5d3a'}
                    stroke="#fff"
                    strokeWidth="2"
                    onClick={() => handleMarkerClick(marker)}
                    style={{ cursor: 'pointer' }}
                  />
                    <text
                    x={110 + marker.lat * 30}
                    y={100 + marker.lng * 25}
                    fontSize="11"
                    fill="#1a5d3a"
                  >
                    {marker.name}
                  </text>
                </g>
              ))}
            </svg>

            {showModal && activeMarker && (
              <div
                className="map-modal-overlay"
                onClick={handleClose}
              >
                <div
                  className="map-modal"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="h3">{activeMarker.name}</h3>
                  <p>{activeMarker.description}</p>
                  <button onClick={handleClose} className="btn btn-primary">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
