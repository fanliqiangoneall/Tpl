require(['jquery', 'swiper'], function ($, Swiper) {
    var galleryThumbs_productHj01 = new Swiper('.products_hj01_swiper', {
        spaceBetween: 0,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 10,
            },

        },
        on: {
            init: function (swiper) {
                var length = this.slides.length;

            },
            resize: function () {
                if (galleryThumbs_productHj01.update) {
                    galleryThumbs_productHj01.update(true);
                }
            },
        },

    });
    /* 孙润舒要求，关闭轮播 */
    if (is_play != '') {
        return;
    } else {
        var galleryTop_productHj01 = new Swiper('.index_prolist_wai2', {
            spaceBetween: 10,
            thumbs: {
                swiper: galleryThumbs_productHj01
            },
            on: {
                resize: function () {
                    if (galleryTop_productHj01.update) {
                        galleryTop_productHj01.update(true);
                        left_height();
                    }
                },
            },
            navigation: {
                nextEl: '.swiper-next-product2',
                prevEl: '.swiper-prev-product2',
            },
        });
        var left_height = function () {
            var leftheight = ($(".product--16__rightItem").height()) * 2 + 25;

            $(".new_hjzf_products-HJ01 .swiper-slide").hover(function () {
                var index = $(this).index();
                galleryTop_productHj01.slideTo($(this).index(), 1000, false);
                $('.new_hjzf_products-HJ01 .swiper-slide').eq(index).addClass('swiper-slide-active').siblings('.swiper-slide').removeClass('swiper-slide-active');
            });
            $(".new_hjzf_products-HJ01 .hj02-index-pro2-left .hj02-index-pro2-item-box").height(leftheight);
        };
        window.onload = function () {
            left_height();
        };
    };


});