# Tboli Digital Heritage

A digital heritage archive dedicated to preserving and sharing the rich cultural heritage of the Tboli indigenous people of South Cotabato, Philippines.

## Overview

The Tboli Digital Heritage project is an interactive web application that documents and showcases the traditions, history, culture, and knowledge of the Tboli people. The project serves as a digital archive for future generations and as an educational resource for anyone interested in indigenous cultures.

## Features

- **Interactive Cultural Map**: Explore the geographic landscape and cultural sites of the Tboli territory
- **Tnalak Weaving Gallery**: Discover the sacred art of Tnalak dream weaving
- **Historical Timeline**: Journey through the history of the Tboli people
- **Cultural Gallery**: Explore traditional clothing, jewelry, crafts, music, and food
- **Indigenous Knowledge**: Learn about the Tboli language, oral traditions, and environmental wisdom
- **Contemporary Life**: See how the Tboli people are preserving their culture in the modern world
- **Digital Archives**: Access audio recordings, stories, and visual documentation

## Navigation

- **Home** (`/`) - Introduction to Tboli heritage
- **Land** (`/land`) - Geography and landscape of the Tboli territory
- **People** (`/people`) - The Tboli community and their way of life
- **History** (`/history`) - Historical journey of the Tboli people
- **Culture** (`/culture`) - Traditions, clothing, crafts, music, and food
- **Tnalak** (`/tnalak`) - The sacred art of dream weaving
- **Knowledge** (`/knowledge`) - Language, oral traditions, and indigenous wisdom
- **Today** (`/today`) - Contemporary life and preservation efforts
- **Digital Heritage** (`/digital-heritage`) - Interactive digital archives
- **Sources** (`/sources`) - References and acknowledgments

## Technologies

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS** - Custom styling with CSS variables and animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/          # Static assets (fonts, icons)
├── components/
│   ├── layout/      # Navbar, Footer, PageTransition, ScrollProgress
│   ├── common/      # Reusable components (SectionTitle, ImageReveal, etc.)
│   ├── home/        # Home page components
│   ├── land/        # Land and geography components
│   ├── people/      # People and community components
│   ├── history/     # Historical timeline and gallery
│   ├── culture/     # Cultural sections (clothing, crafts, music, food, beliefs)
│   ├── tnalak/      # Tnalak weaving components
│   ├── knowledge/   # Indigenous knowledge components
│   ├── today/       # Contemporary life components
│   └── digital/     # Digital heritage interactive components
├── data/            # Cultural data and content
├── hooks/           # Custom React hooks
├── utils/           # Utility functions and constants
├── styles/          # Global styles and design tokens
├── pages/           # Page-level components
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

## Data Sources

All cultural data is sourced from community elders, the National Commission for Culture and the Arts (NCCA), and academic research. See the [Sources](/sources) page for more information.

## Contributing

This is an educational project. Contributions and feedback are welcome.

## License

Educational use only. All cultural content is attributed to the Tboli community.
