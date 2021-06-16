require(['jquery','swiper'],function($,swiper){
    $(".HJZF2_advantage14__content .HJZF2_advantage14__option:first-child").addClass("active");
    $(".HJZF2_advantage14__content .HJZF2_advantage14__option").click(function () {
        $(".HJZF2_advantage14__option").removeClass("active");
        $(this).addClass("active");
    });
    $(".HJZF2_advantage14__content .HJZF2_advantage14__option").each(function(){
        var index = $(this).index()+1;
        $(this).find(".HJZF2_advantage14__options__ceNum").html("0"+index);
        $(this).find(".shuzi").html("0"+index);
    })

})

