<?php

namespace IDC\Globals;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class PluginPaths
{
  /**
   * Get the URL to the plugin directory.
   *
   * @return string The URL to the plugin directory.
   */
  public static function pluginUrl()
  {
    $plugin_assets = WP_PLUGIN_URL . '/idc-block-plugin/';
    return $plugin_assets;
  }

  /**
   * Get the path to the plugin directory.
   *
   * @return string The path to the plugin directory.
   */
  public static function pluginPath()
  {
    $plugin_assets = WP_PLUGIN_DIR . '/idc-block-plugin/';
    return $plugin_assets;
  }
}
