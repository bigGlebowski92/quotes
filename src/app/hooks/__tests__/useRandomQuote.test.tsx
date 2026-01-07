import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useRandomQuote } from '../useRandomQuote';
import * as api from '../../lib/api';

vi.mock('../../lib/api');

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = 'TestWrapper';
  return Wrapper;
};

describe('useRandomQuote', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch quote on mount', async () => {
    const mockQuote = { id: 1, quote: 'Test', author: 'Author' };
    vi.mocked(api.fetchRandomQuote).mockResolvedValue(mockQuote);

    const { result } = renderHook(() => useRandomQuote(), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(mockQuote);
    expect(api.fetchRandomQuote).toHaveBeenCalled();
  });

  it('should handle errors gracefully', async () => {
    const mockFallback = {
      id: 999,
      quote: 'Fallback',
      author: 'Fallback Author',
    };
    vi.mocked(api.fetchRandomQuote)
      .mockRejectedValueOnce(new Error('API Error'))
      .mockResolvedValueOnce(mockFallback);

    const { result } = renderHook(() => useRandomQuote(), {
      wrapper: createWrapper(),
    });

    await waitFor(
      () => {
        expect(result.current.isLoading).toBe(false);
      },
      { timeout: 3000 }
    );

    expect(result.current.isLoading).toBe(false);
  });
});
