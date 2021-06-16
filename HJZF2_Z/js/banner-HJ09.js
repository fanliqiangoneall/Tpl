require(['swiper', 'jquery'], function (Swiper, $) {
    var hj09_banner_top = new Swiper('.hj09_banner_top', {
        navigation: {
            nextEl: '.hj09_banner_next',
            prevEl: '.hj09_banner_prev',
        },
        loop : true,
        effect:'fade',
        autoplay: {
            delay: 4000
        },
        speed: 1000,
        autoHeight: true,
        pagination: {
            el: '.hj09_banner_top_pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' +
                     ' / ' +
                     '<span class="' + totalClass + '"></span>';
            },
      },
      on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        } 
      }
    });

    var flag = false;
    $('.hj09_banner_top_btn').click(function(){
        if(flag){
            hj09_banner_top.autoplay.start();
            flag = false;
        }else{
            hj09_banner_top.autoplay.stop();
            flag = true;
        }
        $(this).toggleClass('open');
      })
    
});
