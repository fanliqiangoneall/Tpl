require(['swiper','jquery'],function(Swiper,$){
    if($("#HJ02-banner1").length>0){
        var swiper_bannerhj02 = new Swiper('#HJ02-banner1',{

            loop:true,
            autoplay: {
                delay: 4000//1秒切换一次
            },
            speed:1500,
            pagination: {
                el: '.hj02-banner1-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.new_hjzf_banner2 .hj02-banner1-next',
                prevEl: '.new_hjzf_banner2 .hj02-banner1-prev',
            },
            effect : (effect? effect:"slide"),
        });
        if(typeof guan!="undefined" && guan!= ""){
            swiper_bannerhj02.autoplay.stop();
        };
        if(typeof speed!="undefined" && speed!= ""){
            swiper_bannerhj02.params.autoplay.delay= speed*1000;
        }
    }
    $("#banner2_1491.new_hjzf_banner2 .HJ02-banner1-box_other ul li").each(function(){
        var src = $(this).find("img").attr("src");
        var dataSrc = $(this).find("img").attr("data-src");
        $(this).hover(function(){
            $(this).find("img").attr("src",dataSrc);
        },function(){
            $(this).find("img").attr("src",src);
        })
    })
});