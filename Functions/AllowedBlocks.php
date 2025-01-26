<?php

namespace IDC;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class AllowedBlocks
{
  public function __construct()
  {
    add_action('allowed_block_types_all', [$this, 'set_allowed_blocks']);
  }

  public function set_allowed_blocks($allowed_blocks)
  {
    // Allowed core blocks
    $core_blocks = [
      'core/block',
      'core/button',
      'core/buttons',
      'core/embed',
      'core/gallery',
      'core/heading',
      'core/image',
      'core/list',
      'core/list-item',
      'core/paragraph',
      'core/quote',
      'core/table',
    ];

    // Allowed custom blocks
    $custom_blocks = [
      'idc-block/blue-panel',
      'idc-block/blue-panel-dark',
      'idc-block/blue-panel-light',
      'idc-block/hero-banner',
      'idc-block/hero-banner-content',
      'idc-block/hero-banner-media',
      'idc-block/lead-in',
    ];

    // Allowed blocks added by plugins
    $plugin_blocks = ['gravityforms/form'];

    // Allowed blocks for admins only
    $admin_blocks = [];
    if (current_user_can('administrator')) {
      $admin_blocks = ['core/html', 'core/shortcode', 'core/freeform'];
    }

    // Merge all block arrays into the final allowed blocks array
    $allowed_blocks = array_merge($core_blocks, $custom_blocks, $plugin_blocks, $admin_blocks);

    return $allowed_blocks;
  }
}
