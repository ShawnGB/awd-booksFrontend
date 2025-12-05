# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + TypeScript + Vite frontend application for a books API interface. Currently in early development with basic structure in place.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production (runs TypeScript compiler check first)
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Technology Stack
- **React 19.2** with TypeScript
- **Vite** for build tooling and dev server
- **Axios** for HTTP requests
- **ESLint** with TypeScript and React Hooks plugins

### Project Structure
```
src/
├── main.tsx           # Application entry point
├── App.tsx            # Root component
├── pages/             # Page components
│   └── Home.tsx       # Home page component
├── assets/            # Static assets
└── index.css          # Global styles
```

### Key Patterns
- Component-based architecture with functional components
- TypeScript strict mode enabled (`strict: true`)
- React 19's new JSX transform (`jsx: "react-jsx"`)
- Page components organized in `src/pages/` directory

### TypeScript Configuration
- Target: ES2022
- Strict type checking enabled
- `noUnusedLocals` and `noUnusedParameters` enforced
- Module resolution: bundler mode
- No emitted files (Vite handles building)
