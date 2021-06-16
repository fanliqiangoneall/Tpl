require(['jquery','video'], function ($,layer,lazyload){
var bj=$(".new_hjzf_banner-2HJ01_mp4").attr("bj");
var mp4_url=$(".new_hjzf_banner-2HJ01_mp4").attr("mp4_url");
$('.new_hjzf_banner-2HJ01_mp4').vidbg({
  'mp4': mp4_url,
  'poster': bj,
}, {
	volume: 1,
	playbackRate: 1,
	muted: true,
	loop: true,
	position: '50% 50%',
	resizing: true,
	overlay: false,
	autoplay:false,
});
$(".new_hjzf_banner-2HJ01_mp4").click(function(){$("video").get(0).play();})
$(window).resize(function(){
	setvideo();
})
$(document).ready(function(){
	setvideo();
})
function setvideo(){
	var width=$(window).width();
	var height=width/1920*810;
	$(".new_hjzf_banner-2HJ01_mp4").height(height);
}
	
});
