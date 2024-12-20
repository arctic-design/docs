import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.arctic-kit.com'),
  title: 'Arctic Design Kit',
  description:
    'Arctic Design Kit offers a comprehensive collection of UI components, design guidelines, and best practices to help you build scalable and accessible web applications with ease.',
  keywords: [
    'Design Kit',
    'UI Components',
    'Design System',
    'Arctic Kit',
    'Arctic Design Kit',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'UI/UX Design',
    'Accessibility',
    'Scalable Design',
  ],
  openGraph: {
    title: 'Arctic Design Kit',
    description:
      'Explore the Arctic Design Kit documentation to discover a suite of UI components and design principles for building modern, accessible, and scalable web applications.',
    url: 'https://www.arctic-kit.com',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1080,
        height: 1080,
        alt: 'Arctic Design Kit - UI Components and Design System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arctic Design Kit',
    description:
      'Discover Arctic Design Kit`s comprehensive UI components and design guidelines to create accessible and scalable web applications.',
    images: ['/images/logo.png'],
    creator: '@iambarunprasad',
  },
  robots: 'index, follow',
  authors: {
    name: 'Barun Prasad',
    url: 'https://www.barunprasad.com',
  },
};
