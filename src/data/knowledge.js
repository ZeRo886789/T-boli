export const languages = {
  name: 'Tboli Language',
  nativeName: 'Tboli',
  family: 'Austronesian',
  speakers: 200000,
  dialects: ['Tboli', 'Tudbulul', 'Lamina'],
  writingSystem: 'Latin script (adopted)',
  description:
    'The Tboli language is part of the Austronine language family and is spoken primarily in the municipality of Lake Sebu, South Cotabato. It has several dialects and rich oral traditions.',
  sampleText: 'Tong-i kel, lemong diw ang-ang togu sama ngibor tolu, lemong diw ang-ang togu sama ngibor tuwu.',
  sampleTranslation: 'My name is, I am from the place where the rivers meet.',
};

export const languagePhrases = [
  { tboli: 'Tong-i kel', english: 'My name is', usage: 'Introductions' },
  { tboli: 'Lemong diw', english: 'How are you?', usage: 'Greetings' },
  { tboli: 'Ngibor tolu', english: 'I am fine', usage: 'Responses' },
  { tboli: 'Ayo kel', english: 'Hello', usage: 'Greetings' },
  { tboli: 'Sukri', english: 'Thank you', usage: 'Gratitude' },
  { tboli: 'Sukri da', english: 'Thank you very much', usage: 'Gratitude' },
  { tboli: 'Tulay', english: 'Welcome / Farewell', usage: 'Greetings' },
  { tboli: 'Nengkem', english: 'Friend', usage: 'Relationships' },
];

export const oralTraditions = {
  title: 'Tboli Oral Traditions',
  traditions: [
    {
      id: 'tudbulul',
      name: 'Tudbulul',
      description:
        'Traditional chants that serve as a vehicle for preserving history, customs, and cultural knowledge. These chants are often performed during ceremonies and gatherings.',
      format: 'Chanted verse',
      length: 'Variable (5-20 minutes)',
    },
    {
      id: 'feytoh',
      name: 'Feytoh',
      description:
        'Traditional folk tales that tell the stories of heroes, spirits, and the natural world. Passed down through generations by storytellers.',
      format: 'Narrative storytelling',
      length: 'Variable',
    },
    {
      id: 'tboli-epic',
      name: 'Hudoy-sa-Lake',
      description:
        'An epic poem that tells the story of the Tboli people\'s creation myth and their journey to the shores of Lake Sebu.',
      format: 'Epic chant',
      length: 'Extended (hours)',
    },
  ],
  storytellers: [
    'Elder Fion Beklas',
    'Elder Lang Dulay',
    'Elder Mambu Tud',
    'Elder Sulong Kawayanan',
  ],
};

export const livelihood = {
  title: 'Traditional Livelihood',
  activities: [
    {
      name: 'Shifting Cultivation (Lumot)',
      description:
        'Traditional agricultural practice where small plots of forest are cleared for farming and then left fallow to restore nutrients.',
      crops: ['Rice', 'Corn', 'Sweet potatoes', 'Cassava', 'Vegetables'],
      tools: ['Bolo (machete)', 'Axe', 'Traditional hoe'],
    },
    {
      name: 'Fishing (Tuna)',
      description:
        'Sustainable fishing practices in the three lakes of Lake Sebu, using traditional methods passed down through generations.',
      methods: ['Traditional traps', 'Hand gathering', 'Spear fishing', 'Net fishing'],
      fishTypes: ['Tilapia', 'Pangasius', 'Native carp', 'Eels'],
    },
    {
      name: 'Weaving (Tnalak)',
      description:
        'The sacred art of dream weaving, where patterns received in visions are transferred to fabric using a backstrap loom.',
      products: ['Tnalak cloth', 'Traditional clothing', 'Ceremonial blankets'],
      significance: 'Central to Tboli cultural identity',
    },
    {
      name: 'Bamboo Craftsmanship',
      description:
        'Creating various items from bamboo including musical instruments, containers, and building materials.',
      products: ['Musical instruments', 'Bamboo crafts', 'Housing materials'],
    },
  ],
};

export const environmentalKnowledge = {
  title: 'Tboli Environmental Knowledge',
  sustainablePractices: [
    {
      name: 'Forest Conservation',
      description:
        'The Tboli have traditional laws that protect certain areas of the forest, recognizing them as sacred spaces.',
      practices: ['Sacred grove protection', 'Seasonal harvesting', 'Crop rotation'],
    },
    {
      name: 'Water Protection',
      description:
        'Traditional beliefs that rivers and lakes are sacred have led to sustainable water management practices.',
      practices: ['No-waste fishing', 'Water source protection', 'Seasonal fishing bans'],
    },
    {
      name: 'Biodiversity',
      description:
        'Traditional knowledge of local plants and animals, including sustainable harvesting and medicinal uses.',
      practices: ['Plant identification', 'Medicinal plant use', 'Seasonal calendars'],
    },
  ],
  climateIndicators: [
    { indicator: 'Cloud formation patterns', meaning: 'Signs of upcoming weather changes' },
    { indicator: 'Bird migration', meaning: 'Seasonal timing for planting' },
    { indicator: 'River water levels', meaning: 'Flood or drought predictions' },
    { indicator: 'Plant flowering cycles', meaning: 'Timing for agricultural activities' },
  ],
};

export const traditionalTechnology = {
  title: 'Traditional Tboli Technology',
  technologies: [
    {
      name: 'Backstrap Loom',
      description:
        'A traditional weaving device made from wood and rattan, tensioned around the weaver\'s back for precise control.',
      materials: ['Wood', 'Rattan', 'Bamboo'],
      usage: 'Tnalak weaving',
    },
    {
      name: 'Bamboo Water Systems',
      description:
        'Traditional irrigation and water management systems using bamboo pipes and channels.',
      materials: ['Bamboo', 'Vines', 'Rope'],
      usage: 'Water distribution in rice terraces',
    },
    {
      name: 'Traditional Architecture',
      description:
        'Houses built on stilts using bamboo, wood, and thatch, designed to withstand floods and earthquakes.',
      materials: ['Bamboo', 'Wood', 'Nipa thatch', 'Rattan'],
      features: ['Stilts', 'thatched roofs', 'open ventilation'],
    },
    {
      name: 'Natural Dye Extraction',
      description:
        'Process of extracting colors from plants, roots, barks, and minerals for textile dyeing.',
      sources: ['Annatto seeds', 'Turmeric', 'Indigo', 'Bark extracts'],
    },
  ],
};

const knowledge = {
  languages,
  languagePhrases,
  oralTraditions,
  livelihood,
  environmentalKnowledge,
  traditionalTechnology,
};

export default knowledge;
