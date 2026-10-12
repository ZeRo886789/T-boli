export const communities = [
  {
    id: 'lake-sebu',
    name: 'Lake Sebu',
    type: 'Lake and cultural landscape',
    location: {
      municipality: 'Lake Sebu',
      province: 'South Cotabato',
      region: 'SOCCSKSARGEN',
    },
    description:
      'Lake Sebu is a major lake-and-mountain landscape associated with T’boli communities in South Cotabato. It is widely recognized for its scenic waters, upland settlements, and cultural significance to the region.',
    mainActivities: ['Fishing', 'Weaving', 'Tourism and cultural work', 'Community life'],
  },
  {
    id: 'lake-seloton',
    name: 'Lake Seloton',
    type: 'Lake and cultural landscape',
    location: {
      municipality: 'Lake Sebu',
      province: 'South Cotabato',
      region: 'SOCCSKSARGEN',
    },
    description:
      'Lake Seloton is one of the lakes in the Lake Sebu area and part of the broader cultural landscape tied to T’boli life and upland livelihoods.',
    mainActivities: ['Fishing', 'Waterways and landscape care', 'Community gathering', 'Local livelihoods'],
  },
  {
    id: 'lake-lahit',
    name: 'Lake Lahit',
    type: 'Lake and cultural landscape',
    location: {
      municipality: 'Lake Sebu',
      province: 'South Cotabato',
      region: 'SOCCSKSARGEN',
    },
    description:
      'Lake Lahit is a recognized lake within the Lake Sebu area and should be understood as part of the region’s geographic and cultural setting rather than as a separate T’boli community in itself.',
    mainActivities: ['Landscape connection', 'Cultural heritage', 'Ecotourism', 'Regional identity'],
  },
];

export const featuredCommunities = communities.slice(0, 3);

export const getCommunityById = (id) => {
  return communities.find((community) => community.id === id);
};

export default communities;
