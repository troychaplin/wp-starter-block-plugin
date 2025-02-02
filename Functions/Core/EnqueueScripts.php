<?php

namespace IDC\Core;

use IDC\Globals\PluginPaths;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class EnqueueScripts
{
  public function __construct()
  {
    add_action('enqueue_block_editor_assets', [$this, 'enqueue_block_assets']);
    // add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
  }

  /**
   * Enqueues the block editor JavaScript assets for the IDC Block Plugin.
   *
   * This function registers and enqueues the JavaScript file required for the block editor.
   * The script is dependent on several WordPress packages such as wp-blocks, wp-components, wp-data, etc.
   *
   * @return void
   */
  public function enqueue_block_assets()
  {
    $asset_path = PluginPaths::pluginUrl() . 'build/';

    wp_enqueue_script(
      'block-editor-js',
      $asset_path . 'scripts/block-editor.js',
      array('wp-blocks', 'wp-components', 'wp-data', 'wp-dom-ready', 'wp-edit-post', 'wp-element', 'wp-i18n', 'wp-plugins'),
      null,
      false
    );

    wp_enqueue_style(
      'idc-block-ui',
      $asset_path . 'styles/idc-blocks-ui.css',
      [],
      false
    );

    wp_enqueue_style(
      'editor-styles',
      $asset_path . 'styles/editor-styles.css',
      [],
      false
    );

    wp_enqueue_style(
      'google-fonts-editor',
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
      [],
      null
    );
  }

  /**
   * Enqueues the admin JavaScript assets for the IDC Block Plugin.
   *
   * This function registers and enqueues the JavaScript file used in the admin
   * area of the IDC Block Plugin. The script is loaded from the build directory
   * and is set to load in the footer of the admin page.
   *
   * @return void
   */
  public function enqueue_admin_assets()
  {
    $asset_path = PluginPaths::pluginUrl() . 'build/';

    wp_enqueue_script(
      'idc-block-admin-js',
      $asset_path . 'scripts/admin-scripts.js',
      array(),
      null,
      true
    );
  }
}
