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

// Include function files
require_once plugin_dir_path(__FILE__) . 'Functions/allowed-blocks.php';
require_once plugin_dir_path(__FILE__) . 'Functions/block-categories.php';
require_once plugin_dir_path(__FILE__) . 'Functions/customizations.php';
require_once plugin_dir_path(__FILE__) . 'Functions/enqueue-scripts.php';
require_once plugin_dir_path(__FILE__) . 'Functions/register-blocks.php';
require_once plugin_dir_path(__FILE__) . 'Functions/remove-options.php';

// Instantiate the classes
new IDC\Blocks\AllowedBlocks();
new IDC\Blocks\BlockCategories();
new IDC\Blocks\Customizations();
new IDC\Blocks\RegisterBlocks();
new IDC\Blocks\EnqueueScripts();
new IDC\Blocks\RemoveOptions();
