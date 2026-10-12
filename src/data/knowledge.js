export const languages = {
  name: 'T’boli Language',
  nativeName: 'T’boli',
  family: 'Austronesian',
  speakers: 'Active community language in South Cotabato',
  dialects: ['T’boli language communities in South Cotabato'],
  writingSystem: 'Latin script in contemporary use',
  description:
    'The T’boli language is an Austronesian language spoken in South Cotabato, especially in upland and lake-associated communities. It remains important to cultural continuity, oral traditions, and everyday community life.',
  sampleText: 'The T’boli language remains a living part of community memory and identity.',
  sampleTranslation: 'Language vitality is supported by intergenerational use, local naming, and oral tradition.',
};

export const languagePhrases = [];

export const oralTraditions = {
  title: 'T’boli Oral Traditions',
  traditions: [
    {
      id: 'tudbulul',
      name: 'Tudbulul',
      description:
        'Tudbulul is a major T’boli epic and oral performance tradition. It is described in cultural documentation as an extended form of performance that preserves history, place, and social values through storytelling and chant.',
      format: 'Epic chant and storytelling',
      length: 'Variable; often presented in extended oral performance',
    },
    {
      id: 'storytelling',
      name: 'Community storytelling',
      description:
        'Narratives about place, kinship, ancestry, and the landscape are carried by elders and storytellers within T’boli communities.',
      format: 'Narrative form',
      length: 'Variable',
    },
  ],
  storytellers: ['Elders and oral tradition keepers in T’boli communities'],
};

export const livelihood = {
  title: 'Traditional Livelihood',
  activities: [
    {
      name: 'Farming and upland cultivation',
      description:
        'T’boli communities maintain farming traditions that are closely connected to the surrounding landscape, seasonal cycles, and local ecological knowledge.',
      crops: ['Rice', 'Corn', 'Root crops', 'Vegetables'],
      tools: ['Hand tools', 'Traditional farm implements', 'Community-based labor'],
    },
    {
      name: 'Fishing and water stewardship',
      description:
        'Lake and river environments continue to be important for food, livelihoods, and cultural relationships to place.',
      methods: ['Local fishing methods', 'River and lake use', 'Seasonal awareness'],
      fishTypes: ['Local freshwater species'],
    },
    {
      name: 'Weaving and textile practice',
      description:
        'T’nalak weaving remains one of the strongest expressions of T’boli artistic and cultural continuity.',
      products: ['T’nalak cloth', 'Textile work', 'Handcrafted goods'],
      significance: 'Important for cultural identity and community livelihoods',
    },
  ],
};

export const environmentalKnowledge = {
  title: 'T’boli Environmental Knowledge',
  sustainablePractices: [
    {
      name: 'Landscape knowledge',
      description:
        'T’boli communities hold practical ecological knowledge of water, forest, weather, and planting cycles in their local environment.',
      practices: ['Seasonal awareness', 'Local stewardship', 'Landscape care'],
    },
    {
      name: 'Water and forest relationship',
      description:
        'Lakes, rivers, and forests remain central to community life, livelihoods, and belief systems.',
      practices: ['Forest protection', 'Water care', 'Living with local ecology'],
    },
  ],
  climateIndicators: [
    { indicator: 'Seasonal weather changes', meaning: 'Signals for agricultural and livelihood planning' },
    { indicator: 'Water levels and land conditions', meaning: 'Indicators for travel, farming, and local adaptation' },
  ],
};

export const traditionalTechnology = {
  title: 'Traditional T’boli Technology',
  technologies: [
    {
      name: 'Abaca fiber preparation',
      description:
        'Abaca fiber is central to T’nalak weaving and must be cleaned, prepared, and processed carefully before spinning and weaving.',
      materials: ['Abaca fiber', 'Natural dye materials', 'Traditional tools'],
      usage: 'Textile work and T’nalak production',
    },
    {
      name: 'Weaving loom and hand tools',
      description:
        'Traditional weaving uses hand tools and carefully managed tension to create patterned cloth.',
      materials: ['Wood', 'Rattan', 'Handloom parts'],
      usage: 'T’nalak weaving',
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
