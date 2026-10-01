import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'THE LAND', path: '/land' },
    { name: 'THE PEOPLE', path: '/people' },
    { name: 'HISTORY', path: '/history' },
    { name: 'CULTURE', path: '/culture' },
    { name: "T'NALAK", path: '/tnalak' },
    { name: 'KNOWLEDGE', path: '/knowledge' },
    { name: 'TODAY', path: '/today' },
    { name: 'DIGITAL HERITAGE', path: '/digital-heritage' },
    { name: 'SOURCES', path: '/sources' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div>
              <span className="footer-logo">T'BOLI</span>
              <span className="footer-tagline">DIGITAL HERITAGE</span>
            </div>
            <p className="footer-description">
              Preserving the cultural heritage of the T'boli people
              of South Cotabato, Philippines
            </p>
          </div>

          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="footer-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span className="mono-label">&copy; {currentYear} T'boli Digital Heritage Project</span>
            <span className="footer-credit">All rights reserved</span>
          </div>

          <div className="footer-external">
            <a
              href="https://www.ncca.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-external-link"
            >
              NCCA
            </a>
            <a
              href="https://ich.unesco.org"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-external-link"
            >
              UNESCO
            </a>
            <a
              href="/sources"
              className="footer-external-link"
            >
              SOURCES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
