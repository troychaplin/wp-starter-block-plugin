import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<div
			{ ...useBlockProps( {
				className: `ui-prose-first-last px-7 py-6 md:px-16 md:py-12 bg-idc-blue-600 text-white`,
			} ) }
		>
			<InnerBlocks
				allowedBlocks={ [ 'core/paragraph', 'gravityforms/form' ] }
				template={ [ [ 'core/paragraph' ] ] }
				templateLock={ false }
			/>
		</div>
	);
}
