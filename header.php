<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class() ?>>
    <header>
        <?php
        wp_nav_menu(array(
            // depth: to control if I want to show children pages ( default 0 = all pages).
            'depth' => 1,
            'theme_location' => 'headerMenuLocation'
        ));
        ?>
    </header>