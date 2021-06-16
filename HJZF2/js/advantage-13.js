require(['jquery','swiper'],function($,swiper){


        $(function () {
            $('.HJZF2_advantage13__content__tab li:first-child').addClass("active");
            $(".HJZF2_advantage13__bigImgWrap ul li:first-child").addClass("active");
            /*
             * 每个头部item被点击
             * */
            $('.HJZF2_advantage13__content__tab li').on('hover', function (event) {
                /*
                 * 如果当前item有active，不需要动，直接return
                 * */
                if($(this).hasClass('active')) {
                    return true;
                }
                var index = $(this).index();  // 当前被点击的index下标
                var activeIndex = $(this).siblings('.active').index();  // 当前拥有active的index下标
                var direction = index > activeIndex ? 'right' : 'left'; // 项目应当从右还是从左划进来？
                var contentItem = $('.HJZF2_advantage13__bigImgWrap ul li').eq(index); // 需要划进来的content item

                // 遍历内容item 就是上面的content item
                $('.HJZF2_advantage13__bigImgWrap ul li').each(function (i) {
                    var zIndex = $(this).index() + 1; // zindex求为每个内容item下标+1
                    if($(this).hasClass('active')) {  // 如果当前元素有active，那么就应该高一点zindex
                        zIndex = 11;
                    }
                    $(this).css({zIndex: zIndex, transition: 'none'});  // 设置zindex，清空transition
                });
                contentItem.css({ // 先把要划进来的content item的动画前的坐标定位好，它的zindex要高于其他所有（包含当前拥有active）的item
                    left: (direction === 'right' ? '100%' : '-100%'),
                    zIndex: 22
                });
                setTimeout(function () {  // 下一次轮询设置动画和left的值
                    contentItem.css({
                        transition: 'left 0.3s ease',
                        left: 0
                    });
                }, 0);

                // 设置active
                $(this).addClass('active').siblings().removeClass('active');
                $('.HJZF2_advantage13__bigImgWrap ul li').eq(index).addClass('active').siblings().removeClass('active');
            });
        })





})

