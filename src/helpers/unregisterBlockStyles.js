import { unregisterBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import domReady from '@wordpress/dom-ready';

domReady( () => {
	unregisterBlockStyle( 'core/button', [ 'outline' ] );
	unregisterBlockStyle( 'core/gallery', [ 'default', 'rounded' ] );
	unregisterBlockStyle( 'core/image', [ 'default', 'rounded' ] );
	unregisterBlockStyle( 'core/quote', [ 'plain' ] );
	unregisterBlockStyle( 'core/table', [ 'regular', 'stripes' ] );
} );

function modifyCoreButton( settings, name ) {
	if ( [ 'core/buttons', 'core/button' ].includes( name ) ) {
		settings.styles = settings.styles.map( ( style ) =>
			style.name === 'fill' ? { ...style, label: 'Dark Blue' } : style
		);
	}

	return settings;
}
addFilter(
	'blocks.registerBlockType',
	'cutheme/core-button-modifications',
	modifyCoreButton
);
