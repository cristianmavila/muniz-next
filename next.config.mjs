/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // deviceSizes: [480, 750, 1200],
    // formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagekit.io",
      },
    ],
  },
};

export default nextConfig;
