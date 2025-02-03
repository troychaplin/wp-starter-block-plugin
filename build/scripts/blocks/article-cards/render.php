<?php
// Set variable for block name
$block_name = str_replace('idc-block/', '', $block->name);

// Set query args
$args = [
  'post_type' => $attributes['contentType'],
  'posts_per_page' => $attributes['numberOfPosts'],
  'post_status' => 'publish',
  'order' => $attributes['order'],
  'orderby' => $attributes['orderBy'],
];

// Add a tax_query if terms attribute is set
if (!empty($attributes['terms'])) {
  $term_ids = array_map(function ($term) {
    return $term['id'];
  }, $attributes['terms']);

  $args['tax_query'] = [
    [
      'taxonomy' => $attributes['taxName'],
      'field' => 'term_id',
      'terms' => $term_ids,
      'operator' => 'IN',
    ],
  ];
}

// Check for pagination
if ($attributes['moreButton'] === 'loadmore') {
  $args['paged'] = $attributes['currentPage'];
}

// Set context array
$context = Timber::context();
$context['block'] = $block;
$context['attributes'] = $attributes;
$context['content'] = $content;
$context['post'] = \Timber::get_post();

\Timber::render('blocks/' . $block_name . '.twig', $context);
