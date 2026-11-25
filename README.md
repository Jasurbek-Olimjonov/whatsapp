# WhatsApp UI

A WhatsApp-inspired React interface for exploring reusable components, Sass styling, and CSS gradients. Contact, chat, and story content is sample data; the project does not connect to a backend.

## Features

- Header with a theme toggle, personal story, and contact story rings.
- Chat list with message previews and delivery-status icons.
- Light and dark themes. The selected theme is saved in `localStorage` under `theme` and restored when the app loads.
- Story rings built with the CSS `conic-gradient()` background. Their segments are generated from each story's status: seen stories are grey, unseen stories are teal, and transparent gaps separate the segments. The gradient starts at `-90deg`.

## Project structure

```text
src/
├── App.js                    # App layout and theme state
├── App.scss                  # Theme styles
├── scss/utilities.scss       # Shared Sass color variables
├── db/index.js               # Sample contacts, messages, and stories
└── components/
    ├── header/               # App header and story list
    ├── main/                 # Chat list
    ├── footer/               # Bottom navigation
    └── additions/            # Reusable Chat and CircleRing components
```

### Styling

Sass files provide component and theme styles. Shared theme colors are kept in `src/scss/utilities.scss`. `CircleRing` builds a `conic-gradient()` from story statuses and applies it as an inline background style.

### Sample data

`src/db/index.js` exports `contacts`, `messages`, `stories`, and the current user's `Me` profile. Update these arrays and objects to change the displayed sample content. Profile images are stored in `public/media/`.

## Run locally

From this directory, install dependencies and start the development server:

```bash
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the development server. |
| `npm test` | Run tests in watch mode. |
| `npm run build` | Create an optimized production build in `build/`. |
