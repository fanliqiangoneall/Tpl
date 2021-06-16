/*
 * @Author: your name
 * @Date: 2019-12-13 14:04:44
 * @LastEditTime: 2020-12-25 14:57:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \undefined\\wenjian\www\Pc\Tpl\HJZF2_Z\js\news-HJ01.js
 */
require(['jquery','swiper'],function($,Swiper){
    $(document).ready(function(){
       $(".HJZF2__news-10--leftContent ul li:first-child").addClass("active").find("ul").show();
        $(".HJZF2__news-10--leftContent ul li").click(function(){
            $(this).addClass("active").siblings("li").removeClass("active");
            $(this).find("ul").slideToggle(200).parent().siblings().find("ul").slideUp(200);
        })

    });
    _news_hj01 ? _news_hj01 = true : _news_hj01 = false;
	_right_px ? _right_px = false : _right_px = true;
    _right_num ? _right_num = _right_num : _right_num = 3;
    var swiper_news3 = new Swiper('.HJZF2__news-10right__swiper', {
        watchSlidesProgress: true,
        centeredSlides: _right_px,
        loop: true,
        slidesPerView: _right_num,
        spaceBetween: 0,
        autoplay: _news_hj01,
        navigation: {
            nextEl: '.HJZF2__news-10right-next',
            prevEl: '.HJZF2__news-10right-prev',
        },
        on: {
            resize:function(){
                swiper_news3.update(true);
            }
        }
    });
});