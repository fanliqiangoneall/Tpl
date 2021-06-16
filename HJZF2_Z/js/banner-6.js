require(['jquery','swiper'],function($,Swiper){
    if($(".banner-6_swiper").length>0){
        var bannerHJ02_swiper = new Swiper('.banner-6_swiper', {
            speed:800,
            loop:true,
            effect : 'fade',
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.banner-6_pagination',
              },
            on:{
                init:function(swiper){

                    $(".slidernav li:first-child").addClass("active");
                },

                transitionStart: function(){
                    $(".slidernav li").eq(this.realIndex).addClass("active").siblings("li").removeClass("active");
                },
            }
        });
        $(".slidernav li").hover(function(){
            $(this).addClass("active").siblings("li").removeClass("active");
            bannerHJ02_swiper.slideToLoop($(this).index());
        })
    }

    $('.main-scroll-icon').on('click', function () {
        $('html, body').animate({
            scrollTop: $(this).parents('.zh_page').next().offset().top
        }, 500)
    })


});


