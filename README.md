# 🎮 Rock Paper Scissors Game

A modern, interactive Rock Paper Scissors game built with React 19, TypeScript, and beautiful UI components.

## ✨ Features

- **🎯 Interactive Gameplay**: Click to play Rock, Paper, or Scissors against the computer
- **🎨 Beautiful UI**: Modern gradient design with smooth animations and hover effects
- **🔧 TypeScript**: Full type safety with enums and interfaces
- **🎭 FontAwesome Icons**: Visual representation of game choices
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **⚡ Hot Reloading**: Instant updates during development

## 🚀 Live Demo

Play the game online: [Coming Soon - GitHub Pages]

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Parcel bundler
- **Styling**: CSS3 with modern features (backdrop-filter, gradients)
- **Icons**: FontAwesome 6
- **Testing**: Jest with React Testing Library
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
   Navigate to `http://localhost:1234`

## 🎯 How to Play

1. **Choose your weapon**: Click on Rock 🪨, Paper 📄, or Scissors ✂️
2. **See the result**: The computer makes its choice randomly
3. **Find out who wins**: 
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper
   - Same choice = Draw!

## 🏗️ Project Structure

```
rock-paper-scissors/
├── src/
│   ├── components/
│   │   ├── Game.tsx          # Main game component
│   │   └── GameResult.tsx    # Game result display
│   ├── types/
│   │   └── game.ts           # TypeScript enums and interfaces
│   ├── styles/
│   │   └── App.css           # Game styling
│   ├── App.tsx               # Main app component
│   └── index.tsx             # Entry point
├── public/
│   └── index.html            # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

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

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **FontAwesome** for the beautiful icons
- **Parcel** for the fast bundler
- **TypeScript** for type safety

## 📞 Contact

- **GitHub**: [@wilbertopachecob](https://github.com/wilbertopachecob)
- **Project Link**: [https://github.com/wilbertopachecob/rock-paper-scissors](https://github.com/wilbertopachecob/rock-paper-scissors)

---

⭐ **Star this repository if you found it helpful!**
