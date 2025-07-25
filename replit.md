# FPL Custom League Application

## Overview

This is a full-stack Fantasy Premier League (FPL) custom league application built with a modern tech stack. The application allows users to create and manage weekly fantasy football teams, compete in private leagues, view fixtures, and track leaderboards. It integrates with the official FPL API to fetch real-time player data and statistics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with local strategy and session-based auth
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **External API**: Official Fantasy Premier League API integration

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for client-side routing
- **State Management**: TanStack Query for server state and React hooks for local state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom FPL-themed color scheme
- **Authentication Flow**: Context-based auth with protected routes

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging, authentication, and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL connection via Neon serverless
- **Session Management**: Express sessions with PostgreSQL store
- **FPL API Service**: Cached service layer for fetching external FPL data
- **Authentication**: Local strategy with bcrypt password hashing

### Database Schema
The application uses PostgreSQL with the following main entities:
- **Users**: User accounts with authentication and payment status
- **Gameweeks**: Weekly competitions with deadlines and status tracking
- **Teams**: User team selections for each gameweek
- **Player Selections**: Individual player picks within teams
- **Gameweek Results**: Calculated scores and rankings

## Data Flow

1. **User Registration/Login**: Users authenticate via local strategy, sessions stored in PostgreSQL
2. **Team Selection**: Users select players from FPL API data, stored in local database
3. **FPL Data Sync**: Server fetches and caches player data, fixtures, and team information
4. **Score Processing**: System processes gameweek results and updates leaderboards
5. **Real-time Updates**: Frontend polls for updates using TanStack Query

## External Dependencies

### FPL API Integration
- **Hourly Caching System**: Maximum 24 API calls per day (one per hour)
- **Bootstrap Static Data**: Players, teams, and game settings
- **Live Fixtures Data**: Current gameweek fixtures with team names
- **Player Statistics**: Performance metrics and points
- **Automatic Deadline Management**: Gameweek deadlines set 2 hours before first match
- **Cache Statistics**: Monitoring endpoint for API usage tracking

### Key Libraries
- **Authentication**: Passport.js with connect-pg-simple for session storage
- **Database**: Drizzle ORM with Neon PostgreSQL serverless
- **UI Components**: Radix UI primitives via shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns for time formatting and calculations

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend development
- tsx for TypeScript execution in development
- Replit-specific configurations for cloud development

### Production Build
- Vite builds frontend assets to `dist/public`
- esbuild compiles server code to `dist/index.js`
- Single Node.js process serves both API and static files
- Database migrations handled via Drizzle Kit

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Session secret for authentication security
- Production-specific optimizations for static file serving

### Database Management
- Drizzle migrations stored in `/migrations` directory
- Push-based schema updates for development
- PostgreSQL-specific features and constraints utilized

## Recent Changes

### July 23, 2025
- **Implemented Hourly API Caching**: FPL API calls now limited to 24 per day (1 per hour) with intelligent caching
- **Fixed Formation Display**: Now shows exactly 11 players in 4-4-2 formation (1 GK, 4 DEF, 4 MID, 2 FWD)
- **Added Navigation System**: Consistent navigation bar across all pages (Team Selection, Fixtures, Leaderboard)
- **Enhanced Fixtures Page**: Shows only current gameweek fixtures with team names and difficulty ratings
- **Automatic Deadline Management**: Gameweek deadlines automatically set 2 hours before first match
- **Added Admin Controls**: Admin endpoint for manual deadline updates
- **Improved Data Integrity**: All player and fixture data now comes from authentic FPL API

### System Architecture Updates
- **FPL API Service**: New caching service with hourly refresh and daily call limits
- **Gameweek Management**: Automatic deadline calculation and update system
- **Enhanced Routes**: Better error handling and cache statistics monitoring

The application is designed to be deployed as a single process with the Express server handling both API routes and static file serving in production, while maintaining separate development servers for optimal developer experience.