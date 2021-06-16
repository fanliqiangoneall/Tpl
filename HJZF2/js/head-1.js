require(['jquery'],function($){
    $(".new_hjzf_head-1 .headerSearchContainer>i").click(function(){
        if($(".new_hjzf_head-1 .headerSearchContent").height()==0){
            $(".new_hjzf_head-1 .headerSearchContent").height(40).css({"borderColor":"#333","borderWidth":"1px","borderStyle":'solid'});
        }else{
            $(".new_hjzf_head-1 .headerSearchContent").height(0).css("border","none");
        }
    });
    if($(".new_hjzf_head-1 .headerContainer").length!=0){
        var navtop=$(".new_hjzf_head-1 .headerContainer").offset().top;
        $(document).scroll(function(){
            //获取滚动条滚动的高度
            var scroltop=$(document).scrollTop();
            if (scroltop > navtop){
                $(".new_hjzf_head-1 .headerContainer").css({
                    "position":"fixed",
                    "left":"0px",
                    "top":"0px",
                    "width":"100%",
                    "z-index":"96",

                });

            }else {
                $(".new_hjzf_head-1 .headerContainer").css({
                    "position":"relative",
                    "left":"0",

                });

            }
        })
    }
})