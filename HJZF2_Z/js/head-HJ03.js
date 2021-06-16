require(['jquery', 'layer'], function ($, layer) {
    /*移动端导航栏*/
    $(".dt-mobile-menu-icon").click(function () {
        $(".mobile-sticky-header-overlay").toggleClass("active");
    });
    //阴影层点击
    $(".mobile-sticky-header-overlay").click(function (event) {
        $(".mobile-sticky-header-overlay").removeClass("active");
        event.stopPropagation();
    });
    //手机侧边导航层点击阻止冒泡
    $("#mobile-menu-Sidebar").click(function (event) {
        event.stopPropagation();
    });
    $(".mobile-menu-Sidebar-close").click(function () {
        $(".mobile-sticky-header-overlay").toggleClass("active");
    });
    $(".next-level-button").click(function () {
        $(this).toggleClass("active");
        $(this).next(".hj_navbar_nav_dropdown-menu").slideToggle();
    });
    /*移动端搜索框*/
    $(".mobile_searchbutton").click(function(){
        $(".mobile_search_content ").toggleClass("active");
        $(".mobile-sticky-header-overlay").removeClass("active");
    });
    $(".mobile_search_close").click(function(){
        $(".mobile_search_content ").toggleClass("active");
    });
    /*移动端语言版本切换*/
    $(".mobile_languagebutton").click(function(){
        $(this).toggleClass("active");
        $(".mobile_languagelist").toggleClass("active");
    });



    var offsetTop_mobile_head = $(".mobil_HJZF2_Z__header-3").height();
    var offsetTop_head = $(".HJZF2_Z__header-3").height();
    var original_logo = $(".HJZF2_Z__header-3__branding img").attr("src");
    var new_logo = $(".HJZF2_Z__header-3__branding a").attr("data-scroll");
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(document).scrollTop() > offsetTop_mobile_head) {
                $(".mobil_HJZF2_Z__header-3").css({
                    "position": "fixed",
                    "left": "0px",
                    "top": "0",
                    "width": "100%",
                    "z-index": "9999",
                    "boxShadow": '0 0 5px #e3e3e3',
                    "background": '#fff'
                }).removeClass("sticky-mobile-off").addClass("sticky-mobile-on");

            } else {
                $(".mobil_HJZF2_Z__header-3").css({
                    "position": "relative",
                    "left": "0",
                    "top": "0",
                    "width": "100%",
                    "boxShadow": "none",
                    "background": 'transparent'
                }).removeClass("sticky-mobile-on").addClass("sticky-mobile-off");

            }
        } else {
            if ($(document).scrollTop() > offsetTop_head) {
                $(".HJZF2_Z__header-3").css({
                    "position": "fixed",
                    "left": "0px",
                    "top": "0",
                    "z-index": "9999",
                    "boxShadow": '0 0 5px #e3e3e3',
                    "background": '#fff'
                }).removeClass("sticky-mobile-off").addClass("sticky-mobile-on");
                $(".HJZF2_Z__header-3__branding img").attr("src", new_logo);
            } else {
                $(".HJZF2_Z__header-3").css({
                    "position": "relative",
                    "left": "0",
                    "top": "0",
                    "boxShadow": "none",
                    "background": 'transparent'
                }).removeClass("sticky-mobile-on").addClass("sticky-mobile-off");
                $(".HJZF2_Z__header-3__branding img").attr("src", original_logo);
            }
        }
    });
    $(".head_search a").toggle(function () {
        $(this).addClass("active");
        $(this).next(".head_search_wrap").addClass("active");
    }, function () {
        $(this).removeClass("active");
        $(this).next(".head_search_wrap").removeClass("active");
    });
    $(function(){
        if(typeof lan_str!="undefined"){
            var ul = document.getElementById("lang_ul");
            var lang_ul_mobile = document.getElementById("lang_ul_mobile");
            var _url = window.location.href;
            _url = _url.toLowerCase();
            var arry = [];
            var arry_two = [];
            arry = lan_str.split('<br>');
            for (i=0;i<arry.length ;i++){
                var country_src = arry[i].substring(arry[i].indexOf("：")+1,arry[i].length);
                var country_name = arry[i].substring(0,arry[i].indexOf("："));
                var li = document.createElement("li");
                li.className += country_name;

                if (_url.indexOf(country_src.toLowerCase().trim()) != -1) {
                    li.className += " count_hide";
                }else{
                    li.classList.remove("count_hide");
                }
                li.setAttribute('data-count',country_name);
                li.innerHTML="<a href="+country_src+">"+country_name+"</a>";
                $(".language_ul").append(li);

            }
        }else{
            return false;
        }
    });

    /*移动端langauge*/
    $(".head_language_mobile>div").click(function () {
        if($(this).is(".active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
        $(this).next("#lang_ul_mobile").slideToggle();
    });


    jQuery(function () {
        $(".hj02-pro-menu").parent().addClass("nav_more");
        var color = "#333";
        var list_on = $(".yijion").children().children("h3").text();
        var url = window.location.href;
        url = url.toLowerCase();
        jQuery(".HJZF2_Z__header-3__wrap ul li a").each(function () {
            var href = jQuery(this).attr("href");
            href = href.toLowerCase();
            //当前url
            if (href == url) {
                jQuery(this).parent("li").addClass("menu_on").siblings("li").removeClass("menu_on").parent().parent().addClass("menu_on");
                return false;
            } else {
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
                } else if (url.indexOf("product") != -1) {
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
});
