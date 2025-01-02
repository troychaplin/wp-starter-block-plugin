import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	RangeControl,
} from '@wordpress/components';
import { LeadIn, Section } from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const { maxWidth, topText, bottomText, asideText } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Display Options">
					<RangeControl
						initialPosition={ maxWidth }
						label="Max Width"
						max={ 7 }
						min={ 4 }
						onChange={ ( value ) =>
							setAttributes( { maxWidth: value } )
						}
					/>
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
					className: `idc-block idc-block-${ maxWidth }xl`,
				} ) }
			>
				<Section maxWidth={ `${ maxWidth }xl` }>
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
