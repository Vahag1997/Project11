/** @type {import('next').NextConfig} */
const nextConfig = {
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
  
  export default nextConfig;
  