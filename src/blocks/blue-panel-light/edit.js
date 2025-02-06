import { useBlockProps, InnerBlocks, PlainText } from '@wordpress/block-editor';
import { Header } from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const { blockHeader } = attributes;

	return (
		<div
			{ ...useBlockProps( {
				className: `prose md:prose-lg ui-prose-first-last px-7 py-6 md:px-16 md:py-12 bg-idc-blue-50`,
			} ) }
		>
			<Header
				as="h2"
				isItalic
				size="md"
				weight="bold"
				title={
					<PlainText
						placeholder="Add a heading for this block"
						className="not-prose text-idc-blue-800 text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem] font-bold italic pb-4 last:pb-0"
						style={ {
							border: 'none',
							padding: '0',
							backgroundColor: 'transparent',
							resize: 'none',
						} }
						onChange={ ( value ) =>
							setAttributes( { blockHeader: value } )
						}
						value={ blockHeader }
						allowedFormats={ [] }
						disableLineBreaks={ true }
					/>
				}
			>
				<InnerBlocks
					allowedBlocks={ [
						'core/buttons',
						'core/paragraph',
						'core/quote',
					] }
					template={ [ [ 'core/paragraph' ] ] }
					templateLock={ false }
				/>
			</Header>
		</div>
	);
}
