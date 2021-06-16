require(['swiper', 'jquery'], function (Swiper, $) {
    $('.hjzf_service_35_wrapper_pc li i').each(function (i) {
        i++;
        if (i < 10) {
            $(this).text('0' + i);
        } else {
            $(this).text(i);
        }
    });
    $('.hjzf_service_35_wrapper_mb li i').each(function (i) {
        i++;
        if (i < 10) {
            $(this).text('0' + i);
        } else {
            $(this).text(i);
        }
    });
    var swiper = new Swiper('.hjzf_service_35_wrapper_mb', {
        pagination: {
            el: '.hjzf_service_35_pagination',
            clickable: true
        },
        slidesPerView: 3,
        slidesPerGroup: 3,
    });
})