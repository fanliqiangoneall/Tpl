require(['swiper','jquery'],function(Swiper,$){
    $(".HJZF2_partner-4__list li:first-child").addClass("active");

    $(".HJZF2_partner-4__list li").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active").siblings("li").removeClass("active");
        }
    });
    var swiper = new Swiper('.HJZF2_partner-4__conainer', {
        pagination: {
            el: '.HJZF2_partner-4__pagination',
            clickable: true,
        },
        loop: true,
		autoplay: true,
        navigation: {
            nextEl: '.HJZF2_partner-4__next',
            prevEl: '.HJZF2_partner-4__prev',
        },

    });
    $( ".main_product_more" ).mouseenter(function(e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
        $(this).prev(".su_button_circle").removeClass("desplode-circle");
        $(this).prev(".su_button_circle").addClass("explode-circle");

    });

    $( ".main_product_more" ).mouseleave(function(e) {

        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
        $(this).prev(".su_button_circle").removeClass("explode-circle");
        $(this).prev(".su_button_circle").addClass("desplode-circle");

    });
    if($(".HJZF2_partner-4__pagination span").length<2){
        $(".HJZF2_partner-4__pagination").hide();
    }
});
