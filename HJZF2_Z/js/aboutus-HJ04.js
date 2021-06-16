require(['swiper','jquery'],function(Swiper,$){
    $(function(){
		var siper_len;
		if($webid == '1785') {
			siper_len = 1;
		}else{
			siper_len = 3;
		}
		console.log(siper_len);
        function resize_paddingleft(){
            var container = $('.aboutushj04_container').width();
            var aboutushj04_left = $('.hjzf_z_aboutus_hj04--left').width();
            var left_box = $('.left_box');
            var winWidth = $(window).width();
            if(container > aboutushj04_left) {
                var padLeft = (winWidth - container)/2;
                $('.left_box').css("paddingLeft",padLeft);
            };
        }
        resize_paddingleft();
        //监测窗口大小变化
		$(window).resize( function () {
            resize_paddingleft();

		});
		
        var about4_swiper = new Swiper('.aboutushj04_swiper', {
            slidesPerView: siper_len,
            spaceBetween: 20,
            loop:true,
            pagination: {
                el: '.aboutushj04_pagination',
                clickable: true,
            },
            on:{
                click:function(){
					if($webid != 1838) {
						var video = about4_swiper.clickedSlide.getElementsByTagName('p');
						if(video.length>0){
							var video_src = $(video[0]).attr("data-src");
							console.log(video_src);
							var layer = "<div id='video__layer'>" +
								"<video src='"+video_src+"' controls autoplay></video>" +
								"<span class='vidoe_close'><i class='fa fa-window-close-o'></i></span>" +
								"</div>";
							$(".website").append(layer);
							$("#video__layer").animate({"width":"100%","height":"100%","left":"0","top":"0"});
							$(".vidoe_close").click(function(){
								$("#video__layer").remove();
							})
						}
					}
                }
            }
        });

    });
	if($webid == 1838) {
		$(document).on('click', '#video' , function () {
			var url = $('#video').attr('data-src');
			console.log(url,'点我了啊' );
			layer.open({
				type: 2,
				title: false,
				area: ['90%', '90%'],
				shadeClose: true,
				content: url
			});
		});
	};

});

// $('.new_hjzf_aboutus3_pic #adv_video1').on('click', function(){
//     layer.open({
//         type: 2,
//         title: ['video', 'font-size:18px;'],
//         area: ['80%', '80%'],
//         shadeClose: true,
//         maxmin: true,
//         content:  $('#video').attr('data-src')
//     });
// });