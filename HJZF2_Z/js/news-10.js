require(['jquery'],function($){
	$(".news-tap-btn").hover(
	function(){
		var nid=$(this).attr('nid');
		$(".news-tap-btn").removeClass("on");
		$(this).addClass("on");
		$(".news_kechengs").hide();
		$(".news_kechengs[nid='"+nid+"']").show();
	}
	);
	$(".news-tap-btn_mobile").click(function(){
		var index = $(this).index();
		$(this).addClass("on").siblings("div").removeClass("on");
		$(".mobile_kechengbox").eq(index).show().siblings("div").hide();
	})

});






