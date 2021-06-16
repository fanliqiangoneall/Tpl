$(document).ready(function () {
    $('#payment a').has('img').not(".pdf").lightBox()


});
function goToMain() {
    var mianContent = $("#main-content-wrapper").offset().top - 200;
    jQuery('html,body').animate({'scrollTop': mianContent}, 600)
}