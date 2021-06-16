require(['jquery','swiper'],function($,Swiper){
	new Swiper('.hjzf_other_120_wrapper',{
        speed:800,
        slidesPerView: hjzf_other_120_len,
        spaceBetween: 20,
		loop: true,
		navigation: {
            nextEl: '.hjzf_other_120_wrapper_box .swiper-button-next',
            prevEl: '.hjzf_other_120_wrapper_box .swiper-button-prev',
        },
		breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
	});
		
});