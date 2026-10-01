export const tnalakInfo = {
  title: 'Tnalak: The Dream Weaving',
  subtitle: 'A Legacy Passed Through Dreams',
  originStory: [
    {
      id: 1,
      title: 'The Dream of Fion',
      content:
        'According to Tboli mythology, the goddess Fion (also known as Fu In) descended from the sky and fell in love with a mortal Tboli man. She taught the women of the tribe the art of weaving, but she wove only in her dreams. Before returning to the heavens, she gave birth to a child and left behind a loom.',
      image: '/images/tnalak/tnalak-01.webp',
    },
    {
      id: 2,
      title: 'The Sacred Loom',
      content:
        'The women of the tribe would gather around the sacred loom, waiting for Fion\'s spirit to appear in their dreams. When she appeared, she would weave beautiful patterns that the women would then replicate on their own cloth. This is why the fabric is called "Tnalak" - meaning "to weave in a dream" in the Tboli language.',
      image: '/images/tnalak/tnalak-02.webp',
    },
  ],
  patterns: [
    {
      id: 'pantaw',
      name: 'Pantaw (Spirals)',
      meaning: 'Represents the flow of water, life, and the connection between the earth and the heavens.',
      color: 'Red',
    },
    {
      id: 'tukul',
      name: 'Tukul (Triangles)',
      meaning: 'Represents mountains, stability, and the strength of the people.',
      color: 'Black',
    },
    {
      id: 'sechadan',
      name: 'Sechadan (Eye-like patterns)',
      meaning: 'Protective symbols that ward off evil spirits and negative energy.',
      color: 'White',
    },
    {
      id: 'kaling',
      name: 'Kaling (Geometric lines)',
      meaning: 'Represents the paths of the ancestors guiding the living.',
      color: 'Red and Black',
    },
  ],
  weavingProcess: [
    {
      step: 1,
      title: 'Harvesting Cotton',
      description: 'Fresh cotton is harvested from fields and prepared for spinning.',
    },
    {
      step: 2,
      title: 'Spinning Thread',
      description: 'Cotton fibers are spun into delicate threads using traditional methods.',
    },
    {
      step: 3,
      title: 'Preparing Natural Dyes',
      description: 'Dyes are extracted from plants, roots, and minerals in the surrounding environment.',
    },
    {
      step: 4,
      title: 'The Dream',
      description: 'The weaver waits for the dream vision from the goddess Fion to reveal the patterns.',
    },
    {
      step: 5,
      title: 'Weaving the Cloth',
      description: 'Using a backstrap loom, the weaver replicates the dream patterns into the fabric.',
    },
    {
      step: 6,
      title: 'Completion and Blessing',
      description: 'The finished cloth is blessed by elders before being used or gifted.',
    },
  ],
};

export const masterWeavers = [
 {
    id: 'lambingas',
    name: 'Langgaman Lambingas',
    title: 'Grand Master Weaver',
    description:
      'One of the most renowned Tnalak master weavers, Langgaman learned the craft from her grandmother and has been weaving for over 50 years. Her works have been exhibited internationally.',
    recognition: ['National Living Treasures Award', 'UNESCO Master Craftsperson'],
    image: '/images/tnalak/tnalak-detail.webp',
  },
  {
    id: 'buyag',
    name: 'Boysie Buyag',
    title: 'Contemporary Master Weaver',
    description:
      'A younger generation weaver who has modernized Tnalak patterns while maintaining traditional techniques and spiritual significance.',
    recognition: ['National Commission for Culture and the Arts Award'],
    image: '/images/tnalak/tnalak-weaving.webp',
  },
];

const tnalak = {
  info: tnalakInfo,
  masterWeavers,
};

export default tnalak;
