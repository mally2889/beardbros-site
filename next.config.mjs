/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  images: { remotePatterns: [] },
  typescript: { ignoreBuildErrors: true }
};
export default nextConfig;
