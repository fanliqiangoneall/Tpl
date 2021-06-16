$(document).ready(function () {
    $("#payment img").click(function(){
        console.log($(this).parent().attr("href"));
        var mp4=$(this).parent().attr('href');
        if(mp4){
            if(mp4.indexOf(".mp4")>0){
                openvideo(mp4);
                return false;
            }else{
                if($('#payment a').has('img')){
                    $('#payment a').has('img').not(".pdf").lightBox();
                }else{
                    return false;
                }

            }
        }
    });
    function openvideo(url){
//iframe窗
        layer.open({
            type: 2,
            title: 'Video',
            shadeClose: true,
            shade: 0.8,
            area: ['800px', '600px'],
            maxmin: true,
            content: url //iframe的url
        });
    }


});
function goToMain() {
    var mianContent = $("#main-content-wrapper").offset().top - 200;
    jQuery('html,body').animate({'scrollTop': mianContent}, 600)
}