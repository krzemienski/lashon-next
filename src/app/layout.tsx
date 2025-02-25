import { Montserrat, Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import '@/styles/fonts.css';
import MainLayout from '@/components/layout/MainLayout';
import { getAssetPath } from '@/utils/assetPath';

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

const amsterdam = localFont({
  src: './Amsterdam.ttf',
  variable: '--font-amsterdam',
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Lashon Music',
  description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Lashon Music',
    description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
    url: 'https://lashonmusic.com',
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
    images: ['/images/twitter-image.jpg'],
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
    <html lang="en" className={`${amsterdam.variable} ${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href={getAssetPath('/manifest.json')} />
      </head>
      <body className="antialiased font-sans">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
