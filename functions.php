<?php
//TODO: rename to colombiablog when migrating to host.
//TODO: refactor this

//NOTES
//css -> parameter 1: nickname for files, parameter 2: location of the file.
//get_stylesheet_uri() -> gets css from root folder.

function learning_wp_files()
{
    wp_register_style('spectral', 'https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    wp_register_style('courier prime', 'https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    wp_enqueue_style('spectral');
    wp_enqueue_style('courier prime');

    wp_enqueue_style('learning_wp_main_styles', get_stylesheet_uri());
    wp_enqueue_style('learning_wp_main_styles', get_stylesheet_uri());
}

//second param is our function. We are no executing the function right away, wp handles that for us. 
add_action('wp_enqueue_scripts', 'learning_wp_files');


function learning_wp_features()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menu('headerMenuLocation', 'Header Menu Location');
}

add_action('after_setup_theme', 'learning_wp_features');
