# CLAUDE.md - Lashon Music Website Guide

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Code Style Guidelines
- **Imports**: Use absolute imports with @ alias (e.g., `@/components/`)
- **Components**: 
  - Function components with explicit return types
  - 'use client' directive for client components
  - Props interfaces defined inline or imported
- **Naming**:
  - PascalCase for components and interfaces
  - camelCase for variables, functions, and instances
- **Styling**: Use Tailwind classes with consistent patterns
- **Fonts**: Montserrat (headings), Open Sans (body), Amsterdam (display)
- **Error Handling**: Use try/catch for async operations
- **TypeScript**: Strict mode enabled, explicit types for props and returns
- **File Structure**: Organized by feature/page in src/components/[feature]