<?php

get_header();

?>
<div class='content'>

    <?php
    while (have_posts()) {
        the_post(); ?>
        <div class='banner'>
            <h1><?php the_title(); ?></h1>
        </div>
        <section>
            <?php
            //echo get_the_ID(); -> gives us the page ID
            //0 evaluates to FALSE
            $parentId = wp_get_post_parent_id(get_the_ID());
            if ($parentId) { ?>
                <div>
                    <span>Back to <a href="<?php echo get_the_permalink($parentId); ?>"><?php echo get_the_title($parentId); ?></a> > <?php echo the_title(); ?></span>
                </div>
            <?php }

            ?>
            <p><?php the_content(); ?></p>
        </section>

        <!-- <?php
                //get_pages
                $theChildren = get_pages(array('child_of' => get_the_ID()));
                if ($parentId or $theChildren) {
                ?>
            <div>
                <p><?php echo get_the_title($parentId); ?></p>
                <ul>
                    <?php
                    if ($parentId) {
                        $parentPage = $parentId;
                    } else {
                        $parentPage = get_the_ID();
                    }
                    //pass arguments to get rid of unwanted stuff -> it needs an associative array (a Map array('name' => 'Neus, etc..))
                    wp_list_pages(array('title_li' => NULL, 'child_of' => $parentPage));
                    ?>
                </ul>
            </div>

        <?php
                }
        ?> -->

    <?php
    } ?>
</div>
<?php
get_footer();
?>