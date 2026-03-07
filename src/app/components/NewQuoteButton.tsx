interface NewQuoteButtonProps {
  isFetching: boolean;
  onClick: () => void;
}

export function NewQuoteButton({ isFetching, onClick }: NewQuoteButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isFetching}
      className="rounded-full bg-zinc-900 px-8 py-3 text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
    >
      {isFetching ? 'Loading...' : 'Get New Quote'}
    </button>
  );
}
