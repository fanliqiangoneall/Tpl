require(['jquery','swiper','layer'],function($,Swiper,layer){
    if($(window).width()<992 && $(".advantage_9_swiper").length>0){
        var advantage_9_swiper = new Swiper('.advantage_9_swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
			autoplay:true,
            navigation: {
                nextEl: '.advantage_9_next',
                prevEl: '.advantage_9_prev',
              },
            on:{
                resize:function(){
                    console.log(advantage_9_swiper);
                    advantage_9_swiper.update(true);
                }
            }
        });
    }else{
        var advantage_9_swiper = new Swiper('.advantage_9_swiper', {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
			autoplay:true,
            navigation: {
                nextEl: '.advantage_9_next',
                prevEl: '.advantage_9_prev',
              },
            on:{
                resize:function(){
                    advantage_9_swiper.update(true);
                }
            }
        });
    }
    if($(".advantage_9_swiper").length>0 && advantage_9_swiper.slides.length<6){
        $(".advantage_9_next").hide();
        $(".advantage_9_prev").hide();
    };


    var video = $("#video").attr("data-src");
    if(video){
        $("#video img").click(function(){
            console.log(0);
            layer.open({
                type: 2,
                title: [' ', 'font-size:18px;'],
                area: ['100%', '100%'],
                shadeClose: true, //点击遮罩关闭
                content: video
            });
        });
    };
    
});
