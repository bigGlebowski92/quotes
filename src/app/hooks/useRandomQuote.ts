'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRandomQuote } from '../lib/api';

export const useRandomQuote = (key: number = 0) => {
  return useQuery({
    queryKey: ['randomQuote', key],
    queryFn: fetchRandomQuote,
    retry: 1,
    throwOnError: false,
  });
};
