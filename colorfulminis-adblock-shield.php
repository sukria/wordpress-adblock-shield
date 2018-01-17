<?php
/*
Plugin Name:  Colorfulminis Adblocker Shield
Plugin URI:   https://colorfulminis.com/wordpress-adblocker-shield/
Description:  Detect adblockers and block browsers from your content.
Version:      0.1
Author:       Alexis Sukrieh
Author URI:   http://twitter.com/sukria
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  cfminis
Domain Path:  /languages
*/

// security check
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );


function hook_javascript() {
    ?>
    <script src="<?php echo plugins_url('js/cfminis_as.js', __FILE__) ?>" type="text/javascript"></script>
    <?php
}
add_action('wp_head', 'cfm_as_hook_javascript');

function cfminis_as_hook_css() {
    ?>
    <link href="<?php echo plugins_url('css/cfminis_as.css', __FILE__); ?>" rel="stylesheet" >
    <?php
}
add_action('wp_head', 'cfm_as_hook_css');

function cfminis_as_footer() {
    ?>
    <script src="<?php echo plugins_url('js/ads.js', __FILE__) ?>?rand=<?php echo rand(); ?>" type="text/javascript"></script>
    <script type="text/javascript">
       cfminis_as_run(); 
    </script>
    <?php
}
add_action( 'wp_footer', 'cfm_as_footer' );
?>
