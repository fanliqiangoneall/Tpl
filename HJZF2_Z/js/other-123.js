require(['jquery','layer'],function($,layer){
	$(function () {
		$('.hjzf_other_123_video').click(function () {
			var video_url = $(this).attr('data-src');
			layer.open({
				type: 2,
				title: false,
				shadeClose: true,
				area: ['80%', '80%'],
				content: video_url
			 });
		});
	});
});
