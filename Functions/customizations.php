<?php

namespace IDC\Blocks;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class Customizations
{
  public function __construct()
  {
    add_filter('register_block_type_args', [$this, 'set_allowed_heading_levels'], 10, 2);
    add_action('init', [$this, 'add_page_excerpts']);
  }

  /**
   * Filters the allowed heading levels for the 'core/heading' block.
   *
   * @param array  $args       The block settings and attributes.
   * @param string $block_type The block type name.
   *
   * @return array The modified block settings and attributes.
   */
  public function set_allowed_heading_levels($args, $block_type)
  {
    if ('core/heading' !== $block_type) {
      return $args;
    }
    $args['attributes']['levelOptions']['default'] = [2, 3, 4, 5, 6];

    return $args;
  }

  /**
   * Adds support for excerpts in pages.
   *
   * This function enables the excerpt feature for the 'page' post type
   * by adding post type support for 'excerpt'.
   *
   * @return void
   */
  public function add_page_excerpts()
  {
    add_post_type_support('page', 'excerpt');
  }
}
