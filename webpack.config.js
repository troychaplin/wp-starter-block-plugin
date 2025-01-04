const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'block-editor': [ path.resolve( __dirname, 'src/block-editor.js' ) ],
		'admin-scripts': [ path.resolve( __dirname, 'src/admin-scripts.js' ) ],
	},
};
