# Portfolio Website

## Overview

This is a modern, professional portfolio website built with React and TypeScript. The application features a dark-themed design with smooth animations, showcasing a developer's experience, projects, skills, and blog posts. It includes an interactive contact form with backend API integration and a comprehensive component library using shadcn/ui.

## System Architecture

The application follows a full-stack architecture with clear separation of concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library for consistent design
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple
- **Development**: Hot module replacement with Vite integration

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Landing area with animated text and call-to-action buttons
3. **Experience Section**: Timeline-style professional experience display
4. **Projects Section**: Filterable project portfolio with live demos
5. **Skills Section**: Technical skills visualization with progress bars
6. **Blog Section**: Article previews with categorization
7. **Contact Section**: Interactive form with validation and API integration

### Backend Components
1. **API Routes**: RESTful endpoints for contact form submission
2. **Storage Layer**: Abstracted storage interface with memory and database implementations
3. **Middleware**: Request logging, error handling, and body parsing
4. **Database Schema**: User management and contact message storage

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Frontend validates data using Zod schema
3. API request sent to `/api/contact` endpoint
4. Backend validates and stores message in database
5. Success/error response returned to frontend
6. Toast notification displayed to user

### Page Navigation
1. User clicks navigation link
2. Smooth scroll behavior activated via custom hook
3. Page sections animate into view using Framer Motion
4. URL updates without page reload using Wouter

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth transitions
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Zod integration for form validation
- **wouter**: Lightweight routing library
- **class-variance-authority**: Utility for component variant management
- **clsx**: Conditional className utility

### Backend Dependencies
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: PostgreSQL database driver
- **express**: Web application framework
- **connect-pg-simple**: PostgreSQL session store
- **zod**: Runtime type validation
- **tsx**: TypeScript execution environment

### Development Dependencies
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- Vite development server with hot module replacement
- TypeScript compilation with strict mode
- Express server with middleware integration
- Database migrations using Drizzle Kit

### Production Build
1. Frontend assets built with Vite to `dist/public`
2. Backend code bundled with esbuild to `dist/index.js`
3. Static files served by Express in production
4. Environment variables for database configuration

### Database Management
- Schema defined in `shared/schema.ts` for type safety
- Migrations generated and applied using Drizzle Kit
- PostgreSQL connection via environment variable
- Session storage in database for scalability

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 02, 2025. Initial setup