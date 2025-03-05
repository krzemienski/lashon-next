import { Montserrat, Open_Sans, Poppins } from 'next/font/google';
import './globals.css';
import '@/styles/fonts.css';
import MainLayout from '@/components/layout/MainLayout';
import { getAssetPath } from '@/utils/assetPath';
import Script from 'next/script';

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

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

// Define basePath for static exports
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Lashon Music',
  description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
  manifest: '/manifest.json',
  metadataBase: new URL('https://lashon.me'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Lashon Music',
    description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
    url: 'https://lashon.me',
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
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="manifest" href={getAssetPath('/manifest.json')} />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-15KPGZEEFT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-15KPGZEEFT');
          `}
        </Script>
        <Script id="custom-font-loader" strategy="afterInteractive">
          {`
            if (typeof document !== 'undefined') {
              const basePath = '${basePath}';
              const amsterdamFontFace = new FontFace(
                'Amsterdam',
                'url(' + basePath + '/fonts/Amsterdam.woff) format("woff")',
                { style: 'normal', weight: 'normal' }
              );

              amsterdamFontFace.load().then((loadedFace) => {
                document.fonts.add(loadedFace);
              }).catch((error) => {
                console.error('Error loading Amsterdam font:', error);
              });
            }
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
