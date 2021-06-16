require(['jquery', 'layer'], function ($, layer) {
    var height = $('.hjzf2_other_55_v_0').height();
    if (height) {
        $(window).scroll(function () {
            var top = $('.hjzf2_other_55_v_0').offset().top - $(window).scrollTop();
            if (top <= height / 2 && top > -(height - 100)) {
                $('.hjzf2_other_55_v_0').addClass('moving');
            }
        })
    };

  

})