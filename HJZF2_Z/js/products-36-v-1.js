require(['jquery', 'swiper'], function ($,Swiper) {
    $(function () {

		var s = new Swiper('.new_hjzf_product36v_1_container', {
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				767: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 15
				}
			},
			autoplay: true,
			pagination: {
				el: '.new_hjzf_product36v_1_wrapper_pagination',
				clickable: true
			}
		});

		
        if(isOpenFirst != '') {
            $('.new_hjzf_product36v_1_wrapper li').eq(0).addClass('on').siblings('li').removeClass('on').addClass('active');
            $('.new_hjzf_product36v_1_wrapper li').on('mouseenter',function () {
                $(this).addClass('on').siblings('li').removeClass('on').addClass('active');
            })
        }else{
            $('.new_hjzf_product36v_1_wrapper li').on('mouseenter',function () {
                $(this).addClass('on').siblings('li').removeClass('on').addClass('active');
            }).on('mouseleave', function () {
                $(this).removeClass('on').siblings('li').removeClass('active');
            });
        };
        
    });
});