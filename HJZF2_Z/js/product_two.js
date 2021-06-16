require(['jquery', 'swiper'], function ($, Swiper) {
    if ($(".products-15__categroy").length > 0) {
        var galleryThumbs_product = new Swiper('.products-15__categroy', {
            spaceBetween: 0,
            slidesPerView: product_twonum || 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
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
            navigation: {
                nextEl: '.swiper-next-product2',
                prevEl: '.swiper-prev-product2',
            },
            on: {
                init: function (swiper) {
                    var length = this.slides.length;
                    if (length <= this.params.slidesPerView) {
                        $(".swiper-next-product2").hide();
                        $(".swiper-prev-product2").hide();
                    }
                },
                resize: function () {
                    galleryThumbs_product.update(true)
                },
            },

        });
    };

    var galleryTop_product = new Swiper('.products-15__content--down', {
        spaceBetween: 10,

        thumbs: {
            swiper: galleryThumbs_product
        },
        on: {
            resize: function () {
                galleryTop_product.update(true)
            },
        },

    });


    $(document).ready(function () {
        function product_2_resize() {
            var first_height = $(".products-15__item:first-child").height();
            var item_height = $(".products-15__item:not(:first-child)").height() * 2;
            var item_marginBottom = (first_height - item_height - 2) + 'px';
            $(".products-15__item:nth-child(2)").css("marginBottom", item_marginBottom);
            $(".products-15__item:nth-child(3)").css("marginBottom", item_marginBottom);
            $(".products-15__item:first-child").css("marginBottom", item_marginBottom);
        }
        product_2_resize();
        window.onresize = function () {
            product_2_resize();
        };
        $('.products-15__categroy .swiper-slide').click(function () {
            $(this).addClass('swiper-slide-active').siblings('.swiper-slide').removeClass('swiper-slide-active');
        });
    });
});