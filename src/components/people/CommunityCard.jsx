const CommunityCard = ({ community }) => {

  const images = {
    'lake-sepling': '/images/people/lakeSebu.webp',
    'lake-salu': '/images/people/lakeSeloton.jpg',
    'lake-ta': '/images/people/lake lahit.jpg',
  };

  const subtitles = {
    'lake-sepling': 'THE CULTURAL HEART',
    'lake-salu': 'A SACRED AND PEACEFUL HOME',
    'lake-ta': 'TRADITION IN HARMONY',
  };

  const descriptions = {
    'lake-sepling':
      "Home to a vibrant T'boli community, rich in traditions, arts, and living culture.",

    'lake-salu':
      'A peaceful community known for its strong spiritual practices and close-knit families.',

    'lake-ta':
      "Known for its beautiful natural surroundings and deep connection to T'boli customs.",
  };

  const activities =
    community.mainActivities || [];

  return (
    <article className="community-card">

      <div className="community-card-image">

        <img
          src={images[community.id]}
          alt={community.name}
        />

        <div className="community-card-image-overlay" />

      </div>

      <div className="community-card-content">

        <div className="community-card-title">

          <div className="community-card-symbol">
            &#9677;
          </div>

          <div>

            <h3>
              {community.name}
            </h3>

            <span>
              {subtitles[community.id]}
            </span>

          </div>

        </div>

        <p className="community-card-description">
          {descriptions[community.id]}
        </p>

        <div className="community-card-divider" />

        <div className="community-card-footer">

          <div className="community-population">

            <div className="population-icon">
              &#9823;
            </div>

            <div>
              <strong>
                ~{Number(
                  community.population
                ).toLocaleString()}
              </strong>

              <span>
                POPULATION
              </span>
            </div>

          </div>

          <div className="community-activities">

            {activities
              .slice(0, 3)
              .map((activity) => (
                <span key={activity}>
                  {activity}
                </span>
              ))}

          </div>

          <button
            type="button"
            className="community-arrow"
            aria-label={`Explore ${community.name}`}
          >
            &rarr;
          </button>

        </div>

      </div>

    </article>
  );
};

export default CommunityCard;