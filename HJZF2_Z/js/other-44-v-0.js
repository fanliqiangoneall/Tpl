
require(['jquery'],function($){
	$(document).on("click",".page_one",function(){
		$(".page_one").removeClass("page_one_active");
		$(this).addClass("page_one_active");
		var page=$(this).attr("page");
		$(".page_faq_ul").hide();
		$(".page_"+page).show();
		$(".page_"+page).find('li').eq(0).trigger("click");
	}).on("click",".faq44",function(){
		$(".faq44").removeClass("faq44_active");
		$(this).addClass("faq44_active");
		var listnum=$(this).attr("listnum");
		$(".faq_r_one").hide();
		$(".faq_r_one[listnum='"+listnum+"']").show();			
	})

})
