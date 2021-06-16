require(['jquery','swiper'],function($,Swiper){
    var $head_h = $(".HJZF2__head-9").height();  

    /*导航背景色*/
        $(window).scroll(function () {
            if($(window).width() > 992) {
                if($(document).scrollTop() > $head_h ){
                    
                    $(".HJZF2__head-9").css({
                        'background': '#fff'
                    }).addClass("active");
                }else{
                    $(".HJZF2__head-9").css({
                        'background': 'transparent'
                    }).removeClass("active");
                }
            }
        });
        $('.seach_click').click(function () {
            $('.pc_search').toggleClass('active');
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


});

