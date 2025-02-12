import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
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

export const metadata = {
  title: 'Lashon Music',
  description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
  keywords: 'Lashon, Music, Hip-Hop, R&B, Soul, Miami Artist',
  manifest: getAssetPath('/manifest.json'),
  themeColor: '#10b981',
  openGraph: {
    title: 'Lashon Music',
    description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
    url: 'https://nicholasglazer1.github.io/lashon-next',
    siteName: 'Lashon Music',
    images: [
      {
        url: getAssetPath('/images/og-image.jpg'),
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
    images: [getAssetPath('/images/og-image.jpg')],
  },
  icons: {
    icon: [
      { url: getAssetPath('/favicon.ico') },
      { url: getAssetPath('/logo-portrait.png'), sizes: '192x192', type: 'image/png' },
      { url: getAssetPath('/logo-portrait.png'), sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: getAssetPath('/logo-portrait.png') },
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
        <link rel="manifest" href={getAssetPath('/manifest.json')} />
      </head>
      <body className="antialiased font-sans">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
