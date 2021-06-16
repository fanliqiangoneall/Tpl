require(['jquery'],function($){
    $(".new_hjzf_head-HJ04 .headerSearchContainer>i").click(function(){
        if($(".new_hjzf_head-HJ04 .headerSearchContent").height()==0){
            $(".new_hjzf_head-HJ04 .headerSearchContent").height(40).css({"borderColor":"#333","borderWidth":"1px","borderStyle":'solid'});
        }else{
            $(".new_hjzf_head-HJ04 .headerSearchContent").height(0).css("border","none");
        }
    });
    if($(".new_hjzf_head-HJ04 .headerContainer").length!=0){
        var navtop=$(".new_hjzf_head-HJ04 .headerContainer").offset().top;
        $(document).scroll(function(){
            //获取滚动条滚动的高度
            var scroltop=$(document).scrollTop();
            if (scroltop > navtop){
                $(".new_hjzf_head-HJ04 .headerContainer").css({
                    "position":"fixed",
                    "left":"0px",
                    "top":"0px",
                    "width":"100%",
                    "z-index":"96",

                });

            }else {
                $(".new_hjzf_head-HJ04 .headerContainer").css({
                    "position":"relative",
                    "left":"0",

                });

            }
        })
    };
    $(".head-HJ04__language p").click(function(){
        $("#HJ04-lang__menu").slideToggle();
    });
    $(function () {
        var color = "#333";
        var url = window.location.href;
        url = url.toLowerCase();
        $(".new_hjzf_head-HJ04 ul li a").each(function () {

            var href = $(this).attr("href");
            href = href.toLowerCase();
            //console.log(href +'----'+url);
            //当前url
            if (href == url) {
                $(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on");
                return false;

            } else {
                if (url.indexOf("othercate") != -1) {
                    if (href.indexOf("othercate") != -1) {
                        $(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("aboutus") != -1) {
                    if (href.indexOf("aboutus") != -1) {
                        $(this).parent("li").addClass("menu_on")
                    }
                }

                if ((url.indexOf("all_ishot") != -1) || (url.indexOf("all_isnew") != -1) || (url.indexOf("product_category") != -1) || (url.indexOf("search") != -1)) {
                    if (href.indexOf("product") != -1) {
                        $(this).parent("li").addClass("menu_on")
                    }
                }

                if ((url.indexOf("new_category") != -1) || (url.indexOf("new_detail") != -1)) {
                    if (href.indexOf("news") != -1) {
                        $(this).parent("li").addClass("menu_on")
                    }
                }

                if ((url.indexOf("case_detail") != -1) || (url.indexOf("case_category") != -1)) {
                    if (href.indexOf("cases") != -1) {
                        $(this).parent("li").addClass("menu_on")
                    }
                }
                if ((url.indexOf("download_category") != -1) || (url.indexOf("download_detail") != -1)) {
                    if (href.indexOf("download") != -1) {
                        $(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("job") != -1) {
                    if (href.indexOf("jobs") != -1) {
                        $(this).parent("li").addClass("menu_on")
                    }
                }
            }
        });
    });
})