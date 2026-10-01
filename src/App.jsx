import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import Home from './pages/Home';
import Land from './pages/Land';
import People from './pages/People';
import History from './pages/History';
import Culture from './pages/Culture';
import Tnalak from './pages/Tnalak';
import Knowledge from './pages/Knowledge';
import Today from './pages/Today';
import DigitalHeritage from './pages/DigitalHeritage';
import Sources from './pages/Sources';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <ScrollProgress />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/land" element={<Land />} />
          <Route path="/people" element={<People />} />
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/tnalak" element={<Tnalak />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/today" element={<Today />} />
          <Route path="/digital-heritage" element={<DigitalHeritage />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
