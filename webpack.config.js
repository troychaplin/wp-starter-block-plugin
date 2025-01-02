const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'idc-block-editor': [
			path.resolve( __dirname, 'src/idc-block-editor.js' ),
		],
		'idc-block-admin': [
			path.resolve( __dirname, 'src/idc-block-admin.js' ),
		],
	},
};
