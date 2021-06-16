require(['swiper','jquery'],function(Swiper,$){
    if($('.evaluate_hj01_container').length>0){
        var swiper = new Swiper('.evaluate_hj01_container',{
            slidesPerView: 3,
            spaceBetween: 20,
            speed:800,
            mousewheel: false,
            autoheight:true,
            pagination : {
                clickable: true,
                el:'.evaluate_hjpage',
            },
            navigation: {
                nextEl: '.evaluate_hjnext',
                prevEl: '.evaluate_hjprev',
              },
            autoplay:false,
            loop:true,
            breakpoints: {
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              },
            on:{
                resize:function(){
                    swiper.update()
                }
            }
        });
        
        
    }
});
