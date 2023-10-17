<?php
/**
 * Plugin Name:       Table of Contents Block
 * Description:       Add a flyout table of contents block. For use with the University of Illinois theme.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.1.0
 * Author:            Strategic Communications and Marketing - University of Illinois Urbana-Champaign
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       il-table-of-contents
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_table_of_contents_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_table_of_contents_block_init' );
