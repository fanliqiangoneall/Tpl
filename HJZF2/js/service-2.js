require(['swiper','jquery'],function(Swiper,$){
    if($(".HJZF2__service-2__swiper3").length>0){
        var swiper3 = new Swiper('.HJZF2__service-2__swiper3', {
            navigation: {
                nextEl: '.HJZF2__service-2Next',
                prevEl: '.HJZF2__service-2Prev',
            },
        });
        if(swiper3.slides.length<3){
            swiper3.destroy();
            $(".HJZF2__service-2__swiper3").next().find(".swiper-button-next").hide();
            $(".HJZF2__service-2__swiper3").next().find(".swiper-button-prev").hide();
        }

    }
    if($(".HJZF2__service-2__swiper9").length>0){
        var swiper9 = new Swiper('.HJZF2__service-2__swiper9', {
            navigation: {
                nextEl: '.HJZF2__service-2Next',
                prevEl: '.HJZF2__service-2Prev',
            },
        });
        if(swiper9.slides.length<3){
            swiper9.destroy();
            $(".HJZF2__service-2__swiper9").next().find(".swiper-button-next").hide();
            $(".HJZF2__service-2__swiper9").next().find(".swiper-button-prev").hide();
        }

    }
    if($(".HJZF2__service-2__swiper15").length>0){
        var swiper15 = new Swiper('.HJZF2__service-2__swiper15', {
            navigation: {
                nextEl: '.HJZF2__service-2Next',
                prevEl: '.HJZF2__service-2Prev',
            },
        });
        if(swiper15.slides.length<3){
            swiper15.destroy();
            $(".HJZF2__service-2__swiper15").next().find(".swiper-button-next").hide();
            $(".HJZF2__service-2__swiper15").next().find(".swiper-button-prev").hide();
        }

    }
    if($(".HJZF2__service-2__swiper21").length>0){
        var swiper21 = new Swiper('.HJZF2__service-2__swiper21', {
            navigation: {
                nextEl: '.HJZF2__service-2Next',
                prevEl: '.HJZF2__service-2Prev',
            },
        });
        if(swiper21.slides.length<3){
            swiper21.destroy();
            $(".HJZF2__service-2__swiper21").next().find(".swiper-button-next").hide();
            $(".HJZF2__service-2__swiper21").next().find(".swiper-button-prev").hide();
        }

    }
    if($(".HJZF2__service-2__swiper27").length>0){
        var swiper27 = new Swiper('.HJZF2__service-2__swiper27', {
            navigation: {
                nextEl: '.HJZF2__service-2Next',
                prevEl: '.HJZF2__service-2Prev',
            },
        });
        if(swiper27.slides.length<3){
            swiper27.destroy();
            $(".HJZF2__service-2__swiper27").next().find(".swiper-button-next").hide();
            $(".HJZF2__service-2__swiper27").next().find(".swiper-button-prev").hide();
        }

    }
    if($(".HJZF2__service-2__swiper33").length>0){
        var swiper33 = new Swiper('.HJZF2__service-2__swiper33', {
            navigation: {
                nextEl: '.HJZF2__service-2Next',
                prevEl: '.HJZF2__service-2Prev',
            },
        });
        if(swiper33.slides.length<3){
            swiper33.destroy();
            $(".HJZF2__service-2__swiper33").next().find(".swiper-button-next").hide();
            $(".HJZF2__service-2__swiper33").next().find(".swiper-button-prev").hide();
        }

    }

    $(document).ready(function(){
        $(".HJZF2__service-2__itemWrap li").each(function(){
            $(this).find("span").text(($(this).index()+1));
        });
        var len = $(".HJZF2__service-2__boxWrap li").length;
        $(".HJZF2__service-2__boxWrap").width((1200*len));
        $(".HJZF2__service-2__itemWrap li:first-child").addClass("active");
        $(".HJZF2__service-2__itemWrap li").hover(function(){
            var index = -($(this).index());
            $(this).addClass("active").siblings("li").removeClass("active");
            $(".HJZF2__service-2__boxWrap").stop().animate({left:(index*1200)},300);

        })
    })



});
