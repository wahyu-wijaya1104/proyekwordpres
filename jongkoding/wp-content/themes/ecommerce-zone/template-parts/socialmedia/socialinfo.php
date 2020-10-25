<?php
/**
 * Displays top navigation
 *
 * @package Ecommerce Zone
 */
?>

<div class="container">
	<div class="row">
		<div class="col-lg-2 col-md-3">
			<?php if(get_theme_mod('ecommerce_zone_phone_number_info') != ''){ ?>
			<p><i class="fas fa-phone-square"></i><?php echo esc_html(get_theme_mod('ecommerce_zone_phone_number_info','')); ?></p>
			<?php }?>
		</div>
		<div class="col-lg-3 col-md-4">
			<?php if(get_theme_mod('ecommerce_zone_email_info') != ''){ ?>
			<p><i class="fas fa-envelope-square"></i><?php echo esc_html(get_theme_mod('ecommerce_zone_email_info','')); ?></p>
			<?php }?>
		</div>
		<div class="col-lg-7 col-md-5">
			<?php if(get_theme_mod('ecommerce_zone_location_info') != ''){ ?>
			<p><i class="fas fa-map-marker-alt"></i><?php echo esc_html(get_theme_mod('ecommerce_zone_location_info','')); ?></p>
			<?php }?>
		</div>
	</div>
</div>