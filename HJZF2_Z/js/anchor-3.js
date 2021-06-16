require(['jquery'], function ($) {
    $('.anchor_3_wrapper li').eq(0).addClass('active');
    $('.anchor_3_wrapper').on('click', 'li' , function (e) {
        var target = e.target;
        var href = $(target).attr('href');
        e.preventDefault();
        console.log(target, href);
        $(target).parent('li').addClass('active').siblings('li').removeClass('active');
        if(href){
            $('body,html').animate({
                scrollTop: ($(href).offset().top)
            }, 800)
        };
    })

})