import './globals.css';
import type { Metadata } from 'next';
import ResponsiveLayout from './components/ResponsiveLayout';

export const metadata: Metadata = {
  title: 'Nicholas Frezzia Portfolio',
  description: 'Created by Nico Frezzia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden transition-colors duration-300">
        <ResponsiveLayout>
          {children}
        </ResponsiveLayout>
      </body>
    </html>
  );
}
