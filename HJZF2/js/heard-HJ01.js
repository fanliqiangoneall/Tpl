require(['jquery'],function($){
    $("span.tools-btn-icon").on('click', function (e) {
        if ($(".search-close").css("opacity") == "0") {
            $(".search-close").css("opacity", "1");
            e.stopPropagation()
        } else {
            $(".search-close").css("opacity", "0")
        }
        if ($(".header-search-icon").css("opacity") == "1") {
            $(".header-search-icon").css("opacity", "0");
            e.stopPropagation()
        } else {
            $(".header-search-icon").css("opacity", "1")
        }
        if ($(".ins-header-search").css("opacity") == "0" && $(".ins-header-search").css("visibility") == "hidden") {
            $(".ins-header-search").css({"opacity": "1", "visibility": "visible", "top": "100%"});
            e.stopPropagation()
        } else {
            $(".ins-header-search").css({"opacity": "0", "visibility": "hidden", "top": "calc(100% + 30px)"})
        }
        $(document).bind('click', function (e) {
            var e = e || window.event;
            var elem = e.target || e.srcElement;
            while (elem) {
                if (elem.id && elem.id == 'ins-header-search') {
                    return
                }
                if (elem.id && elem.id == 'tools-btn-icon') {
                    return
                }
                elem = elem.parentNode
            }
            $('.ins-header-search').stop().css({"opacity": "0", "visibility": "hidden", "top": "calc(100% + 30px)"});
            $(".search-close").css("opacity", "0");
            $(".header-search-icon").css("opacity", "1")
        })
    });
    $(function(){
        $(".hj02-pro-menu").parent().addClass("nav-more");
        var color = "#333";
        var url = window.location.href;

        url = url.toLowerCase();
        jQuery(".main-menu ul li a").each(function () {
            var href = jQuery(this).attr("href");
            href = href.toLowerCase();
            //��ǰurl

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
                if (url.indexOf("job") != -1) {
                    if (href.indexOf("job") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("download_category") != -1) {
                    if (href.indexOf("download") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
                if (url.indexOf("download_detail") != -1) {
                    if (href.indexOf("download") != -1) {
                        jQuery(this).parent("li").addClass("menu_on")
                    }
                }
            }
        });
    });

})