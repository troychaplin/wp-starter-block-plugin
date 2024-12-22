const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
		'idc-block-editor': [
			path.resolve( __dirname, 'src/scripts/idc-block-editor.js' ),
		],
		'idc-block-admin': [
			path.resolve( __dirname, 'src/scripts/idc-block-admin.js' ),
		],
		'idc-block-frontend': [
			path.resolve( __dirname, 'src/scripts/idc-block-frontend.js' ),
		],
	},
};
