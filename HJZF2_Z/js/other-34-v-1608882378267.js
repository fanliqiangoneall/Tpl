require(['jquery'], function ($) {
$(document).on("click",".other34_cate",function(){
	var imgid1=$(this).attr("imgid");
	$(".other_content").removeClass("choose_on");
	$(this).find(".other_content").addClass("choose_on");
	$(".hjzf2_other_34_v1_right-img[imgid='"+imgid1+"']").siblings().removeClass("choose_on");
	$(".hjzf2_other_34_v1_right-img[imgid='"+imgid1+"']").addClass("choose_on");
});
})