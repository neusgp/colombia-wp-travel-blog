<?php get_header(); ?>

<div class='content'>
    <div id='hero'>
        <img class='main_title' src="<?php echo get_template_directory_uri(); ?>/images/main_title.png">
        <img class='scroll_arrow' src="<?php echo get_template_directory_uri(); ?>/images/scroll_arrow.png">
    </div>
    <section>
        <img class='latest-posts' alt="latest posts" src="<?php echo get_template_directory_uri(); ?>/images/latest_posts.png">
        <div id='preview-list'>
            <?php
            //since we can't query posts here cause it's the front-page. 
            $homePagePosts = new WP_Query(array('posts_per_page' => 3));
            //more stuff can go inside each posts's section (time, author, link, etc...)
            if (!$homePagePosts->have_posts()) {
            ?> <p>There are no posts in this category yet!</p>
            <?php
            }
            while ($homePagePosts->have_posts()) {
                $homePagePosts->the_post(); ?>
                <li>
                    <div id='post-preview'>
                        <div id='post-data'>
                            <h4><?php the_title(); ?></h4>
                            <p><?php echo wp_trim_words(get_the_content(), 48); ?></p>
                            <a class='continue-reading' href="<?php the_permalink() ?>">
                                <p>Continue reading</p>
                            </a>
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

        </div>
        <a href="<?php echo site_url('/blog'); ?>">
            <div class='button'>
                <p>See all posts!</p>
            </div>
        </a>

    </section>
    <section class='food-section'>
        <img class=' food' alt="food" src="<?php echo get_template_directory_uri(); ?>/images/food.png">
        <?php
        $homePageFoodPosts = new WP_Query(array('posts_per_page' => 3, 'post_type' => 'food'));
        if (!$homePageFoodPosts->have_posts()) {
        ?> <p>There are no posts in this category yet!</p>
        <?php
        } ?>
        <div id='food-preview-list'>
            <?php
            while ($homePageFoodPosts->have_posts()) {
                $homePageFoodPosts->the_post(); ?>
                <li>
                    <div id='food-post-preview'>
                        <div id='post-data'>
                            <h4><?php the_title(); ?></h4>
                            <p><?php echo wp_trim_words(get_the_content(), 18); ?></p>
                            <a class='continue-reading' href="<?php the_permalink() ?>">
                                <p>Continue reading</p>
                            </a>
                            <div class='post-details'>
                                <p>Posted by: <span class='details-highlight'><?php the_author(); ?></span> on <span class='details-highlight'><?php the_time("g/m/y"); ?></span></p>
                            </div>
                        </div>
                        <?php the_post_thumbnail(); ?>
                    </div>

                </li>
            <?php
            }
            ?>

        </div>
        <a href="<? echo get_post_type_archive_link('food'); ?>">
            <div class='button'>
                <p>Check out all food posts</p>
            </div>
        </a>
    </section>
</div>

<?php
//important to reset data (??)
wp_reset_postdata();

get_footer();

?>