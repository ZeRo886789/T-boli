# T’boli Digital Heritage

A research-informed digital archive presenting T’boli place, practice, and cultural memory in South Cotabato, Philippines.

## Project pitch

This project responds to a clear need: T’boli heritage is rich, living, and at risk of becoming flattened into generic cultural content if it is not documented carefully and respectfully. T’boli Digital Heritage is an interactive educational website designed to present key aspects of T’boli life—including geography, community, T’nalak weaving, oral traditions, language, and contemporary preservation—through a polished digital archive.

The project is not presented as community-authored field research or a formal ethnographic survey. Instead, it translates public, traceable cultural information into a clear and visually rich educational experience. The main objectives are to improve public understanding of the T’boli, highlight the significance of place and textile traditions, and make cultural learning more accessible through navigation, storytelling, and interactive exploration.

## Main website features

- Editorial home page and strong visual identity
- Separate routes for land, people, history, culture, T’nalak, knowledge, today, digital heritage, and sources
- Cultural map and archive browsing with accessible interactions
- T’nalak weaving description and pattern-focused storytelling
- Public-source references and documentation notes
- Responsive design and page-level user experience

## Technologies used

- React
- Vite
- React Router
- GSAP
- CSS and design tokens

## Research approach

The project is grounded in public and traceable sources, including NCCA cultural profiles, IPOPHL legal notices on T’nalak Tau Sebu protection, and public materials from the Department of Foreign Affairs and related institutions. Where material was uncertain, language has been qualified or reduced to avoid unsupported claims.

This archive intentionally avoids inventing interviews, fabricated community data, or false UNESCO claims. It is designed to be educational and presentation-ready, not a substitute for direct community-led scholarship.

## Getting started

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal. To build the production app:

```bash
npm run build
```

## Notes on verification

The project was prepared to be source-aware and respectful, but the local terminal environment used by the editor failed before it could run the real build command. The VS Code terminal returned an environment error stating that it could not find the package `koffi` while starting the shell. This prevented direct npm execution in this session, even though the project files themselves were audited and corrected.

## Project structure

```text
src/
  App.jsx
  main.jsx
  components/
  data/
  hooks/
  pages/
  styles/
  utils/
public/
README.md
package.json
vite.config.js
```

## Source and attribution policy

This archive documents public information, not firsthand ethnographic research. It is designed as a respectful educational presentation with clear limits on what is known and what remains community-owned knowledge.
