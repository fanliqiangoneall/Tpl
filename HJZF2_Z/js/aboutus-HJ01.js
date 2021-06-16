require(['jquery', 'swiper'], function ($, Swiper) {
    var galleryThumbs_aboutusHj01 = new Swiper('.aboutus-HJ01__changeItem', {
        spaceBetween: 0,
        slidesPerView: 4,
        // freeMode: true,
        watchSlidesVisibility: true,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesProgress: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        on: {
            init: function (swiper) {
                var length = this.slides.length;
                /*if(length<=3){
                    $(".swiper-next-product2").hide();
                    $(".swiper-prev-product2").hide();
                }*/
            },
            resize: function () {
                galleryThumbs_aboutusHj01.update(true)
            },
        },
    });
    var galleryTop_aboutusHj01 = new Swiper('.aboutus-HJ01-textContentWrap', {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: galleryThumbs_aboutusHj01
        },
        on: {
            resize: function () {
                galleryTop_aboutusHj01.update(true)
            },
        },
        pagination: {
            el: '.aboutus-HJ01-page',
        },
    });
    



    /*$(document).ready(function(){
        function product_2_resize(){
            var first_height = $(".products-15__item:first-child").height();
            var item_height = $(".products-15__item:not(:first-child)").height()*2;
            var item_marginBottom =(first_height-item_height-2)+'px';
            $(".products-15__item:nth-child(2)").css("marginBottom",item_marginBottom);
            $(".products-15__item:nth-child(3)").css("marginBottom",item_marginBottom);
            $(".products-15__item:first-child").css("marginBottom",item_marginBottom);
        }
        product_2_resize();
        window.onresize=function(){
            product_2_resize();
        }
    })*/
});