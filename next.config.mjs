import createMDX from '@next/mdx';
import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';
import { DEFAULT_THEME } from '@arctic-kit/snow';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // config.module.rules.push({
    //   test: /\.(ts|tsx|jsx|js)$/, // Use asset/source for text content
    //   resourceQuery: /source/,
    //   type: 'asset/source',
    // });

    config.module.rules.push({
      test: /\.(ts|tsx|jsx|js)$/,
      resourceQuery: /raw/, // Applies only to imports with ?raw
      use: path.resolve('./rawFileLoader.mjs'), // Use the custom loader
    });

    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
};

const withMDX = createMDX({
  extension: /\.(md|mdx)?$/,
});

const nextConfigWithMdx = withMDX(nextConfig);

export default withPigment(nextConfigWithMdx, {
  theme: extendTheme({
    ...DEFAULT_THEME,
    cssVarPrefix: 'snow',
  }),
});
