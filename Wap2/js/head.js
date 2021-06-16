require(['jquery',], function ($){
	$(window).scroll(function(){
        if($(window).scrollTop()>30){
			$(".new_hjzf_head").addClass("fixedSubNav");
        }else{
            $(".new_hjzf_head").removeClass("fixedSubNav");
        }
    });
    $(".head-6__Language p").click(function(){
        $("#lang_ul_top").slideToggle();
    });
});