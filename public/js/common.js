//通用js 用来监听百度编辑器里面得点击转化事件
$(document).ready(function(e) {
	for(var i=1;i<7;i++){
		$(".turn_sta_"+i).on("click",function(){
			turn_sta(i,5);
		})
	}
	$(".baiducss table").wrap('<div class="scrolltable"></div>');

		if($("[data-myli]").length>0 && $("[data-myli]").attr("data-myli") == 0){
			$(".main-content-right").append("<div class='no_data'></div><br/><h3 style='text-align: center;'>No data</h3>");
		}
	if($("[data-myli-cn]").length>0 && $("[data-myli-cn]").attr("data-myli-cn") == 0){
		$(".main-content-right").append("<div class='no_data'></div><br/><h6 style='text-align: center;'>暂无产品，我们正在精心准备中</h6>");
	}

});
