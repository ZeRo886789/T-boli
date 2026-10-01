import KnowledgeHero from '../components/knowledge/KnowledgeHero';
import LanguageExplorer from '../components/knowledge/LanguageExplorer';
import OralTraditions from '../components/knowledge/OralTraditions';
import Livelihood from '../components/knowledge/Livelihood';
import EnvironmentalKnowledge from '../components/knowledge/EnvironmentalKnowledge';
import TraditionalTechnology from '../components/knowledge/TraditionalTechnology';
import '../styles/knowledge.css';

const Knowledge = () => {
  return (
    <>
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
    </>
  );
};

export default Knowledge;
