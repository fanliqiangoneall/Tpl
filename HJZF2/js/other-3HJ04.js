require(['jquery'],function($){
    $(document).ready(function(){
        var ul = $(".other03mainContent");
        var liLength = $(".other03mainContent li").length;
        var liWidth = $(".other03mainList").width();
        ul.css("width",liLength*liWidth);
        var iNumber = 0;
        var speed = 500;
        function move (){
            console.log(iNumber);
            if(iNumber> liLength-1){
                return iNumber = liLength-1;
            }
            if( iNumber < 0){
                $(".other03Next").addClass("disable");
                return iNumber = 0;
            }
            ul.animate({
                left : -iNumber*liWidth
            },speed);
        }
        $(".other03Pre").click(function(){
            $(".other03Next").removeClass("disable");
            iNumber ++;
            if(iNumber >= liLength-1){
                $(".other03Pre").addClass("disable");
            }
            move();
        });
        $(".other03Next").click(function(){
            $(".other03Pre").removeClass("disable");
            iNumber --;
            if( iNumber <= 0){
                $(".other03Next").addClass("disable");
            }
            move();
        })
    });
})


