import { sources, externalLinks } from '../data/sources';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Sources = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="sources-section" ref={ref}>
      <div className="container">
        <h1 className="h1 section-title text-center">
          Sources and References
        </h1>
        <p className="section-description text-center">
          Documentation and resources used in creating this digital heritage
          archive
        </p>

        <div
          className={`sources-grid ${
            isVisible ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          {sources.categories.map((category) => (
            <div key={category.id} className="sources-category">
              <h2 className="h2">{category.name}</h2>
              <div className="sources-list">
                {category.sources.map((source) => (
                  <div key={source.id} className="source-item">
                    <h3 className="h3">{source.title}</h3>
                    {'author' in source && <p><strong>Author:</strong> {source.author}</p>}
                    {'institution' in source && <p><strong>Institution:</strong> {source.institution}</p>}
                    {'year' in source && <p><strong>Year:</strong> {source.year}</p>}
                    {'type' in source && <p><strong>Type:</strong> {source.type}</p>}
                    {'url' in source && (
                      <p>
                        <strong>URL:</strong>{' '}
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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

        <div className="acknowledgments mt-xl">
          <h2 className="h2">Acknowledgments</h2>
          <ul className="acknowledgments-list">
            {sources.acknowledgments.map((ack) => (
              <li key={ack}>{ack}</li>
            ))}
          </ul>
        </div>

        <div className="external-links mt-xl">
          <h2 className="h2">External Resources</h2>
          <div className="external-links-grid">
            {externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
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
