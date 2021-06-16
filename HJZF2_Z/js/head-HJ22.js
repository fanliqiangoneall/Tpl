require(['jquery', 'swiper'], function ($) {
    $('.hj22_search').click(function() {
        $('.header_hj22_nav_fixed').toggleClass('searchOn');
    });
    $('.closeda').click(function () {
        $('.header_hj22_nav_fixed').removeClass('searchOn')
    });
    function header_hj22() {
        var t = $(window).scrollTop();
        if(t > 200) {
            $('.header_hj22_nav_fixed').addClass("on");
        }else{
            $('.header_hj22_nav_fixed').removeClass("on");
        }
    };
    header_hj22();
    $(window).scroll(function () {
        header_hj22();
    });
});