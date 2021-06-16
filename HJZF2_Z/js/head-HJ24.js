require(['jquery'], function ($) {
    $(function () {
        /* 搜索按钮 */
        $('.hj24_search span').click(function () {
            $('.head_hj24_drop_fixed_search').toggleClass('on');
			$('.head_hj24_drop_fixed').removeClass('on');
        });
		
		$('.opensearch').click(function () {
			$('.colsesearch').css('display',"block");
			$('.opensearch').css('display',"none");
		});
		$('.colsesearch').click(function () {
			$('.opensearch').css('display',"block");
			$('.colsesearch').css('display',"none");
		});		
        /* 搜索按钮 */
        /* 导航滚动 */
        function sc() {
            var t = $(this).scrollTop();
            t > 10 ? $('.head_hj24_fixed').addClass('on') : $('.head_hj24_fixed').removeClass('on');
        };
        $(window).scroll(function () {
            sc();
        });
        sc();
        /* 导航滚动 */

        /* 点击展示二级 */
        $('.hj24_click_menu').click(function () {
            $(this).toggleClass('on');
            $('.head_hj24_drop_fixed').toggleClass('on');
            $('.head_hj24_fixed').toggleClass('on');
			$('.head_hj24_drop_fixed_search').removeClass('on');
        })
        /* 点击展示二级 */
        
    });
    
})