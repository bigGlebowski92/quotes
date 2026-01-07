# Quotes App

A modern React application that displays random inspirational quotes with offline support, rating, and favorites functionality.

**🌐 Live Demo:** [https://quotes-livid-xi.vercel.app/](https://quotes-livid-xi.vercel.app/)

## What is this app?

The Quotes App is a Next.js application that fetches and displays random inspirational quotes from the DummyJSON Quotes API. Users can rate quotes, save favorites, and continue using the app even when offline thanks to built-in fallback quotes.

## How it works

1. **Quote Fetching**: The app fetches random quotes from the [DummyJSON Quotes API](https://dummyjson.com/quotes)
2. **Offline Support**: When the network is unavailable or the API fails, the app automatically falls back to 15 curated hardcoded quotes
3. **User Interactions**: Users can rate quotes (1-5 stars) and save favorites, all stored locally in the browser
4. **State Management**: TanStack Query handles data fetching, caching, and error states
5. **Persistence**: Ratings and favorites are saved in localStorage and persist across sessions

## Features

- ✅ **Random Quote Display**: Fetches random quotes from DummyJSON Quotes API
- ✅ **Offline Support**: Gracefully handles network failures with 15 hardcoded fallback quotes
- ✅ **Quote Rating**: Rate quotes from 1-5 stars (stored in localStorage)
- ✅ **Favorites**: Save favorite quotes for later (stored in localStorage)
- ✅ **Responsive Design**: Beautiful UI built with TailwindCSS, works on all devices
- ✅ **Dark Mode**: Automatic dark mode support
- ✅ **Network Detection**: Automatically detects offline status and shows visual indicator

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Language**: TypeScript
- **Deployment**: [Vercel](https://vercel.com/)

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
- `npm run ci` - Run all CI checks locally (lint + test + build)

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

**17 tests** - All passing ✅

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

- **CI Pipeline**: Runs linting, tests, and build verification on every push
- **Test Coverage**: Generates and tracks test coverage reports
- **Automated**: All checks run automatically on push and pull requests

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

## Code Quality

- **TypeScript**: Full type safety throughout
- **ESLint**: Code linting configured and passing
- **Modular Architecture**: Clean separation of concerns
- **Error Handling**: Comprehensive error handling and fallbacks
- **Accessibility**: ARIA labels and semantic HTML
- **Testing**: 17 unit tests with 100% pass rate

## API Used

- **DummyJSON Quotes API**: https://dummyjson.com/quotes
  - Returns 30 random quotes per request
  - No API key required
  - Free tier with rate limits

## License

This project is open source and available under the MIT License.
