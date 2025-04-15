/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: false,
    experimental: {
      optimizePackageImports: ["@chakra-ui/react"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "**", // Match any hostname
          pathname: "**", // Match any path
        },
        {
          protocol: "https",
          hostname: "**", // Match any hostname
          pathname: "**", // Match any path
        },
      ],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"], 
      });
      return config;
    },
  };
  
  // export default nextConfig;
 export default  withNextIntl(nextConfig);
  