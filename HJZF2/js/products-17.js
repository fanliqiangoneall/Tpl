require(['swiper','jquery'],function(Swiper,$){


        if(typeof line!="undefined" && line=="1"){
            var swiper_pro_17 = new Swiper('.new_hjzf_products-17 .index_pro_slickbox', {
                spaceBetween: 30,
                slidesPerGroup : 3,
                slidesPerView: 3,
                autoHeight:true,
                loop:true,
                autoplay:true,
                pagination: {
                    el: '.hj02-pro-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.new_hjzf_products-17 .hj02-pro-next',
                    prevEl: '.new_hjzf_products-17 .hj02-pro-prev',
                },
            });
        }else{
            $(".new_hjzf_products-17 .index_pro_slickbox").addClass("line_two");
            var swiper_pro_17 = new Swiper('.new_hjzf_products-17 .index_pro_slickbox', {
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerColumn: 2,
                /*autoHeight:true,*/
                /* autoplay:true,*/
                pagination: {
                    el: '.hj02-pro-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.new_hjzf_products-17 .hj02-pro-next',
                    prevEl: '.new_hjzf_products-17 .hj02-pro-prev',
                },
            });
        }

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
        var index_prolist_wai_height = $(".new_hjzf_products-17 .index_prolist_waibox").height();
        $(".new_hjzf_products-17 .index_prolist_wai").css("height",index_prolist_wai_height);
    })
});

