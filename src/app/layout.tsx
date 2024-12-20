import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import '@pigment-css/react/styles.css';
import '@arctic-kit/snow/style.css';
import { Header } from '@/components/Header';
import { ScrollToTop } from '@/components/ScrollToTop';
import { getSearchContent } from '@/app/action';
import { siteMetadata } from './siteMetadata';

import lunr from 'lunr';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = { ...siteMetadata };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchableDocs = await getSearchContent();
  // Build the Lunr index
  const lunrIndex = lunr(function () {
    // this.field('slug');
    this.field('content');
    // this.field('parentTitle');
    // this.field('parentSlug');
    this.field('id');
    this.ref('id');

    searchableDocs.forEach((doc) => {
      this.add({
        id: doc.id,
        slug: doc.slug,
        content: doc.content,
        parentTitle: doc.parentTitle,
        parentSlug: doc.parentSlug,
      });
    });
  });

  const searchIndex = JSON.stringify(lunrIndex);

  return (
    <html lang='en' className='theme-light'>
      <body className={`${inter.className} antialiased`}>
        <Header docs={searchableDocs} searchIndex={searchIndex} />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
