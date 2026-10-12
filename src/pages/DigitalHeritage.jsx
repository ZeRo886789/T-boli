import { useRef } from 'react';
import DigitalHeritageHero from '../components/digital/DigitalHeritageHero';
import HeritageGallery from '../components/digital/HeritageGallery';
import InteractiveMap from '../components/digital/InteractiveMap';
import DigitalTimeline from '../components/digital/DigitalTimeline';
import StoryExplorer from '../components/digital/StoryExplorer';
import AudioPlayer from '../components/digital/AudioPlayer';
import usePageMotion from '../hooks/usePageMotion';
import '../styles/digital.css';

const DigitalHeritage = () => {
  const pageRef = useRef(null);
  usePageMotion(pageRef);

  return (
    <main className="digital-heritage-page" ref={pageRef}>
      <DigitalHeritageHero />
      <InteractiveMap />
      <DigitalTimeline />
      <HeritageGallery />
      <StoryExplorer />
      <AudioPlayer
        src={null}
        title="Audio archive note"
        artist="Available public recordings are not currently attached to this archive"
        emptyMessage="No public audio recording is yet available in this version of the digital archive. The archive remains focused on verified text, image, and source-based cultural documentation."
      />
    </main>
  );
};

export default DigitalHeritage;
