import type { Quote } from '../types/quote';

interface QuoteBlockProps {
  quote: Quote;
}

export function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <div className="max-w-2xl rounded-lg border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <blockquote className="text-xl font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
        &ldquo;{quote.quote}&rdquo;
      </blockquote>
      <cite className="mt-4 block text-right text-sm font-semibold text-zinc-600 dark:text-zinc-400">
        — {quote.author}
      </cite>
    </div>
  );
}
