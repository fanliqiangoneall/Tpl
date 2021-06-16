require(['jquery', 'swiper'], function ($, Swiper) {
    var service15_swiper = new Swiper('.service-15_swiper', {
        autoplay:true,
        pagination: {
            el: '.service-15_page',
        },
        on: {
            transitionEnd: function () {
                $(".ind_src4_lb_tab>div").eq(this.activeIndex).addClass("on").siblings("div").removeClass("on");
                $(".ind_src4_con_text_m .ind_member_text").eq(this.activeIndex).addClass("on").siblings("div").removeClass("on");
            }
        }
    });
    $(".ind_src4_lb_tab>div").click(function () {
        var index = $(this).index();
        $(this).addClass("on").siblings("div").removeClass("on");
        service15_swiper.slideTo(index, 1000, false);//切换到第一个slide，速度为1秒
    })
});