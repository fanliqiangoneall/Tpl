require(['jquery','layer','lazyload'], function ($,layer,lazyload){
    layer.config({
        path: '/Tpl/HJZF2_Z/js/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });
    $("#about_pic_btn img").click(function(){
        var gallery_pic=$(this).parent().attr("href");
        if(gallery_pic){
            openvideo(gallery_pic);
            return false;
        }
    });

    function openvideo(url){
        var img_infor = "<img src='" + url + "'/>";
        //iframe窗
        layer.open({
            type: 1,
            title: false,
            shadeClose: true,
            area: ['auto'],
            content: img_infor //iframe的url
        });
    };
    $("img.lazy").lazyload({effect: "fadeIn"});
});
