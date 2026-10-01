import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { name: 'THE LAND', path: '/land' },
  { name: 'THE PEOPLE', path: '/people' },
  { name: 'HISTORY', path: '/history' },
  { name: 'CULTURE', path: '/culture' },
  { name: "T'NALAK", path: '/tnalak' },
  { name: 'KNOWLEDGE', path: '/knowledge' },
  { name: 'TODAY', path: '/today' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${
        isMenuOpen ? 'menu-open' : ''
      }`}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-logo-text">T'BOLI</span>
          <span className="navbar-subtitle">DIGITAL HERITAGE</span>
        </Link>

        <div className="navbar-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
