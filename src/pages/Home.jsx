import { useRef } from 'react';
import Hero from '../components/home/Hero';
import HeritageJourney from '../components/home/HeritageJourney';
import FeaturedHeritage from '../components/home/FeaturedHeritage';
import ExploreSection from '../components/home/ExploreSection';
import usePageMotion from '../hooks/usePageMotion';

const Home = () => {
  const pageRef = useRef(null);
  usePageMotion(pageRef);

  return (
    <main ref={pageRef}>
      <Hero />
      <HeritageJourney />
      <FeaturedHeritage />
      <ExploreSection />
    </main>
  );
};

export default Home;
