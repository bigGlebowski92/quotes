import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Random Quotes - Inspirational Quotes App',
  description: 'Discover inspiring quotes with offline support. Rate and save your favorite quotes. Built with Next.js, TanStack Query, and TailwindCSS.',
  keywords: ['quotes', 'inspirational quotes', 'motivational quotes', 'random quotes'],
  authors: [{ name: 'Quotes App' }],
  openGraph: {
    title: 'Random Quotes - Inspirational Quotes App',
    description: 'Discover inspiring quotes with offline support. Rate and save your favorite quotes.',
    url: 'https://quotes-livid-xi.vercel.app/',
    siteName: 'Quotes App',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Random Quotes - Inspirational Quotes App',
    description: 'Discover inspiring quotes with offline support. Rate and save your favorite quotes.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
