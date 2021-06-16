require(['jquery'],function($){
	$(document).on("click",".products_inner1_tag",function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		var classid=$(this).attr("classid");
		$(".products_inner1_cases[classid='"+classid+"']").siblings().removeClass("on");
		$(".products_inner1_cases[classid='"+classid+"']").addClass("on");
	}).on("click",".mobile--left_showButton",function(){
		$(".InsidePages_left_navlist").toggle();})
});