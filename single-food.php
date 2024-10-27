<!-- this is for the custom food post type view -->

<?php

while (have_posts()) {
    the_post(); ?>
    <h2><?php the_title(); ?></h2>
    <?php the_content(); ?>

<?php

}

?>