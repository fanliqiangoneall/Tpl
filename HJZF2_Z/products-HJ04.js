require(['jquery', 'swiper'], function ($, Swiper) {
    if ($(".products-hj04__categroy").length > 0) {
        var galleryThumbs_product = new Swiper('.products-hj04__categroy', {
            spaceBetween: 0,
            slidesPerView: pro_hj04_num,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
            },
            on: {
                init: function (swiper) {
                    var length = this.slides.length;
                    if (length <= 4) {
                        $(".swiper-next-product2").hide();
                        $(".swiper-prev-product2").hide();
                    }
                    if ($(window).width() < 1200) {
                        $(".swiper-next-product2").show();
                        $(".swiper-prev-product2").show();
                    }
                },
                resize: function () {
                    galleryThumbs_product.update(true);
                },
            },
            

        });
    }

    var galleryTop_product = new Swiper('.products-hj04__content--down', {
        spaceBetween: 10,

        thumbs: {
            swiper: galleryThumbs_product
        },
        on: {
            resize: function () {
                galleryTop_product.update(true)
            },
        },
        navigation: {
            nextEl: '.swiper-next-product2',
            prevEl: '.swiper-prev-product2',
        },
    });
    $(function () {
        function init() {
            var arr = []
            $('.products-hj04__content__itemBox').each(function () {
                var left = $(this).find('.products-hj04__itemLeft');
                var right = $(this).find('.products-hj04__itemRight');
                var rightH = right.height();
                arr.push(rightH);
            })
            $('.products-hj04__itemLeft').css('height', Math.max(...arr));
        }
        init();
        $(window).resize(function () {
            init();
        });

        $('.products-hj04__categroy .swiper-slide').click(function () {
            $(this).addClass('swiper-slide-active').siblings('.swiper-slide').removeClass('swiper-slide-active');
        })

    })


});