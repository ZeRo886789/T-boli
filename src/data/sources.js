export const sources = {
  title: 'Sources and References',
  categories: [
    {
      id: 'books',
      name: 'Books and Publications',
      sources: [
        {
          id: 'tboli-book',
          title: 'The Tboli of South Cotabato: A Study of Cultural Change',
          author: 'Dr. Elena M. del Rosario',
          year: 1998,
          publisher: 'Ateneo de Manila University Press',
        },
        {
          id: 'tnalak-book',
          title: 'Tnalak: Dream Weaving of the Tboli',
          author: 'National Commission for Culture and the Arts',
          year: 2005,
          publisher: 'NCCA',
        },
        {
          id: 'mindanao-cultures',
          title: 'Cultures of Mindanao: The Lumad Peoples',
          author: 'Dr. Ma. Lourdes C. S. S.',
          year: 2010,
          publisher: 'University of the Philippines Press',
        },
      ],
    },
    {
      id: 'oral',
      name: 'Oral Histories and Interviews',
      sources: [
        {
          id: 'lang-dulay',
          title: 'Interview with Langduno T. Lambingas',
          interviewer: 'NCCA Documentation Team',
          year: 2003,
          type: 'Audio recording',
        },
        {
          id: 'boyy',
          title: 'Weaving Traditions: Conversations with Tboli Master Weavers',
          interviewer: 'Cultural Heritage Documentation Project',
          year: 2015,
          type: 'Video recording',
        },
        {
          id: 'elders',
          title: 'Stories from the Elders: Tboli Oral Tradition Collection',
          interviewer: 'University of the Philippines Mindanao',
          year: 2018,
          type: 'Transcribed interviews',
        },
      ],
    },
    {
      id: 'archives',
      name: 'Archival Materials',
      sources: [
        {
          id: 'tboli-photos',
          title: 'Tboli Community Photographs Collection',
          institution: 'National Historical Commission of the Philippines',
          year: '1950s-1980s',
          type: 'Photograph archives',
        },
        {
          id: 'cultural-mapping',
          title: 'Mindanao Cultural Mapping Project',
          institution: 'University of San Carlos',
          year: 2012,
          type: 'Research documentation',
        },
      ],
    },
    {
      id: 'digital',
      name: 'Digital Archives and Online Resources',
      sources: [
        {
          id: 'ncca-archive',
          title: 'NCCA Cultural Database',
          url: 'https://www.ncca.gov.ph',
          type: 'Online database',
        },
        {
          id: 'university-archive',
          title: 'UP Mindanao Tboli Collection',
          url: 'https://upmin.edu.ph',
          type: 'Digital repository',
        },
        {
          id: 'unesco',
          title: 'UNESCO Intangible Cultural Heritage',
          url: 'https://ich.unesco.org',
          type: 'Online resource',
        },
      ],
    },
  ],
  acknowledgments: [
    'We extend our gratitude to the Tboli community elders and cultural practitioners who shared their knowledge and stories.',
    'Special thanks to the National Commission for Culture and the Arts for their support and guidance.',
    'Our appreciation goes to the Lake Sebu Municipal Government for facilitating our research.',
    'We acknowledge the contributions of Dr. Elena del Rosario and the UP Mindanao research team.',
  ],
};

export const externalLinks = [
  { name: 'National Commission for Culture and the Arts', url: 'https://www.ncca.gov.ph' },
  { name: 'UNESCO Cultural Heritage', url: 'https://ich.unesco.org' },
  { name: 'Lake Sebu Tourism', url: 'https://www.lakesebu.gov.ph' },
  { name: 'Tboli Municipal Hall', url: 'https://www.tboli.gov.ph' },
];

export default sources;
