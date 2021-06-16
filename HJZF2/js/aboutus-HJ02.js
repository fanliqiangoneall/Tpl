require(['swiper','jquery'],function(Swiper,$){
    var swiper_abus = new Swiper('.new_hjzf_aboutus-HJ02 .hj02_abus_right_honor_box', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        autoplay:true,
        pagination: {
            el: '.new_hjzf_aboutus-HJ02 .hj02_abus_pagination',
            clickable: true,
        },

    });
    var swiper_abus_left = new Swiper('.new_hjzf_aboutus-HJ02 .page_indexpic', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.new_hjzf_aboutus-HJ02 .hj02_abus_left_pagination',
            clickable: true,
        },

    });
})