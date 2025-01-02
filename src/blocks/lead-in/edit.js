import { useBlockProps, PlainText } from '@wordpress/block-editor';
import { LeadIn, Section } from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const { topText, bottomText, asideText } = attributes;
	return (
		<div
			{ ...useBlockProps( {
				className: `idc-block`,
			} ) }
		>
			<Section>
				<LeadIn
					headerTop={
						<PlainText
							placeholder="Our Process"
							className="block text-base italic not-prose md:text-lg text-idc-black-500"
							style={ {
								border: 'none',
								padding: '0',
								margin: '0',
							} }
							value={ topText }
							onChange={ ( value ) =>
								setAttributes( { topText: value } )
							}
							allowedFormats={ [] }
							disableLineBreaks={ true }
						/>
					}
					headerBottom={
						<PlainText
							placeholder="As simple as A-B-C"
							className="block text-2xl italic font-medium not-prose md:text-3xl text-idc-orange-600"
							style={ {
								border: 'none',
								padding: '0',
								margin: '0',
							} }
							value={ bottomText }
							onChange={ ( value ) =>
								setAttributes( { bottomText: value } )
							}
							allowedFormats={ [] }
							disableLineBreaks={ true }
						/>
					}
					text={
						<PlainText
							placeholder="We take the anxiety and uncertainty out of the document apostille process in these three simple steps!"
							className="text-base md:text-lg"
							style={ {
								border: 'none',
								padding: '0',
								margin: '0',
							} }
							value={ asideText }
							onChange={ ( value ) =>
								setAttributes( { asideText: value } )
							}
							allowedFormats={ [] }
							disableLineBreaks={ true }
						/>
					}
				/>
			</Section>
		</div>
	);
}
