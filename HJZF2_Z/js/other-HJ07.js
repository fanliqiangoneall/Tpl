require(['jquery'],function($){
   $('.HJZF_Z_other_HJ07_contact__top').click(function () {
    $('.HJZF_Z_other_HJ07_contact_left').fadeToggle();
    $('.HJZF_Z_other_HJ07_contact_left').toggleClass('active');
})
   $('.HJZF_Z_other_HJ07_contact_left i').click(function () {
    $('.HJZF_Z_other_HJ07_contact_left').fadeOut();
    $('.HJZF_Z_other_HJ07_contact_left').removeClass('active');
})
   if($(window).scrollTop() > 400){
    $(".HJZF_Z_other_HJ07").fadeIn()
}

$(window).scroll(function () {
    let top_len = $(this).scrollTop();
    if(top_len > 400) {
        $(".HJZF_Z_other_HJ07").fadeIn()
    }else{
        $(".HJZF_Z_other_HJ07").fadeOut()
    }
})
$('.HJZF_Z_other_HJ07_to_top').click(function () {
    $('html, body').animate({ scrollTop: 0}, 800);
    return false;
})


});






