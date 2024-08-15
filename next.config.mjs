/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // deviceSizes: [480, 750, 1200],
    // formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagekit.io",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
