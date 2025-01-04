import { useBlockProps, InnerBlocks, PlainText } from '@wordpress/block-editor';
import { Hero } from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const { heading } = attributes;

	return (
		<div
			{ ...useBlockProps( {
				className: `idc-block`,
			} ) }
		>
			<Hero.Content
				headerType="h1"
				title={
					<PlainText
						placeholder="Add a heading for this block"
						className="not-prose text-idc-blue-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-[3.5rem] font-medium pb-6 last:pb-0"
						style={ {
							border: 'none',
							padding: '0',
							backgroundColor: 'transparent',
							resize: 'none',
						} }
						onChange={ ( value ) =>
							setAttributes( { heading: value } )
						}
						value={ heading }
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
			</Hero.Content>
		</div>
	);
}
