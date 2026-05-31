<!-- @format -->

# Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS. It showcases featured projects, skills, contact information, and a clean, responsive design.

## Demo

Live demo: http://olaniyan18.github.io/Portfolio

## Features

- Responsive layout for desktop and mobile
- Smooth animations and hover effects
- Project cards with links and featured styling
- Hero section, skills list, about section, contact area, and footer
- Tailwind CSS v4 styling with custom theme extensions
- React component-based architecture

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React icons
- JavaScript
- HTML5 & CSS3

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the portfolio.

## Build

```bash
npm run build
```

Then preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/`
  - `App.jsx`
  - `main.jsx`
  - `index.css`
  - `components/`
    - `About.jsx`
    - `Contact.jsx`
    - `Footer.jsx`
    - `Hero.jsx`
    - `Navigation.jsx`
    - `Projects.jsx`
    - `Skills.jsx`
- `assets/` — project images and section assets
- `tailwind.config.js` — Tailwind content paths and theme customization
- `vite.config.js` — Vite configuration and Tailwind plugin setup

## Notes

- This project uses Tailwind CSS v4 and the `@tailwindcss/vite` plugin.
- Make sure `src/index.css` imports Tailwind with `@import "tailwindcss";`.

## License

This project is open source and available under the MIT License.
