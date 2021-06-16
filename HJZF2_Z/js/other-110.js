require(['jquery', 'layer'], function ($, layer) {
	$(function () {
		$('.hjzf_other_110').click(function () {
			layer.open({
				type: 2,
				title: false,
				shadeClose: true,
				area: ['80%', '80%'],
				content: other_110_video
			});
		});
	})
});