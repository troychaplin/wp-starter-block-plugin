<?php

namespace IDC\Types;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class Pages
{
  public function __construct()
  {
    add_action('init', [$this, 'register_page_type_taxonomy']);
    add_action('init', [$this, 'set_page_block_template']);
  }

  public function register_page_type_taxonomy()
  {
    $labels = [
      'name'                       => 'Page Categories',
      'singular_name'              => 'Page Category',
      'menu_name'                  => 'Categories',
      'all_items'                  => 'All Page Categories',
      'parent_item'                => 'Parent Page Category',
      'parent_item_colon'          => 'Parent Page Category:',
      'new_item_name'              => 'New Page Category Name',
      'add_new_item'               => 'Add New Page Category',
      'edit_item'                  => 'Edit Page Category',
      'update_item'                => 'Update Page Category',
      'view_item'                  => 'View Page Category',
      'separate_items_with_commas' => 'Separate page categories with commas',
      'add_or_remove_items'        => 'Add or remove page categories',
      'choose_from_most_used'      => 'Choose from the most used',
      'popular_items'              => 'Popular page categories',
      'search_items'               => 'Search Page Categories',
      'not_found'                  => 'Not Found',
      'no_terms'                   => 'No page categories',
      'items_list'                 => 'Page categories list',
      'items_list_navigation'      => 'Page categories list navigation',
    ];

    $rewrite = [
      'slug'                       => 'page-type',
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
        'description' => 'Default term for pages'
      ]
    ];

    register_taxonomy('idc_page_type', ['page'], $args);
  }

  public function set_page_block_template()
  {
    $post_type_object = get_post_type_object('page');
    $post_type_object->template = [
      ['cu-block/hero-banner']
    ];
  }
}
