import { Quote } from '../types/quote';

export const fallbackQuotes: Quote[] = [
  {
    id: 10001,
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    id: 10002,
    quote: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs',
  },
  {
    id: 10003,
    quote: "Life is what happens to you while you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    id: 10004,
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    id: 10005,
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
  },
  {
    id: 10006,
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    id: 10007,
    quote: "Don't let yesterday take up too much of today.",
    author: 'Will Rogers',
  },
  {
    id: 10008,
    quote: 'You learn more from failure than from success.',
    author: 'Unknown',
  },
  {
    id: 10009,
    quote:
      "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.",
    author: 'Steve Jobs',
  },
  {
    id: 10010,
    quote:
      'People who are crazy enough to think they can change the world, are the ones who do.',
    author: 'Rob Siltanen',
  },
  {
    id: 10011,
    quote: 'We may encounter many defeats but we must not be defeated.',
    author: 'Maya Angelou',
  },
  {
    id: 10012,
    quote: 'The only impossible journey is the one you never begin.',
    author: 'Tony Robbins',
  },
  {
    id: 10013,
    quote:
      'In this life we cannot do great things. We can only do small things with great love.',
    author: 'Mother Teresa',
  },
  {
    id: 10014,
    quote:
      'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: 10015,
    quote:
      'The best time to plant a tree was 20 years ago. The second best time is now.',
    author: 'Chinese Proverb',
  },
];

export const getRandomFallbackQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
  return fallbackQuotes[randomIndex];
};
