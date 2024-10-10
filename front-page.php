<?php get_header(); ?>

<div class='content'>
    <div id='hero' style='background-image: url(<?php the_post_thumbnail_url() ?>); '>
        <h1>Welcome to my travel blog!</h1>
        <h3>During the month of November, I'll be exploring Colombia with my friend Alexa.
            </br>Come along and see where our adventures take us ✈️ </h3>
    </div>
    <section>
        <h2>Check out the latest posts...</h2>
        <div id='preview-list'>
            <?php
            //since we can't query posts here cause it's the front-page. 
            $homePagePosts = new WP_Query(array('posts_per_page' => 3));
            //more stuff can go inside each posts's section (time, author, link, etc...)
            while ($homePagePosts->have_posts()) {
                $homePagePosts->the_post(); ?>
                <li>
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
            <p><a href="<?php echo site_url('/blog'); ?>">See all posts!</a></p>
        </div>
    </section>
</div>

<?php
//important to reset data (??)
wp_reset_postdata();

get_footer();

?>