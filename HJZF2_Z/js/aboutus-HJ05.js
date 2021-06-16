require(['swiper', 'jquery'], function (Swiper, $) {
    var hjzf_z_aboutus_hj04_container = new Swiper('.hjzf_z_aboutus_hj04_container', {
        pagination: {
            el: '.hjzf_z_aboutus_hj04_pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hjzf_z_aboutus_hj04_button_next',
            prevEl: '.hjzf_z_aboutus_hj04_button_prev',
        },
        on:{
            init : function () {
                $('.hjzf_z_aboutus_hj04_text').text('0' + (this.activeIndex + 1))
            },
            slideChange: function () {
                $('.hjzf_z_aboutus_hj04_text').text('0' + (this.activeIndex + 1))
            }
        }
    })

    
})