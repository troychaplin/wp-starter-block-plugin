wp.domReady( function () {
	const formatsToUnregister = [
		'core/code',
		'core/image',
		'core/keyboard',
		'core/language',
	];

	formatsToUnregister.forEach( function ( format ) {
		wp.richText.unregisterFormatType( format );
	} );
} );
