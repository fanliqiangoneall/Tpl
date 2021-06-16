require(['jquery'], function ($) {
    var height = $('.hjzf2_other_58').height();
    $(window).scroll(function () {
        var top = $('.hjzf2_other_58').offset().top - $(this).scrollTop();
        if(top <= height / 2 &&  top > -(height - 100)) {
            $('.hjzf2_other_58').addClass('moving');
        }else{
            $('.hjzf2_other_58').removeClass('moving');
        }
    })
})