require(['swiper','jquery'],function(Swiper,$){
    if($('.new_hjzf_aboutus3_pic').length>0){
        var swiper = new Swiper('.new_hjzf_aboutus3_pic',{
            speed:800,
            mousewheel: false,
            autoheight:true,
            pagination : {
                clickable: true,
                el:'.new_hjzf_aboutus3_pagination',
            },
            autoplay:true,
            loop:true,
            on:{
                resize:function(){
                    swiper.update();
                }
            }
        });
        /*如果只有一个slide就销毁swiper*/
        if(swiper.slides.length<=3){
            swiper.destroy();
        } else if($(".new_hjzf_aboutus3_pic li").length>0 && $(".new_hjzf_aboutus3_pic li a")[0].hasAttribute("data-video")){
            swiper.autoplay.stop();
           /* swiper.params.loop=false;*/
            swiper.update();
        }
    };
});
/* $('.new_hjzf_aboutus3_pic #adv_video1').on('click', function(){
    layer.open({
        type: 2,
        title: ['video', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true,
        maxmin: true,
        content: $('.new_hjzf_aboutus3_pic #adv_video1').attr("data-video")
    });
}); */
$("a[data-video]").click(function(){

    layer.open({
        type: 2,
        title: ['video', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true,
        maxmin: true,
        content: $(this).attr("data-video")
    });
})