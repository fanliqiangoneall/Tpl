function load_tongji(path) {	
path=rtrim(path);
var	title = document.getElementsByTagName("title")[0].innerHTML; // 页面标题
var url = window.location.href; // 当前请求路径名称
var site = window.location.host; // 站点host
var referrer = document.referrer;
var ref=""; 	
ref = referrer;
var  urlpath = path+"/statistics";
var p = navigator.platform;
var plat = 0;
if(p.indexOf("Win") == 0||p.indexOf("Mac") == 0||p == "X11"){
plat = 0;
}else{
plat = 1;
}
$.post(urlpath,{title:title,url:url,ref_val:ref,plat:plat},function(date){
})	               			  
};
//统计转化数据
function turn_sta(type,location){
	console.log("turn_sta");
var p = navigator.platform;
var plat = 0;
if(p.indexOf("Win") == 0||p.indexOf("Mac") == 0||p == "X11"){
plat = 0;
}else{
plat = 1;
}

	var  url = window.location.href;
	window.path="";
	var path=window.path;
	var  urlpath = path+"/statisticsTurn";
	$.post(urlpath,{type:type,location:location,url:url,plat:plat},function(date){})}

function rtrim(str){return str.replace(/(\/*$)/g,"");}
