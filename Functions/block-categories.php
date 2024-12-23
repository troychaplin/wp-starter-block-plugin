<?php

namespace IDC\Blocks;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class BlockCategories
{
  public function __construct()
  {
    // add_filter('block_categories_all', [$this, 'add_block_category'], 10, 2);
    // add_filter('block_categories_all', [$this, 'add_order_block_category'], 10, 2);
    add_filter('block_categories_all', [$this, 'add_order_multiple_block_categories'], 10, 2);
  }

  // Add a custom block category
  public function add_block_category($categories)
  {
    return array_merge(
      $categories,
      [
        [
          'slug' => 'custom-category',
          'title' => __('Custom Category', 'your-text-domain'),
          'icon'  => null,
        ],
      ]
    );
  }

  // Add a custom block category at a specific position
  public function add_order_block_category($categories)
  {
    $custom_category = [
      'slug' => 'custom-category',
      'title' => __('Custom Category', 'your-text-domain'),
      'icon'  => null,
    ];

    // Insert the custom category at the desired position (e.g., position 1)
    $position = 1;
    array_splice($categories, $position, 0, [$custom_category]);

    return $categories;
  }

  // Add multiple custom block categories at specific positions
  public function add_order_multiple_block_categories($categories)
  {
    $custom_categories = [
      [
        'slug' => 'custom-category-1',
        'title' => __('Custom Category 1', 'your-text-domain'),
        'icon'  => null,
        'position' => 1,
      ],
      [
        'slug' => 'custom-category-2',
        'title' => __('Custom Category 2', 'your-text-domain'),
        'icon'  => null,
        'position' => 3,
      ],
    ];

    // Sort custom categories by position
    usort($custom_categories, function ($a, $b) {
      return $a['position'] <=> $b['position'];
    });

    // Insert custom categories at specified positions
    foreach ($custom_categories as $custom_category) {
      $position = $custom_category['position'];
      unset($custom_category['position']);
      array_splice($categories, $position, 0, [$custom_category]);
    }

    return $categories;
  }

  public function modify_block_categories($categories)
  {
    $new_category_order = [
      ['slug' => 'media'],
      ['slug' => 'custom-category', 'title' => __('Custom Category', 'your-text-domain')],
      ['slug' => 'text', 'title' => __('Text Elements', 'your-text-domain')],
      ['slug' => 'embed'],
      ['slug' => 'design'],
    ];

    // Create an associative array of block categories with the slug as the key.
    $get_block_categories = array_column($categories, 'title', 'slug');

    // Check if the new category order has a title set, otherwise use the default title.
    foreach ($new_category_order as &$new_category) {
      $new_category['title'] = $new_category['title'] ?? $get_block_categories[$new_category['slug']] ?? __('Untitled', 'your-text-domain');
    }

    // Create an array of slugs from the new category order.
    $new_category_slugs = array_column($new_category_order, 'slug');

    // Filter out the remaining block categories that are not in the new order.
    $remaining_categories = array_filter($categories, function ($category) use ($new_category_slugs) {
      return ! in_array($category['slug'], $new_category_slugs, true);
    });

    // Merge the new category order with the remaining categories.
    return array_merge($new_category_order, $remaining_categories);
  }
}
