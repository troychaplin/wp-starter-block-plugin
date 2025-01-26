<?php

namespace IDC;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class BlockCustomizations
{
  public function __construct()
  {
    remove_action('enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets'); // Disable block directory
    add_filter('should_load_remote_block_patterns', '__return_false'); // Disable remote block patterns
    add_filter('block_editor_settings_all', [$this, 'disable_block_inspector_tabs']);
    add_filter('block_categories_all', [$this, 'add_custom_block_categories'], 10, 2);
  }

  public function disable_block_inspector_tabs($settings)
  {
    if (! isset($settings['blockInspectorTabs'])) {
      $settings['blockInspectorTabs'] = array();
    }

    $settings['blockInspectorTabs'] = array_merge(
      $settings['blockInspectorTabs'],
      array(
        'default'     => true,
        'core/button' => false,
      ),
    );

    return $settings;
  }

  // Add multiple custom block categories at specific positions
  public function add_custom_block_categories($categories)
  {
    $custom_categories = [
      [
        'slug' => 'listings',
        'title' => __('Listings', 'idc-blocks'),
        'icon'    => null,
        'position' => 3,
      ],
    ];

    $added_categories = [];

    // Prepare an associative array with positions as keys
    foreach ($custom_categories as $custom_category) {
      $position = $custom_category['position'];
      unset($custom_category['position']);
      $added_categories[$position] = $custom_category;
    }

    // Sort the categories to insert by their positions/key
    ksort($added_categories);

    // Insert the sorted categories into the existing categories array
    foreach ($added_categories as $position => $custom_category) {
      array_splice($categories, $position, 0, [$custom_category]);
    }

    return $categories;
  }
}
