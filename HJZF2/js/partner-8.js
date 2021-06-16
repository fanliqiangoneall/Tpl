require(['swiper','jquery'],function(Swiper,$){
    var speedb=20; //数字越大速度越慢
    var tabb=document.getElementById("HJZF2__partner--8__wai");
    var tab1b=document.getElementById("HJZF2__partner--8__con1");
    var tab2b=document.getElementById("HJZF2__partner--8__con2");
    if(tab1b){
        tab2b.innerHTML=tab1b.innerHTML;
        function Marqueeb(){
            if(tab2b.offsetWidth-tabb.scrollLeft<=0)
                tabb.scrollLeft-=tab1b.offsetWidth;
            else{
                tabb.scrollLeft++;
            }
        };
        var MyMarb=setInterval(Marqueeb,speedb);
        tabb.onmouseover=function() {clearInterval(MyMarb)};
        tabb.onmouseout=function() {MyMarb=setInterval(Marqueeb,speedb)};
    };

});
