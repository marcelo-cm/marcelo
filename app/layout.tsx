import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '../components/molecules/Navbar';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marcelochaman.ca'),
  title: 'Marcelo Chaman Mallqui',
  description: 'A digital representation.',
  openGraph: {
    images: '/opengraph-image.png',
  },
  twitter: {
    images: '/twitter-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="no-scrollbar flex h-dvh flex-col xl:overflow-hidden">
        {children}
        <Navbar />
        <Analytics />
      </body>
    </html>
  );
}
