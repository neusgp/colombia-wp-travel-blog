<?php get_header();
?>

<div id='banner'>
    <h1>Welcome to the blog</h1>
    <p>keep up with all the latest adventures</p>
</div>

<section>
    <div id='preview-list'>
        <?php
        while (have_posts()) {
            the_post(); ?>
            <li>
                <!-- TODO: review class names -->
                <div id='post-preview'>
                    <div id='post-data'>
                        <h4><?php the_title(); ?></h4>
                        <?php the_excerpt(); ?><a href="<?php the_permalink(); ?>">Continue reading</a>
                        <div class='post-details'>
                            <p>Posted by: <span class='details-highlight'><?php the_author(); ?></span> on <span class='details-highlight'><?php the_time("g/m/y"); ?></span> in <?php echo get_the_category_list(', '); ?></p>
                        </div>
                        <?php the_post_thumbnail(); ?>
                    </div>

                </div>
            </li>
        <?php

        }
        ?>
</section>
</div>
<?php

get_footer();

?>