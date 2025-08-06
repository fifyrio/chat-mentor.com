# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Development:
- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint code quality checks

## Tech Stack

**Core Framework:**
- Next.js 14.0.1 with React 18.2.0 and TypeScript 5.2.2
- App Router architecture (src/app directory)
- Static export configuration available (commented out in next.config.js)

**Styling:**
- Tailwind CSS 3.3.5 with custom color scheme (primary: #1ABC9C, black: #061257)
- SCSS/PostCSS for additional styling
- AOS library for scroll animations
- RemixIcon for icons
- Custom container breakpoints defined in tailwind.config.js

**AI Integration:**
- OpenAI API (GPT-4o-mini) for AI features
- Replicate API for additional AI models
- Custom API routes in src/app/api/ai/ for different AI functionalities

**Key Dependencies:**
- NextAuth.js for authentication
- React Hook Form for form handling
- React Hot Toast for notifications
- Vercel Analytics and Speed Insights
- Cloudflare R2 for file storage

## Architecture

**File Structure:**
- `/src/app/` - Next.js app router pages and API routes
- `/src/components/` - React components organized by feature/page
- `/src/providers/` - React context providers
- `/public/` - Static assets (images, fonts, CSS)

**AI Features:**
This is a multi-functional AI platform with several tools:
- AI Fortune Teller
- AI Personality Generator  
- AI Story Generator
- Image Description Generator
- Image to Prompt Converter
- Tweet Reply Generator
- Content Writing Assistant

**API Routes:**
- `/api/ai/content-writing/` - Text generation using OpenAI
- `/api/ai/image-to-text/` - Image analysis using GPT-4 Vision
- `/api/auth/` - Authentication endpoints
- `/api/upload/` - File upload handling

**Component Organization:**
Components are organized by app section (ExpenseTrackerApp, GameApp, SaasApp, etc.) with shared components in Common/ and Layout/ directories. Each app section typically includes: HeroBanner, Features, AboutApp, AppScreens, Testimonials, Footer, and Navbar components.

**Environment Variables:**
Requires OPENAI_API_KEY for AI functionality. Proxy configuration is available but commented out in API routes.

**Deployment:**
Configured for Vercel deployment with analytics and speed insights. Static export capability is available but currently disabled.