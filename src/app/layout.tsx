import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@pigment-css/react/styles.css';
import '@arctic-kit/snow/style.css';
import { Header } from '@/components/Header';
// import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Arctic Design',
  description: 'Arctic Design docs app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
