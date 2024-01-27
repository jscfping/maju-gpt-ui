/** @type {import('next').NextConfig} */
import NextBundleAnalyzer from '@next/bundle-analyzer';

const isStatic = process.env.NEXT_PUBLIC_MODE === 'static';

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: isStatic ? 'export' : undefined,
  webpack: config => {
    if (!isStatic || !config.module) {
      return config;
    }
    config.module.rules?.push({
      test: /src\/app\/api/,
      loader: 'ignore-loader',
    });
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
