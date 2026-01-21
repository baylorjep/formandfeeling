# Form & Feeling - Interior Design Consulting

A refined, minimal website for Form & Feeling, an interior design consulting studio by Nicole Harker. Built with Next.js, TypeScript, and Tailwind CSS.

## Brand

- **Name**: FORM & FEELING
- **Tagline**: Personal spaces, thoughtfully refined
- **Positioning**: Interior design consulting (guidance, direction, strategy—not full-service execution)

## Features

- **Editorial Design**: Elegant Canela typography with warm, neutral palette
- **Consulting-Focused Copy**: Clear positioning as design consulting, not execution
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with Next.js and image optimization
- **SEO Friendly**: Proper metadata and structured content
- **Contact Form**: Ready for integration

## Pages

- **Home**: Brand lockup, intro, services preview, process steps, CTA
- **Services**: Consulting model, service bullets, three packages (The Consult, The Refine, The Align)
- **Portfolio**: Design direction examples with consulting context
- **About**: Form & Feeling philosophy and Nicole's bio
- **Contact**: "Begin the Conversation" form

## Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Typography**: Canela (self-hosted) + Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd formandfeeling
```

2. Install dependencies:
```bash
npm install
```

3. Add Canela font files to `/public/fonts/`:
   - `Canela-Light.woff2`
   - `Canela-Regular.woff2`
   - `Canela-Medium.woff2`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

### Colors
- **Ivory**: `#FDFBF7` - Primary background
- **Linen**: `#F5F1EB` - Secondary background
- **Stone**: `#D4CFC7` - Borders and dividers
- **Greige**: `#8A857D` - Secondary text
- **Ink**: `#2C2825` - Primary text
- **Clay**: `#A69080` - Accent color
- **Taupe**: `#C4B5A6` - Hover states

### Typography
- **Serif**: Canela - Headlines and brand name
- **Sans**: Inter - Body text and navigation

## Brand Assets

All brand copy is centralized in `src/data/brand.ts`:
- Brand statements
- Keywords
- CTA labels
- Service packages
- Process steps
- SEO metadata

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

---

Form & Feeling by Nicole Harker
*Personal spaces, thoughtfully refined*
