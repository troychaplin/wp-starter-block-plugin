<?php

namespace IDC\Blocks;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class CoreBlocks
{
  public function __construct()
  {
    add_filter('register_block_type_args', [$this, 'modify_core_heading_levels'], 10, 2);
  }

  public function modify_core_heading_levels($args, $block_type)
    {
        if ('core/heading' !== $block_type) {
            return $args;
        }
        $args['attributes']['levelOptions']['default'] = [2, 3, 4, 5, 6];

        return $args;
    }
}
