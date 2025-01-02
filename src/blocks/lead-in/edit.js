import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { LeadIn, Section } from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const { topText, bottomText, asideText } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Display Options">
					<TextControl
						label="Top heading"
						placeholder="Add a line of text as the top header."
						onChange={ ( value ) =>
							setAttributes( { topText: value } )
						}
						type="text"
						value={ topText }
					/>
					<TextControl
						label="Bottom heading"
						placeholder="Add a line of text as the bottom header."
						onChange={ ( value ) =>
							setAttributes( { bottomText: value } )
						}
						type="text"
						value={ bottomText }
					/>
					<TextareaControl
						label="Side content"
						placeholder="Add a short piece of descriptive text."
						onChange={ ( value ) =>
							setAttributes( { asideText: value } )
						}
						value={ asideText }
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					className: `idc-block`,
				} ) }
			>
				<Section maxWidth="6xl">
					<LeadIn
						headerTop={ topText }
						headerBottom={ bottomText }
						text={ asideText }
					/>
				</Section>
			</div>
		</>
	);
}
