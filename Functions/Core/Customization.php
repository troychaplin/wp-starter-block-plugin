<?php

namespace IDC\Core;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class Customization
{
  public function __construct()
  {
    add_filter('xmlrpc_enabled', '__return_false');
    add_filter('register_block_type_args', [$this, 'set_allowed_heading_levels'], 10, 2);
    add_action('init', [$this, 'add_page_excerpts']);
    add_filter('menu_order', [$this, 'reorder_admin_menu'], 10, 1);
    add_filter('custom_menu_order', '__return_true');
    add_action('init', [$this, 'clean_up_wp_head']);
    add_action('init', [$this, 'disable_emojis']);
  }

  /**
   * Filters the allowed heading levels for the 'core/heading' block.
   *
   * @param array  $args       The block settings and attributes.
   * @param string $block_type The block type name.
   *
   * @return array The modified block settings and attributes.
   */
  public function set_allowed_heading_levels($args, $block_type)
  {
    if ('core/heading' !== $block_type) {
      return $args;
    }
    $args['attributes']['levelOptions']['default'] = [2, 3, 4, 5, 6];

    return $args;
  }

  /**
   * Adds support for excerpts in pages.
   *
   * This function enables the excerpt feature for the 'page' post type
   * by adding post type support for 'excerpt'.
   *
   * @return void
   */
  public function add_page_excerpts()
  {
    add_post_type_support('page', 'excerpt');
  }

  /**
   * Reorders the items in the WordPress admin menu.
   *
   * This function customizes the order of the items in the WordPress admin menu.
   * It returns an array of menu slugs in the desired order.
   *
   * @param array $menu_ord The current order of the admin menu items.
   * @return array The reordered admin menu items.
   */
  public function reorder_admin_menu($menu_ord)
  {
    return [
      'index.php',
      'edit.php?post_type=page',
      'edit.php',
      'edit.php?post_type=idc_faq',
      'edit.php?post_type=idc_testimonial',
    ];
  }

  /**
   * Clean up the WordPress head section by removing unnecessary actions.
   *
   * This function removes the following actions from the wp_head hook:
   * - rsd_link: Removes the Really Simple Discovery link.
   * - wlwmanifest_link: Removes the Windows Live Writer manifest link.
   * - wp_generator: Removes the WordPress version number.
   * - wp_shortlink_wp_head: Removes the shortlink for the page.
   * - adjacent_posts_rel_link_wp_head: Removes the adjacent posts links.
   *
   * @return void
   */
  public function clean_up_wp_head()
  {
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
  }

  /**
   * Disables the WordPress emoji feature by removing various actions and filters.
   *
   * This function removes the following:
   * - Emoji detection script from the front-end and admin pages.
   * - Emoji styles from the front-end and admin pages.
   * - Emoji conversion in RSS feeds and emails.
   *
   * @return void
   */
  public function disable_emojis()
  {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
  }
}
