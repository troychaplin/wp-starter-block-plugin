<?php

/**
 * Plugin Name:       IDC Block Plugin
 * Description:       A custom block plugin for International Documents Canada
 * Requires at least: 6.6
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Troy Chaplin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       idc-blocks
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the blocks using block.json files
 */
function idc_register_blocks()
{
    if (function_exists('wp_register_block_metadata_collection')) {
        // Register the block metadata.
        wp_register_block_metadata_collection(
            __DIR__ . '/build',
            __DIR__ . '/build/blocks-manifest.php'
        );
    }
    // Register the blocks.
    $blocks = glob(__DIR__  . '/build/blocks/*', GLOB_ONLYDIR);

    foreach ($blocks as $block) {
        register_block_type($block);
    }
}
add_action('init', 'idc_register_blocks');

/**
 * Enqueues the block assets for the editor
 */
function idc_enqueue_block_assets()
{
    wp_enqueue_script(
        'multi-block-editor-js',
        plugin_dir_url(__FILE__) . 'build/idc-block-editor.js',
        array('wp-blocks', 'wp-components', 'wp-data', 'wp-dom-ready', 'wp-edit-post', 'wp-element', 'wp-i18n', 'wp-plugins'),
        null,
        false
    );
}
add_action('enqueue_block_editor_assets', 'idc_enqueue_block_assets');

/**
 * Enqueues the block assets for the frontend
 */
function idc_enqueue_admin_assets()
{
    wp_enqueue_script(
        'multi-block-admin-js',
        plugin_dir_url(__FILE__) . 'build/idc-block-admin.js',
        array(),
        null,
        true
    );
}
add_action('admin_enqueue_scripts', 'idc_enqueue_admin_assets');

/**
 * Enqueues the block assets for the frontend
 */
function idc_enqueue_frontend_assets()
{
    wp_enqueue_script(
        'multi-block-frontend-js',
        plugin_dir_url(__FILE__) . 'build/idc-block-frontend.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'idc_enqueue_frontend_assets');
