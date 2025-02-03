import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { format } from '@wordpress/date';
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
	QueryControls,
	ComboboxControl,
} from '@wordpress/components';
import {
	GetAllCategories,
	autoSuggestCategories,
	updateCategories,
	hasNoSuggestions,
} from '../../helpers/getCategories';
import { limitWords } from '../../helpers/contentLimits';
import {
	Section,
	Header,
	CardGroup,
	Card,
	ButtonGroup,
	Button,
} from '@troychaplin79/idc-frontend-ui';

export default function Edit( { attributes, setAttributes } ) {
	const [ posts, setPosts ] = useState( [] );
	const [ pages, setPages ] = useState( [] );
	const [ selectedPage, setSelectedPage ] = useState(
		attributes.pageLink || ''
	);
	const [ isLoading, setIsLoading ] = useState( true );
	const [ error, setError ] = useState( null );

	const {
		maxWidth,
		addIntro,
		blockHeader,
		blockIntro,
		numberOfColumns,
		showImages,
		showDates,
		showExcerpts,
		numberOfPosts,
		moreButton,
		terms,
		taxName,
	} = attributes;

	// Set taxonomy for post type
	const getAllCats = GetAllCategories( taxName );
	const catAutoSuggest = getAllCats
		? autoSuggestCategories( getAllCats )
		: {};

	const filterCategoryData = ( categories ) => {
		return categories.map( ( { id, name, slug } ) => ( {
			id,
			name,
			slug,
		} ) );
	};

	const onCategoryChange = ( values ) => {
		if ( hasNoSuggestions( values, catAutoSuggest ) ) {
			return;
		}
		const updateCats = updateCategories( values, catAutoSuggest );

		// Filter out unnecessary properties
		const filteredCats = filterCategoryData( updateCats );

		// Update attributes with new category selections
		setAttributes( { terms: filteredCats } );
		if ( values.length === 0 ) {
			setAttributes( { terms: undefined } );
		}
	};

	useEffect( () => {
		let apiFetchPosts = `/idc/v1/posts?posts_per_page=${ numberOfPosts }`;

		if ( terms && terms.length > 0 ) {
			const termIDs = terms.map( ( term ) => term.id );
			apiFetchPosts += `&post_categories[]=${ termIDs.join(
				'&post_categories[]='
			) }`;
		}

		apiFetch( { path: apiFetchPosts } )
			.then( ( fetchedPosts ) => {
				setPosts( fetchedPosts );
				setIsLoading( false );
			} )
			.catch( ( apiError ) => {
				setIsLoading( false );
				setError( apiError );
			} );
	}, [ numberOfPosts, terms ] );

	// Get page list
	useEffect( () => {
		apiFetch( { path: '/idc/v1/pages?posts_per_page=-1' } ).then(
			( fetchedPages ) => {
				setPages(
					fetchedPages.map( ( page ) => ( {
						value: page.link,
						label: page.title,
					} ) )
				);
			}
		);
	}, [] );

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
					<RangeControl
						initialPosition={ numberOfPosts }
						label="Number of Posts"
						max={ 24 }
						min={ 1 }
						onChange={ ( value ) =>
							setAttributes( { numberOfPosts: value } )
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
					{ moreButton === 'viewmore' && (
						<ComboboxControl
							label="View More Link"
							value={ selectedPage }
							options={ pages }
							onChange={ ( selectedPageId ) => {
								setSelectedPage( selectedPageId );
								setAttributes( { pageLink: selectedPageId } );
							} }
							allowReset
						/>
					) }
					<QueryControls
						categorySuggestions={ catAutoSuggest }
						selectedCategories={ terms }
						onCategoryChange={ onCategoryChange }
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
					{ ! isLoading && ! error && posts.length >= 1 && (
						<>
							{ addIntro && (
								<Header
									as="h2"
									datePrefix=""
									isCenter
									isItalic
									size="md"
									weight="bold"
									title={
										<PlainText
											placeholder="Add a heading"
											className="not-prose text-idc-blue-800 text-center text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem] font-bold italic pb-4 last:pb-0"
											value={ blockHeader }
											onChange={ ( value ) =>
												setAttributes( {
													blockHeader: value,
												} )
											}
										/>
									}
								>
									<p>
										{
											<PlainText
												placeholder="Add an optional short intro paragraph for this block"
												className="text-center"
												value={ blockIntro }
												onChange={ ( value ) =>
													setAttributes( {
														blockIntro: value,
													} )
												}
											/>
										}
									</p>
								</Header>
							) }

							<CardGroup cols={ numberOfColumns }>
								{ posts.map( ( post, index ) => {
									let postImageSrc =
										'https://picsum.photos/id/40/600/400';
									let postImageAlt =
										'Randomly generated thumbnail';

									if ( post.image.id ) {
										postImageSrc = post.image.thumb[ 0 ];
										postImageAlt = post.image.alt;
									}

									return (
										<Card key={ index } addFlex>
											{ showImages && (
												<Card.Figure>
													<img
														src={ postImageSrc }
														alt={ postImageAlt }
														className="rounded-md"
														width="400"
														height="300"
													/>
												</Card.Figure>
											) }
											<Card.Header
												as={
													addIntro && blockHeader
														? 'h3'
														: 'h2'
												}
												date={
													showDates &&
													format(
														'F j, Y',
														post.date
													)
												}
												title={
													post.title
														? post.title
														: 'This post is missing a title'
												}
											/>
											<Card.Content
												text={
													showExcerpts &&
													limitWords(
														post.excerpt,
														20
													)
												}
												link={ post.link }
												isExcerpt
											/>
										</Card>
									);
								} ) }
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
						</>
					) }
				</Section>
			</div>
		</>
	);
}
