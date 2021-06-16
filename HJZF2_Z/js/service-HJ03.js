require(['swiper','jquery','layer'],function(Swiper,$,layer){   
    $('.HJZF2_Z_service3__itemInner a').on('click', function(){
        event.preventDefault();
        if($(this).attr("href").length>0){
            layer.open({
                type: 2,
                title: ['video', 'font-size:18px;'],
                area: ['80%', '80%'],
                shadeClose: true,
                maxmin: true,
                content: $(this).attr("href")
            });
        }
        
    });

});
