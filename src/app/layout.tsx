import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata = {
  title: 'Lashon Music',
  description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
  keywords: 'Lashon, Music, Hip-Hop, R&B, Soul, Miami Artist',
  manifest: '/manifest.json',
  themeColor: '#10b981',
  openGraph: {
    title: 'Lashon Music',
    description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
    url: 'https://lashon.music',
    siteName: 'Lashon Music',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lashon Music',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lashon Music',
    description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
    creator: '@lashon_music',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-192x192.png' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#10b981" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased font-sans">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
