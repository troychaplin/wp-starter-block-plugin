<?php

namespace IDC\EndPoints;

use WP_Query;

if (!defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class Posts
{
  public function __construct()
  {
    add_action('rest_api_init', [$this, 'register_custom_posts_endpoint']);
  }

  public function register_custom_posts_endpoint()
  {
    register_rest_route('idc/v1', '/posts', [
      'methods' => 'GET',
      'callback' => [$this, 'custom_posts_endpoint'],
      'permission_callback' => '__return_true',
    ]);
  }

  public function custom_posts_endpoint($request)
  {
    // Retrieve query parameters from the request
    $posts_per_page = $request->get_param('posts_per_page');
    $post_id = $request->get_param('post_id');
    $post_terms = $request->get_param('post_categories');
    $posts_per_page = !empty($posts_per_page) ? intval($posts_per_page) : 12;

    $args = [
      'post_type' => 'post',
      'posts_per_page' => $posts_per_page,
      'post_status' => 'publish',
      'orderby' => 'date',
      'order' => 'desc',
    ];

    // If ID is being passed
    if (!empty($post_id)) {
      $args['p'] = intval($post_id);
    }

    // Add a tax_query based on post_terms
    if (!empty($post_terms)) {
      $args['tax_query'] = [
        [
          'taxonomy' => 'category',
          'field' => 'id',
          'terms' => array_map('intval', $post_terms),
        ],
      ];
    }

    $query = new WP_Query($args);
    $posts = [];

    if ($query->have_posts()) {
      $counter = 1;

      while ($query->have_posts()) {
        $query->the_post();

        $post_id = get_the_ID();
        $post_title = html_entity_decode(get_the_title());
        $post_link = get_the_permalink();
        $post_date = get_the_date();
        $post_excerpt = get_the_excerpt();

        // Initialize image variables
        $thumbnail_id = '';
        $image_thumb_url = '';
        $image_alt = '';

        // Check if post has a featured image
        if (has_post_thumbnail($post_id)) {
          $thumbnail_id = get_post_thumbnail_id($post_id);
          $image_thumb_url = wp_get_attachment_image_src($thumbnail_id, 'card-thumb');
          $image_alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ?: 'Featured image thumbnail';
        }

        $post_data = [
          'id' => $post_id,
          'title' => $post_title,
          'link' => $post_link,
          'date' => $post_date,
          'excerpt' => $post_excerpt,
          'image' => [
            'id' => $thumbnail_id,
            'thumb' => $image_thumb_url,
            'alt' => $image_alt,
          ],
        ];

        $posts[] = $post_data;
        $counter = ($counter % 6) + 1;
      }
      wp_reset_postdata();
    } else {
      // No posts found
      $posts = [];
    }

    return rest_ensure_response($posts);
  }
}
