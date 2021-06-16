$('.hj01_adv_left #adv_video').on('click', function(){
    layer.open({
        type: 2,
        title: ['video', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true,
        maxmin: true,
        content: $('.hj01_adv_left #adv_video').attr("data-video")
    });
});