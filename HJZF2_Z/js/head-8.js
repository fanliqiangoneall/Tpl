require(['jquery', 'swiper'], function ($, Swiper) {

    $(function () {
        var color = "#333";
        var url = window.location.href;
        url = url.toLowerCase();
        if (webid == '1767') {
            $('.seach_click').click(function () {
                $('.head_8_search').addClass('active');
                $('.HJZF2__head-8').addClass('formon');
                $('.head_8_search .closed').click(function () {
                    $('.head_8_search').removeClass('active');
                    $('.HJZF2__head-8').removeClass('formon');
                });
            });
        } else {
            $('.seach_click').click(function () {
                $('.pc_search').toggleClass('active');
            });
            daohang_scroll();
        };

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





    // 手机端特效
    /*移动端导航栏*/
    $(".dt-mobile-menu-icon").click(function () {
        $(".mobile-sticky-header-overlay").toggleClass("active");
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
    //阴影层点击
    $(".mobile-sticky-header-overlay").click(function (event) {
        $(".mobile-sticky-header-overlay").removeClass("active");
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


    function daohang_scroll() {
        var offsetTop_head = $(".HJZF2__head-8").height();
        var offsetTop_headmobile = $(".HJZF2__head-8_mobile").height();
        $(window).scroll(function () {
            if ($(window).width() > 992) {
                if ($(document).scrollTop() > offsetTop_head) {
                    $(".HJZF2__header_scroll").css({
                        'position': 'fixed'
                    }).addClass("active");
                } else {
                    $(".HJZF2__header_scroll").css({
                        'position': 'absolute'
                    }).removeClass("active");
                }
            };
            if ($(document).scrollTop() > offsetTop_headmobile) {
                $(".HJZF2__head-8_mobile").css({
                    "position": "fixed",
                    "left": "0px",
                    "top": "0",
                    "width": "100%",
                    "z-index": "99",
                }).addClass("active");
            } else {
                $(".HJZF2__head-8_mobile").css({
                    "position": "relative",
                    "left": "0",
                    "top": "0",
                    "width": "100%",
                    "boxShadow": "none"
                }).removeClass("active");
            }
    
        });
    }
   


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
    };



});