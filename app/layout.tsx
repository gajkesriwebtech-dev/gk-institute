import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/constants/site';
import { cld } from '@/lib/cloudinary';

const FAVICON = cld('GKWebTech-logo-transparent-lotus_mj5jfh', 64);

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium Web Tech Training`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "GK WebTech AI Institute offers industry-focused training in Web Development, AI, Data Science, and Digital Marketing with real-world projects and internship opportunities.",
  keywords: ["web development institute", "AI training", "digital marketing course", "data science boot camp", "mern stack development", "internship programs", "software engineering"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: FAVICON,
    shortcut: FAVICON,
    apple: FAVICON,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: '@gkwebtech',
    creator: '@gkwebtech',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code', // User can replace this later
  }
};

import { AIChatbot } from '@/components/AIChatbot';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white dark:bg-slate-950 transition-colors duration-300 font-sans">
        <ThemeProvider>
          {children}
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}