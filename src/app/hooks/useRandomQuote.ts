'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRandomQuote } from '../lib/api';

export const useRandomQuote = (key: number = 0) => {
  return useQuery({
    queryKey: ['randomQuote', key],
    queryFn: fetchRandomQuote,
    retry: false, // Don't retry - fallback is handled in fetchRandomQuote
    throwOnError: false,
    staleTime: 0, // Always allow refetch for new random quotes
  });
};
