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
	var $li3n = $("#menu22327 .nav_wrapper_yiji li:nth-child(7n)").each(function(i){ $("#menu44137 .nav_wrapper_yiji li").slice(i*7,i*7+7).wrapAll("<div></div>");});
	console.log($li3n);
	//剩下的再用ul包起来
	$("#menu22327 .nav_wrapper_yiji li").slice($li3n.length * 7).wrapAll("<div></div>");
	
	
var url=window.location.href;
if(url.indexOf("192.168.1")>-1){
	var baseUrl="/Pc";
}else{
	var baseUrl="";
}	
$('#keyword').autocomplete({
    serviceUrl: baseUrl+'/searchkeyword_api/',
	max: 10,
	width:"400px",
	noCache:true,
	onSelect:function(){},
	onSearchComplete:function(q,suggestions,result){
		if(result){
			var total=result.total;
			if(total>10){
				$more="<span class='search_item_more'>Show all</span>";
			}else{
				$more="";
			}
			var search_item=
			'<div class="search_item">'+
			'<span>'+total+' item</span>'+$more+
			'</div>';
			$(".autocomplete-suggestions").append(search_item);
		}
		console.log("this",this);
		console.log("q",q);
		console.log("suggestions",suggestions);
	
	},
	formatResult:function(suggestion, value, i){
		console.log("formatResult",suggestion);
		console.log("value",value);
		if(!suggestion.info.pro_model){
			suggestion.info.pro_model="";
		}
		return `<div class="search_suggestion_row">
		<a href="`+suggestion.info.prourl+`">
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
		</a>

	</div>`;
	}


});

$(document).on("click",".search_item_more",function(){
	$("#keyword").parent().submit();
});
$(document).ready(function(e) {
	
		if(url.indexOf("192.168.1")>-1){
			var baseUrl="/Pc";
		}else{
			var baseUrl="";
		}		
        jQuery.ajax({
				type: "get",
				url: baseUrl+"/get_session_vip",
				async: false,				
				success: function (data) {                  
					if (data) {
                        if(data!=0){                            
                            $(".signin").html("Hello,"+data);
                            
                        }
					}
				}
			});    
});

});