<?php
// This file is generated. Do not modify it manually.
return array(
	'article-cards' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'idc-block/article-cards',
		'title' => 'Article Cards',
		'description' => 'A block that highlights important information.',
		'category' => 'text',
		'keywords' => array(
			'articles',
			'cards',
			'news',
			'posts'
		),
		'render' => 'file:./render.php',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'maxWidth' => array(
				'type' => 'number',
				'default' => 5
			),
			'addIntro' => array(
				'type' => 'boolean',
				'default' => false
			),
			'blockHeader' => array(
				'type' => 'string',
				'default' => null
			),
			'blockIntro' => array(
				'type' => 'string',
				'default' => null
			),
			'numberOfColumns' => array(
				'type' => 'number',
				'default' => 3
			),
			'showImages' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDates' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showExcerpts' => array(
				'type' => 'boolean',
				'default' => true
			),
			'numberOfPosts' => array(
				'type' => 'number',
				'default' => 6
			),
			'moreButton' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'pageLink' => array(
				'type' => 'string'
			),
			'contentType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'terms' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'object'
				)
			),
			'taxName' => array(
				'type' => 'string',
				'default' => 'category'
			),
			'currentPage' => array(
				'type' => 'number',
				'default' => 1
			)
		)
	),
	'blue-panel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'idc-block/blue-panel',
		'title' => 'Blue Panel',
		'description' => 'Describe',
		'category' => 'text',
		'keywords' => array(
			'form'
		),
		'render' => 'file:./render.php',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'maxWidth' => array(
				'type' => 'number',
				'default' => 5
			),
			'bgType' => array(
				'type' => 'string',
				'default' => 'none'
			)
		)
	),
	'blue-panel-dark' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'idc-block/blue-panel-dark',
		'title' => 'Blue Panel: Dark',
		'description' => 'An innerblock for blue panel with a dark blue background.',
		'category' => 'text',
		'keywords' => array(
			'form'
		),
		'parent' => array(
			'idc-block/blue-panel'
		),
		'render' => 'file:./render.php',
		'supports' => array(
			'html' => false
		)
	),
	'blue-panel-light' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'idc-block/blue-panel-light',
		'title' => 'Blue Panel: Light',
		'description' => 'An innerblock for blue panel with a light blue background.',
		'category' => 'text',
		'keywords' => array(
			'form'
		),
		'parent' => array(
			'idc-block/blue-panel'
		),
		'render' => 'file:./render.php',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'blockHeader' => array(
				'type' => 'string'
			)
		)
	),
	'hero-banner' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'idc-block/hero-banner',
		'title' => 'Hero Banner',
		'description' => 'Describe',
		'category' => 'text',
		'keywords' => array(
			'hero',
			'banner',
			'heading'
		),
		'render' => 'file:./render.php',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'maxWidth' => array(
				'type' => 'number',
				'default' => 7
			),
			'bgType' => array(
				'type' => 'string',
				'default' => 'gradient'
			),
			'blockHeader' => array(
				'type' => 'string',
				'default' => ''
			),
			'isFirstBlock' => array(
				'type' => 'boolean',
				'default' => false
			)
		)
	),
	'lead-in' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'idc-block/lead-in',
		'title' => 'Lead-In',
		'description' => 'A block that highlights important information.',
		'category' => 'text',
		'keywords' => array(
			'announcement',
			'focus',
			'highlight',
			'informational',
			'lead-in',
			'spotlight'
		),
		'render' => 'file:./render.php',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'maxWidth' => array(
				'type' => 'number',
				'default' => 5
			),
			'bgType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'topText' => array(
				'type' => 'string'
			),
			'bottomText' => array(
				'type' => 'string'
			),
			'asideText' => array(
				'type' => 'string'
			)
		)
	)
);
