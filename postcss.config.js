module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-prefix-selector': {
			prefix: [ '.wp-block.idc-block' ],
			includeFiles: [ 'idc-block-ui.css' ],
		},
		tailwindcss: {},
		autoprefixer: {},
	},
};
