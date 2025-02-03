import {
	useBlockProps,
	InspectorControls,
	PlainText,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { LeadIn, Section } from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const { maxWidth, bgType, topText, bottomText, asideText } = attributes;

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
					<SelectControl
						label="Background Type"
						onChange={ ( value ) =>
							setAttributes( { bgType: value } )
						}
						options={ [
							{ label: 'White', value: 'white' },
							{ label: 'Blue', value: 'blue' },
							{ label: 'Gradient', value: 'gradient' },
							{ label: 'Edge', value: 'edge' },
						] }
						value={ bgType }
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					className: `idc-block idc-block-${ maxWidth }xl idc-section--${ bgType }`,
				} ) }
			>
				<Section
					maxWidth={ `${ maxWidth }xl` }
					bgType={ bgType !== 'none' ? bgType : null }
				>
					<LeadIn
						headerTop={
							<PlainText
								placeholder="Small text intro"
								className="block text-base italic not-prose md:text-lg text-idc-black-500"
								style={ {
									border: 'none',
									padding: '0',
									backgroundColor: 'transparent',
									resize: 'none',
								} }
								onChange={ ( value ) =>
									setAttributes( { topText: value } )
								}
								value={ topText }
								// allowedFormats={ [] }
								// disableLineBreaks={true}
							/>
						}
						headerBottom={
							<PlainText
								placeholder="Large text intro"
								className="block text-2xl italic font-medium not-prose md:text-3xl text-idc-orange-600"
								style={ {
									border: 'none',
									padding: '0',
									backgroundColor: 'transparent',
									resize: 'none',
								} }
								onChange={ ( value ) =>
									setAttributes( { bottomText: value } )
								}
								value={ bottomText }
								// allowedFormats={ [] }
								// disableLineBreaks={true}
							/>
						}
						text={
							<PlainText
								placeholder="Add more description but try and keep this one to two lines if possible."
								className="text-base md:text-lg"
								style={ {
									border: 'none',
									padding: '0',
									backgroundColor: 'transparent',
									resize: 'none',
								} }
								onChange={ ( value ) =>
									setAttributes( { asideText: value } )
								}
								value={ asideText }
								// allowedFormats={ [] }
								// disableLineBreaks={true}
							/>
						}
					/>
				</Section>
			</div>
		</>
	);
}
