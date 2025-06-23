# replit.md

## Overview

This project is a **Brainrot DUELTZ™** collectible card game landing page built with React, TypeScript, and modern web technologies. The application is designed as both a full-stack application with backend capabilities and a deployable frontend-only version for platforms like Vercel.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and effects
- **State Management**: React hooks with TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture (Optional)
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **API**: RESTful endpoints with TypeScript

### Build Configuration
- **Development**: Hot reload via Vite dev server on port 5000
- **Production**: Static build to `dist` directory with optional Express server
- **Deployment**: Multiple deployment strategies (Vercel, traditional hosting)

## Key Components

### Core Pages
- **Home Page**: Main landing page with all sections
- **404 Page**: Not found error page

### UI Sections
1. **Navbar**: Fixed navigation with smooth scrolling to sections
2. **Hero Section**: Main branding and call-to-action with animated backgrounds
3. **About Section**: Game features and mechanics explanation
4. **Card Previews**: Interactive card showcase with flip animations
5. **Community Section**: Social media integration and newsletter signup
6. **Collector Section**: Premium features for collectors
7. **Preorder Section**: Countdown timer and purchasing interface
8. **Footer**: Site navigation and social links

### Data Layer
- **Card Data**: Static card information with multilingual support
- **Game Data**: Rules, social links, and game mechanics
- **Translations**: Centralized text content for internationalization

## Data Flow

### Static Content Flow
1. Static data imported from TypeScript modules
2. Components consume data through direct imports
3. No external API calls for basic functionality
4. All content is bundled at build time

### Interactive Features
1. Form submissions handled via React Hook Form
2. Animations triggered by Framer Motion
3. Smooth scrolling managed by native browser APIs
4. Newsletter signup ready for backend integration

### Database Integration (When Enabled)
1. Drizzle ORM handles database schema and queries
2. PostgreSQL stores user sessions and potential game data
3. Connect-pg-simple manages session persistence
4. API endpoints provide data to frontend via TanStack Query

## External Dependencies

### Core Dependencies
- **React Ecosystem**: react, react-dom, react-hook-form
- **Build Tools**: vite, typescript, @vitejs/plugin-react
- **Styling**: tailwindcss, @tailwindcss/vite, autoprefixer
- **UI Components**: @radix-ui/* packages, lucide-react, react-icons
- **Animation**: framer-motion
- **Utilities**: clsx, tailwind-merge, class-variance-authority, date-fns

### Backend Dependencies (Optional)
- **Database**: drizzle-orm, @neondatabase/serverless, drizzle-zod
- **Server**: express (via build process), connect-pg-simple
- **Development**: tsx, esbuild

### Development Tools
- **Replit Integration**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer
- **Type Checking**: TypeScript with strict configuration
- **Linting**: Built-in TypeScript checking

## Deployment Strategy

### Vercel Deployment (Primary)
- **Build Command**: Custom Node.js build script
- **Framework**: Vite auto-detection
- **Output**: `dist` directory with static assets
- **Routing**: SPA routing with catch-all rewrites

### Alternative Deployments
1. **Static Hosting**: Direct `dist` folder deployment
2. **Full-Stack**: Express server with database integration
3. **Replit**: Native development and hosting environment

### Build Configurations
- **Frontend-Only**: Pure static build for CDN deployment
- **Full-Stack**: Express server with bundled frontend
- **Development**: Hot reload with Replit integration

## Recent Changes

- **June 22, 2025**: Pack opening animation completion and orbital card system
  - Implemented perfect circular card orbit around packaging with 260px radius
  - Added smooth card emergence animation from packaging center
  - Cards maintain vertical orientation during 12-second orbital rotation
  - Enhanced card sizing to w-32 h-48 for proper proportions
  - Fixed z-index layering for proper background/foreground hierarchy
  - Synchronized counter-rotation to keep cards upright during orbit

- **June 21, 2025**: Hero section enhancement and character integration
  - Integrated Tralalero Tralala character as animated background element
  - Standardized all hero fonts to use Orbitron family for consistency
  - Added character floating animation and smooth entrance effects
  - Updated Silver Render logo implementation with proper contrast
  - Enhanced hero section layout with character positioning on desktop

- **June 19, 2025**: Official brand implementation and color palette integration
  - Applied complete official Brainrot Dueltz color palette throughout site
  - Replaced all text logos with actual brand logo images (Silver Render)
  - Enhanced card flip functionality to show card backs on hover
  - Implemented gradient backgrounds using official color scheme
  - Updated navbar and footer with proper logo integration

- **June 19, 2025**: Major workspace reorganization and card gallery implementation
  - Removed all outdated build folders and deployment configurations
  - Created organized `assets/` directory structure with cards, fonts, and logos
  - Implemented comprehensive card collection gallery with 3D flip effects
  - Replaced basic card preview system with professional rarity-based sections
  - Enhanced card data structure with proper categorization system
  - Added bilingual support for all card collection features

## Changelog

- June 19, 2025: Comprehensive card gallery system with workspace reorganization
- June 14, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
File organization: Clean, organized workspace with only current version files.