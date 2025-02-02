# IDC Block Plugin

IDC Block Plugin is a custom WordPress plugin that provides a set of custom Gutenberg blocks and functionalities to enhance the content editing experience. This plugin includes various blocks such as Hero Banner, Article Cards, Blue Panels, and more, along with customizations and settings to control the appearance and behavior of these blocks.

## Features

- **Custom Gutenberg Blocks**: Includes a variety of custom blocks like Hero Banner, Article Cards, Blue Panels, Lead-In, and more.
- **Block Customizations**: Provides settings and customizations for blocks to control their appearance and behavior.
- **Allowed Blocks Control**: Restricts the allowed blocks in the editor to a predefined set of core and custom blocks.
- **Enqueue Scripts and Styles**: Enqueues necessary scripts and styles for the blocks and editor.
- **Custom Post Types**: Supports custom post types like FAQ and testimonials.
- **Editor Enhancements**: Adds custom styles and settings to the block editor for a better editing experience.

## Usage

### Custom Blocks

The plugin provides the following custom blocks:

- **Hero Banner**: A block to display a hero banner with customizable header, intro, and background options.
- **Article Cards**: A block to display a group of article cards with options for columns, excerpts, and more.
- **Blue Panels**: Includes light and dark variations of blue panels for content sections.
- **Lead-In**: A block to display a lead-in section with customizable text and background options.

### Customizations

The plugin includes various customizations and settings for the blocks:

- **Block Settings**: Customize the appearance and behavior of blocks through the block settings panel.
- **Allowed Blocks**: Restrict the allowed blocks in the editor to a predefined set of core and custom blocks.
- **Editor Styles**: Adds custom styles to the block editor for a consistent editing experience.

## Development

### File Structure

- **plugin.php**: The main plugin file that includes Composer's autoload file and instantiates the necessary classes.
- **Functions/Plugin**: Contains the classes for various functionalities like allowed blocks, block customizations, enqueue scripts, etc.
- **src/blocks**: Contains the custom block implementations.
- **src/helpers**: Contains helper functions and hooks.
- **editor-styles.css**: Custom styles for the block editor.
