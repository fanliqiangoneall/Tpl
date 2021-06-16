require(['jquery'], function ($) {
    $(function () {
        $('.menu > li').each(function (){
            var self = $(this);
            var len = self.find('.nav_drop').length;
            var lena = self.find('img').length;
            if(len > 0){
                self.addClass('hasErji');
            }
            if(lena > 0) {
                self.addClass('hadImg');
            }
        });

        
        $(window).scroll(function (){
            if($(this).scrollTop() > 10) {
                $('header').addClass('on');
            }else{
                $('header').removeClass('on');
            }
        })
        
    })
    
})