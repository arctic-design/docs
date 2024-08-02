import createMDX from '@next/mdx';
import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';
import { DEFAULT_THEME } from '@arctic-kit/snow';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
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
