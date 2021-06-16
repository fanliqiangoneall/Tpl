require(['jquery','swiper'],function($,Swiper){
    $(document).ready(function(){
        var length= $(".hjzf_produtCategory__item").length;
        var one_height = $(".hjzf_produtCategory__item").height();

        $(".hjzf_produtCategory__item").each(function(){
            if( $(this).index() >= (length-4) ) {
                $(this).find('.hjzf_produtCategory__itemBox').css({"top":"initial","bottom":"0"})
            }
        });
        function pudown(){
            $(".hjzf_produtCategory__item").hover(function(){
                $(this).addClass("active").siblings("div").removeClass("active");
                $(".hjzf_produtCategory__item.active .hjzf_produtCategory__itemBox").stop().css("background","rgba(0,0,0,1)").animate({"height":((one_height * 2 + 30)+"px")});
                $(this).siblings("div").find(".hjzf_produtCategory__itemBox").stop().css({"background":"#fff","height":one_height});
            },function(){
                $(this).removeClass("active").find(".hjzf_produtCategory__itemBox").stop().css({"height":"auto","background":"#fff"});
            });
        };
        pudown();
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
            pudown();
        }, false);



    });

});

