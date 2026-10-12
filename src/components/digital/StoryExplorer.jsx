import { useState } from 'react';
import { oralTraditions } from '../../data/knowledge';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const StoryExplorer = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'tudbulul', name: 'Epics' },
    { id: 'storytelling', name: 'Storytelling' },
  ];

  const stories = oralTraditions.traditions.map((tradition) => ({
    id: tradition.id,
    title: tradition.name,
    description: tradition.description,
    format: tradition.format,
    length: tradition.length,
    category: tradition.id,
    content: tradition.description,
  }));

  const filteredStories =
    selectedCategory === 'all'
      ? stories
      : stories.filter((story) => story.category === selectedCategory);

  const handleSelect = (story) => setSelectedStory(story);
  const handleClose = () => setSelectedStory(null);
  const handleCategoryChange = (categoryId) => setSelectedCategory(categoryId);

  return (
    <section className="story-explorer-section" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Story Explorer</h2>
        <p className="section-description text-center">
          Discover T’boli oral traditions and the role of storytelling in community memory.
        </p>

        <div className={`story-explorer ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
        <div className={`story-categories`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`story-category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              data-motion-item
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="stories-grid" data-motion="stagger">
          {filteredStories.map((story) => (
            <div key={story.id} className="story-card" data-motion-item>
                <div className="story-card-content" onClick={() => handleSelect(story)} style={{ cursor: 'pointer' }}>
                  <h3 className="h3">{story.title}</h3>
                  <p>{story.description}</p>
                  <div className="story-meta">
                    <span><strong>Format:</strong> {story.format}</span>
                    <span><strong>Length:</strong> {story.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedStory && (
            <div className="story-modal-overlay" onClick={handleClose}>
              <div className="story-modal" onClick={(e) => e.stopPropagation()}>
                <button className="story-modal-close" onClick={handleClose}>×</button>
                <h2 className="h2">{selectedStory.title}</h2>
                <p>
                  <strong>Format:</strong> {selectedStory.format} | <strong>Length:</strong> {selectedStory.length}
                </p>
                <div className="story-content">
                  <p>{selectedStory.content}</p>
                  <p><strong>Cultural note:</strong> Information presented here is drawn from documented community sources.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoryExplorer;
