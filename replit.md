# Overview

This is a full-stack real estate listing web application built with React, Express, and PostgreSQL. The application showcases property listings, projects, and provides functionality for buying, selling, and renting properties in Dubai. It features a modern UI built with shadcn/ui components and Tailwind CSS, with a focus on property browsing and real estate services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend uses React with TypeScript in a component-based architecture:

- **UI Framework**: React 18+ with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state and data fetching
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

**Design Decisions**:
- Chose wouter over React Router for its lightweight footprint
- Used shadcn/ui for accessible, customizable components following Radix UI primitives
- Implemented CSS variables for theming flexibility
- Component structure follows a feature-based organization with sections for different page areas

## Backend Architecture

The backend uses Express.js with TypeScript in an ES module setup:

- **Server Framework**: Express.js with middleware for JSON parsing and URL encoding
- **Storage Layer**: Abstract storage interface (IStorage) with in-memory implementation (MemStorage)
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Development**: Vite middleware integration for HMR in development
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions

**Design Decisions**:
- Storage abstraction allows easy swapping between in-memory and database implementations
- Express middleware handles request logging with response time tracking
- Separation of concerns: routes, storage, and server setup are in different modules
- Development and production builds use different strategies (Vite dev server vs. static files)

## Data Storage

**Database**: PostgreSQL via Neon serverless driver (@neondatabase/serverless)

**Schema Design** (Drizzle ORM):
- Users table with UUID primary keys (generated via `gen_random_uuid()`)
- Zod schemas for validation (drizzle-zod integration)
- Type-safe database operations with TypeScript inference

**Migration Strategy**: 
- Drizzle Kit handles schema migrations
- Migrations stored in `/migrations` directory
- Push-based deployment with `db:push` command

**Design Decisions**:
- Chose Drizzle for its TypeScript-first approach and lightweight nature
- Neon serverless for scalable PostgreSQL without connection pooling issues
- UUID primary keys for distributed system compatibility
- Schema-first design with Zod validation at the edge

## Build and Deployment

**Build Process**:
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Dual-mode configuration for development (tsx) and production (node)

**Development Tools**:
- Replit-specific plugins for error overlay, cartographer, and dev banner
- TypeScript with strict mode enabled
- Path aliases for cleaner imports (@, @shared, @assets)

# External Dependencies

## Third-Party Services

- **Neon Database**: PostgreSQL database hosting (via @neondatabase/serverless)
- **Google Fonts**: Typography (Roboto, Lato, DM Sans, Fira Code, Geist Mono, Architects Daughter)

## Key NPM Packages

**UI Components**:
- @radix-ui/* (30+ primitive components for accessible UI)
- shadcn/ui component system
- lucide-react for icons
- embla-carousel-react for carousels
- class-variance-authority + clsx for conditional styling

**Data & Forms**:
- @tanstack/react-query for data fetching
- react-hook-form + @hookform/resolvers for forms
- zod for validation
- date-fns for date manipulation

**Backend**:
- express for HTTP server
- drizzle-orm + drizzle-kit for database
- connect-pg-simple for session storage

**Development**:
- vite + @vitejs/plugin-react for build tooling
- tsx for TypeScript execution
- esbuild for production builds
- @replit/* plugins for development experience

**Design Decisions**:
- Radix UI chosen for accessibility-first component primitives
- TanStack Query handles caching, refetching, and server state synchronization
- Zod provides runtime type safety complementing TypeScript
- Vite selected for fast HMR and optimized production builds