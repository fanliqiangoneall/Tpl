require(['swiper', 'jquery'], function (Swiper, $) {
    var hjzf_procate_16_box_list_container = new Swiper('.hjzf_procate_16_box_list_container', {
        autoplay: {
            delay: 3000
        },
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 5,
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        },
    });
    var dom = $('.hjzf_procate_16_wrapper_container').length;
    if (dom > 0) {
        new Swiper('.hjzf_procate_16_wrapper_container', {
            autoplay: {
                delay: 6000
            },
            speed: 1000,
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
                1365: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                }
            },
            pagination: {
                el: '.hjzf_procate_16_box_pagination',
                clickable: true
            },

            mousewheel: false
        });
    }
    var l = $('.hjzf_procate_16_box_pagination span');
    l.length > 1 ? l.show() : l.hide();
});