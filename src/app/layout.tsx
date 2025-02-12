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
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
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
      <body className="antialiased font-sans">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
