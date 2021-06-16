require(['jquery','layer'], function ($,layer){
$('#other_88__video1').on('click', function(){
    layer.open({
        type: 2,
        title: ['video', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true,
        maxmin: true,
        content: $('#other_88__video1').attr("data-video")
    });
});
});