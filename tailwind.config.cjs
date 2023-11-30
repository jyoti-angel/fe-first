/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('svelte-components/tailwind-config')],
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-components/**/*.{html,js,svelte,ts}'
	],
	blocklist: [],
	safelist: [],
	theme: {},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				// application specific
			};
			addUtilities(newUtilities);
		}
	]
};
