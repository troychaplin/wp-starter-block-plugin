import { unregisterFormatType } from '@wordpress/rich-text';
import domReady from '@wordpress/dom-ready';

domReady( () => {
	const formatsToUnregister = [
		'core/code',
		'core/image',
		'core/keyboard',
		'core/language',
	];

	formatsToUnregister.forEach( ( format ) => {
		unregisterFormatType( format );
	} );
} );
