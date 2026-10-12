const CommunityCard = ({ community }) => {
  const images = {
    'lake-sebu': '/images/people/lakeSebu.webp',
    'lake-seloton': '/images/people/lakeSeloton.jpg',
    'lake-lahit': '/images/people/lake lahit.jpg',
  };

  const subtitles = {
    'lake-sebu': 'CULTURAL LANDSCAPE',
    'lake-seloton': 'LAKE COUNTRY',
    'lake-lahit': 'REGIONAL IDENTITY',
  };

  const activities = community.mainActivities || [];

  return (
    <article className="community-card">
      <div className="community-card-image">
        <img src={images[community.id] || '/images/people/Guardians of heritage.png'} alt={community.name} />
        <div className="community-card-image-overlay" />
      </div>

      <div className="community-card-content">
        <div className="community-card-title">
          <div className="community-card-symbol">◆</div>
          <div>
            <h3>{community.name}</h3>
            <span>{subtitles[community.id] || 'PLACE OF BELONGING'}</span>
          </div>
        </div>

        <p className="community-card-description">{community.description}</p>

        <div className="community-card-divider" />

        <div className="community-card-footer">
          <div className="community-population">
            <div className="population-icon">✦</div>
            <div>
              <strong>{community.type}</strong>
              <span>PLACE TYPE</span>
            </div>
          </div>

          <div className="community-activities">
            {activities.slice(0, 3).map((activity) => (
              <span key={activity}>{activity}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CommunityCard;