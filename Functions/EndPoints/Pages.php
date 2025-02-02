<?php

namespace IDC\EndPoints;

use WP_Query;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class Pages
{
  public function __construct()
  {
    add_action('rest_api_init', [$this, 'register_custom_pages_endpoint']);
  }

  public function register_custom_pages_endpoint()
  {
    register_rest_route('idc/v1', '/pages', array(
      'methods' => 'GET',
      'callback' => [$this, 'custom_pages_endpoint'],
      'permission_callback' => '__return_true',
    ));
  }

  public function custom_pages_endpoint($request)
  {
    $posts_per_page = $request->get_param('posts_per_page');
    $orderby = $request->get_param('orderby');
    $order = $request->get_param('order');
    $page_id = $request->get_param('post_id');
    $terms = $request->get_param('categories');

    $args = [
      'post_type' => 'page',
      'posts_per_page' => $posts_per_page,
      'post_status' => 'publish',
      'orderby' => $orderby,
      'order' => $order,
    ];

    // If ID is being passed
    if (!empty($page_id)) {
      $args['p'] = $page_id;
    }

    // Add a tax_query based on post_terms
    if (!empty($terms)) {
      $args['tax_query'] = [
        [
          'taxonomy' => 'idc_page_type',
          'field' => 'id',
          'terms' => $terms,
        ],
      ];
    }

    $query = new WP_Query($args);
    $posts = [];

    if ($query->have_posts()) {
      while ($query->have_posts()) {
        $query->the_post();

        $post_id = get_the_ID();
        $post_title = html_entity_decode(get_the_title());
        $post_link = get_the_permalink();
        $post_excerpt = get_the_excerpt();
        $post_date = get_the_time($format = 'F j, Y');
        $post_modified = get_the_modified_date($format = '');

        $post_data = [
          'id' => $post_id,
          'title' => $post_title,
          'link' => $post_link,
          'excerpt' => $post_excerpt,
          'publish_date' => $post_date,
          'modified_date' => $post_modified
        ];

        $posts[] = $post_data;
      }
      wp_reset_postdata();
    } else {
      // No posts found
      $posts = [];
    }

    return rest_ensure_response($posts);
  }
}
