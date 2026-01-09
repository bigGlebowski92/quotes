'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRandomQuote } from '../lib/api';

export const useRandomQuote = () => {
  return useQuery({
    queryKey: ['randomQuote'],
    queryFn: fetchRandomQuote,
    retry: false, // Don't retry - fallback is handled in fetchRandomQuote
    throwOnError: false,
    staleTime: 0, // Always allow refetch to get a new random quote
    gcTime: 0, // Don't cache - we want fresh random quotes each time
  });
};




