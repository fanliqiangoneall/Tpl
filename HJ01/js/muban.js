$(document).ready(function () {

    jQuery('ul#menu-main-navigation').superfish();
    $(".menu_product").parent('li').css("position", 'static');
    var menuTop = $(".head_menu").offset().top;
    $(document).scroll(function () {
        var scroltop = $(document).scrollTop();
        if (scroltop > menuTop) {
            $("#header").css({
                "position": "fixed",
                "left": "0px",
                "top": "-45px",
                "width": "100%",
                "z-index": "108",
                "boxShadow": "0 2px 1px #eee"
            })
        } else {
            $("#header").css({
                "position": "fixed",
                "left": "0",
                "top": "0",
                "width": "100%",
                "boxShadow": "0 0 0 #c3c3c3"
            })
        }
    });
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
    })
})
function setREVStartSize(e) {
    try {
        e.c = jQuery(e.c);
        var i = jQuery(window).width(), t = 9999, r = 0, n = 0, l = 0, f = 0, s = 0, h = 0;
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
                f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
            }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
            var u = (e.c.width(), jQuery(window).height());
            if (void 0 != e.fullScreenOffsetContainer) {
                var c = e.fullScreenOffsetContainer.split(",");
                if (c)jQuery.each(c, function (e, i) {
                    u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
            }
            f = u
        } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({height: f})
    } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
    }
};
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss
} else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0])
}
if (setREVStartSize !== undefined)setREVStartSize({
    c: '#rev_slider_1_1',
    responsiveLevels: [1240, 1024, 778, 480],
    gridwidth: [1240, 1024, 778, 480],
    gridheight: [670, 670, 670, 670],
    sliderLayout: 'fullwidth'
});
var revapi1, tpj;
(function () {
    if (!/loaded|interactive|complete/.test(document.readyState))document.addEventListener("DOMContentLoaded", onLoad); else onLoad();
    function onLoad() {
        if (tpj === undefined) {
            tpj = jQuery;
            if ("off" == "on")tpj.noConflict()
        }
        if (tpj("#rev_slider_1_1").revolution == undefined) {
            if($("#rev_slider_1_1").length>0){
                revslider_showDoubleJqueryError("#rev_slider_1_1")
            }

        } else {
            revapi1 = tpj("#rev_slider_1_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "./Tpl/HJ01/js/",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    arrows: {
                        style: "custom",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 767,
                        hide_onleave: false,
                        tmp: '',
                        left: {h_align: "left", v_align: "center", h_offset: 20, v_offset: 0},
                        right: {h_align: "right", v_align: "center", h_offset: 20, v_offset: 0}
                    }
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [580, 580, 580, 580],
                lazyType: "none",
                shadow: 0,
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: false,}
            })
        }
    }
}());
$(document).ready(function () {
    $("#ban_dowmitem9").show().addClass("fadeInUp");
    $("#ban_dowmitem13").show().addClass("fadeInUp");
    $("#ban_dowmitem17").show().addClass("fadeInUp")
})
if ($("#hj01_advlist").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('hj01_advlist'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        },
        offset: '80%'
    })
}
if ($("#hj01_adv_right_title").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('hj01_adv_right_title'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '80%'
    })
}
if ($("#ab_text").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('ab_text'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        }, offset: '80%'
    })
}
if ($("#ab_title").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('ab_title'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        }, offset: '85%'
    })
}
if ($("#advantage3_title").length > 0) {
    var waypoint_advleft = new Waypoint({
        element: document.getElementById('advantage3_title'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        }, offset: '85%'
    })
}
$('.hj01_adv_left img').imagesLoaded(function () {
});
if ($(".hj01_advlist li").length == 4) {
    $(".hj01_advlist li").css({"margin-bottom": "30px"})
} else if ($(".hj01_advlist li").length == 6) {
    $(".hj01_advlist li").css({"margin-bottom": "20px"})
} else if ($(".hj01_advlist li").length == 8) {
    $(".hj01_advlist li").css({"margin-bottom": "15px"})
}
$('.count_shuzi').countUp();
$(function () {
    $('#index_prolist').slick({infinite: true, slidesToShow: 3, slidesToScroll: 1, lazyLoad: 'ondemand',});
    if ($(".index_proitem").length <= 3) {
        $("#index_prolist .slick-prev").hide();
        $("#index_prolist .slick-next").hide()
    }
});
if ($("#index_product_title_left1").length > 0) {
    var waypoint_indexprotitle = new Waypoint({
        element: document.getElementById('index_product_title_left1'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInLeft')
            } else {
                $(this.element).removeClass('fadeInLeft')
            }
        },
        offset: '90%'
    })
}
if ($("#index_product_title_right1").length > 0) {
    var waypoint_indexprotitle = new Waypoint({
        element: document.getElementById('index_product_title_right1'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '90%'
    })
}
if ($("#inquiry_box1").length > 0) {
    var inquiry_box1 = new Waypoint({
        element: document.getElementById('inquiry_box1'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        }, offset: '85%'
    })
}
if ($("#inquiry_box2").length > 0) {
    var inquiry_box2 = new Waypoint({
        element: document.getElementById('inquiry_box2'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        }, offset: '85%'
    })
}
if ($("#inquiry_box3").length > 0) {
    var inquiry_box3 = new Waypoint({
        element: document.getElementById('inquiry_box3'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        }, offset: '85%'
    })
}
if ($("#inquiry_box4").length > 0) {
    var inquiry_box4 = new Waypoint({
        element: document.getElementById('inquiry_box4'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        }, offset: '85%'
    })
}
if ($("#inquiry_box5").length > 0) {
    var inquiry_box5 = new Waypoint({
        element: document.getElementById('inquiry_box5'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        }, offset: '90%'
    })
}
if ($("#inquiry_box6").length > 0) {
    var inquiry_box6 = new Waypoint({
        element: document.getElementById('inquiry_box6'), handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        }, offset: '90%'
    })
}

if ($("#hj01-evaluate_right_content").length > 0) {
    var evaluate_right_content = new Waypoint({
        element: document.getElementById('hj01-evaluate_right_content'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '90%'
    })
}
$(function () {
        $('.evaluate_list').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 2000,
        })
});
$(function () {
    $('#index_caselist').slick({infinite: true, slidesToShow: 3, slidesToScroll: 1, lazyLoad: 'ondemand',});
    if ($(".index_caseitem").length <= 3) {
        $("#index_caselist .slick-prev").hide();
        $("#index_caselist .slick-next").hide()
    }
});
if ($("#index_product_title_left2").length > 0) {
    var case_left = new Waypoint({
        element: document.getElementById('index_product_title_left2'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInLeft')
            } else {
                $(this.element).removeClass('fadeInLeft')
            }
        },
        offset: '90%'
    })
}
if ($("#index_product_title_right2").length > 0) {
    var case_right = new Waypoint({
        element: document.getElementById('index_product_title_right2'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '90%'
    })
}
$(function () {
    $('#index_newslist').slick({infinite: true, slidesToShow: 3, slidesToScroll: 3, lazyLoad: 'ondemand',dots: true,});
    if ($(".index_newsitem").length <= 3) {
        $("#index_newslist .slick-prev").hide();
        $("#index_newslist .slick-next").hide()
        $("#index_newslist .slick-dots").hide()
    }
});
if ($("#index_product_title_left3").length > 0) {
    var news_left = new Waypoint({
        element: document.getElementById('index_product_title_left3'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInLeft')
            } else {
                $(this.element).removeClass('fadeInLeft')
            }
        },
        offset: '90%'
    })
}
if ($("#index_product_title_right3").length > 0) {
    var news_right = new Waypoint({
        element: document.getElementById('index_product_title_right3'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInRight')
            } else {
                $(this.element).removeClass('fadeInRight')
            }
        },
        offset: '90%'
    })
}
if ($(".hj01_bottom_contact li").length == 3) {
    $(".hj01_bottom_contact li").css("width", "33%")
}
if ($("#hj01_contact_item1").length > 0) {
    var hj01_contact_item1 = new Waypoint({
        element: document.getElementById('hj01_contact_item1'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        },
        offset: '90%'
    })
}
if ($("#hj01_contact_item2").length > 0) {
    var hj01_contact_item2 = new Waypoint({
        element: document.getElementById('hj01_contact_item2'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        },
        offset: '90%'
    })
}
if ($("#hj01_contact_item3").length > 0) {
    var hj01_contact_item3 = new Waypoint({
        element: document.getElementById('hj01_contact_item3'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        },
        offset: '90%'
    })
}
if ($("#hj01_contact_item4").length > 0) {
    var hj01_contact_item4 = new Waypoint({
        element: document.getElementById('hj01_contact_item4'),
        handler: function (direction) {
            if (direction == 'down') {
                $(this.element).show().addClass('fadeInDown')
            } else {
                $(this.element).removeClass('fadeInDown')
            }
        },
        offset: '90%'
    })
}
function CheckForm(theForm) {
    if (theForm.keywords.value == "Search") {
        alert('Please enter the keywords');
        theForm.keywords.focus();
        return false
    }
    return true
}
function OnFocusFun(element, elementvalue) {
    if (element.value == elementvalue) {
        element.value = "";
        element.style.color = "#888888"
    }
}
function OnBlurFun(element, elementvalue) {
    if (element.value == "" || element.value.replace(/\s/g, "") == "") {
        element.value = elementvalue;
        element.style.color = "#888888"
    }
}
$('#keyword').keydown(function () {
    var keyword = $("#keyword").val();
    if (event.keyCode == 13) {
        if (keyword.length <= 0) {
            alert("Please enter the keywords!")
        } else {
            window.location.href = "{:U('/search','','')}?keywords=" + keyword
        }
    }
});
jQuery(function () {
    if($("#main-menu > ul > li ").length<=6){
        $("#main-menu > ul > li").find('h2').css('padding','0 30px')
    }

    var color = "#333";
    var url = window.location.href;

    url = url.toLowerCase();
    jQuery("#main-menu ul li a").each(function () {
        var href = jQuery(this).attr("href");

		//
        href = href.toLowerCase();
		//当前url
        /*console.log(href);
        console.log(url);*/
        if (href == url) {
            jQuery(this).parent("li").addClass("menu_on").parent().parent().addClass("menu_on");



			return false;

        }else{
            if(url.indexOf("product")!=-1){
                if(href.indexOf("product")!=-1){
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
        }

    });
})
var path = "";
$(function () {
    var nav = $(".side");
    var win = $(window);
    var sc = $(document);
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
}
jQuery(function () {
    jQuery('.weixing-show').hide();
    jQuery(".weixing-container").bind('mouseenter', function () {
        jQuery('.weixing-show').show()
    })
    jQuery(".weixing-container").bind('mouseleave', function () {
        jQuery('.weixing-show').hide()
    })
});

var swiper_adv2 = new Swiper('.advantages2_list', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
if ($(".advantages2_list .swiper-slide").length<4) {
        $(".advantages2_list .swiper-pagination").hide();
        $(".advantages2_list .swiper-button-prev").hide();
        $(".advantages2_list .swiper-button-next").hide();
}

$(function () {
    $('.page_Banner2_box').slick({
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 2000,
    })
});