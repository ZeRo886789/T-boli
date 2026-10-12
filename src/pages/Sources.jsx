import { useRef } from 'react';
import { sources, externalLinks } from '../data/sources';
import useScrollAnimation from '../hooks/useScrollAnimation';
import usePageMotion from '../hooks/usePageMotion';
import '../styles/sources.css';

const Sources = () => {
  const pageRef = useRef(null);
  const [scrollRef, isVisible] = useScrollAnimation({ threshold: 0.2 });
  usePageMotion(pageRef);

  return (
    <section className="sources-section" ref={pageRef}>
      <div className="container">
        <h1 className="h1 section-title text-center">Sources and References</h1>
        <p className="section-description text-center">
          Documentation and resources used in creating this digital heritage archive.
        </p>

        <div ref={scrollRef} className={`sources-grid ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          {sources.categories.map((category) => (
            <div key={category.id} className="sources-category" data-motion-item>
              <h2 className="h2">{category.name}</h2>
              <div className="sources-list">
                {category.sources.map((source) => (
                  <div key={source.id} className="source-item">
                    <h3 className="h3">{source.title}</h3>
                    {'author' in source && <p><strong>Author:</strong> {source.author}</p>}
                    {'year' in source && <p><strong>Year or note:</strong> {source.year}</p>}
                    {'description' in source && <p>{source.description}</p>}
                    {'url' in source && (
                      <p>
                        <strong>URL:</strong>{' '}
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          {source.url}
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="acknowledgments mt-xl" data-motion="reveal">
          <h2 className="h2">Research note</h2>
          <ul className="acknowledgments-list">
            {sources.acknowledgments.map((ack) => (
              <li key={ack}>{ack}</li>
            ))}
          </ul>
        </div>

        <div className="external-links mt-xl" data-motion="reveal">
          <h2 className="h2">External resources</h2>
          <div className="external-links-grid">
            {externalLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources;
