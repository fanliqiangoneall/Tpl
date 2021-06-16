require(['jquery', 'swiper'], function ($, Swiper) {
    $(function () {
        var hjzf_advantage_31_con_container = new Swiper('.hjzf_advantage_31_con_container', {
            slidesPerView: 5,
            pagination: {
                el: '.hjzf_advantage_31_con_container .swiper-pagination',
                clickable: true
            },
            centeredSlides: true,
            loop: true,
            speed: 800,
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            },
            autoplay: {
                delay: 3000, //1秒切换一次
            },
        });

        var len = $('.hjzf_advantage_31_con_container .swiper-slide').length;
        if (len <= 5) {
            $('.hjzf_advantage_31_con_container .swiper-pagination').hide();
        }
    });


})