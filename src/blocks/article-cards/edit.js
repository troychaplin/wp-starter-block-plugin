import {
	useBlockProps,
	InspectorControls,
	PlainText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import {
	Section,
	Header,
	CardGroup,
	Card,
	ButtonGroup,
	Button,
} from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const {
		maxWidth,
		addIntro,
		blockHeader,
		blockIntro,
		numberOfColumns,
		showImages,
		showDates,
		showExcerpts,
		// numberOfPosts,
		moreButton,
		// pageLink,
		// contentType,
		// order,
		// orderBy,
		// terms,
		// taxName,
		// currentPage,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Block Options">
					<RangeControl
						initialPosition={ maxWidth }
						label="Max Width"
						max={ 7 }
						min={ 4 }
						onChange={ ( value ) =>
							setAttributes( { maxWidth: value } )
						}
					/>
					<RangeControl
						initialPosition={ numberOfColumns }
						label="Columns"
						max={ 4 }
						min={ 2 }
						onChange={ ( value ) =>
							setAttributes( { numberOfColumns: value } )
						}
					/>
					<SelectControl
						label="Load / View More"
						value={ moreButton }
						options={ [
							{
								label: 'None',
								value: 'none',
							},
							{
								label: 'Load More',
								value: 'loadmore',
							},
							{
								label: 'View More',
								value: 'viewmore',
							},
						] }
						onChange={ ( value ) =>
							setAttributes( { moreButton: value } )
						}
					/>
				</PanelBody>
				<PanelBody title="Display Options">
					<ToggleControl
						label="Intro Content"
						checked={ addIntro }
						onChange={ ( value ) =>
							setAttributes( { addIntro: value } )
						}
					/>
					<ToggleControl
						label="Show Images"
						checked={ showImages }
						onChange={ ( value ) =>
							setAttributes( { showImages: value } )
						}
					/>
					<ToggleControl
						label="Show Dates"
						checked={ showDates }
						onChange={ ( value ) =>
							setAttributes( { showDates: value } )
						}
					/>
					<ToggleControl
						label="Show Excerpts"
						checked={ showExcerpts }
						onChange={ ( value ) =>
							setAttributes( { showExcerpts: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					className: `idc-block idc-block-${ maxWidth }xl idc-section--white`,
				} ) }
			>
				<Section maxWidth={ `${ maxWidth }xl` }>
					{ addIntro && (
						<Header
							as="h2"
							datePrefix=""
							isCenter
							isItalic
							size="md"
							title={
								<PlainText
									placeholder="Add a heading"
									className="not-prose text-idc-blue-800 text-center text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem] font-bold italic pb-4 last:pb-0"
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
									allowedFormats={ [] }
									disableLineBreaks={ true }
								/>
							}
							weight="bold"
						>
							<p>
								{
									<PlainText
										placeholder="Add an optional short intro paragraph for this block"
										className="text-center"
										style={ {
											border: 'none',
											padding: '0',
											margin: '0',
											backgroundColor: 'transparent',
											resize: 'none',
										} }
										onChange={ ( value ) =>
											setAttributes( {
												blockIntro: value,
											} )
										}
										value={ blockIntro }
										allowedFormats={ [] }
										disableLineBreaks={ true }
									/>
								}
							</p>
						</Header>
					) }

					<CardGroup cols={ numberOfColumns }>
						<Card addFlex>
							<Card.Figure>
								<img
									alt="Cell fire someone loss news."
									className="rounded-md"
									height="300"
									src="https://picsum.photos/id/40/600/400"
									width="400"
								/>
							</Card.Figure>
							<Card.Header
								date="2020-10-18 04:20:10"
								title="Still discover detail special approach skill."
							/>
							<Card.Content
								hideMobile
								isExcerpt
								link="#"
								text="Situation down believe almost. Produce beat reflect manager wonder last since music. Seven drop which necessary report four crime. Remain want plant reflect fear hundred. Decision they itself pattern range church."
							/>
						</Card>
					</CardGroup>

					{ moreButton !== 'none' && (
						<ButtonGroup isCenter>
							<Button
								color="dark-blue"
								label={
									moreButton === 'loadmore'
										? 'Load More Articles'
										: 'Read More Articles'
								}
								isOutline
							/>
						</ButtonGroup>
					) }
				</Section>
			</div>
		</>
	);
}
