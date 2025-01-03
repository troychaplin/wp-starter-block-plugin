import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { BluePanel, Section } from '@troychaplin79/idc-frontend-ui';

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
							{ label: 'None', value: 'none' },
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
					<BluePanel cols={ 2 }>
						<BluePanel.Content>
							<p>Content goes here</p>
						</BluePanel.Content>
						<BluePanel.Content bgType="dark">
							<p>Form goes here</p>
						</BluePanel.Content>
					</BluePanel>
				</Section>
			</div>
		</>
	);
}
