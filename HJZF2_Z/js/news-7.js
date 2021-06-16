
require(['jquery','lazyload'],function($,lazyload){
	$(".tab_list li").hover(function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.tab_box').eq(index).addClass('active').siblings('.tab_box').removeClass('active');
    })
});

