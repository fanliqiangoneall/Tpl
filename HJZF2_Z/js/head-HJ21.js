require(['jquery', 'swiper'], function ($) {
    $('.hj21_search').click(function() {
        $('.header_hj12_nav_fixed').toggleClass('searchOn');
    });
    $('.closeda').click(function () {
        $('.header_hj12_nav_fixed').removeClass('searchOn')
    });
    function header_hj21() {
        var t = $(window).scrollTop();
        if(t > 20) {
            $('.header_hj12_nav_fixed').addClass("on");
        }else{
            $('.header_hj12_nav_fixed').removeClass("on");
        }
		var h = $('.header_hj12_nav_fixed').height();
		$('.hader_hj12_nav_con_empty').height(h - 77);
    };
    header_hj21();
    $(window).scroll(function () {
        header_hj21();
    })
    
});