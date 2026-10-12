export const tnalakInfo = {
  title: 'T’nalak',
  subtitle: 'A T’boli textile tradition rooted in abaca fiber, pattern, and memory',
  originStory: [
    {
      id: 1,
      title: 'A community tradition',
      content:
        'T’nalak is a T’boli textile traditionally woven from abaca fiber using ikat-style resist dyeing and handloom techniques. Community accounts describe the process as both technical and deeply tied to memory, design, and intergenerational transmission.',
      image: '/images/tnalak/tnalak-01.webp',
    },
    {
      id: 2,
      title: 'Dreamed designs and practiced skill',
      content:
        'A well-known T’boli account links the introduction of woven design to the idea of a dream-guided pattern, often associated with the spirit referred to as Fu Dalu. Whether understood as a spiritual story or a cultural teaching, the craft is grounded in an exacting process of fiber preparation, tie-dyeing, weaving, and finishing.',
      image: '/images/tnalak/tnalak-02.webp',
    },
  ],
  patterns: [
    {
      id: 'clouds',
      name: 'Clouds',
      meaning: 'A design associated with documented T’nalak weaving traditions and widely cited in NCCA profiles of master weavers.',
      color: 'Deep black and earth tones',
    },
    {
      id: 'hair-bangs',
      name: 'Hair bangs',
      meaning: 'A distinct motif documented in T’nalak weaving artistry and associated with master weaver Lang Dulay’s designs.',
      color: 'Black on natural fiber',
    },
    {
      id: 'butterfly',
      name: 'Butterfly',
      meaning: 'A motif identified in established NCCA descriptions of T’nalak designs and pattern naming traditions.',
      color: 'Natural and dyed contrast',
    },
  ],
  weavingProcess: [
    {
      step: 1,
      title: 'Preparing the abaca fiber',
      description: 'The fiber is carefully cleaned and prepared for spinning and weaving.',
    },
    {
      step: 2,
      title: 'Tying and resist work',
      description: 'Portions of the fiber are tied to create the pattern before dyeing, a key part of ikat-style weaving.',
    },
    {
      step: 3,
      title: 'Dyeing',
      description: 'Natural or prepared dyes are used to intensify the pattern and create contrast in the cloth.',
    },
    {
      step: 4,
      title: 'Loom setup',
      description: 'The dyed strands are set for weaving on a loom, and tension is adjusted before the textile is formed.',
    },
    {
      step: 5,
      title: 'Weaving and finishing',
      description: 'The cloth is woven and then finished with careful inspection and trimming.',
    },
  ],
};

export const masterWeavers = [
  {
    id: 'lang-dulay',
    name: 'Lang Dulay',
    title: 'GAMABA National Living Treasure',
    description:
      'Lang Dulay is recognized as a master T’nalak weaver whose designs and craftsmanship are documented by the National Commission for Culture and the Arts.',
    recognition: ['GAMABA National Living Treasure', 'NCCA profile of a T’boli master weaver'],
    image: '/images/tnalak/tnalak-detail.webp',
  },
  {
    id: 'barbara-ofong',
    name: 'Barbara Ofong',
    title: 'GAMABA National Living Treasure',
    description:
      'Barbara Ofong is another T’boli artisan recognized for her legacy in weaving and cultural practice.',
    recognition: ['GAMABA National Living Treasure', 'Documented in NCCA cultural profiles'],
    image: '/images/tnalak/tnalak-weaving.webp',
  },
  {
    id: 'rosie-sula',
    name: 'Rosie Sula',
    title: 'GAMABA National Living Treasure',
    description:
      'Rosie Sula is widely recognized as a master weaver with enduring significance in T’nalak practice and cultural transmission.',
    recognition: ['GAMABA National Living Treasure', 'NCCA recognition'],
    image: '/images/tnalak/tnalak-01.webp',
  },
];

const tnalak = {
  info: tnalakInfo,
  masterWeavers,
};

export default tnalak;
