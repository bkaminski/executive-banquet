<?php 
//LOAD SCRIPTS
function enqueue_dmi_scripts() {
    wp_enqueue_script('dmi-scripts', get_template_directory_uri() . '/assets/js/dmiScripts.min.js' , array(), false, true );
}
add_action('wp_enqueue_scripts', 'enqueue_dmi_scripts');


//LOAD CSS
function enqueue_dmi_styles() {
    wp_enqueue_style('dmi-styles', get_template_directory_uri() . '/assets/styles/dmiStyles.min.css');
}
add_action('wp_enqueue_scripts', 'enqueue_dmi_styles');

//WEBFLOW REQUIRED JQUERY VERSION
function rollback_jquery() {
  wp_deregister_script('jquery');
  wp_enqueue_script('jquery-3.5.1','https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=611f646b123d6105a98a9233');
}
add_action('wp_enqueue_scripts','rollback_jquery',100);

