require(['jquery','swiper'],function($,swiper){
    var swiper = new swiper('.swiper-container02', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed:1500,
        effect : 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-container02 .banner-HJ04-next',
            prevEl: '.swiper-container02 .banner-HJ04-prev',
        },
    });
    $(".swiper-container02").hover(function(){
        swiper.autoplay.stop();
    },function(){
        swiper.autoplay.start();
    });


    var length = $(".swiper-pagination span").length;
    if(length>1){
        $(".new_hjzf_banner-HJ04 .swiper-button-prev").css("display","block");
        $(".new_hjzf_banner-HJ04 .swiper-button-next").css("display","block");
    }
    else{
        $(".new_hjzf_banner-HJ04 .swiper-button-prev").css("display","none");
        $(".new_hjzf_banner-HJ04 .swiper-button-next").css("display","none");
    }
    
    function prevImg(){
        $(".banner-HJ04-prev i").removeClass("fa-caret-left").addClass("fa-long-arrow-left");
        var imgIndex = $(".swiper-pagination span.swiper-pagination-bullet-active").index();
        var imgSrc = $(".bannerContent div").eq(imgIndex).children().children("img").attr("src");
        $(".prevImgContainer").css("display","block");
        $(".prevImgContainer img").attr("src",imgSrc);
    }
    function nextImg(){
        $(".banner-HJ04-next i").removeClass("fa-caret-right").addClass("fa-long-arrow-right");
        var imgIndex02 = $(".swiper-pagination span.swiper-pagination-bullet-active").index();
        var imgSrc = $(".bannerContent div").eq(imgIndex02+2).children().children("img").attr("src");
        $(".nextImgContainer").css("display","block");
        $(".nextImgContainer img").attr("src",imgSrc);
    }
    $(".swiper-button-prev").mouseenter(function(){
        prevImg();
    });
    $(".swiper-button-prev").click(function(){
        prevImg();
        swiper.slidePrev();
    });
    $(".swiper-button-prev").mouseleave(function(){
        $(".banner-HJ04-prev i").removeClass("fa-long-arrow-left").addClass("fa-caret-left");
        $(".prevImgContainer").css("display","none");
    });
    $(".swiper-button-next").mouseenter(function(){
        nextImg();
    });
    $(".swiper-button-next").click(function(){
        nextImg();
        swiper.slideNext();
    });
    $(".swiper-button-next").mouseleave(function(){
        $(".banner-HJ04-next i").removeClass("fa-long-arrow-right").addClass("fa-caret-right");
        $(".nextImgContainer").css("display","none");
    });

});