'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRandomQuote } from '../lib/api';

export const useRandomQuote = () => {
  return useQuery({
    queryKey: ['randomQuote'],
    queryFn: fetchRandomQuote,
  });
};

