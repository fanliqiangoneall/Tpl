require(['jquery', 'swiper', 'superSlide'], function ($, Swiper) {

  if ($('.products_hj06').length > 0) {
    if (!products_hj06_flag) {
        return;
    } else {
        window.onload = function () {
            $(".products_hj06_scroll").slide({ titCell: ".products_hj06_title_list li", mainCell: ".products_hj06_box", effect: "left" });
        };
    }
}


});