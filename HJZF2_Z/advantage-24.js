;
require(['jquery', 'swiper', 'layer'], function ($,swiper , layer) {
    var swiper_adv2 = new swiper('.hjzf_advantage_24_wrapper', {
        pagination: {
            el: '.hjzf_advantage_24_wrapper .swiper-pagination',
            clickable: true
        },
        autoplay: true,
        navigation: {
            nextEl: '.hjzf_advantage_24_wrapper .swiper-button-next',
            prevEl: '.hjzf_advantage_24_wrapper .swiper-button-prev',
        },
    });
    $('.hjzf_advantage_24_shipin a').on('click', function (e) {
        e.preventDefault();
        layer.open({
            type: 2,
            title: false,
            area: ['80%', '70%'],
            shade: 0.8,
            closeBtn: 1,
            shadeClose: true,
            content: hjzf_advantage_24_video
        });
        return false;
    })
    
})