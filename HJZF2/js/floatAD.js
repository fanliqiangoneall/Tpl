define(['jquery'],function ($){
	var x = 50,y = 60
	var xin = true, yin = true
	var step = 1
	var delay = 10
	var obj=document.getElementById("adguangao");
 　　var close2_div = function()
	{
		document.getElementById("adguangao").style.display='none';
		document.getElementById("close2_img").style.display='none';
	
	}


	
	
	var floatAD = function () {
		if(obj){
			var L=T=0
			var R= $(window).width()-obj.offsetWidth
			var B = $(window).height()-obj.offsetHeight
			obj.style.left = x + document.body.scrollLeft +"px"
			obj.style.top = y + document.body.scrollTop +"px"
			x = x + step*(xin?1:-1)
			if (x < L) { xin = true; x = L}
			if (x > R){ xin = false; x = R}
			y = y + step*(yin?1:-1)
			if (y < T) { yin = true; y = T }
			if (y > B) { yin = false; y = B }
		}
	
	}
　　return {
　　　　　　floatAD: floatAD,
          close2_div: close2_div,
		  obj: obj
　　};
});