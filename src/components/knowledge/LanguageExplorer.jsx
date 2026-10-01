import { languages, languagePhrases } from '../../data/knowledge';
import ImageReveal from '../common/ImageReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const LanguageExplorer = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="language-explorer-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">{languages.title}</h2>

        <div
          className={`language-grid ${ isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="language-info">
            <div className="language-meta">
              <p>
                <strong>Native Name:</strong> {languages.nativeName}
              </p>
              <p>
                <strong>Language Family:</strong> {languages.family}
              </p>
              <p>
                <strong>Speakers:</strong> {languages.speakers.toLocaleString()}
              </p>
              <p>
                <strong>Writing System:</strong> {languages.writingSystem}
              </p>
            </div>

            <div className="language-description">
              <p>{languages.description}</p>
            </div>

            <div className="language-sample">
              <blockquote className="quote">
                {languages.sampleText}
              </blockquote>
              <p className="sample-translation">— {languages.sampleTranslation}</p>
            </div>
          </div>

          <div className="language-image">
            <ImageReveal
              src="/images/knowledge/language.webp"
              alt="Tboli language"
            />
          </div>
        </div>

        <div className="phrases-section mt-xl">
          <h3 className="h3 text-center">Common Phrases</h3>
          <div className="phrases-grid">
            {languagePhrases.map((phrase) => (
              <div key={phrase.tboli} className="phrase-card">
                <span className="phrase-tboli">{phrase.tboli}</span>
                <span className="phrase-english">{phrase.english}</span>
                <span className="phrase-usage">{phrase.usage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageExplorer;
