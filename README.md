# Nikita Skvortsov - Portfolio Website

Personal portfolio website showcasing my experience, projects, and skills as a PHP Backend Developer.

## Demo

**Live:** [https://squora.github.io](https://squora.github.io)

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7 with SWC |
| **Styling** | SCSS with CSS Variables, Mixins, BEM |
| **i18n** | i18next (RU/EN) |
| **Icons** | react-icons |

## Features

- Single-page layout with smooth scroll navigation
- Side navigation with active section indicators
- Scroll progress indicator
- Fully responsive design (mobile, tablet, desktop)
- Dark theme with glassmorphism effects
- Animated statistics counters
- Project showcase with image carousels
- Contact form
- Language switcher (Russian / English)
- SEO optimized with Open Graph and JSON-LD

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/squora/squora.github.io.git
cd squora.github.io

# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/                    # Images and static files
│   ├── avatar.png
│   └── shortengo/             # Project screenshots
├── components/
│   ├── sections/              # Page sections
│   │   ├── Contacts.tsx       # Contact form and social links
│   │   ├── Education.tsx      # Education timeline
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Hero.tsx           # Hero section with intro
│   │   ├── ProjectCard.tsx    # Project card component
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Skills.tsx         # Skills by category
│   │   └── Stats.tsx          # Animated statistics
│   ├── LanguageSwitcher.tsx   # RU/EN toggle
│   ├── ScrollProgress.tsx     # Scroll progress bar
│   └── SideNavigation.tsx     # Section navigation
├── i18n/
│   ├── index.ts               # i18n configuration
│   └── locales/
│       ├── en.json            # English translations
│       └── ru.json            # Russian translations
├── pages/
│   └── Home.tsx               # Main page layout
├── styles/
│   ├── _animations.scss       # Shared keyframe animations
│   ├── _mixins.scss           # Reusable SCSS mixins
│   ├── App.scss
│   ├── Contacts.scss
│   ├── Education.scss
│   ├── Experience.scss
│   ├── Hero.scss
│   ├── Home.scss
│   ├── LanguageSwitcher.scss
│   ├── Navbar.scss
│   ├── ProjectCard.scss
│   ├── Projects.scss
│   ├── ScrollProgress.scss
│   ├── Skills.scss
│   └── Stats.scss
├── App.tsx                    # Main app component
├── index.css                  # Global styles & CSS variables
└── main.tsx                   # Entry point
```

## Path Aliases

Configured in `vite.config.ts` and `tsconfig.app.json`:

| Alias | Path |
|-------|------|
| `@styles` | `src/styles` |
| `@pages` | `src/pages` |
| `@components` | `src/components` |
| `@assets` | `src/assets` |

## SCSS Architecture

### Mixins (`_mixins.scss`)

| Mixin | Description |
|-------|-------------|
| `glass-card` | Glassmorphism card with backdrop blur |
| `hover-lift` | Lift animation with shadow on hover |
| `hover-top-border` | Animated top border on hover |
| `icon-circle($size)` | Circular icon container |
| `section-title` | Section title with gradient underline |
| `badge-pill` | Badge/tag styling |
| `auto-grid($min, $gap)` | Auto-fit responsive grid |
| `line-clamp($lines)` | Multi-line text truncation |
| `scroll-reveal` | Scroll-triggered fade animation |
| `focus-visible` | Keyboard focus styling |

### Animations (`_animations.scss`)

- `fadeIn`, `fadeInUp`, `fadeInDown` - Fade transitions
- `bounce`, `pulse`, `blink` - Attention animations
- `spin`, `shake`, `shimmer` - Special effects

## Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description |
|----------|-------------|
| `VITE_SITE_URL` | Site URL for canonical links |
| `VITE_EMAIL_SERVICE_URL` | Email service endpoint (optional) |
| `VITE_ANALYTICS_ID` | Analytics tracking ID (optional) |

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## Performance

Build optimizations:
- Code splitting (React, i18n, icons as separate chunks)
- ES2020 target for modern browsers
- CSS and JS minification
- Asset hashing for cache busting

## License

MIT
