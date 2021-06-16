require(['swiper','jquery','lazyload'],function(Swiper,$,lazyload) {
    var speedb=20; //数字越大速度越慢
    var tabb=document.getElementById("index_honlist_wai");
    var tab1b=document.getElementById("con1");
    var tab2b=document.getElementById("con2");
    if(tab1b){
        tab2b.innerHTML=tab1b.innerHTML;
        function Marqueeb(){
            if(tab2b.offsetWidth-tabb.scrollLeft<=0)
                tabb.scrollLeft-=tab1b.offsetWidth;
            else{
                tabb.scrollLeft++;
            }
        }
        var MyMarb=setInterval(Marqueeb,speedb);
        tabb.onmouseover=function() {clearInterval(MyMarb);};
        tabb.onmouseout=function() {MyMarb=setInterval(Marqueeb,speedb);};
    };
    $("img.lazy").lazyload({effect: "fadeIn"});
});