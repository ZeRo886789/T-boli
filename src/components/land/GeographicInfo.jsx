const landscapeCards = [
  {
    number: '01',
    title: 'Mountains',
    subtitle: 'THE HIGHLANDS',
    description:
      'Rolling terrain and mountain ranges shape the T\'boli ancestral domain.',
    image: '/images/landscapes/mindanao.webp',
  },
  {
    number: '02',
    title: 'Lake Sebu',
    subtitle: 'THE THREE LAKES',
    description:
      'A network of highland lakes surrounded by forests, communities, and sacred landscapes.',
    image: '/images/landscapes/tboli-landscape.webp',
  },
  {
    number: '03',
    title: 'Forests',
    subtitle: 'THE WATERSHED',
    description:
      'Dense forest ecosystems surround the highland communities, sheltering watersheds and biodiversity.',
    image: '/images/landscapes/forest-lake-sebu.jpg',
  },
  {
    number: '04',
    title: 'Rivers',
    subtitle: 'WATERWAYS',
    description:
      'Streams and waterfalls connect the highlands and sustain life throughout the landscape.',
    image: '/images/landscapes/rivers-lake-sebu.jpg',
  },
];

const GeographicInfo = () => {
  return (
    <section className="geographic-info-section">
      <img
        src="/images/land/geographic-features.png"
        alt=""
        className="geographic-section-bg"
        aria-hidden="true"
        loading="lazy"
      />

      <div className="geographic-info-overlay" />

      <div className="container">
        <div className="geographic-features-header">
          <span className="section-label">
            GEOGRAPHIC FEATURES
          </span>
          <h2>
            A landscape shaped
            <br />
            by water and earth.
          </h2>
        </div>

        <div className="geographic-feature-list">
          <div>
            <span>01</span>
            <strong>Mountains</strong>
            <p>Highland terrain</p>
          </div>
          <div>
            <span>02</span>
            <strong>Rivers</strong>
            <p>Waterways & falls</p>
          </div>
          <div>
            <span>03</span>
            <strong>Forests</strong>
            <p>Watershed ecosystems</p>
          </div>
          <div>
            <span>04</span>
            <strong>Lakes</strong>
            <p>Lake Sebu</p>
          </div>
        </div>

        <div className="landscape-gallery">
          {landscapeCards.map((card) => (
            <article className="landscape-card" key={card.title}>
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
              />
              <div className="landscape-card-overlay" />
              <div className="landscape-card-content">
                <span className="landscape-number">{card.number}</span>
                <span className="landscape-subtitle">
                  {card.subtitle}
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="landscape-card-arrow">↗</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeographicInfo;
