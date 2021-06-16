require(['swiper', 'jquery'], function (Swiper, $) {
    var hjzf_service_31_wrapper_container = new Swiper('.hjzf_service_31_wrapper_container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.hjzf_service_31_wrapper_container .swiper-pagination',
            clickable: true
        }
    });
        var flag = false;
        $('.hjzf_service_31_wrapper_faq').on('click', 'span', function () {
        var _self = $(this);
        var _parent = _self.parent('li');
        var _parent_sib = _parent.siblings('li').find('.index_text');
        var nextDom = _self.siblings('.index_text');
        if (!flag) {
            nextDom.slideDown();
            _parent.addClass('on');
            flag = true;
        } else {
            nextDom.slideUp();
            _parent.removeClass('on');
            flag = false;
        }
        _parent_sib.slideUp();
        _parent.siblings('li').removeClass('on');
    })
})