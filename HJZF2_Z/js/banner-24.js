require(['swiper', 'jquery'], function (Swiper, $) {
    /* PC端 */
    var banner_swiper = new Swiper('.hjzf_banner_24_right_container', {
        speed: 1500,
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: '.hjzf_banner_24_right_next',
            prevEl: '.hjzf_banner_24_right_prev'
        },
        autoplay: true
    });
    /* 移动端 */
    var wap_ban = new Swiper('.banner_24_container', {
        speed: 1500,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: true
    });
    
});