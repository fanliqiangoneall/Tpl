require(['jquery', 'swiper'], function ($, swiper) {
        window.onload = function () {
            var domHeight = $('.hjzf_advantage_25_img img').eq(0).height();
            console.log(domHeight);
            if($(window).width() < 992 && $(window).width() >= 640) {
                domHeight *= 1.8;
            }else if($(window).width() < 640){
                domHeight *= 2;
            }
            if(domHeight < 200) {
                domHeight = 200;
            }

            $('.hjzf_advantage_25_wrapper').height(domHeight);
            var hjzf_advantage_25_wrapper = new swiper('.hjzf_advantage_25_wrapper', {
                direction: 'vertical',
                slidesPerView: 1,
                pagination: {
                    el: '.hjzf_advantage_25_wrapper .swiper-pagination',
                    clickable: true
                },
                speed: 800,
                height: domHeight,
                navigation: {
                    nextEl: '.hjzf_advantage_25_wrapper .swiper-button-next',
                    prevEl: '.hjzf_advantage_25_wrapper .swiper-button-prev',
                },
            });
        }

});