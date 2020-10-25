function ecommerce_zone_openNav() {
  window.ecommerce_zone_RespoMenu=true;
  jQuery(".sidenav").addClass('show');
}
function ecommerce_zone_closeNav() {
  window.ecommerce_zone_RespoMenu=false;
  jQuery(".sidenav").removeClass('show');
}

(function( $ ) {
window.ecommerce_zone_currentfocus=null;
ecommerce_zone_checkfocusdElement();
var ecommerce_zone_body = document.querySelector('body');
ecommerce_zone_body.addEventListener('keyup', ecommerce_zone_check_tab_press);
var ecommerce_zone_gotoHome = false;
var ecommerce_zone_gotoClose = false;
window.ecommerce_zone_RespoMenu=false;
function ecommerce_zone_checkfocusdElement(){
if(window.ecommerce_zone_currentfocus=document.activeElement.className){
  window.ecommerce_zone_currentfocus=document.activeElement.className;
}
}
function ecommerce_zone_check_tab_press(e) {
"use strict";
e = e || event;
var activeElement;
if(window.innerWidth < 999){
if (e.keyCode == 9) {
  if(window.ecommerce_zone_RespoMenu){
  if (!e.shiftKey) {
    if(ecommerce_zone_gotoHome) {
      jQuery( ".menu ul:first li:first a:first-child" ).focus();
    }
  }
  if (jQuery("a.closebtn.mobile-menu").is(":focus")) {
    ecommerce_zone_gotoHome = true;
  } else {
    ecommerce_zone_gotoHome = false;
  }
}else{
  if(window.ecommerce_zone_currentfocus=="mobiletoggle"){
    jQuery( "" ).focus();
  }}}
}
if (e.shiftKey && e.keyCode == 9) {
if(window.innerWidth < 999){
  if(window.ecommerce_zone_currentfocus=="header-search"){
    jQuery(".mobiletoggle").focus();
  }else{
    if(window.ecommerce_zone_RespoMenu){
    if(ecommerce_zone_gotoClose){
      jQuery("a.closebtn.mobile-menu").focus();
    }
    if (jQuery( ".menu ul:first li:first a:first-child" ).is(":focus")) {
      ecommerce_zone_gotoClose = true;
    } else {
      ecommerce_zone_gotoClose = false;
    }
  }else{
  if(window.ecommerce_zone_RespoMenu){
  }}}}
}
ecommerce_zone_checkfocusdElement();
}
})( jQuery );

jQuery(document).ready(function() {
	var owl = jQuery('#top-slider .owl-carousel');
		owl.owlCarousel({
			margin: 25,
			nav: true,
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:true,
			loop: true,
			navText : ['<i class="fa fa-lg fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>'],
			responsive: {
			  0: {
			    items: 1
			  },
			  600: {
			    items: 1
			  },
			  1024: {
			    items: 1
			}
		}
	})
})