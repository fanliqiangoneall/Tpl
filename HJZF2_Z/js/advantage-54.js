require(['jquery', 'swiper'], function ($, Swiper) {
    $(function () {
        var hjzf_advantage_54_container = new Swiper('.hjzf_advantage_54_container', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.hjzf_advantage_54_container .swiper-pagination',
                clickable: true
            },
            autoplay: true,
            speed: 800,
            breakpoints: {
                1200: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });
        $(window).resize(function () {
            if ($(window).width() > 1200) {
                if ($('.hjzf_advantage_54_container li').length < 4) {
                    $('.hjzf_advantage_54_container .swiper-pagination').hide();
                    $('.hjzf_advantage_54_container .swiper-button-white').hide();
                }
            }
        });
    });
});