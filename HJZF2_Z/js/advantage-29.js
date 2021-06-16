require(['jquery', 'layer'], function ($, layer) {
	if(advantage_29_video) {
		$(function () {
			$('.hjzf_advantage_29_wrapper_l').css({
				'cursor': 'pointer'
			});
			$('.hjzf_advantage_29_wrapper_l').click(function () {
				layer.open({
					type: 2,
					title: false,
					shadeClose: true,
					area: ['80%', '80%'],
					content:  advantage_29_video
				});
			});
			
		});
	}
});