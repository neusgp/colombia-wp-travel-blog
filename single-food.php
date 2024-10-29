<?php get_header();
?>
<div class='content'>
    <div class='banner'></div>
    <section>
        <?php
        while (have_posts()) {
            the_post(); ?>
            <div id='single-post'>
                <div>
                    <span class='post-title'><a href="<?php echo site_url('/food'); ?>">
                            <p class='details-highlight'>Food ></p>
                        </a>

                        <h2><?php the_title(); ?></h2>
                    </span>

                    <div class='post-details'>
                        <p>Posted by: <span class='details-highlight'><?php the_author(); ?></span> on <span class='details-highlight'><?php the_time("g/m/y"); ?></span></p>
                    </div>
                </div>
                <div> <?php the_content(); ?></div>

            </div>
        <?php
        }
        ?>
        <a href="<?php echo site_url('/food'); ?>">
            <div class='button'>
                <p>Back to Food</p>
            </div>
        </a>
    </section>

</div>
</div>
<?php

get_footer();

?>