<?php

namespace Carleton\Plugin\Types;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class Descriptions
{
  public function __construct()
  {
    add_action('init', [$this, 'register_descriptions_post_type']);
    add_action('init', [$this, 'register_descriptions_type_taxonomy']);
    add_action('init', [$this, 'set_descriptions_block_template']);
    add_filter('allowed_block_types_all', [$this, 'set_descriptions_allowed_blocks'], 10, 2);
  }

  public function register_descriptions_post_type()
  {
    $labels = [
      'name'                  => 'Descriptions',
      'singular_name'         => 'Description',
      'menu_name'             => 'Descriptions',
      'name_admin_bar'        => 'Descriptions',
      'archives'              => 'Description Archives',
      'attributes'            => 'Description Attributes',
      'parent_item_colon'     => 'Parent File:',
      'all_items'             => 'All Descriptions',
      'add_new_item'          => 'Add New Description',
      'add_new'               => 'Add New',
      'new_item'              => 'New Description',
      'edit_item'             => 'Edit Description',
      'update_item'           => 'Update Description',
      'view_item'             => 'View Description',
      'view_items'            => 'View Descriptions',
      'search_items'          => 'Search Descriptions',
      'not_found'             => 'Not found',
      'not_found_in_trash'    => 'Not found in Trash',
      'featured_image'        => 'Featured Image',
      'set_featured_image'    => 'Set featured image',
      'remove_featured_image' => 'Remove featured image',
      'use_featured_image'    => 'Use as featured image',
      'insert_into_item'      => 'Insert into person',
      'uploaded_to_this_item' => 'Uploaded to this person',
      'items_list'            => 'Description list',
      'items_list_navigation' => 'Description list navigation',
      'filter_items_list'     => 'Filter description list',
    ];

    $rewrite = [
      'slug'                  => 'cu-description',
      'with_front'            => true,
      'pages'                 => true,
      'feeds'                 => true,
    ];

    $args = [
      'label'                 => 'Description',
      'description'           => 'Description custom post type',
      'labels'                => $labels,
      'supports'              => ['title', 'editor', 'author', 'revisions', 'custom-fields'],
      'taxonomies'            => ['cu_description_type'],
      'hierarchical'          => false,
      'public'                => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 5,
      'menu_icon'             => 'dashicons-media-default',
      'show_in_admin_bar'     => true,
      'show_in_nav_menus'     => false,
      'can_export'            => true,
      'has_archive'           => 'description-archives',
      'exclude_from_search'   => false,
      'publicly_queryable'    => true,
      'rewrite'               => $rewrite,
      'capability_type'       => 'page',
      'show_in_rest'          => true,
    ];

    register_post_type('cu_description', $args);
  }

  public function register_descriptions_type_taxonomy()
  {
    $labels = [
      'name'                       => 'Descriptions Categories',
      'singular_name'              => 'Description Category',
      'menu_name'                  => 'Categories',
      'all_items'                  => 'All Descriptions Categories',
      'parent_item'                => 'Parent Descriptions Category',
      'parent_item_colon'          => 'Parent Descriptions Category:',
      'new_item_name'              => 'New Descriptions Category Name',
      'add_new_item'               => 'Add New Descriptions Category',
      'edit_item'                  => 'Edit Descriptions Category',
      'update_item'                => 'Update Descriptions Category',
      'view_item'                  => 'View Descriptions Category',
      'separate_items_with_commas' => 'Separate description categories with commas',
      'add_or_remove_items'        => 'Add or remove description categories',
      'choose_from_most_used'      => 'Choose from the most used',
      'popular_items'              => 'Popular description categories',
      'search_items'               => 'Search Descriptions Categories',
      'not_found'                  => 'Not Found',
      'no_terms'                   => 'No description categories',
      'items_list'                 => 'Descriptions categories list',
      'items_list_navigation'      => 'Descriptions categories list navigation',
    ];

    $rewrite = [
      'slug'                       => 'description-type',
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
        'description' => 'Default term for description posts'
      ]
    ];
    register_taxonomy('cu_description_type', ['cu_description'], $args);
  }

  public function set_descriptions_block_template()
  {
    $post_type_object = get_post_type_object('cu_description');
    $post_type_object->template = [
      ['cu-block/page-header'],
      ['core/paragraph', [
        'placeholder' => 'Type / to choose a block',
      ]],
    ];
  }

  public function set_descriptions_allowed_blocks($allowed_blocks, $editor_context)
  {
    if (!empty($editor_context->post) && $editor_context->post->post_type === 'cu_description') {
      $allowed_blocks = array(
        'core/button',
        'core/buttons',
        'core/heading',
        'core/list',
        'core/list-item',
        'core/paragraph',
      );
    }

    return $allowed_blocks;
  }
}
