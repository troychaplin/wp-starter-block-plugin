export const limitWords = ( text, limit ) => {
	const words = text.split( ' ' );
	if ( words.length > limit ) {
		return words.slice( 0, limit ).join( ' ' ) + '...';
	}
	return text;
};

export const checkCharacterLimit = ( value, maxChars ) => {
	if ( value && value.length > maxChars ) {
		return true;
	}
	return false;
};
