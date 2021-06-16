require(['jquery','swiper'],function($,swiper){
    var swiper = new swiper('.products-13__swiper', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 8,
        pagination: {
            el: '.products-13__pagination',
            clickable: true,
        }
    });
    $(document).ready(function(){
        $(".products-13__classList ul li:first-child").addClass("proClass_on");
        $(".products-13__classList ul li").hover(function(){
            var class_index = $(this).index();
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");
            var waibox_width_left = -1200*class_index;
            $(".products-13_swiperbox_content").stop().animate({left:waibox_width_left+"px"},600);

        });

    })
});


