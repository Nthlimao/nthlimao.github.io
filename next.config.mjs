/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    path: "/",
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
