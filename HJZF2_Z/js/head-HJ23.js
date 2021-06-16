require(['jquery', 'swiper'], function ($, Swiper) {
    $(function () {     
        $('.head_hj23_search span').click(function () {
            $('.head_hj23_search_form').fadeToggle();
        });
		var h = $('.haader_hj23_bottom .logo').height();
		$('.header_hj23_bottom_nav_drop').css('top', h);
        var swiper = new Swiper('#case4', {
            loop: true, //允许从第一张到最后一张，或者从最后一张到第一张  循环属性
            slidesPerView: 1, // 设置显示三张
            //centeredSlides : true,     //使当前图片居中显示
            freeMode: true, // 使幻灯片滑动时不止滑动一格，且不会自动贴合 
            slidesPerGroup: 1, //定义1张图片为一组
            autoplay: true, //可选选项，自动滑动
            speed: 50000, //设置过度时间
            grabCursor: true, //鼠标样式根据浏览器不同而定 
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },           
        });
        
    });
	if (typeof menu_gd !=''){
    var offsetTop = $(".haader_hj23_bottom").offset().top;
		$(window).scroll(function () {
			var win_width = $(window).width();
			if ($(document).scrollTop() > offsetTop) {
				$(".haader_hj23_bottom").css({
					"position": "fixed",
					"left": "0px",
					"top": "0",
					"width": "100%",
					"z-index": "9999",
					"background": "#fff",
				});
			} else {
				$(".haader_hj23_bottom").css({
					"position": "relative",
					"left": "0",
					"top": "0",
					"width": "100%",
				});
			}
		});
	}
});
