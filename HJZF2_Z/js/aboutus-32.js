require(['jquery', 'layer'], function ($, layer) {
	$(function () {
		$('.abouts_32_right').click(function () {
			var url = $(this).attr('data-url');
			if (url) {
				layer.open({
					type: 1,
					title: false,
					shadeClose: true,
					area: ['auto'],
					content: url
				});
			}else{
				return;
			}

		});
	});



});