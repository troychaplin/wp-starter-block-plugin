module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-prefix-selector': {
			prefix: [ '.wp-block.idc-block' ],
			includeFiles: [ 'idc-blocks.css' ],
		},
		tailwindcss: {},
		autoprefixer: {},
	},
};
