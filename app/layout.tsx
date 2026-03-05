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
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    icons: {
        icon: FAVICON,
        shortcut: FAVICON,
        apple: FAVICON,
    },
    openGraph: {
        type: 'website',
        siteName: SITE_NAME,
        url: SITE_URL,
    },
    twitter: {
        card: 'summary_large_image',
        site: '@gkwebtech',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
            </head>
            <body className="bg-white dark:bg-slate-950 transition-colors duration-300 font-sans">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
