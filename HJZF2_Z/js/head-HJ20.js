require(['jquery'],function($){
    var hdr = jQuery('#head-HJ20');		
	jQuery(window).scroll(function() {
		if (jQuery(window).scrollTop() > 50) {
			hdr.addClass('fixed');
		} else {
			hdr.removeClass('fixed');
		}
	});
	$(".dt-mobile-menu-icon").click(function () {
        $(".mobile-header-scrollbar-wrap").toggleClass("active");
    });
});


