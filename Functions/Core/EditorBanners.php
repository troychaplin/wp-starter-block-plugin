<?php

namespace IDC\Core;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class EditorBanners
{
  public function __construct()
  {
    add_action('init', [$this, 'remove_title_support']);
    add_action('init', [$this, 'set_page_block_template']);
  }

  /**
   * Removes the title support from the editor.
   *
   * This function removes the title field from the editor for the specified post types.
   *
   * @return void
   */
  public function remove_title_support()
  {
    remove_post_type_support('post', 'title');
    remove_post_type_support('page', 'title');
  }

  public function set_page_block_template()
  {
    $post_type_object = get_post_type_object('page');
    $post_type_object->template = [
      ['idc-block/hero-banner'],
      ['core/paragraph'],
    ];
  }
}
