import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(heroRef.current);

    const image = imageRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const scroll = scrollRef.current;
    const bg = bgRef.current;

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    if (bg) {
      tl.fromTo(
        bg,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }
      );
    }

    if (image) {
      tl.fromTo(
        image,
        { scale: 1.12, opacity: 0 },
        { scale: 1.05, opacity: 1, duration: 1.5 }
      , '-=0.8');
    }

    if (title && title.children) {
      const titleLines = title.children;
      tl.fromTo(
        titleLines,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
      , '-=0.6');
    }

    if (subtitle) {
      tl.fromTo(
        subtitle,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }, '-=0.5'
      );
    }

    if (scroll) {
      tl.fromTo(
        scroll,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }, '-=0.3'
      );
    }

    if (image) {
      gsap.to(image, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-bg" ref={bgRef}>
        <div
          className="hero-image-wrapper"
          ref={imageRef}
        >
          <img
            src="/images/hero/hero-tboli.webp"
            alt="Tboli traditional landscape"
            className="hero-image"
            loading="eager"
          />
          <div className="hero-overlay" />
        </div>
      </div>

      <div className="hero-content container">
        <div ref={titleRef} className="hero-title-group">
          <span className="mono-label">01 / 08</span>
          <h1 className="display-title">
            <span className="title-line">T'BOLI</span>
            <span className="title-line title-line--gold">THREADS</span>
            <span className="title-line">OF HERITAGE</span>
          </h1>
        </div>

        <p ref={subtitleRef} className="hero-subtitle lead">
          A digital exhibition of the cultural heritage of the
          T'boli people of South Cotabato, Philippines
        </p>

        <div className="hero-actions">
          <Link to="/people" className="btn btn-primary hero-cta">
            <span>EXPLORE HERITAGE</span>
            <span className="hero-cta-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="hero-meta" aria-hidden="true">
          <span>SOUTH COTABATO</span>
          <span className="hero-meta-divider"></span>
          <span>PHILIPPINES</span>
        </div>

        <div ref={scrollRef} className="hero-scroll">
          <span className="mono-label">SCROLL</span>
          <div className="hero-scroll-icon">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path
                d="M8 0L0 8H3V24H7V12H11V24H15V8H18L10 -2.68435e-06L8 0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
