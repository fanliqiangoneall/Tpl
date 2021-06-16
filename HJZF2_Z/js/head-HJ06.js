require(['jquery', 'mousewheel'], function ($) {
    $(document).ready(function () {
        var h = $('.head_hj06');
        if(h.length < 0) {
            h = 120;
        }
        $(window).scroll(function () {
            $(window).mousewheel(function (e, delta) {
                if (delta == -1) {
                    $('.head_hj06').css('transform', 'translateY(-67px)');
                    $('.head_empty').css('height', '55px');
                } else if(delta == 1) {
                    $('.head_hj06').css('transform', 'translateY(0)');
                    $('.head_empty').css('height', h);
                }
            });

        });
    });


    /* 下拉 */
    $('.nav_list').on('mouseenter', function () {
        $('.nav_drop').addClass('on');
        $('.nav_drop').on('mouseleave', function () {
            $(this).removeClass('on');
        }).on('mouseenter', function () {
            $(this).addClass('on');
        });
    }).on('mouseleave', function () {
        $('.nav_drop').stop().removeClass('on');
    });
    $('.nav_closed').click(function () {
        $('.nav_drop').stop().removeClass('on');
    });


    /* 手机端特效 */
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

    $(function () {
        var wid = $(window).width();
        if(wid < 768) {
            var h = $('.HJZF2__head_hj06_mobile').height();
            $('.HJZF2__head_hj06_mobile_empty').css('height', h);
        };
    });



});
