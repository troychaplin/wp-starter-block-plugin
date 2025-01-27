import { useSelect } from '@wordpress/data';

const useIsFirstBlockCheck = ( clientId ) => {
	return useSelect(
		( select ) => {
			const { getBlockOrder, getBlockRootClientId } =
				select( 'core/block-editor' );
			const parentClientId = getBlockRootClientId( clientId );
			const firstBlockClientId = getBlockOrder()[ 0 ];
			return parentClientId
				? firstBlockClientId === parentClientId
				: firstBlockClientId === clientId;
		},
		[ clientId ]
	);
};

export default useIsFirstBlockCheck;
