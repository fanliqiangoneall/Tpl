require(['slick','jquery'],function(slick,$){
    $(function () {
        $('.page_Banner2_box').slick({
            dots: true,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            touchMove:true,
            autoplay: true,
            autoplaySpeed: 2000,
        })
    });
})