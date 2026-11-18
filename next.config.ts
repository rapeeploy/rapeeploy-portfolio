import type { NextConfig } from 'next';
const basePath = process.env.GITHUB_PAGES === 'true' ? '/rapeeploy-portfolio' : '';
const config: NextConfig = { output: 'export', basePath, images: { unoptimized: true }, trailingSlash: true };
export default config;
