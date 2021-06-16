require(['jquery','swiper'],function($,Swiper){
    $(document).ready(function(){
        $(".products-21__categroy .products-21__categroy_item:first-child").addClass("proClass_on");
        $(".products-21__categroy .products-21__categroy_item").hover(function(){
            var class_index = $(this).index();
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");

            var waibox_width_left = -1200*class_index;
            $(".products-21__content--down__wrap").width((1200*$(".products-21__categroy .products-21__categroy_item").length));
            $(".products-21__content--down__wrap").stop().animate({left:waibox_width_left+"px"},1200);
        });
    });
    var swiper = new Swiper('.products-21_container', {
        slidesPerView: 3,
        slidesPerGroup : 3,
		autoplay: true,
        pagination: {
            el: '.products-21__categroy_pagination',
            clickable: true,
        },
    });


});


