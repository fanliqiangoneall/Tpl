require(['jquery','imgSwitch'],function($,imgSwitch){
	$("#imgContainer").imgSwitch({
			Type:12,
			Width:900,
			Height:330,
			Pause:3000,
			Speed:"fast",
			Auto:true,
			Navigate:"numberic",
			NavigatePlace:"outer",
			//arrImgs:'img',
			PicturePosition:"left"
		});
});
$('#hj02_video').on('click', function(){
    var data=$('#hj02_video').attr("data-video");
    layer.open({
        type: 2,
        title: ['视频', 'font-size:18px;'],
        area: ['80%', '80%'],
        shadeClose: true, //点击遮罩关闭
        content: $('#hj02_video').attr("data-video")
    });
});
