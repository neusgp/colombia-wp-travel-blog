<?php get_header();
?>
<div class='content'>
    <div class='banner'>

    </div>
    <section>
        <?php
        while (have_posts()) {
            the_post(); ?>
            <div id='single-post'>
                <div>
                    <span class='post-title'><a href="<?php echo site_url('/blog'); ?>">
                            <p class='details-highlight'>Blog ></p>
                        </a>

                        <h2><?php the_title(); ?></h2>
                    </span>

                    <div class='post-details'>
                        <p>Posted by: <span class='details-highlight'><?php the_author(); ?></span> on <span class='details-highlight'><?php the_time("g/m/y"); ?></span> in <?php echo get_the_category_list(', '); ?></p>
                    </div>
                </div>
                <div> <?php the_content(); ?></div>

            </div>
        <?php
        }
        ?>
        <a href=" <?php echo site_url('/blog'); ?>">
            <div class='button'>
                <p>Back to the blog</p>
            </div>
        </a>
    </section>

</div>
</div>
<?php

get_footer();

?>