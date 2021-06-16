require(['swiper', 'jquery'], function (Swiper, $) {

    var len = $('.hjzf2_other_66_container').length;
    if (len) {
        var hjzf2_other_66_container = new Swiper('.hjzf2_other_66_container', {
            speed: 800,
            autoplay: true,
            pagination: {
                el: '.hjzf2_other_66_pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    var text;
                    if ($('.hjzf2_other_66_pa span').length < 1) {
                        text = '';
                    } else {
                        text = $('.hjzf2_other_66_pa span')[index].innerHTML;
                    }
                    return '<div class="hjzf2_other_66_pa_gin ' + className + '"><span> ' + text + '</span></div>';
                }
            },
            navigation: {
                nextEl: '.hjzf2_other_66_next',
                prevEl: '.hjzf2_other_66_prev',
            },
            breakpoints: {
                768: {
                    autoHeight: true
                }
            }
        });
    }
    if($(window).width() < 768) {
        $('.hjzf2_other_66_next').show();
        $('.hjzf2_other_66_prev').show();
    }

})