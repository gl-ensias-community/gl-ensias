// src/app/dashboard/dashboardMetadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://dashboard.rewind-ui.dev'),
  title: 'Rewind-UI - Admin Dashboard',
  description: 'Effortless interfaces',
  generator: 'Next.js',
  applicationName: 'Rewind-UI - Admin Dashboard',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'UI', 'React component library'],
  authors: [{ name: 'Nick Dunas' }],
  creator: 'Nick Dunas',
  publisher: 'Nick Dunas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      default: 'Rewind-UI',
      template: 'Rewind-UI - %s',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rewind-UI',
    description: 'Effortless user interfaces',
    images: '/images/og-image.jpg',
    creator: '@NickDunas',
  },
};
