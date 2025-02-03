<?php

namespace IDC\Core;

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

class RemoveOptions
{
  public function __construct()
  {
    add_filter('xmlrpc_methods', [$this, 'remove_xmlrpc_methods']);
    add_action('init', [$this, 'remove_actions_filters']);
  }

  /**
   * Remove XMPLPRC from WordPress for security
   *
   * @param  array $methods
   * @return array $methods
   */
  public function remove_xmlrpc_methods($methods)
  {
    unset($methods['pingback.ping']);
    unset($methods['pingback.extensions.getPingbacks']);
    unset($methods['wp.getUsersBlogs']);
    unset($methods['system.multicall']);
    return $methods;
  }

  /**
   * Remove unneeded headers from WP
   *
   */
  public function remove_actions_filters()
  {
    // WP Head
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'start_post_rel_link');
    remove_action('wp_head', 'index_rel_link');
    remove_action('wp_head', 'adjacent_posts_rel_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');

    // Emoji's
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
  }
}
