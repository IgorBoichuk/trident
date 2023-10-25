/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig;

module.exports = {
	// Ваші інші налаштування тут

	async headers() {
		return [
			{
				source: "./public/favicon.ico", // Шлях до вашого фавікону
				headers: [
					{
						key: "Content-Type",
						value: "image/x-icon", // Тип фавікону
					},
				],
			},
		];
	},
};
