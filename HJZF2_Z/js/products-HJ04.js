require(['jquery', 'swiper'], function ($, Swiper) {
    Array.prototype.getmax = function () {
        var len = this.length;
        var str;
        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len; j++) {
                if (this[i] > this[j]) {
                    str = this[i];
                    this[j] = str;
                    j--;
                }
            }
        }
        return this[len - 1];
    };
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
    };

    var galleryTop_product = new Swiper('.products-hj04__content--down', {
        spaceBetween: 10,

        thumbs: {
            swiper: galleryThumbs_product
        },
        navigation: {
            nextEl: '.swiper-next-product2',
            prevEl: '.swiper-prev-product2',
        },
        on: {
            resize: function () {
                galleryTop_product.update(true)
            },
            slideChange: function () {
                $('.products-hj04__categroy .swiper-slide').eq(this.activeIndex).addClass('swiper-slide-active').siblings('.swiper-slide').removeClass('swiper-slide-active');

            }
        },
        
    });
    $(function () {
        function init() {
            var arr = [];
            $('.products-hj04__content__itemBox').each(function () {
                var right = $(this).find('.products-hj04__itemRight');
                var rightH = right.height();
                arr.push(rightH);
            });
            $('.products-hj04__itemLeft').css('height', arr.getmax());
        };
        init();
        $(window).resize(function () {
            init();
        });

        $('.products-hj04__categroy .swiper-slide').click(function () {
            $(this).addClass('swiper-slide-active').siblings('.swiper-slide').removeClass('swiper-slide-active');
        });

       

    });


});