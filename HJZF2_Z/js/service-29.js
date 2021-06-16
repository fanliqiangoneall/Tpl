require(['jquery', 'mousewheel'], function ($) {
    function jisuan(){
        var hgt_array=[];
        $(".hjzf_service_29_wrapper li").each(function(){
            var hgt = $(this).find(".hjzf_service_29_wrapper_info").height();
            hgt_array.push(hgt);
            hgt_array.sort(function (a, b) {
                return a-b;
              });
        });
        $(".hjzf_service_29_wrapper li .hjzf_service_29_wrapper_info").height(hgt_array[hgt_array.length - 1]+40);
    };
    jisuan();
    window.onresize=function(){
        window.location.reload();
        jisuan();
    }
    
      
});