# Legal Portfolio - Hussain Zahid

A modern, high-performance portfolio website for a legal professional specializing in litigation, legal consultancy, and ADR services in Rawalpindi and Islamabad, Pakistan.

## Project Overview

This portfolio website showcases professional legal services with a focus on:
- Litigation and Court Practice
- Legal Drafting and Consultancy
- Alternative Dispute Resolution and Mediation

Built with Next.js 16, React 19, and Framer Motion for smooth animations and optimal performance.

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **TypeScript:** Full type safety
- **Analytics:** Vercel Analytics

## Performance Features

- Dynamic code splitting for optimal bundle sizes
- React.memo for preventing unnecessary re-renders
- GPU-accelerated animations
- Optimized font loading with display swap
- Next.js Image component for automatic image optimization
- Lazy loading for below-the-fold components

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio_hussain
```

2. Install dependencies
```bash
npm install
```

3. Add your professional photo (optional)
```bash
# Place your photo at: /public/images/lawyer-portrait.jpg
# Recommended size: 600x800px (portrait orientation)
```

## Running the Project

### Development Mode

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
portfolio_hussain/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── hero.tsx          # Hero section
│   ├── navigation.tsx    # Navigation bar
│   ├── practice-areas.tsx # Practice areas section
│   ├── experience.tsx    # Experience section
│   ├── testimonials.tsx  # Testimonials carousel
│   ├── cta.tsx           # Call to action
│   ├── footer.tsx        # Footer
│   ├── scroll-progress.tsx # Scroll indicator
│   └── ui/               # UI components (button, card, carousel)
├── lib/                   # Utility functions
└── public/               # Static assets
    └── images/           # Image directory
```

## Customization

### Updating Content

- **Personal Information:** Edit `/components/hero.tsx`
- **Experience:** Edit `/components/experience.tsx`
- **Practice Areas:** Edit `/components/practice-areas.tsx`
- **Testimonials:** Edit `/components/testimonials.tsx`
- **Contact Information:** Edit `/components/footer.tsx`

### Styling

All styling is done through Tailwind CSS classes. Global theme colors are defined in `/app/globals.css`.

### Adding Images

Place your professional photo at `/public/images/lawyer-portrait.jpg`, then uncomment the Image component in `/components/hero.tsx` (lines 153-161).

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with PM2

## License

All rights reserved. © 2025 Hussain Zahid

## Support

For issues or questions, please open an issue in the repository.
