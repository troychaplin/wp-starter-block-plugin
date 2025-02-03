<?php

namespace IDC\Types;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class Testimonials
{
  public function __construct()
  {
    // Testimonial Post Type and Taxonomy
    add_action('init', [$this, 'register_testimonial_post_type']);
    add_action('init', [$this, 'register_testimonial_type_taxonomy']);
    add_action('init', [$this, 'set_testimonial_block_template']);
  }

  public function register_testimonial_post_type()
  {
    $labels = [
      'name'                  => 'Testimonials',
      'singular_name'         => 'Testimonial',
      'menu_name'             => 'Testimonials',
      'name_admin_bar'        => 'Testimonials',
      'archives'              => 'Testimonial Archives',
      'attributes'            => 'Testimonial Attributes',
      'parent_item_colon'     => 'Parent File:',
      'all_items'             => 'All Testimonials',
      'add_new_item'          => 'Add New Testimonial',
      'add_new'               => 'Add New',
      'new_item'              => 'New Testimonial',
      'edit_item'             => 'Edit Testimonial',
      'update_item'           => 'Update Testimonial',
      'view_item'             => 'View Testimonial',
      'view_items'            => 'View Testimonials',
      'search_items'          => 'Search Testimonials',
      'not_found'             => 'Not found',
      'not_found_in_trash'    => 'Not found in Trash',
      'featured_image'        => 'Featured Image',
      'set_featured_image'    => 'Set featured image',
      'remove_featured_image' => 'Remove featured image',
      'use_featured_image'    => 'Use as featured image',
      'insert_into_item'      => 'Insert into testimonial',
      'uploaded_to_this_item' => 'Uploaded to this testimonial',
      'items_list'            => 'Testimonial list',
      'items_list_navigation' => 'Testimonial list navigation',
      'filter_items_list'     => 'Filter Testimonial list',
    ];

    $rewrite = [
      'slug'                  => 'idc-testimonial',
      'with_front'            => true,
      'pages'                 => true,
      'feeds'                 => true,
    ];

    $args = [
      'label'                 => 'Testimonial',
      'description'           => 'Testimonial custom post type',
      'labels'                => $labels,
      'supports'              => ['title', 'editor', 'author', 'revisions', 'custom-fields'],
      'taxonomies'            => ['idc_testimonial_type'],
      'hierarchical'          => false,
      'public'                => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 5,
      'menu_icon'             => 'dashicons-media-default',
      'show_in_admin_bar'     => true,
      'show_in_nav_menus'     => false,
      'can_export'            => true,
      'has_archive'           => 'testimonial-archives',
      'exclude_from_search'   => false,
      'publicly_queryable'    => true,
      'rewrite'               => $rewrite,
      'capability_type'       => 'page',
      'show_in_rest'          => true,
    ];

    register_post_type('idc_testimonial', $args);
  }

  public function register_testimonial_type_taxonomy()
  {
    $labels = [
      'name'                       => 'Testimonials Categories',
      'singular_name'              => 'Testimonial Category',
      'menu_name'                  => 'Categories',
      'all_items'                  => 'All Testimonials Categories',
      'parent_item'                => 'Parent Testimonials Category',
      'parent_item_colon'          => 'Parent Testimonials Category:',
      'new_item_name'              => 'New Testimonials Category Name',
      'add_new_item'               => 'Add New Testimonials Category',
      'edit_item'                  => 'Edit Testimonials Category',
      'update_item'                => 'Update Testimonials Category',
      'view_item'                  => 'View Testimonials Category',
      'separate_items_with_commas' => 'Separate Testimonial categories with commas',
      'add_or_remove_items'        => 'Add or remove Testimonial categories',
      'choose_from_most_used'      => 'Choose from the most used',
      'popular_items'              => 'Popular Testimonial categories',
      'search_items'               => 'Search Testimonials Categories',
      'not_found'                  => 'Not Found',
      'no_terms'                   => 'No Testimonial categories',
      'items_list'                 => 'Testimonials categories list',
      'items_list_navigation'      => 'Testimonials categories list navigation',
    ];

    $rewrite = [
      'slug'                       => 'testimonial-type',
      'with_front'                 => true,
      'hierarchical'               => false,
    ];

    $args = [
      'labels'                     => $labels,
      'hierarchical'               => true,
      'public'                     => true,
      'show_ui'                    => true,
      'show_admin_column'          => true,
      'show_in_nav_menus'          => false,
      'show_tagcloud'              => true,
      'rewrite'                    => $rewrite,
      'show_in_rest'               => true,
      'default_term' => [
        'name' => 'General',
        'slug' => 'general',
        'description' => 'Default term for Testimonial posts'
      ]
    ];
    register_taxonomy('idc_testimonial_type', ['idc_testimonial'], $args);
  }

  public function set_testimonial_block_template()
  {
    $post_type_object = get_post_type_object('idc_testimonial');
    $post_type_object->template = [
      ['idc-block/hero-banner'],
      ['core/paragraph', [
        'placeholder' => 'Type / to choose a block',
      ]],
    ];
  }
}
