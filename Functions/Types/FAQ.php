<?php

namespace IDC\Types;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class FAQ
{
  public function __construct()
  {
    // FAQ Post Type and Taxonomy
    add_action('init', [$this, 'register_faq_post_type']);
    add_action('init', [$this, 'register_faq_type_taxonomy']);
    add_action('init', [$this, 'set_faq_block_template']);
  }

  public function register_faq_post_type()
  {
    $labels = [
      'name'                  => 'FAQs',
      'singular_name'         => 'FAQ',
      'menu_name'             => 'FAQs',
      'name_admin_bar'        => 'FAQs',
      'archives'              => 'FAQ Archives',
      'attributes'            => 'FAQ Attributes',
      'parent_item_colon'     => 'Parent File:',
      'all_items'             => 'All FAQs',
      'add_new_item'          => 'Add New FAQ',
      'add_new'               => 'Add New',
      'new_item'              => 'New FAQ',
      'edit_item'             => 'Edit FAQ',
      'update_item'           => 'Update FAQ',
      'view_item'             => 'View FAQ',
      'view_items'            => 'View FAQs',
      'search_items'          => 'Search FAQs',
      'not_found'             => 'Not found',
      'not_found_in_trash'    => 'Not found in Trash',
      'featured_image'        => 'Featured Image',
      'set_featured_image'    => 'Set featured image',
      'remove_featured_image' => 'Remove featured image',
      'use_featured_image'    => 'Use as featured image',
      'insert_into_item'      => 'Insert into faq',
      'uploaded_to_this_item' => 'Uploaded to this faq',
      'items_list'            => 'FAQ list',
      'items_list_navigation' => 'FAQ list navigation',
      'filter_items_list'     => 'Filter FAQ list',
    ];

    $rewrite = [
      'slug'                  => 'idc-faq',
      'with_front'            => true,
      'pages'                 => true,
      'feeds'                 => true,
    ];

    $args = [
      'label'                 => 'FAQ',
      'description'           => 'FAQ custom post type',
      'labels'                => $labels,
      'supports'              => ['title', 'editor', 'author', 'revisions', 'custom-fields'],
      'taxonomies'            => ['idc_faq_type'],
      'hierarchical'          => false,
      'public'                => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 5,
      'menu_icon'             => 'dashicons-media-default',
      'show_in_admin_bar'     => true,
      'show_in_nav_menus'     => false,
      'can_export'            => true,
      'has_archive'           => 'faq-archives',
      'exclude_from_search'   => false,
      'publicly_queryable'    => true,
      'rewrite'               => $rewrite,
      'capability_type'       => 'page',
      'show_in_rest'          => true,
    ];

    register_post_type('idc_faq', $args);
  }

  public function register_faq_type_taxonomy()
  {
    $labels = [
      'name'                       => 'FAQs Categories',
      'singular_name'              => 'FAQ Category',
      'menu_name'                  => 'Categories',
      'all_items'                  => 'All FAQs Categories',
      'parent_item'                => 'Parent FAQs Category',
      'parent_item_colon'          => 'Parent FAQs Category:',
      'new_item_name'              => 'New FAQs Category Name',
      'add_new_item'               => 'Add New FAQs Category',
      'edit_item'                  => 'Edit FAQs Category',
      'update_item'                => 'Update FAQs Category',
      'view_item'                  => 'View FAQs Category',
      'separate_items_with_commas' => 'Separate FAQ categories with commas',
      'add_or_remove_items'        => 'Add or remove FAQ categories',
      'choose_from_most_used'      => 'Choose from the most used',
      'popular_items'              => 'Popular FAQ categories',
      'search_items'               => 'Search FAQs Categories',
      'not_found'                  => 'Not Found',
      'no_terms'                   => 'No FAQ categories',
      'items_list'                 => 'FAQs categories list',
      'items_list_navigation'      => 'FAQs categories list navigation',
    ];

    $rewrite = [
      'slug'                       => 'faq-type',
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
        'description' => 'Default term for FAQ posts'
      ]
    ];
    register_taxonomy('idc_faq_type', ['idc_faq'], $args);
  }

  public function set_faq_block_template()
  {
    $post_type_object = get_post_type_object('idc_faq');
    $post_type_object->template = [
      ['idc-block/hero-banner'],
      ['core/paragraph', [
        'placeholder' => 'Type / to choose a block',
      ]],
    ];
  }
}
