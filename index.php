<?php get_header();
?>
<div class='content'>
    <div class='banner'>
        <h1>Blog</h1>
    </div>
    <section>
        <div>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type=" text" class='search-field' placeholder='type to search' />

        </div>
        <div class="search-section"></div>
    </section>
    <section class='all-posts'>
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
                        </div>
                        <?php the_post_thumbnail(); ?>
                    </div>
                </li>
            <?php

            }
            ?>
    </section>
</div>
</div>
<?php

get_footer();

?>