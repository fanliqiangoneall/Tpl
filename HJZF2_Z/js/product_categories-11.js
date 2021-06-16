require(['jquery'], function ($) {
    $('.hjzf_procate_11_wrapper li:odd').find('.col-md-6:odd').addClass('fadeInLeft wow');
    $('.hjzf_procate_11_wrapper li:odd').find('.col-md-6:even').addClass('fadeInRight wow');
    $('.hjzf_procate_11_wrapper li:even').find('.col-md-6:odd').addClass('fadeInRight wow');
    $('.hjzf_procate_11_wrapper li:even').find('.col-md-6:even').addClass('fadeInLeft wow');
    
})