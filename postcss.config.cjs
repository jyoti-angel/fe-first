// module.exports = require('svelte-components/postcss.config.cjs');

module.exports = (option) => ({
	plugins: {
		'postcss-import': {},
		'postcss-nesting': {},
		'tailwindcss/nesting': {},
		...(option?.file?.basename === '_theme.css' ? {} : { tailwindcss: {} }),
		autoprefixer: {},
		'postcss-extend-rule': {}
	}
});
