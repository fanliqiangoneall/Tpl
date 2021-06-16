
require(['jquery','swiper'],function($,Swiper){
    var swiper_otherHj01 = new Swiper('.HJZF_Z_other_HJ01_swiper', {
        spaceBetween: 40,
        slidesPerView: 6,
        autoplay: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: '.HJZF_Z_other_HJ01_pagination',
            clickable: true
        },
        on: {
            resize: function(){
                swiper_otherHj01.update(true);
            }
        }
    });
    if($(".HJZF_Z_other_HJ01_pagination span").length==1){
        $(".HJZF_Z_other_HJ01_pagination").hide();
    };
});
