require(['jquery', 'swiper'], function ($, Swiper) {
    var hjzf_advantage_57_container = new Swiper('.HJZF2_Z_advantage_57_wrapper', {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.advantage_57-next',
            prevEl: '.advantage_57-prev',
        },
        pagination: {
            el: '.hjzf_advantage_57_container_pagination',
            clickable: true
        },
        // autoplay: true,
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
    $(function () {
        $('.HJZF2_Z_advantage_57_wrapper .swiper-slide em').each(function (i) {
            $(this).text('0' + (i+1));
        });
    });

});