<?php
// This file is generated. Do not modify it manually.
return array(
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
