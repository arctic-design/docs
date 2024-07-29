/** @type {import('next').NextConfig} */

import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';
import { DEFAULT_THEME } from '@arctic-kit/snow';

const nextConfig = {
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// export default nextConfig;

export default withPigment(
  {
    ...nextConfig,
  },
  {
    theme: extendTheme({
      ...DEFAULT_THEME,
      cssVarPrefix: 'snow',
    }),
  },
);
