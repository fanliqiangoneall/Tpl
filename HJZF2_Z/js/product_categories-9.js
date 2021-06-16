require(['swiper', 'jquery'], function (Swiper, $) {
    var hjzf_procate_9_container = new Swiper('.hjzf_procate_9_container', {
        loop: true,
        autoplay: {
            delay: 4000
        },
        speed: 1000,
        autoHeight: true,
        pagination: {
            el: '.hjzf_procate_9_pagination',
            clickable: true,
            renderBullet: function (index, className) {
				var text = $('.hjzf_procate_9_text span')[index].innerText;
				return `<div class="hjzf_procate_9_text_text ${className}"><span>${text}</span></div>`;
			},
        },
    })
})