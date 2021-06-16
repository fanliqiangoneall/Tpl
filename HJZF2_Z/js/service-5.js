require(['jquery','swiper','layer'],function($,Swiper,layer){
    var service5_swiper = new Swiper('.HJZF2_z_service5-swiper', {
        pagination: {
            el: '.HJZF2_z_service5-page',
        },
        navigation: {
            nextEl: '.HJZF2_z_5service_next',
            prevEl: '.HJZF2_z_5service_prev',
        },
        lazy: {
            loadPrevNext: true,
        },
        resize: function(){
            service5_swiper.update(true)
        },
    });

    $('.HJZF2_z_service-leftvideo').on('click', function(){
        layer.open({
            type: 2,
            area: ['80%', '80%'],
            shadeClose: true,
            maxmin: true,
            content: $('.HJZF2_z_service-leftvideo').attr("data-href")
        });
    });
})

