require(['jquery', 'swiper'], function ($, Swiper) {
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


    /* pc站 */
    function urlDate(data_url) {
        var flag = isLocal(data_url);
        if (!flag) {
            var onurl = window.location.href;
            var rega = /\.[\w]+\/(\w+)/;
            var arr, arra;
            arr = rega.exec(onurl);
            arra = rega.exec(data_url);
            if (!arr && !arra) {
                return true;
            }
            return arr && arra ? arr[1] === arra[1] ? true : false : false;
        }
        return false;
    }

    function isLocal() {
        var reg = /https?\:\/\/[0-9\.]+/;
        var url = window.location.href;
        if (reg.exec(url)) {
            return true;
        }
        return false;
    }

    $(function () {
        var onurl = window.location.href;
        $('.nav_li').each(function (i) {
            var that = $(this);
            var xiala = that.find('.nav_drop');
            if (xiala.length >= 1) {
                that.find('i').removeClass('hidden');
            };

            /* 导航添加高亮 */
            var data_url = that.attr('data-url');
            var flag = urlDate(data_url);
            if (flag) {
                that.addClass('active');
            }
            that.find('a').each(function () {
                var url = $(this).attr('data-url');
            })

        });
    })

});