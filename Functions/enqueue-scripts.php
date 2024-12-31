<?php

namespace IDC\Blocks;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class EnqueueScripts
{
  public function __construct()
  {
    add_action('enqueue_block_editor_assets', [$this, 'enqueue_block_assets']);
    add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
    add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_assets']);
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
    wp_enqueue_script(
      'idc-block-editor-js',
      plugin_dir_url(__FILE__) . '../build/idc-block-editor.js',
      array('wp-blocks', 'wp-components', 'wp-data', 'wp-dom-ready', 'wp-edit-post', 'wp-element', 'wp-i18n', 'wp-plugins'),
      null,
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
    wp_enqueue_script(
      'idc-block-admin-js',
      plugin_dir_url(__FILE__) . '../build/idc-block-admin.js',
      array(),
      null,
      true
    );
  }

  /**
   * Enqueues the frontend JavaScript assets for the IDC Block plugin.
   *
   * This function registers and enqueues the JavaScript file located at
   * '../build/idc-block-frontend.js' for use on the frontend of the site.
   *
   * @return void
   */
  public function enqueue_frontend_assets()
  {
    wp_enqueue_script(
      'idc-block-frontend-js',
      plugin_dir_url(__FILE__) . '../build/idc-block-frontend.js',
      array(),
      null,
      true
    );
  }
}
