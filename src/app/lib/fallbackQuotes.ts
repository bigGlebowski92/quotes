import { Quote } from '../types/quote';

export const fallbackQuotes: Quote[] = [
  {
    id: 1,
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    id: 2,
    quote: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs',
  },
  {
    id: 3,
    quote: 'Life is what happens to you while you\'re busy making other plans.',
    author: 'John Lennon',
  },
  {
    id: 4,
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    id: 5,
    quote: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
  },
  {
    id: 6,
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    id: 7,
    quote: 'Don\'t let yesterday take up too much of today.',
    author: 'Will Rogers',
  },
  {
    id: 8,
    quote: 'You learn more from failure than from success.',
    author: 'Unknown',
  },
  {
    id: 9,
    quote: 'If you are working on something exciting that you really care about, you don\'t have to be pushed. The vision pulls you.',
    author: 'Steve Jobs',
  },
  {
    id: 10,
    quote: 'People who are crazy enough to think they can change the world, are the ones who do.',
    author: 'Rob Siltanen',
  },
  {
    id: 11,
    quote: 'We may encounter many defeats but we must not be defeated.',
    author: 'Maya Angelou',
  },
  {
    id: 12,
    quote: 'The only impossible journey is the one you never begin.',
    author: 'Tony Robbins',
  },
  {
    id: 13,
    quote: 'In this life we cannot do great things. We can only do small things with great love.',
    author: 'Mother Teresa',
  },
  {
    id: 14,
    quote: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: 15,
    quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    author: 'Chinese Proverb',
  },
];

export const getRandomFallbackQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
  return fallbackQuotes[randomIndex];
};

