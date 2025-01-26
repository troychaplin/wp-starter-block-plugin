import { unregisterBlockVariation } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

domReady( () => {
	const embedVariations = [
		'animoto',
		'dailymotion',
		'hulu',
		'reddit',
		'tumblr',
		'vine',
		'amazon-kindle',
		'cloudup',
		'crowdsignal',
		'speaker',
		'scribd',
	];

	embedVariations.forEach( ( variation ) => {
		unregisterBlockVariation( 'core/embed', variation );
	} );
} );
