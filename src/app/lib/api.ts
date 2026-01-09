import { Quote, QuotesResponse } from '../types/quote';
import { getRandomFallbackQuote } from './fallbackQuotes';

export const fetchRandomQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch('https://dummyjson.com/quotes');

    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }

    const data: QuotesResponse = await response.json();
    const randomIndex = Math.floor(Math.random() * data.quotes.length);
    return data.quotes[randomIndex];
  } catch {
    return getRandomFallbackQuote();
  }
};
