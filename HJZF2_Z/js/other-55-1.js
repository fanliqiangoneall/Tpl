require(['jquery', 'layer'], function ($, layer) {
    var height = $('.hjzf2_other_55_1').height();
    if (height) {
        $(window).scroll(function () {
            var top = $('.hjzf2_other_55_1').offset().top - $(window).scrollTop();
            if (top <= height / 2 && top > -(height - 100)) {
                $('.hjzf2_other_55_1').addClass('moving');
            }
        })
    };

  

})