require(['jquery'],function($){
    jQuery(function () {
        $(".hj02-pro-menu").parent().addClass("nav_more");
        var color = "#333";
        var url = window.location.href;
        var list_on = $(".yijion").children().children("h3").text();
        url = url.toLowerCase();
        jQuery(".hj-navbar ul li a").each(function () {
            var href = jQuery(this).attr("href");
            href = href.toLowerCase();
            //当前url
            if (href == url) {
                jQuery(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on").parent().parent().addClass("menu_on");
                return false;
            }else{
                /*if (url.indexOf("othercate") != -1) {
                    if (href.indexOf("othercate") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }*/
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
                if (url.indexOf("new_category") != -1) {
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
                if ($(this).children().text() == list_on) {
                    $(this).parent().addClass("menu_on").siblings("li").removeClass("menu_on");
                    /*if (href.indexOf("product") != -1) {
                        jQuery(this).parent("li").addClass("menu_on");

                    }*/
                }else if(url.indexOf("product") != -1){
                    if ((href.indexOf("product") != -1) && (href.indexOf("category") == -1)) {
                     jQuery(this).parent("li").addClass("menu_on");

                     }
                }
                if (url.indexOf("cases") != -1) {
                    if (href.indexOf("cases") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("contactus") != -1) {
                    if (href.indexOf("contactus") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
            }
        });
    });

    /*$(document).ready(function(){


        $(".hj-navbar ul li a h2").each(function(){
            console.log($(this).text());
            if($(this).text() == list_on){
                $(this).parent().parent().addClass("menu_on").siblings("li").removeClass("menu_on");
                alert(222);
                return false;
            }
        })
    })*/

    var path = "";
$(function () {
    var nav = $(".side");
    var win = $(window);
    var sc = $(document);
    $(".HJ02-banner1-box_other ul div").show().addClass("fadeInDown");
    $(".page_Logo").addClass("fadeInRight");

    win.scroll(function () {
        if (sc.scrollTop() >= 550) {
            nav.fadeIn()
        } else {
            nav.fadeOut()
        }
    })
});
function goTop() {
    jQuery('html,body').animate({'scrollTop': 0}, 600)
};
jQuery(function () {
    jQuery('.weixing-show').hide();
    jQuery(".weixing-container").bind('mouseenter', function () {
        jQuery('.weixing-show').show()
    });
    jQuery(".weixing-container").bind('mouseleave', function () {
        jQuery('.weixing-show').hide()
    })
});
//获取nav距离顶部的距离
var navtop=$(".hj03_header").offset().top;

$(document).scroll(function(){
    //获取滚动条滚动的高度
    var scroltop=$(document).scrollTop();
    if (scroltop > navtop){
        $(".hj03_header").css({
            "position":"fixed",
            "left":"0px",
            "top":"-90px",
            "width":"100%",
            "z-index":"99"
        })
    }else {
        $(".hj03_header").css({
            "position":"relative",
            "left":"0",
            "top":"0",
            "width":"100%"
        })
    }
});
});


