<?php
// This file is generated. Do not modify it manually.
return array(
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
			'heading' => array(
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
				'type' => 'string',
				'default' => 'Our Process'
			),
			'bottomText' => array(
				'type' => 'string',
				'default' => 'As simple as A-B-C'
			),
			'asideText' => array(
				'type' => 'string',
				'default' => 'We take the anxiety and uncertainty out of the document apostille process in these three simple steps!'
			)
		)
	)
);
