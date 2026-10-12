export const culturalCategories = [
  { id: 'clothing', name: 'Traditional Clothing', image: '/images/culture/clothing.webp' },
  { id: 'crafts', name: 'Traditional Crafts', image: '/images/culture/crafts.webp' },
  { id: 'music', name: 'Music & Dance', image: '/images/culture/music.webp' },
  { id: 'food', name: 'Traditional Food', image: '/images/culture/food.webp' },
];

export const clothing = {
  title: 'Traditional T’boli clothing',
  items: [
    {
      name: 'T’nalak textile garments',
      description:
        'T’nalak cloth is one of the clearest expressions of T’boli textile culture, and its patterns and colors carry strong meaning and identity within the community.',
      significance: 'Important in ceremonial and everyday cultural expression.',
      materials: ['Abaca fiber', 'Handwoven cloth', 'Natural and dyed thread'],
    },
    {
      name: 'Community dress traditions',
      description: 'Traditional clothing practices in T’boli communities are closely linked to local craft, identity, and social context.',
      significance: 'Reflects community, season, and occasion.',
      materials: ['Woven fibers', 'Community-made garments'],
    },
  ],
};

export const jewelry = {
  title: 'T’boli ornaments and adornment',
  items: [
    {
      name: 'Brass and beadwork',
      description: 'Metalcraft and beadwork are notable elements of material culture in the T’boli region and are associated with artisanship and adornment.',
      materials: ['Brass', 'Beads', 'Metalwork'],
      significance: 'Expresses craftsmanship and decorative tradition.',
    },
    {
      name: 'Textile-based adornment',
      description: 'Cloth, pattern, and accessory traditions continue to hold social and artistic importance in community life.',
      materials: ['Textiles', 'Crafted accessories'],
      significance: 'Related to identity and presentation.',
    },
  ],
};

export const crafts = {
  title: 'Traditional T’boli crafts',
  items: [
    {
      name: 'T’nalak weaving',
      description:
        'T’nalak remains a flagship craft tradition, recognized for its detailed patterns and the technical skill involved in preparing fiber and weaving cloth.',
      techniques: ['Abaca preparation', 'Tying and resist work', 'Hand weaving'],
      items: ['Woven cloth', 'Textile goods'],
    },
    {
      name: 'Brass casting and beadwork',
      description:
        'The T’boli also maintain traditions of metalworking and embellishment, including brass and bead-based artistry documented by cultural institutions.',
      techniques: ['Casting', 'Finishing', 'Adorned craftwork'],
      items: ['Brass items', 'Beadwork'],
    },
  ],
};

export const music = {
  title: 'T’boli music and performance',
  dances: [
    {
      name: 'Community performance traditions',
      description:
        'Music and performance remain important in T’boli cultural life, from celebrations to community gatherings and oral traditions.',
      instruments: ['Local percussion', 'Bamboo instruments', 'Traditional sound-making tools'],
      occasions: ['Festivals', 'Community events', 'Cultural occasions'],
    },
  ],
  instruments: [
    { name: 'Percussion and bamboo instruments', description: 'Traditional instruments remain important in T’boli community performance and celebration.' },
  ],
};

export const food = {
  title: 'Traditional T’boli foodways',
  dishes: [
    {
      name: 'Local staple foods',
      description:
        'Food traditions are closely tied to local agriculture, seasonal cycles, and the use of surrounding resources.',
      occasion: 'Daily eating and community gatherings',
    },
    {
      name: 'Rice and root-crop meals',
      description: 'Rice, root crops, and locally sourced ingredients remain central to everyday meals and shared food practices.',
      occasion: 'Household and community meals',
    },
  ],
};

export const beliefs = {
  title: 'T’boli belief and cultural practice',
  beliefSystem:
    'T’boli communities maintain a rich system of belief and practice connected to place, ancestors, the natural world, and lived cultural memory.',
  deities: [
    { name: 'Community spiritual traditions', description: 'Belief systems are deeply connected to the land, ancestry, and social life of the T’boli.' },
  ],
  rituals: [
    {
      name: 'Community ceremonies',
      description: 'Ceremonial life and community practice remain important to T’boli identity and social memory.',
      duration: 'Varies by occasion',
    },
  ],
};

const culture = {
  categories: culturalCategories,
  clothing,
  jewelry,
  crafts,
  music,
  food,
  beliefs,
};

export default culture;
