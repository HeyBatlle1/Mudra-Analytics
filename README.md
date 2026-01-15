# Mudra Analytics Portfolio

A modern, cyberpunk-themed portfolio website showcasing software engineering and AI development projects.

## Features

- Dark cyberpunk design with Matrix rain background
- Interactive terminal hero section
- Project showcase with category filtering
- GitHub repositories viewer with README preview
- Contact form with social links
- Optimized performance with React.memo and useMemo

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom cyberpunk theme
- **UI Components**: Shadcn/ui, Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

```bash
# Clone the repository
git clone https://github.com/HeyBatlle1/hesperides-digital-forge.git

# Navigate to directory
cd hesperides-digital-forge

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # Shadcn/ui components
│   ├── Navigation.tsx
│   ├── MatrixRain.tsx
│   ├── ProjectShowcase.tsx
│   ├── GitRepositories.tsx
│   └── ContactSection.tsx
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── index.css      # Global styles & design system
```

## License

MIT License - Bradlee Burton
