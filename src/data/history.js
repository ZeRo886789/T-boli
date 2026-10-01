export const timelineEvents = [
  {
    id: 1,
    year: 'Pre-colonial Period (Before 1521)',
    title: 'Early Settlement',
    description:
      'The Tboli people settled around the three lakes of Lake Sebu, establishing a rich cultural tradition centered around the lakes and mountain forests. They developed their distinct language, customs, and spiritual practices.',
    category: 'origins',
    imageUrl: '/images/history/history-01.webp',
  },
  {
    id: 2,
    year: '1521-1800',
    title: 'Spanish Colonial Era',
    description:
      'During Spanish colonization, the Tboli maintained their autonomy in the mountainous areas of South Cotabato. They resisted conversion and retained their traditional way of life, living in harmony with nature.',
    category: 'colonial',
    imageUrl: '/images/history/history-02.webp',
  },
  {
    id: 3,
    year: '1800-1900',
    title: 'American Colonial Period',
    description:
      'The arrival of American forces brought new challenges. The Tboli were among the last groups to be relocated to reservations, but many continued to live traditional lives in the highlands.',
    category: 'colonial',
    imageUrl: '/images/history/history-03.webp',
  },
  {
    id: 4,
    year: '1900-1946',
    title: 'Commonwealth and Japanese Occupation',
    description:
      'During the Commonwealth period and Japanese occupation, the Tboli faced increasing pressure from lowland migration and logging operations. Traditional lands were threatened, but the community preserved their cultural identity.',
    category: 'modern',
    imageUrl: '/images/history/history-04.webp',
  },
  {
    id: 5,
    year: '1950s-1970s',
    title: 'Post-War Development',
    description:
      'After World War II, infrastructure projects including roads and schools were built in the area. The Tboli began to engage more with the broader Filipino society while maintaining their traditional culture.',
    category: 'development',
    imageUrl: '/images/history/history-01.webp',
  },
  {
    id: 6,
    year: '1970s-Present',
    title: 'Cultural Preservation Movement',
    description:
      'Starting in the 1970s, the Tboli launched efforts to preserve their culture through education, arts, and international advocacy. The famous Tnalak cloth and traditional weaving became recognized symbols of Philippine heritage.',
    category: 'preservation',
    imageUrl: '/images/history/history-02.webp',
  },
];

export const historicalArtifacts = [
  {
    id: 'bamboo-canon',
    name: 'Bamboo Cannon (Baw-ang)',
    description: 'Traditional bamboo firecracker used in celebrations and to ward off evil spirits.',
    period: 'Pre-colonial to present',
    material: 'Bamboo, gunpowder',
  },
  {
    id: 'gong',
    name: 'Gong (Kulintang)',
    description: 'A set of gong instruments used in traditional music and ceremonies.',
    period: 'Pre-colonial to present',
    material: 'Brass, wood',
  },
  {
    id: 'loom',
    name: 'Backstrap Loom',
    description: 'Traditional weaving loom used to create Tnalak cloth and other textiles.',
    period: 'Pre-colonial to present',
    material: 'Wood, rattan, cotton threads',
  },
];

const history = {
  timelineEvents,
  artifacts: historicalArtifacts,
};

export default history;
