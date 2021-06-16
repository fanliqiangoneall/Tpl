require(['jquery','swiper','layer'],function($,swiper,layer){
    var swiper_adv2 = new swiper('.advantages2_list', {
        pagination: {
            el: '.new_hjzf_advantage-21 .swiper-pagination',
            type: 'fraction',
        },
        loop:true,
        navigation: {
            nextEl: '.new_hjzf_advantage-21 .swiper-button-next',
            prevEl: '.new_hjzf_advantage-21 .swiper-button-prev',
        },
    });
	$("a[data-video]").click(function(){
		layer.open({
			type: 2,
			title: ['video', 'font-size:18px;'],
			area: ['80%', '80%'],
			shadeClose: true,
			maxmin: true,
			content: $(this).attr("data-video")
		});
	});
});

