require(['swiper','jquery'],function(Swiper,$){
    var swiper = new Swiper('.hj05-banner',{

        followFinger : false,
        speed:800,
		autoplay:true,
        mousewheel: false,
        pagination : {
            el:'.hj05-banner .hj-banner-pagination',
        },

        cubeEffect: {
            slideShadows: false,
            shadow: false,
        },
        loop:true,
        navigation: {
            nextEl: '.hj05-banner .hj-banner-next',
            prevEl: '.hj05-banner .hj-banner-prev',
        },
        on:{
            init:function(swiper){
                slide=this.slides.eq(0);
                slide.addClass('ani-slide');
                video()
            },
            transitionStart: function(){
                for(i=0;i<this.slides.length;i++){
                    slide=this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function(){
                slide=this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');
                video();
            },
        }
    });
    $(".HJ-banner-itemNew").addClass("ani-slide");
    function video(){
        $('#HJ05-banner1 .HJ-banner-item.ani-slide a').addClass("cccccc");
        $('.cccccc').on('click', function () {
            if($(this).attr("data-video").length>1){
                var data = $(this).attr("data-video");
                layer.open({
                    type: 2,
                    title: ['video', 'font-size:18px;'],
                    area: ['80%', '80%'],
                    shadeclose: true,
                    maxmin: true,
                    content: data
                });
            }
        });
    }

});




