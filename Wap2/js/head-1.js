require(['jquery',], function ($){
	$(".new_hjzf_head-1__more").click(function(){
		$(".new_hjzf_head-1__nav_more").show();
		$(".new_hjzf_head-1__nav").css("width","70%");
		$(".nav_title_des").show();
		return false;
	});
	$("body").click(function(){
		$(".new_hjzf_head-1__nav").css("width","0%");
		$(".new_hjzf_head-1__nav_more").hide();
		$(".nav_title_des").hide();
	});
	$(".new_hjzf_head-1__nav_more").click(function(){
		$(this).parent().next().slideToggle();
		$(this).toggleClass("new_hjzf_head-1__nav_more_on");
		return false;
	});
	$(document).ready(function(e) {
        var w=$(window).width();
		console.log(w);
		var min=w*0.6;
		$(".nav_title").css("min-width",min+"px");
		$(".nav_title_des").css("min-width",min+"px");
		var nav_height=$(".new_hjzf_head-1__nav nav").height();
		$(".new_hjzf_head-1__nav nav").css('minHeight',nav_height+"px");
    });
});