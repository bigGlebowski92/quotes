import { Quote, QuotesResponse } from '../types/quote';
import { getRandomFallbackQuote } from './fallbackQuotes';

export const fetchRandomQuote = async (): Promise<Quote> => {
  // Check if online first - if offline, return fallback immediately
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return getRandomFallbackQuote();
  }

  try {
    // Add timeout to fail quickly when offline (3 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch('https://dummyjson.com/quotes', {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }
    const data: QuotesResponse = await response.json();

    const randomIndex = Math.floor(Math.random() * data.quotes.length);
    return data.quotes[randomIndex];
  } catch {
    // Always return fallback quote when offline or on error
    // This handles network errors, timeouts, and other failures
    return getRandomFallbackQuote();
  }
};
