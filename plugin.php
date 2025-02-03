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

$global_classes = [
    \IDC\Globals\PluginPaths::class,
];

$block_classes = [
    \IDC\Blocks\AllowedBlocks::class,
    \IDC\Blocks\CoreBlocks::class,
    \IDC\Blocks\Customizations::class,
    \IDC\Blocks\RegisterBlocks::class,
];

$core_classes = [
    \IDC\Core\Customization::class,
    \IDC\Core\EditorBanners::class,
    \IDC\Core\EnqueueScripts::class,
    \IDC\Core\RemoveOptions::class,
];

$endpoint_classes = [
    \IDC\EndPoints\FAQs::class,
    \IDC\EndPoints\Pages::class,
    \IDC\EndPoints\Posts::class,
    \IDC\EndPoints\Testimonials::class,
];

$type_classes = [
    \IDC\Types\FAQ::class,
    \IDC\Types\Pages::class,
    \IDC\Types\Testimonials::class,
];

$classes = array_merge($global_classes, $block_classes, $core_classes, $endpoint_classes, $type_classes);

foreach ($classes as $class) {
    new $class();
}
