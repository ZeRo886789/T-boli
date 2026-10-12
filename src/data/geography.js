export const region = {
  name: 'South Cotabato',
  province: 'South Cotabato',
  region: 'SOCCSKSARGEN',
  island: 'Mindanao',
  note: 'The T’boli are associated with upland and lake communities in the municipality of Lake Sebu.',
};

export const lakes = [
  {
    id: 'lake-sebu',
    name: 'Lake Sebu',
    description:
      'The broader lake-and-mountain landscape of Lake Sebu is central to T’boli place identity, livelihoods, and cultural memory.',
  },
  {
    id: 'lake-seloton',
    name: 'Lake Seloton',
    description:
      'Lake Seloton is another lake in the same area, understood as part of the Lake Sebu landscape and surrounding upland communities.',
  },
  {
    id: 'lake-lahit',
    name: 'Lake Lahit',
    description:
      'Lake Lahit is part of the same regional landscape and should be described as a lake in South Cotabato rather than as a separate T’boli settlement or ethnic group.',
  },
];

export const geography = {
  region,
  lakes,
  coordinates: [
    { name: 'Lake Sebu', note: 'Municipality in South Cotabato associated with T’boli communities' },
    { name: 'South Cotabato', note: 'Province on Mindanao' },
    { name: 'Mindanao', note: 'Island home to the T’boli and surrounding Indigenous communities' },
  ],
  climate: {
    type: 'Humid tropical',
    temperature: 'Warm to mild highland conditions, depending on elevation',
    rainfall: 'High rainfall is typical in the wet season',
    bestVisit: 'Dry and cooler months are often more comfortable for travel and outdoor visits',
  },
  elevationRange: {
    min: 'Approximately 500',
    max: 'Approximately 1,000',
    unit: 'meters above sea level',
  },
};

export const geoCoordinates = {
  tboliRegion: {
    center: { lat: 'approximate mainland location', lng: 'approximate mainland location' },
    bounds: {
      northeast: { lat: 'not used as precise GIS data', lng: 'not used as precise GIS data' },
      southwest: { lat: 'not used as precise GIS data', lng: 'not used as precise GIS data' },
    },
  },
};

export default geography;
