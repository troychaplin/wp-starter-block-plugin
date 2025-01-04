import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Hero } from '@troychaplin79/idc-frontend-ui';

export default function Edit() {
	return (
		<div
			{ ...useBlockProps( {
				className: `idc-block`,
			} ) }
		>
			<Hero.Media>
				<InnerBlocks
					allowedBlocks={ [ 'core/image' ] }
					template={ [ [ 'core/paragraph' ] ] }
					templateLock={ false }
				/>
			</Hero.Media>
		</div>
	);
}
