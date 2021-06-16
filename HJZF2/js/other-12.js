require(['swiper','jquery'],function(Swiper,$){


});

$('#HJZF2_other12video').on('click', function(){
    layer.open({
        type: 2,
        title: ['video', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true,
        maxmin: true,
        content: $('#HJZF2_other12video').attr("data-video")
    });
});