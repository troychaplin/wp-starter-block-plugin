<?php
// Set variable for block name
$block_name = str_replace('idc-block/', '', $block->name);

// Set context array
$context = Timber::context();
$context['block'] = $block;
$context['attributes'] = $attributes;
$context['content'] = $content;
$context['post'] = \Timber::get_post();

\Timber::render('blocks/' . $block_name . '.twig', $context);