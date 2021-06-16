require(['jquery', 'jqueryautocomplete'], function ($) {

	// 导航js
	$(window).scroll(function () {
		if($(this).scrollTop() > 120) {
			$('.header_hj28').addClass('on');
		}else{
			$('.header_hj28').removeClass('on');
		}
	});
	// 灵通展览导航需求
	var $li3n = $("#menu44137 .nav_wrapper_yiji li:nth-child(7n)").each(function(i){ $("#menu44137 .nav_wrapper_yiji li").slice(i*7,i*7+7).wrapAll("<div></div>");});
	//剩下的再用ul包起来
	$("#menu44137 .nav_wrapper_yiji li").slice($li3n.length * 7).wrapAll("<div></div>");
	
	
var url=window.location.href;
if(url.indexOf("192.168.1")>-1){
	var baseUrl="/Pc";
}else{
	var baseUrl="";
}	
$('#keyword').autocomplete({
    serviceUrl: baseUrl+'/searchkeyword_api/',
	max: 20,
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    },
	formatResult:function(suggestion, value, i){
		console.log("formatResult",suggestion);
		console.log("value",value);
		return `<div class="search_suggestion_row">
		<div class="search_suggestion_top">
			<div class="search_img">
				<img src="`+suggestion.info.imgurl+`">
			</div>
			<div class="search_info">
				<div class="search_title">`+suggestion.info.pro_model+`</div>
				<div class="">`+suggestion.info.pro_name+`</div>
				<div class="">`+suggestion.info.parent_path_name+`</div>
			</div>
			<div class="search_pro">product</div>
		</div>
		<div class="search_item">
			<span>3</span> item
		</div>
	</div>`;
	}


});
});