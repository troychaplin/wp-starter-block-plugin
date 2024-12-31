<?php

namespace IDC;

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
    if (function_exists('wp_register_block_metadata_collection')) {
      wp_register_block_metadata_collection(
        __DIR__ . '/../build',
        __DIR__ . '/../build/blocks-manifest.php'
      );
    }

    $blocks = glob(__DIR__  . '/../build/blocks/*', GLOB_ONLYDIR);

    foreach ($blocks as $block) {
      register_block_type($block);
    }
  }
}
