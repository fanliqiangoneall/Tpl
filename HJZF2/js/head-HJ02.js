require(['jquery'],function($){
    $(".head_seach").on('click',function(){
        if($(this).is(".head_seachshow")){
            $(this).removeClass("head_seachshow");
        }else{
            $(this).addClass("head_seachshow");
        }
        if($("#ins-header-search").width()==0){
            $("#ins-header-search").css({"width":'250px',"opacity":'1',"marginRight":'20px'})
        }else{
            $("#ins-header-search").css({"width":'0',"opacity":'0',"marginRight":'0'})
        }
        if ($(".head_search_icon").css("opacity") == "1") {
            $(".head_search_icon").css("opacity", "0");

        } else {
            $(".head_search_icon").css("opacity", "1")
        }
        if ($(".head_search_close").css("opacity") == "0") {
            $(".head_search_close").css("opacity", "1");

        } else {
            $(".head_search_close").css("opacity", "0")
        }
    });
    jQuery(function () {
        $(".new_hjzf_head-HJ02 .hj02-pro-menu").parent().addClass("nav_more");
        var color = "#333";
        var url = window.location.href;

        url = url.toLowerCase();
        jQuery(".HJ02_head_menu ul li a").each(function () {
            var href = jQuery(this).attr("href");
            href = href.toLowerCase();
            //当前url

            if (href == url) {
                jQuery(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on").parent().parent().addClass("menu_on");

                return false;

            }else{
                if (url.indexOf("othercate") != -1) {
                    if (href.indexOf("othercate") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("aboutus") != -1) {
                    if (href.indexOf("aboutus") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }

                if (url.indexOf("all_ishot") != -1) {
                    if (href.indexOf("product") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("all_isnew") != -1) {
                    if (href.indexOf("product") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("news") != -1) {
                    if (href.indexOf("news") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }

                if (url.indexOf("new_detail") != -1) {
                    if (href.indexOf("news") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("case_detail") != -1) {
                    if (href.indexOf("cases") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("case_category") != -1) {
                    if (href.indexOf("cases") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("product") != -1) {
                    if (href.indexOf("product") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
            }
        });
    });
    $(function(){
		if($(".HJ02_head_menu>div>ul>li").length==9){
            $(".HJ02_head_menu>div>ul>li").css('width','11.11%');
		}else if($(".HJ02_head_menu>div>ul>li").length==7){
            $(".HJ02_head_menu>div>ul>li").css('width','14.28%');
        }else if($(".HJ02_head_menu>div>ul>li").length==6){
            $(".HJ02_head_menu>div>ul>li").css('width','16.66%');
        }else if($(".HJ02_head_menu>div>ul>li").length==5){
            $(".HJ02_head_menu>div>ul>li").css('width','20%');
		
        }else{
            $(".HJ02_head_menu>div>ul>li").css('width','12.5%');
        };
    })
});
