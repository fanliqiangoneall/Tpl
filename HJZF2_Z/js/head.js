require(['jquery'], function ($) {
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
    /*移动端搜索框*/
    $(".mobile_searchbutton").click(function () {
        $(".mobile_search_content ").toggleClass("active");
        $(".mobile-sticky-header-overlay").removeClass("active");
    });
    $(".mobile_search_close").click(function () {
        $(".mobile_search_content ").toggleClass("active");
    });
    /*移动端语言版本切换*/
    $(".mobile_languagebutton").click(function () {
        $(this).toggleClass("active");
        $(".mobile_languagelist").toggleClass("active");
    });
    $(".mobile-menu-Sidebar-close").click(function () {
        $(".mobile-sticky-header-overlay").removeClass("active");
    });
    $(".next-level-button").click(function () {
        $(this).toggleClass("active");
        $(this).next(".hj_navbar_nav_dropdown-menu").slideToggle();
    });
    var offsetTop = $(".head__bar__navigation").offset().top;
    var offsetTop_mobile = $(".head__bar__box--mobile").offset().top;
    $(window).scroll(function () {
        var win_width = $(window).width();
        if ($(document).scrollTop() > offsetTop) {
            $(".head__bar__navigation").css({
                "position": "fixed",
                "left": "0px",
                "top": "0",
                "width": "100%",
                "z-index": "9999",
                "boxShadow": '0 0 5px #e3e3e3'
            });
        } else {
            $(".head__bar__navigation").css({
                "position": "relative",
                "left": "0",
                "top": "0",
                "width": "100%",
                "boxShadow": "none"
            });
        }
        if ($(document).scrollTop() > offsetTop_mobile) {
            $(".head__bar__box--mobile").css({
                "position": "fixed",
                "left": "0px",
                "top": "0",
                "width": "100%",
                "z-index": "9999",
                "boxShadow": '0 0 5px #e3e3e3'
            })
        } else {
            $(".head__bar__box--mobile").css({
                "position": "relative",
                "left": "0",
                "top": "0",
                "width": "100%",
                "boxShadow": "none"
            })
        }
    });
    /*pc seacrch*/
    $(".head_search a").click(function(){
        $(this).toggleClass("active");
        $(this).next(".head_search_wrap").toggleClass("active");
    });
    $(".hj02-pro-menu").prev().parent().addClass("nav-more");
    /*导航加图标*/
    $(function () {
        if (typeof icon_str != "undefined") {
            var arry = [];
            arry = icon_str.split('<br>');
            for (i = 0; i < arry.length; i++) {
                var icon_class = arry[i];
            }
            $(".hj_navbar_nav>li i").each(function (index) {
                $(this).addClass(arry[index]);
            });
            $(".hj_navbar_nav--mobile>li i").each(function (index) {
                $(this).addClass(arry[index]);
            });
        }
        ;
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


    $(function () {
        var color = "#333";
        var url = window.location.href;
        url = url.toLowerCase();
        $(".head_menu_navbar ul li a").each(function () {
            var href = $(this).attr("href");
            href = href.toLowerCase();
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
});