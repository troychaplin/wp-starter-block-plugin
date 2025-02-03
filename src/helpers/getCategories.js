import { useSelect } from '@wordpress/data';

export const autoSuggestCategories = ( getAllCats ) => {
	const catAutoSuggest = {};
	if ( getAllCats ) {
		getAllCats.forEach( ( category ) => {
			catAutoSuggest[ category.name ] = category;
		} );
	}
	return catAutoSuggest;
};

export const GetAllCategories = ( posttype ) => {
	return useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'taxonomy', posttype, {
			per_page: -1,
		} );
	} );
};

export const updateCategories = ( values, catAutoSuggest ) => {
	return values.map( ( enteredCat ) => {
		return typeof enteredCat === 'string'
			? catAutoSuggest[ enteredCat ]
			: enteredCat;
	} );
};

export const hasNoSuggestions = ( values, catAutoSuggest ) => {
	return values.some(
		( value ) => typeof value === 'string' && ! catAutoSuggest[ value ]
	);
};
