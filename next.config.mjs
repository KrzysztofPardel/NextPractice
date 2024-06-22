/** @type {import('next').NextConfig} */
// const nextConfig = {
//     async redirects() {
//     return [
//       // Basic redirect
//       {
//         source: '/about',
//         destination: '/',
//         permanent: true,
//       },
//       // Wildcard path matching
//       {
//         source: '/blog/:slug',
//         destination: '/news/:slug',
//         permanent: true,
//       },
//     ]
//   },
// };

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	compress: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				port: '',
				pathname: '/*/*',
			},
		],
	},
};

export default nextConfig;
