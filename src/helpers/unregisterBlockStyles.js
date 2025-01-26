import { unregisterBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

domReady( () => {
	// Unregister block styles
	unregisterBlockStyle( 'core/button', [ 'outline' ] );
	unregisterBlockStyle( 'core/gallery', [ 'default', 'rounded' ] );
	unregisterBlockStyle( 'core/image', [ 'default', 'rounded' ] );
	unregisterBlockStyle( 'core/quote', [ 'plain' ] );
	unregisterBlockStyle( 'core/table', [ 'regular', 'stripes' ] );
} );
