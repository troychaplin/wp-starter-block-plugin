import { useEffect } from '@wordpress/element';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	PlainText,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { Section, Hero } from '@troychaplin79/idc-frontend-ui';
import useIsFirstBlockCheck from '../../helpers/isFirstBlockCheck';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { maxWidth, bgType, blockHeader } = attributes;

	// Check if the parent block is the first block in the editor
	const isFirstBlockCheck = useIsFirstBlockCheck( clientId );

	useEffect( () => {
		setAttributes( { isFirstBlock: isFirstBlockCheck } );
		if ( isFirstBlockCheck ) {
			wp.data
				.dispatch( 'core/editor' )
				.editPost( { title: `${ blockHeader }` } );
		}
	}, [ isFirstBlockCheck, setAttributes, blockHeader ] );

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
					className: `idc-block idc-block-${ maxWidth }xl idc-section--${ bgType }`,
				} ) }
			>
				<Section
					maxWidth={ `${ maxWidth }xl` }
					bgType={ bgType !== 'none' ? bgType : null }
				>
					<Hero bgType="none" cols={ 2 }>
						<Hero.Content
							headerType="h1"
							title={
								<PlainText
									placeholder="Add a heading for this block"
									className="not-prose text-idc-blue-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-[3.5rem] font-semibold  pb-6 last:pb-0"
									style={ {
										border: 'none',
										padding: '0',
										margin: '0',
										backgroundColor: 'transparent',
										resize: 'none',
									} }
									onChange={ ( value ) =>
										setAttributes( { blockHeader: value } )
									}
									value={ blockHeader }
									// allowedFormats={[]}
									// disableLineBreaks={true}
								/>
							}
						>
							<div className="prose md:prose-lg max-w-none ui-prose-first-last">
								<InnerBlocks
									allowedBlocks={ [
										'core/buttons',
										'core/paragraph',
										'core/quote',
									] }
									template={ [ [ 'core/paragraph' ] ] }
									templateLock={ false }
								/>
							</div>
						</Hero.Content>
						<Hero.Media>
							<div className="hero-media-temp"></div>
						</Hero.Media>
					</Hero>
				</Section>
			</div>
		</>
	);
}
