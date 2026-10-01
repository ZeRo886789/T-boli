export const region = {
  name: 'South Cotabato',
  province: 'South Cotabato',
  region: 'Region XII (SoccsksarGen)',
  island: 'Mindanao',
  coordinates: {
    latitude: 6.1667,
    longitude: 124.85,
  },
};

export const lakes = [
  {
    id: 'lake-sepling',
    name: 'Lake Sepling',
    elevation: 950,
    depth: 25,
    description:
      'The largest of the three lakes in Lake Sebu, fed by mountain springs and surrounded by rolling hills.',
  },
  {
    id: 'lake-salu',
    name: 'Lake Salu',
    elevation: 1100,
    depth: 18,
    description:
      'Situated at a higher elevation, this lake is known for its clear waters and cool climate.',
  },
  {
    id: 'lake-ta',
    name: 'Lake Ta',
    elevation: 1050,
    depth: 12,
    description:
      'The smallest lake, surrounded by dense forest and traditional Tboli settlements.',
  },
];

export const geography = {
  region,
  lakes,
  coordinates: [
    { latitude: 6.4333, longitude: 124.8667, name: 'Lake Sebu Municipality' },
    { latitude: 6.1667, longitude: 124.85, name: 'South Cotabato' },
    { latitude: 6.0, longitude: 125.0, name: 'General Santos' },
    { latitude: 7.0833, longitude: 125.6167, name: 'Butuan' },
  ],
  climate: {
    type: 'Tropical Rainforest',
    temperature: '24-32°C',
    rainfall: '2000-3000mm annually',
    bestVisit: 'November to April',
  },
  elevationRange: {
    min: 400,
    max: 1050,
    unit: 'meters above sea level',
  },
};

export const geoCoordinates = {
  tboliRegion: {
    center: { lat: 6.4333, lng: 124.8667 },
    bounds: {
      northeast: { lat: 6.5, lng: 124.9 },
      southwest: { lat: 6.35, lng: 124.8 },
    },
  },
  mindanao: {
    center: { lat: 7.0, lng: 124.5 },
    bounds: {
      northeast: { lat: 18.0, lng: 117.0 },
      southwest: { lat: 4.0, lng: 136.0 },
    },
  },
};

export default geography;
