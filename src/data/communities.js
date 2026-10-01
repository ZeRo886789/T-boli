export const communities = [
  {
    id: 'lake-sepling',
    name: 'Lake Sepling',
    englishName: 'Lake Sepleng',
    alternativeNames: ['Lake Liguan', 'Lake Selpon'],
    location: {
      latitude: 6.4167,
      longitude: 124.85,
      municipality: 'Lake Sebu',
      province: 'South Cotabato',
      region: 'Region XII',
    },
    population: 1250,
    description:
      'Lake Sepling is one of the three lakes in Lake Sebu, South Cotabato. The Tboli community here practices traditional fishing methods and cultivates rice terraces that have been maintained for generations.',
    mainActivities: ['Fishing', 'Rice cultivation', 'Weaving', 'Traditional crafts'],
    contactPerson: 'Elder Bok',
    establishedYear: 1975,
  },
  {
    id: 'lake-salu',
    name: 'Lake Salu',
    englishName: 'Lake Sebu',
    alternativeNames: ['Lake Sebu', 'Mainit'],
    location: {
      latitude: 6.4333,
      longitude: 124.8667,
      municipality: 'Lake Sebu',
      province: 'South Cotabato',
      region: 'Region XII',
    },
    population: 890,
    description:
      'Lake Salu is situated at a higher elevation and is known for its pristine waters and traditional Tboli settlements. The community here is renowned for their expertise in bamboo crafts and traditional healing.',
    mainActivities: ['Fishing', 'Bamboo crafts', 'Traditional healing', 'Oral storytelling'],
    contactPerson: 'Elder Luning',
    establishedYear: 1982,
  },
  {
    id: 'lake-ta',
    name: 'Lake Ta',
    englishName: 'Lake Ta',
    alternativeNames: ['Lake Danao'],
    location: {
      latitude: 6.45,
      longitude: 124.8333,
      municipality: 'Lake Sebu',
      province: 'South Cotabato',
      region: 'Region XII',
    },
    population: 680,
    description:
      'Lake Ta is the smallest of the three lakes. The Tboli community here specializes in traditional weaving using natural dyes sourced from the surrounding forest.',
    mainActivities: ['Weaving', 'Natural dye extraction', 'Basket making', 'Forest preservation'],
    contactPerson: 'Elder Tud',
    establishedYear: 1988,
  },
];

export const featuredCommunities = communities.slice(0, 2);

export const getCommunityById = (id) => {
  return communities.find((community) => community.id === id);
};

export default communities;
