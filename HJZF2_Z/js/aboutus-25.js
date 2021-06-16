require(['jquery', 'swiper'], function ($, Swiper) {
    var HJZF2_Z_aboutus_25_container = new Swiper('.HJZF2_Z_aboutus_25_container', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoplay:true,
        pagination: {
            el: '.HJZF2_Z_aboutus_25_pagination',
            clickable: true
        },
        mousewheel: false
    });

    $('.HJZF2_Z_aboutus_25_video').click(function () {
        var src = $(this).attr('data-src');
        if(src.length > 0){
            layer.open({
                type: 2,
                title: false,
                area: ['80%', '70%'],
                shade: 0.8,
                closeBtn: 1,
                shadeClose: true,
                content: src
            });
        }
        
    })

})