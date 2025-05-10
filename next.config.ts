// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn-icons-png.flaticon.com'], // Allow external domain
  },
};

export default nextConfig;
