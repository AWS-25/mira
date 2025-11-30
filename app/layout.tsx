import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mira - WhatsApp Data Analyst',
  description: 'Mira turns messy CSVs into instant WhatsApp-ready insights with AI-driven reports',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

