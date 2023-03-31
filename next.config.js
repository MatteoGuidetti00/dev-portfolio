/** @type {import('next').NextConfig} */
import { join } from "path";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
};

export default nextConfig;
