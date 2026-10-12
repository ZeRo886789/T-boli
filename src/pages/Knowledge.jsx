import { useRef } from 'react';
import KnowledgeHero from '../components/knowledge/KnowledgeHero';
import LanguageExplorer from '../components/knowledge/LanguageExplorer';
import OralTraditions from '../components/knowledge/OralTraditions';
import Livelihood from '../components/knowledge/Livelihood';
import EnvironmentalKnowledge from '../components/knowledge/EnvironmentalKnowledge';
import TraditionalTechnology from '../components/knowledge/TraditionalTechnology';
import usePageMotion from '../hooks/usePageMotion';
import '../styles/knowledge.css';

const Knowledge = () => {
  const pageRef = useRef(null);
  usePageMotion(pageRef);

  return (
    <main ref={pageRef}>
      <KnowledgeHero />
      <section className="knowledge-page-header">
        <div className="container">
          <div className="section-label">Living Wisdom</div>
          <h2 className="section-title">Indigenous Knowledge Systems</h2>
        </div>
      </section>
      <LanguageExplorer />
      <OralTraditions />
      <Livelihood />
      <EnvironmentalKnowledge />
      <TraditionalTechnology />
    </main>
  );
};

export default Knowledge;
