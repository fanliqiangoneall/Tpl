require([ 'jquery'], function ($) {
   $('.proa').eq(0).addClass('on');
   $('.hjzfz_products_26_img a').eq(0).addClass('on');
   $('.products_26_list li').eq(0).addClass('on');
   var proa = $('.proa');
   var hjzfz_products_26_img = $('.hjzfz_products_26_img a');
   $('.products_26_list li').click(function () {
        var index = $(this).index();  
        $(this).addClass('on').siblings('li').removeClass('on');
        proa.eq(index).addClass('on').siblings().removeClass('on');
        hjzfz_products_26_img.eq(index).addClass('on').siblings('a').removeClass('on');
   })
})