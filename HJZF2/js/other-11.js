require(['floatAD'], function (floatAD){
	var delay = 10;
	var itl= setInterval(function () { floatAD.floatAD(); }, delay);
	var obj=document.getElementById("adguangao");
	if(obj){
    	floatAD.obj.onmouseover=function(){clearInterval(itl)};
    	floatAD.obj.onmouseout=function(){itl=setInterval(function () { floatAD.floatAD(); }, delay)};
    };
	$(".other-11__close").on("click",function(){
	  document.getElementById("adguangao").style.display='none';
      document.getElementById("close2_img").style.display='none';
	});
});