# Quotes App

A modern React application built with Next.js, TanStack Query, and TailwindCSS that displays random inspirational quotes. The app features offline support, quote rating, favorites, and comprehensive test coverage.

## Features

### ✅ Core Features

- **Random Quote Display**: Fetches random quotes from the [DummyJSON Quotes API](https://dummyjson.com/quotes)
- **Offline Support**: Gracefully handles network failures with hardcoded fallback quotes
- **Quote Rating**: Rate quotes from 1-5 stars (stored in localStorage)
- **Favorites**: Save favorite quotes for later (stored in localStorage)
- **Responsive Design**: Beautiful UI built with TailwindCSS, works on all devices
- **Dark Mode**: Automatic dark mode support

### 🎨 User Stories Implemented

1. ✅ **Offline Handling**: Falls back to 15 curated hardcoded quotes when offline or API fails
2. ✅ **Quote Rating**: Users can rate quotes 1-5 stars, ratings persist in localStorage

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bigGlebowski92/quotes.git
cd quotes
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
src/app/
├── components/
│   └── QuoteDisplay.tsx      # Main quote display component
├── hooks/
│   └── useRandomQuote.ts      # Custom hook for fetching quotes
├── lib/
│   ├── api.ts                 # API functions
│   ├── fallbackQuotes.ts      # Hardcoded fallback quotes
│   └── quoteStorage.ts        # localStorage utilities for ratings/favorites
├── types/
│   └── quote.ts               # TypeScript type definitions
├── providers.tsx              # TanStack Query provider setup
├── layout.tsx                 # Root layout
└── page.tsx                   # Home page
```

## Testing

The project includes comprehensive unit tests covering:

- API functions (with fallback handling)
- Fallback quotes functionality
- LocalStorage utilities (ratings & favorites)
- Custom hooks (TanStack Query integration)

Run tests:

```bash
npm run test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## CI/CD

The project uses GitHub Actions for continuous integration:

### Workflows

1. **CI Pipeline** (`.github/workflows/ci.yml`)

   - Runs on every push and pull request
   - Executes linting
   - Runs all unit tests
   - Builds the project to ensure it compiles
   - Runs on Node.js 20.x

2. **Test Coverage** (`.github/workflows/test-coverage.yml`)
   - Generates coverage reports
   - Uploads coverage to Codecov (optional)

### Status Badges

You can add these badges to your README (after first CI run):

```markdown
![CI](https://github.com/bigGlebowski92/quotes/workflows/CI/badge.svg)
![Test Coverage](https://codecov.io/gh/bigGlebowski92/quotes/branch/main/graph/badge.svg)
```

### Local CI Simulation

To test CI locally before pushing:

```bash
# Run all CI checks
npm run lint && npm run test -- --run && npm run build
```

## Offline Support

The app handles offline scenarios gracefully:

1. **Network Detection**: Automatically detects when the device goes offline
2. **Fallback Quotes**: Uses 15 curated hardcoded quotes when API is unavailable
3. **Visual Indicator**: Shows "Offline - Showing fallback quote" badge
4. **Seamless Experience**: Users can still rate and favorite quotes while offline

## Features in Detail

### Quote Rating

- Click stars (1-5) to rate any quote
- Ratings are saved in localStorage
- Ratings persist across sessions
- Each quote can have one rating (updates on re-rating)

### Favorites

- Click the "Favorite" button to save quotes
- Favorites are stored in localStorage
- Toggle favorite status on/off
- Persists across browser sessions

### Offline Mode

- Automatically switches to fallback quotes when:
  - Network is unavailable
  - API request fails
  - API returns error status
- Fallback quotes are randomly selected from 15 curated quotes
- All features (rating, favorites) work in offline mode

## Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting configured
- **Modular Architecture**: Separation of concerns (types, hooks, components, API)
- **Error Handling**: Comprehensive error handling and fallbacks
- **Accessibility**: ARIA labels and semantic HTML

## Development Setup

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Run tests: `npm run test`
4. Build for production: `npm run build`

## Deployment

The app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): [Deploy Now](https://vercel.com/new)
- **Netlify**: Connect your GitHub repository
- **Docker**: Use the included Dockerfile (if added)

## API Used

- **DummyJSON Quotes API**: https://dummyjson.com/quotes
  - Returns 30 random quotes per request
  - No API key required
  - Free tier with rate limits

## Future Enhancements

Potential features to add:

- Share quotes on social media
- Quote slideshow/carousel
- Multiple API racing (fetch from multiple sources, use fastest)
- Quote history
- Export favorites
- Copy to clipboard

## License

This project is open source and available under the MIT License.

## Author

Built as a coding assignment demonstrating:

- Modern React patterns
- State management with TanStack Query
- Offline-first architecture
- Comprehensive testing
- Clean code structure
