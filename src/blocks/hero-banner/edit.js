import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { Section } from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const { maxWidth, bgType } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Display Options">
					<RangeControl
						initialPosition={ maxWidth }
						label="Max Width"
						max={ 7 }
						min={ 5 }
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
					className: `idc-block idc-block-${ maxWidth }xl`,
				} ) }
			>
				<Section
					maxWidth={ `${ maxWidth }xl` }
					bgType={ bgType !== 'none' ? bgType : null }
				>
					<div className="">
						<InnerBlocks
							allowedBlocks={ [
								'idc-block/hero-banner-content',
								'idc-block/hero-banner-media',
							] }
							template={ [
								[ 'idc-block/hero-banner-content' ],
								[ 'idc-block/hero-banner-media' ],
							] }
							templateLock={ false }
						/>
					</div>
				</Section>
			</div>
		</>
	);
}
