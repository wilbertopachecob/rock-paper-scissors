# 🎮 Rock Paper Scissors Game

A modern, interactive Rock Paper Scissors game built with React 19, TypeScript, and beautiful UI components. Features internationalization support, smooth animations, and a modular SCSS architecture.

## ✨ Features

- **🎯 Interactive Gameplay**: Click to play Rock, Paper, or Scissors against the computer
- **🌍 Internationalization**: Full English and Spanish language support with language switcher
- **🎨 Neobrutalist UI**: Bold flat colors, thick borders and hard shadows built on a token-based design system (see [DESIGN.md](DESIGN.md))
- **♿ Accessible by default**: real focus states, `aria-live` result announcements, no color-only signaling, `prefers-reduced-motion` support, tested with `jest-axe`
- **✂️ Custom Hand Icons**: Hand-drawn SVG rock/paper/scissors icons, mirrored so player and computer face each other
- **🔧 TypeScript**: Full type safety with enums and interfaces
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **⚡ Hot Reloading**: Instant updates during development
- **🏗️ Modular Architecture**: SCSS modules for component isolation
- **🔄 Path Aliases**: Clean imports using `@/` prefix

## 🚀 Live Demo

Play the game online: [Coming Soon - GitHub Pages]

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Parcel bundler
- **Styling**: SCSS modules on top of a CSS custom property design token system (see [DESIGN.md](DESIGN.md))
- **Internationalization**: react-i18next with language detection
- **Icons**: hand-drawn inline SVGs (`src/components/icons`), no icon library
- **Testing**: Vitest with React Testing Library and jest-axe
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wilbertopachecob/rock-paper-scissors.git
   cd rock-paper-scissors
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:1234` (or the port shown in terminal)

## 🎯 How to Play

1. **Choose your weapon**: Click on Rock 🪨, Paper 📄, or Scissors ✂️
2. **Watch the animation**: See realistic hand gesture animations
3. **See the result**: The computer makes its choice randomly
4. **Find out who wins**: 
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper
   - Same choice = Draw!

## 🌍 Language Support

The game supports multiple languages:
- **🇺🇸 English** - Default language
- **🇪🇸 Español** - Full Spanish translation

Click the language switcher in the top-right corner to change languages instantly!

## 🏗️ Project Structure

```
rock-paper-scissors/
├── src/
│   ├── components/
│   │   ├── Game.tsx              # Main game component (state machine + rules)
│   │   ├── GameResult.tsx        # Presentational result panel
│   │   ├── LanguageSwitcher.tsx  # Language selection
│   │   └── icons/
│   │       └── ChoiceIcon.tsx    # Hand-drawn rock/paper/scissors SVGs
│   ├── i18n/
│   │   ├── index.ts              # Internationalization config
│   │   └── locales/
│   │       ├── en.json           # English translations
│   │       └── es.json           # Spanish translations
│   ├── styles/
│   │   ├── tokens.scss           # Design tokens (colors, type, spacing, shadows)
│   │   ├── global.scss           # Global resets built on the tokens
│   │   ├── App.module.scss       # App component styles
│   │   ├── Game.module.scss      # Game component styles
│   │   ├── GameResult.module.scss # GameResult styles
│   │   └── LanguageSwitcher.module.scss # LanguageSwitcher styles
│   ├── types/
│   │   ├── game.ts               # Game types and enums
│   │   └── scss.d.ts             # SCSS module declarations
│   ├── App.tsx                   # Main app component
│   └── index.tsx                 # Entry point
├── public/
│   └── index.html                # HTML template
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── DESIGN.md                      # Design token reference
├── AGENTS.md                      # Guidance for AI coding agents
└── README.md                      # This file
```

## 🎨 Styling Architecture

The project uses **SCSS modules** for component isolation, built on a shared
**design token** system:

- **Design tokens**: `src/styles/tokens.scss` defines every color, font size,
  spacing, radius, border, shadow, and motion duration as a CSS custom
  property. See [DESIGN.md](DESIGN.md) for the full reference.
- **Component-specific styles**: Each component has its own `.module.scss`
  file that consumes those tokens via `var(--token-name)` — no hardcoded
  values.
- **No CSS conflicts**: Automatic class name scoping
- **Type safety**: Full TypeScript support for CSS classes

## 🎭 Animation Features

- **Pulse Animation**: Buttons pulse while the computer is "thinking"
- **Spinner**: A spinning indicator shows while the computer's choice is hidden
- **Hover/Active Effects**: Buttons lift on hover and visually "press in" on click
- **Realistic Timing**: 1.5-second delay simulating real gameplay
- **Reduced motion**: every animation is disabled under `prefers-reduced-motion: reduce`

## 🔧 Development Features

### Path Aliases
- Use `@/` prefix for clean imports from `src/` directory
- Configured in `tsconfig.json` and `webpack.config.js`

### TypeScript Configuration
- Strict mode enabled
- Path mapping for clean imports
- Full type safety throughout the application

## 🤖 Working on this repo with an AI agent

See [AGENTS.md](AGENTS.md) for architecture notes, conventions (styling,
translations, testing) and the commands to run before considering a change
done.

## 🧪 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run type-check` - TypeScript type checking

## 🎨 Game Logic

The game uses TypeScript enums for type safety:

```typescript
export enum GameChoice {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors'
}

export enum GameResultType {
  WIN = 'win',
  LOSE = 'lose',
  DRAW = 'draw'
}
```

Win conditions are determined by classic Rock Paper Scissors rules:
- **Rock** crushes **Scissors**
- **Paper** covers **Rock**
- **Scissors** cut **Paper**

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `/docs` or `/dist` folder

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow the existing SCSS module structure
- Add translations for new text content
- Maintain component isolation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Parcel** for the fast bundler
- **TypeScript** for type safety
- **react-i18next** for internationalization
- **SCSS** for modular styling

## 📞 Contact

- **GitHub**: [@wilbertopachecob](https://github.com/wilbertopachecob)
- **Project Link**: [https://github.com/wilbertopachecob/rock-paper-scissors](https://github.com/wilbertopachecob/rock-paper-scissors)

---

⭐ **Star this repository if you found it helpful!**
