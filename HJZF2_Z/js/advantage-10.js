require(['swiper', 'jquery'], function (Swiper, $) {
    var swiper = new Swiper('.hjzf2_adv-10_swiper', {
        followFinger: false,
        speed: 800,
        parallax : true,
        pagination: {
            el: '.hjzf2_adv-10_page',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="'+className+'"><div class="ideaBtnbox"><div class="ideaBtn"></div><div class="ideaBtnAct"><div class="ideaInner"></div></div><div class="ideaCount">0' + (index + 1) + '</div></div></div>';
            }
        }
    });
    $(".hjzf2_adv-10_slide").each(function(){
        var index = $(this).index()+1;
        $(this).find(".number").html("0"+index);
    });



    $(window).scroll(function(){
        if($(".ideaBg")[0]){
           var e = $(".ideaBg")[0].getBoundingClientRect().top;
           $(".ideaBg2").css("transform", "translateY(" + -e / 6 + "px)"); 
       }

   });
});