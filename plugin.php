<?php

/**
 * Plugin Name:       IDC Block Plugin
 * Description:       A custom block plugin for International Documents Canada
 * Requires at least: 6.6
 * Requires PHP:      8.2
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

// Include Composer's autoload file
require_once plugin_dir_path(__FILE__) . 'vendor/autoload.php';

// Instantiate the classes
$classes = [
    \IDC\AllowedBlocks::class,
    \IDC\BlockCustomizations::class,
    \IDC\CoreBlocks::class,
    \IDC\Customization::class,
    \IDC\EditorBanners::class,
    \IDC\EnqueueScripts::class,
    \IDC\TypeFAQ::class,
    \IDC\TypeTestimonials::class,
    \IDC\RegisterBlocks::class,
    \IDC\RemoveOptions::class,
];

foreach ($classes as $class) {
    new $class();
}
