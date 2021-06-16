require(['jquery'], function ($) {
	$(document).on("click", ".tabBtn>a", function () {
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		var pcid = $(this).attr("pcid");
		$(".h3TxtArea[pcid='" + pcid + "']").siblings().removeClass("on");
		$(".h3TxtArea[pcid='" + pcid + "']").addClass("on");
		$(".prodList[pcid='" + pcid + "']").siblings().removeClass("on");
		$(".prodList[pcid='" + pcid + "']").addClass("on");
		if ($(".prodList[pcid='" + pcid + "'] li").length > 0) {
			$(".Product_Use").show();
		} else {
			$(".Product_Use").hide();
		};
		showproduct(pcid);
		return false;
	}).on("click", ".prodList li", function () {
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		var pcid = $(this).attr("pcid");
		$(".compList2").removeClass("on");
		$(".compList2[pcid='" + pcid + "']").addClass("on");
		showproduct(pcid);
		return false;
	}).on("click", ".three_child_btn", function () {

		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		var pcid = $(this).attr("pcid");
		//$(".tableWrap").removeClass("on");
		//$(".tableWrap[pcid='"+pcid+"']").addClass("on");
		showproduct(pcid);
		return false;
	});


	function showproduct(pcid) {
		// console.log("showproduct", pcid);
		$(".tableWrap").removeClass("on");
		$(".tableWrap").each(function (index, element) {
			var path = $(this).attr("path");
			// console.log("indexOfpcid", pcid);
			if (path.indexOf("," + pcid + ",") != -1) {
				// console.log("indexOf", path);
				$(this).addClass("on");
			}
			$(".tableWrap[pcid='" + pcid + "']").addClass("on");
		});
	};

	$(document).ready(function (e) {
		var id = $("#cBody").attr("chooseid");
		if (id) {
			$(".tabBtn a").eq(id).trigger("click");
		} else {
			$(".tabBtn a").eq(0).trigger("click");
		}
	});

});