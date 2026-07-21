import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  distDir: isDev ? '.next-dev' : '.next',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
