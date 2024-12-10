/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      optimizePackageImports: ["@chakra-ui/react"],
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
  