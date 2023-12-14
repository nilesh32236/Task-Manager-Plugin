<?php
/**
 * Plugin Name: Task Manager Plugin
 * Description: A task management plugin for WordPress.
 * Version:     1.0
 * Author:      Nilesh Kazariya
 */

// Define plugin constants
define( 'TM_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'TM_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Plugin activation hook
function task_manager_plugin_activate () {
	// Perform activation tasks if needed
}
register_activation_hook( __FILE__, 'task_manager_plugin_activate' );

// Plugin deactivation hook
function task_manager_plugin_deactivate () {
	// Perform deactivation tasks if needed
}
register_deactivation_hook( __FILE__, 'task_manager_plugin_deactivate' );

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_script(
			'tm-main-script',
			TM_PLUGIN_URL . 'dist/js/main.bundle.js',
			array(),
			'1.0',
			true
		);

		wp_enqueue_style(
			'tm-main-style',
			TM_PLUGIN_URL . 'dist/css/main.bundle.css',
			array(),
			'1.0',
		);
	}
);