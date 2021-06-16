		$(".main_tab dd").click(function(){
				var _index = $(this).index();
				console.log(_index);
				$(".tab_select").eq((_index-1)).addClass("active").siblings(".tab_select").removeClass('active');
			});
			function toedit(){	
				$("#edit_add").addClass('hide');	
				$("#edit_submit").removeClass('hide');		
				$("#toedit").val(1);
				var t= $("#shipping_address").val();
				console.log(t);
				$("#shipping_address").removeAttr('readonly').val("").focus().val(t);
			}
			function addAddress(){
				var edit=  $("#toedit").val();
				var shipping_address= $("#shipping_address").val();
				jQuery.ajax({				
					type: "POST",				
					url: "{:U('/add_member_addr','','')}",
					async: false,
					dataType:'json',
					data: { 
						edit:edit,
						shipping_address:shipping_address
					},
					success: function (data) {
						if(data==1){
							alert("修改成功");
							$("#edit_add").removeClass('hide');	
							$("#edit_submit").addClass('hide');	
						}else{
							alert('地址修改失败');
						}
					}
				});

			}
		
			function choosevals(){
				tagval=',';
				tagvalname=',';
				$("input[type='radio'").each(function(){
					if($(this).prop('checked')){
						tagval=tagval+$(this).val()+',';
						tagvalname=tagvalname+$(this).attr('tagname')+',';
					}
				});
				if(tagval.length>1){
					$('#clabel').val(tagval);
					$('#nlabel').val(tagvalname);
				}else{
					$('#clabel').val('');
					$('#nlabel').val('');
				}
			}
			console.log($("input[name='anzhuang_qiangti']:checked").val()=='');
			
			function yz_submit_installation(){
				var count = 0;
				var anzhuang_weizhi = $("input[name='anzhuang_weizhi']:checked").val();				
				var anzhuang_qiangti = $("input[name='anzhuang_qiangti']:checked").val();
				var anzhuang_fangshi = $("input[name='anzhuang_fangshi']:checked").val();
				var distance = $("input[name='distance']").val();
				var elevator = $("input[name='elevator']:checked").val();
				var address = $("textarea[name='address']").val();
				var time = $("input[name='time']").val();
				var phone = $("input[name='phone']").val();
				if(anzhuang_weizhi==null){
					jQuery("#anzhuang_weizhi_alert").html("请选择安装位置");
					count++;
				}else{
					jQuery("#anzhuang_weizhi_alert").html("");
				}
				if(anzhuang_qiangti==null){
					jQuery("#anzhuang_qiangti_alert").html("请选择安装墙体");
					count++;
				}else{
					jQuery("#anzhuang_qiangti_alert").html("");
				}
				
				if(anzhuang_fangshi==null){
					jQuery("#anzhuang_fangshi_alert").html("请选择安装方式");
					count++;
				}else{
					jQuery("#anzhuang_fangshi_alert").html("");
				}
				if(distance.length<=0){
					jQuery("#distance_alert").html("请填写插座距离");
					count++;
				}else{

					console.log("distance1",distance);
					if(!isNaN(distance)){
						jQuery("#distance_alert").html("");
					}else{
						jQuery("#distance_alert").html("请填写符合格式的数据比如：1或1.1或2.5");
						count++;
					}
				}
				if(elevator==null){
					jQuery("#elevator_alert").html("请选择是否有安装电梯");
					count++;
				}else{
					jQuery("#elevator_alert").html("");
				}
				if(address.length<=0){
					jQuery("#address_alert").html("请填写送货地址");
					count++;
				}else{
					jQuery("#address_alert").html("");
				}
				if(time.length<=0){
					jQuery("#time_alert").html("请填写安装时间");
					count++;
				}else{
					jQuery("#time_alert").html("");
				}
				if(phone.length<=0){
					jQuery("#phone_alert").html("请填写联系电话");
					count++;
				}else{
					jQuery("#phone_alert").html("");
				}
				if(phone.length<=0){
					jQuery("#phone_alert").html("请填写联系电话");
					count++;
				}else{
					console.log("phone",phone);
					var patt1 = new RegExp(/^1(3\d{2}|4[14-9]\d|5([0-35689]\d|7[1-79])|66\d|7[2-35-8]\d|8\d{2}|9[13589]\d)\d{7}$/i);
					if(patt1.test(phone)){
						
						jQuery("#phone_alert").html("");
					}else{
						jQuery("#phone_alert").html("请填写正确联系电话，格式如：15161193978");
						count++;
					}					
					
				}
				
				if(count>0){
					
					return false;
				}else{
					return true;
				}								

			}