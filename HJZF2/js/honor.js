require(['swiper','jquery'],function(Swiper,$) {
    var new_hjzf_honor_swiper = new Swiper('.new_hjzf_honor_swiper', {
        slidesPerView: typeof honor_num != "undefined" ? parseInt(honor_num) : 4,
        spaceBetween: 30,
        
        autoplay:true,
        observer:true,
        observeParents:false,
        loop: true,

        on: {
            slideChangeTransitionEnd: function (swiper) {
                this.update();
                this.autoplay.start();

            }
        },
        navigation: {
            nextEl: '.new_hjzf_honor_swiper-next ',
            prevEl: '.new_hjzf_honor_swiper-prev ',
        },
    });
});