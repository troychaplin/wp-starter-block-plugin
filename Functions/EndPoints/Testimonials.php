<?php

namespace IDC\EndPoints;

use WP_Query;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class Testimonials
{
  public function __construct()
  {
    add_action('rest_api_init', [$this, 'register_custom_testimonials_endpoint']);
  }

  public function register_custom_testimonials_endpoint()
  {
    register_rest_route('idc/v1', '/testimonials', array(
      'methods' => 'GET',
      'callback' => [$this, 'custom_testimonials_endpoint'],
      'permission_callback' => '__return_true',
    ));
  }

  public function custom_testimonials_endpoint($request)
  {
    // Retrieve query parameters from the request
    $posts_per_page = $request->get_param('posts_per_page');
    $description_terms = $request->get_param('description_categories');
    $description_id = $request->get_param('post_id');

    // Define an array of query args
    $args = [
      'post_type' => 'idc_testimonial',
      'posts_per_page' => $posts_per_page,
      'post_status' => 'publish',
      'orderby' => 'title',
      'order' => 'ASC',
    ];

    // If ID is being passed
    if (!empty($description_id)) {
      $args['p'] = $description_id;
    }

    // Add a tax_query based on description_terms
    if (!empty($description_terms)) {
      $args['tax_query'] = [
        [
          'taxonomy' => 'idc_testimonial_type',
          'field'    => 'id',
          'terms'    => $description_terms,
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
        $post_content = get_the_content();

        $post_data = [
          'id' => $post_id,
          'title' => $post_title,
          'content' => $post_content,
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
