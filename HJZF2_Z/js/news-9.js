require(['jquery','lazyload','swiper'],function($,lazyload,Swiper){
    $("img.lazy").lazyload({effect: "fadeIn"});
    $(".hjzf2_news-9-down .class_item:first-child").addClass("active");
    $(".hjzf2_news-9-down .right_wrap:first-child").addClass("active");
    $(".news-9_mobileTitle>li:first-child").addClass("active");
    $(".news-9_mobileWrap>li:first-child").addClass("active");
    $(".hjzf2_news-9-down .left .class_item").click(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings("div").removeClass("active");
        $(".right_wrap").eq(index).addClass("active").siblings("div").removeClass("active");
    });
    $(".news-9_mobileTitle>li").click(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".news-9_mobileWrap>li").eq(index).addClass("active").siblings("li").removeClass("active");
    });
    var swiper0 = new Swiper('.swiper-container0', {
        slidesPerView: 3,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
        },
    });
    var swiper1 = new Swiper('.swiper-container1', {
        slidesPerView: 3,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
        },
    });
    $(".news_item:first-child").addClass("cur");
    $(".news_item").hover(function(){
        $(this).find(".news_itemBox").addClass("active").parent().siblings("div").removeClass("active");
    });
});

