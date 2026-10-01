export const culturalCategories = [
  { id: 'clothing', name: 'Traditional Clothing', image: '/images/culture/clothing.webp' },
  { id: 'jewelry', name: 'Jewelry & Ornaments', image: '/images/culture/jewelry.webp' },
  { id: 'crafts', name: 'Traditional Crafts', image: '/images/culture/crafts.webp' },
  { id: 'music', name: 'Music & Dance', image: '/images/culture/music.webp' },
  { id: 'food', name: 'Traditional Food', image: '/images/culture/food.webp' },
];

export const clothing = {
  title: 'Traditional Tboli Clothing (Bado)',
  items: [
    {
      name: 'Bado sa Tinalak',
      description:
        'Traditional dress made from handwoven Tnalak fabric, featuring the iconic red, black, and white geometric patterns.',
      significance: 'Worn during important ceremonies and celebrations.',
      materials: ['Tnalak cloth', 'Bark cloth', 'Natural dyes'],
    },
    {
      name: 'Bado sa Puti',
      description: 'White traditional clothing worn for everyday use and formal occasions.',
      significance: 'Represents purity and respect for elders.',
      materials: ['Cotton', 'Pineapple fiber', 'Abaca'],
    },
    {
      name: 'Headgear (Bongkrik)',
      description: 'Traditional head covering made from bamboo and rattan.',
      significance: 'Worn by elders and during ceremonies.',
      materials: ['Bamboo', 'Rattan', 'Vines'],
    },
  ],
};

export const jewelry = {
    title: 'Tboli Jewelry and Ornaments',
    items: [
      {
        name: 'Lapis-Lapis',
        description: 'Traditional bracelets made from brass and adorned with colorful stones.',
        materials: ['Brass', 'Glass beads', 'Stones'],
        significance: 'Worn during courtship and ceremonies.',
      },
      {
        name: 'Bintak-pakpak',
        description: 'Necklaces made from metal discs that resemble bird feathers.',
        materials: ['Brass', 'Silver'],
        significance: 'Symbol of wealth and status.',
      },
      {
        name: 'Salampid',
        description: 'Chest ornament worn by warriors, made from brass and precious stones.',
        materials: ['Brass', 'Gold', 'Precious stones'],
        significance: 'Worn by warriors and community leaders.',
      },
    ],
  };

export const crafts = {
  title: 'Traditional Tboli Crafts',
  items: [
    {
      name: 'Bamboo Crafts',
      description:
        'The Tboli are skilled in creating various items from bamboo, including musical instruments, containers, and housing materials.',
      techniques: ['Carving', 'Weaving', 'Basketry'],
      items: ['Bamboo pipes', 'Containers', 'Musical instruments'],
    },
    {
      name: 'Rattan Weaving',
      description:
        'Creating baskets, mats, and furniture using traditional rattan weaving techniques passed down through generations.',
      techniques: ['Plaiting', 'Coiling', 'Twining'],
      items: ['Baskets', 'Mats', 'Furniture'],
    },
    {
      name: 'Wood Carving',
      description:
        'Hand-carved wooden objects including furniture, decorative items, and ritual objects.',
      techniques: ['Hand carving', 'Chiseling', 'Sanding'],
      items: ['Furniture', 'Idols', 'Decorative panels'],
    },
  ],
};

export const music = {
  title: 'Tboli Music and Dance',
  dances: [
    {
      name: 'Tboli Tribal Dance',
      description:
        'Traditional dance that tells stories of the Tboli people, often performed during the Kaamulan festival.',
      instruments: ['Gong (Gandingan)', 'Bamboo percussion', 'Drums'],
      occasions: ['Harvest festivals', 'Ceremonies', 'Community gatherings'],
    },
    {
      name: 'Tinalik',
      description:
        'A gentle courtship dance that demonstrates respect and grace.',
      instruments: ['Kulintang', 'Flutes', 'Rattles'],
      occasions: ['Wedding ceremonies', 'Youth gatherings'],
    },
  ],
  instruments: [
    { name: 'Kulintang', description: 'A set of gongchairs, melodic percussion instrument.' },
    { name: 'Gandingan', description: 'Set of four hanging gongs played with sticks.' },
    { name: 'Baw-ang', description: 'Bamboo cannon that produces loud bangs during celebrations.' },
    { name: 'Saluray', description: 'Traditional wind instrument made from bamboo.' },
  ],
};

export const food = {
  title: 'Traditional Tboli Cuisine',

  dishes: [
    {
      name: 'Pinol',
      description:
        'A traditional rice wine made from fermented rice, served during ceremonies and celebrations.',
      occasion: 'Ceremonial and social gatherings',
    },
    {
      name: 'Tinutung',
      description: 'A soup made from various vegetables and fish, cooked in bamboo tubes.',
      occasion: 'Daily meals and special occasions',
    },
    {
      name: 'Puto',
      description: 'Traditional rice cake wrapped in banana leaves.',
      occasion: 'Breakfast and snacks',
    },
    {
      name: 'Inalim',
      description: 'A porridge made from unhulled rice, often served with fish or vegetables.',
      occasion: 'Healing rituals and daily meals',
    },
  ],
};

export const beliefs = {
  title: 'Tboli Spiritual Beliefs and Practices',

  beliefSystem:
    'The Tboli practice animism, believing that spirits inhabit natural elements such as rivers, mountains, and trees. The supreme creator is called Diyos or Bulol.',

  deities: [
    { name: 'Bulol', description: 'The supreme creator and protector of the Tboli people.' },
    { name: 'Fon', description: 'Nature spirits that can be found in rivers, trees, and mountains.' },
    { name: 'Mundo', description: 'Ancestral spirits that guide and protect the living.' },
  ],

  rituals: [
    {
      name: 'Bakha',
      description: 'A coming-of-age ceremony where young Tboli learn about their cultural responsibilities.',
      duration: '3 days',
    },
    {
      name: 'Ginam-mang',
      description: 'A healing ritual conducted by traditional healers using chants and herbal remedies.',
      duration: '1-2 days',
    },
    {
      name: 'Tangkal',
      description: 'A ritual to communicate with ancestors and seek blessings for the community.',
      duration: 'Several hours to days',
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
