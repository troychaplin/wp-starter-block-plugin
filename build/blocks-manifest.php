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
