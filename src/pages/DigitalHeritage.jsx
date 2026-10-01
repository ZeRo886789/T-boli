import DigitalHeritageHero from '../components/digital/DigitalHeritageHero';
import HeritageGallery from '../components/digital/HeritageGallery';
import InteractiveMap from '../components/digital/InteractiveMap';
import DigitalTimeline from '../components/digital/DigitalTimeline';
import StoryExplorer from '../components/digital/StoryExplorer';
import AudioPlayer from '../components/digital/AudioPlayer';

const DigitalHeritage = () => {
  return (
    <>
      <DigitalHeritageHero />
      <InteractiveMap />
      <DigitalTimeline />
      <HeritageGallery />
      <StoryExplorer />
      <AudioPlayer
        src="/audio/music/tnalak-chant.mp3"
        title="Traditional Tnalak Chant"
        artist="Elder Lang Dulay"
      />
    </>
  );
};

export default DigitalHeritage;
