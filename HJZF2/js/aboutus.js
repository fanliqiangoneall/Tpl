require(['swiper','jquery'],function(Swiper,$){
    if($('.new_hjzf_aboutus_pic').length>0){
        var swiper = new Swiper('.new_hjzf_aboutus_pic',{
            speed:800,
            mousewheel: false,
            pagination : {
                clickable: true,
                el:'.new_hjzf_aboutus_pagination',
            },
            autoplay:true,
            loop:true,
        });
        //如果只有一个slide就销毁swiper
        if(swiper.slides.length<=3){
            swiper.destroy();
        }
    }
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