require(['jquery', 'swiper', 'superSlide'], function ($, Swiper) {
    $(window).load(function () {
        $('.head_hj17_drap img').each(function () {
            var self = $(this);
            var img = self.attr('data-src');
            var alt = self.attr('data-alt');
            self.attr('src', img);
            self.attr('alt', alt);
            self.removeClass("loading");
        });
    });
    /* 内页导航样式 */
    // if(!headIsIndex) {
    //     var conHeight = $('.header_fix').height();
    //     $('.menu_bg').css('margin-top', conHeight);
    // };

    $(".hjzf_hj17_wrapper").slide({
        mainCell: ".bd ul",
        autoPage: true,
        effect: "top",
        autoPlay: true,
        vis: 1
    });
    /* $(window).load(function () {
        var h = $(".header_fix").height();
        $('.header_empty').css('height', h);
    }); */
    $(window).scroll(function () {
        var t = $(window).scrollTop();
        if (t > 160) {
            $('.header_fix').addClass('on');
        } else {
            $('.header_fix').removeClass('on');
        };
        if (t > 38) {
            $('.head_hj17_top').addClass('on');
            $('.menu_bg').addClass('on');
        } else {
            $('.head_hj17_top').removeClass('on');
            $('.menu_bg').removeClass('on');
        };
    });
    
        /* $('header').addClass('isIndex');
        $('.header_fix').addClass('isIndex');
        $('.head_hj17_top').addClass('isIndex');
        $('.menu_bg').addClass('isIndex');
        $('.header_empty').addClass('isIndex'); */
        
        $('.nav_search > img').click(function () {
            $('.nav_search_sub').fadeToggle();
        });
   


    /*移动端导航栏*/
    $(".dt-mobile-menu-icon").click(function () {
        $(".mobile-sticky-header-overlay").toggleClass("active");
    });
    /* 手机侧边导航层点击阻止冒泡 */
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
    /* 阴影层点击 */
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


    /* pc站 */
    $('.hj15_search span').click(function () {
        $(this).next('.hj15_search_form').fadeToggle(300);
    });
    

    /* pc */
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