/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "conforto.s3.sa-east-1.amazonaws.com",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
