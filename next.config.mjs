/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next.js 16 only allows quality=75 by default; the app also renders
    // some images at quality={95}, so that value has to be allowlisted too.
    qualities: [75, 95],
  },
};

export default nextConfig;
