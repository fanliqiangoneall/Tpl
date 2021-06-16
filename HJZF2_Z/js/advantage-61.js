require(['jquery'],function($){
    $('.hjzf_advantage_61_list li span').hover(function () {
        $(this).parent('li').toggleClass('on');
        $(this).parent('li').siblings('li').removeClass('on');
    })

})