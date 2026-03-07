interface FavoriteButtonProps {
  isFav: boolean;
  onToggle: () => void;
}

export function FavoriteButton({ isFav, onToggle }: FavoriteButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        isFav
          ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
          : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
      }`}
    >
      {isFav ? '❤️ Favorited' : '🤍 Favorite'}
    </button>
  );
}
