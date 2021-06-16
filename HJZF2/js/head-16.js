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
    $(function(){
        if (typeof lan_str != "undefined" && lan_str != '') {
            var ul = document.getElementById("lang_ul");
            var lang_ul_mobile = document.getElementById("lang_ul_mobile");
            var _url = window.location.href;
            _url = _url.toLowerCase();
            var arry = [];
            var arry_two = [];
            arry = lan_str.split('<br>');

            for (i = 0; i < arry.length; i++) {
                var country_src = arry[i].substring(arry[i].indexOf("：") + 1, arry[i].length);
                var country_name = arry[i].substring(0, arry[i].indexOf("："));
                var li = document.createElement("li");
                li.className += country_name;

                if (_url.indexOf(country_src.toLowerCase().trim()) != -1) {
                    li.className += " count_hide";
                } else {
                    li.classList.remove("count_hide");
                }
                li.setAttribute('data-count', country_name);
                li.innerHTML = "<a href=" + country_src + " target='_blank'>" + country_name + "</a>";
                if ($(".language_ul").length > 0) {
                    $(".language_ul").append(li);
                }
            }
        } else {
            $(".language_ul").hide();
            return false;
        }
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
			"right":"0px",
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


