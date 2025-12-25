'use client';

import { useRandomQuote } from '../hooks/useRandomQuote';

export function QuoteDisplay() {
  const { data, isLoading, error, refetch, isFetching } = useRandomQuote();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-zinc-600 dark:text-zinc-400">
          Loading quote...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <div className="text-lg text-red-600 dark:text-red-400">
          Error: {error.message}
        </div>
        <button
          onClick={() => refetch()}
          className="rounded-full bg-zinc-900 px-6 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="max-w-2xl rounded-lg border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <blockquote className="text-xl font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
          &ldquo;{data?.quote}&rdquo;
        </blockquote>
        <cite className="mt-4 block text-right text-sm font-semibold text-zinc-600 dark:text-zinc-400">
          — {data?.author}
        </cite>
      </div>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        className="rounded-full bg-zinc-900 px-8 py-3 text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        {isFetching ? 'Loading...' : 'Get New Quote'}
      </button>
    </div>
  );
}
