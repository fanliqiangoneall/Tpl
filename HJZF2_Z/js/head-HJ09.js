require(['jquery', 'mousewheel'], function ($) {
    var flag = false;
    $('.head_hj09 .right').click(function () {
        if (!flag) {
            $('.menu-text').toggleClass('closed');
            $('.head_hj09').toggleClass('open');
            $('.menu-drop-down').toggleClass('open');
            flag = true;
        } else {
            $('.menu-text').toggleClass('closed');
            $('.head_hj09').toggleClass('open');
            $('.menu-drop-down').toggleClass('open');
            flag = false;
        };

    });

    $('.nav_drop').each(function () {
        var htmlContent = $(this).html().trim();
        if (!htmlContent) {
            $(this).hide();
        }
    });

    var top = $(window).scrollTop();
    if (top > 80) {
        $('.head_hj09').addClass('active');
    } else {
        $('.head_hj09').removeClass('active');
    };

    $(document).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $('.head_hj09').addClass('active');
        } else {
            $('.head_hj09').removeClass('active');
        }
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



})