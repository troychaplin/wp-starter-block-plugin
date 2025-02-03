<?php

namespace IDC\Blocks;

use IDC\Globals\PluginPaths;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class RegisterBlocks
{
  public function __construct()
  {
    add_action('init', [$this, 'register_blocks']);
  }

  /**
   * Registers custom Gutenberg blocks.
   *
   * This method registers blocks by first checking if the function 
   * `wp_register_block_metadata_collection` exists. If it does, it registers 
   * the block metadata collection from the specified directory and manifest file.
   * 
   * Then, it retrieves all block directories from the build path and registers 
   * each block type found within those directories.
   *
   * @return void
   */
  public function register_blocks()
  {
    // Get the path to the blocks directory and an array of block folders
    $blocks_dir = PluginPaths::pluginPath() . 'build/scripts/blocks/';
    $block_folders = glob($blocks_dir . '*', GLOB_ONLYDIR);

    if (function_exists('wp_register_block_metadata_collection')) {
      wp_register_block_metadata_collection(
        $blocks_dir,
        PluginPaths::pluginPath() . 'build/blocks-manifest.php'
      );
    }

    foreach ($block_folders as $block_path) {
      $block_json = $block_path . '/block.json';

      if (file_exists($block_json)) {
        register_block_type($block_path);
      }
    }
  }
}
