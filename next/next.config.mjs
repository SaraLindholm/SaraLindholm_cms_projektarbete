// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.ctfassets.net",
//         pathname: "/**",
//       },
//     ],
//   },
// };
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
