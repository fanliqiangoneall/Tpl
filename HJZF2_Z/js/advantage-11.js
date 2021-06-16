require(['jquery', 'swiper'], function ($, Swiper) {

    var blen = $('.HJZF2_advantage-11_swiper').length;
    var tlen = $('.HJZF2_advantage-11Down_swiper').length;
    if (blen && blen) {
        var galleryThumbs_adv2 = new Swiper('.HJZF2_advantage-11_swiper', {
            spaceBetween: 0,
            freeMode: false,
            autoHeight: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            on: {
                resize: function () {
                    galleryThumbs_adv2.update(true);
                },
            },
        });
        var galleryTop_advDown = new Swiper('.HJZF2_advantage-11Down_swiper', {
            autoHeight: true,
            navigation: {
                nextEl: '.HJZF2_Z__advantage-11--next',
                prevEl: '.HJZF2_Z__advantage-11--prev',
            },
            pagination: {
                el: '.HJZF2_advantage-11__pagination',
                clickable: true,
                renderBullet: function (index, className) {
					var right_title = $('.HJZF2_advantage-11_wrap--right__title');
					if(right_title.length > 0) {
						var text = $('.HJZF2_advantage-11_wrap--right__title')[index].innerText;
					}
                    return `<div class="${className}"><span class="HJZF2_advantage-11_wrap--right__title index_sub_title">${text}</span></div>`;
                },
            },
            controller: {
                control: galleryThumbs_adv2,
            },
            on: {
                resize: function () {
                    galleryTop_advDown.update(true);
                }
            },
        });
        galleryThumbs_adv2.controller.control = galleryTop_advDown;
        galleryTop_advDown.controller.control = galleryThumbs_adv2;
    }

})