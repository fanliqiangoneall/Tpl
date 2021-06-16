require(['swiper','jquery'],function(Swiper,$){
    var swiper_pro = new Swiper('.new_hjzf_products-7 .index_pro_slickbox', {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        autoplay:true,
        pagination: {
            el: '.hj02-pro-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hj02-pro-next',
            prevEl: '.hj02-pro-prev',
        },
    });

    $(document).ready(function(){
        var waibox_width=1190*$(".index_prolist_wai_cont").length;
        $(".index_prolist_waibox").css("width",waibox_width+'px');
        $(".hj02_proclasslist li:first-child").addClass("proClass_on");
        $(".hj02_proclasslist1 li").hover(function(){
            var class_index = $(this).index();
            $(this).addClass("proClass_on").siblings().removeClass("proClass_on");
            var waibox_width_left = -1190*class_index;
            $(".index_prolist_waibox1").stop().animate({left:waibox_width_left+"px"},600);

        });
        var index_prolist_wai_height = $(".new_hjzf_products-7 .index_prolist_waibox").height();
        $(".new_hjzf_products-7 .index_prolist_wai").css("height",index_prolist_wai_height);
    })
});

