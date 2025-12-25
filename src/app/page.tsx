import { QuoteDisplay } from './components/QuoteDisplay';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8 py-16 px-4 sm:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Random Quotes
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Discover inspiring quotes powered by{' '}
            <a
              href="https://dummyjson.com/quotes"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline dark:text-zinc-100"
            >
              DummyJSON Quotes API
            </a>
          </p>
        </div>
        <QuoteDisplay />
      </main>
    </div>
  );
}
