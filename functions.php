<?php
//TODO: rename to colombiablog when migrating to host.
function learning_wp_files()
{
    wp_register_style('quicksand', 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
    wp_register_style('playwrite', 'https://fonts.googleapis.com/css2?family=Playwrite+CO:wght@100..400&display=swap');
    //css -> parameter 1: nickname for files, parameter 2: location of the file.
    //get_stylesheet_uri() -> gets css from root folder.
    wp_enqueue_style('learning_wp_main_styles', get_stylesheet_uri());
    wp_enqueue_style('learning_wp_main_styles', get_stylesheet_uri());
    //TODO: refactor this
    wp_enqueue_style('custom-google-stlye', '//fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    wp_enqueue_style('quicksand');
    wp_enqueue_style('playwrite');
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
