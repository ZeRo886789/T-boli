const PhilippinesMap = () => {
  return (
    <div className="philippines-map-container">
      <div className="philippines-map">
        <svg viewBox="0 0 600 400" className="philippines-map-svg">
          <defs>
            <linearGradient
              id="phil-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1a5d3a" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#2e7d56" stopOpacity={0.6} />
            </linearGradient>
          </defs>

          <path
            d="M320,100 C340,95 360,100 375,110 C390,120 405,135 410,155 C415,175 412,195 405,210 C398,225 385,235 370,240 C355,245 340,245 325,240 C310,235 295,225 285,210 C278,195 275,175 280,155 C285,135 298,120 312,110 C325,100 335,100 345,100 Z"
            fill="url(#phil-gradient)"
            stroke="#124b2c"
            strokeWidth="2"
          />

          <circle
            cx="320"
            cy="140"
            r="5"
            fill="#d4a76a"
            stroke="#fff"
            strokeWidth="2"
          />
          <text x="330" y="145" fontSize="12" fill="#1a5d3a">
            Mindanao (Tboli territory)
          </text>

          <rect
            x="0"
            y="0"
            width="600"
            height="400"
            fill="none"
            stroke="#ddd"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>

        <div className="map-overlay-info">
          <h3 className="h3">Philippines</h3>
          <p>Mindanao - Southern Philippines</p>
          <p>South Cotabato Province</p>
        </div>
      </div>
    </div>
  );
};

export default PhilippinesMap;
