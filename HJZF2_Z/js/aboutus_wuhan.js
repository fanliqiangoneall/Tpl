require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.HJZF2_Z__aboutus--right__swiper',{
        speed:800,
        mousewheel: false,
        navigation: {
            nextEl: '.HJZF2_Z__aboutus--next',
            prevEl: '.HJZF2_Z__aboutus--prev',
        },
        loop:true,
    });
});
$('.new_hjzf_aboutus #adv_video1').on('click', function(){
    layer.open({
        type: 2,
        title: ['video', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true,
        maxmin: true,
        content: $('.new_hjzf_aboutus #adv_video1').attr("data-video")
    });
});