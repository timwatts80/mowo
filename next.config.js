/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/i,
      issuer: /.[jt]sx?$/,
      use: ["@svgr/webpack"],
    },
    {
      test: /\.(mp4|webm)$/,
      type: "asset/resource", // Use built-in asset handling
    }
    );

    return config
  },
};
