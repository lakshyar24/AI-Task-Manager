import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaskAI - AI Task Manager',  // ✅ New title for the whole app
  description: 'Manage your tasks efficiently with AI-powered Task Manager.',
  generator: 'TaskAI System',  // Changed from "v0.dev"
  keywords: ['Task Management', 'AI', 'Productivity', 'TaskAI'],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  creator: 'TaskAI Team',
  openGraph: {
    title: 'TaskAI - AI Task Manager',
    description: 'Boost your productivity with AI-powered task management.',
    url: 'http://localhost:8080',
    siteName: 'TaskAI',
    images: [
      {
        url: 'https://yourwebsite.com/taskai-logo.png', // Replace if necessary
        width: 800,
        height: 600,
        alt: 'TaskAI Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaskAI - AI Task Manager',
    description: 'Boost your productivity with AI-powered task management.',
    images: ['https://yourwebsite.com/taskai-logo.png'],  // Replace if necessary
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* ✅ Add favicon if available */}
      </head>
      <body>{children}</body>
    </html>
  );
}
