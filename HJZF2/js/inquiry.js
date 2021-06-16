define(['jquery'],function (){
       var inquiry_item = {
        yz_submit: function(){
            var count=0;
            var message=Trims(jQuery("#message").val());
            var linkname=Trims(jQuery("#linkname").val());
            var phone=Trims(jQuery("#phone").val());
            var email=Trims(jQuery("#email").val());
            if(linkname.length<=0){
                jQuery("#linkname_alert").html("The name cannot be empty!");
                count++;
            }
            else{
                jQuery("#linkname_alert").html("");
            }
            var str=/[\u4E00-\u9FA5a-zA-Z]/;
            if(phone.length>0 && str.test(jQuery('#phone').val()))
            {
                jQuery("#phone_alert").html("Telephone information is wrong!");
                count++;
            }else{
                jQuery("#phone_alert").html("");
            }
            if(email.length<=0){
                jQuery("#email_alert").html("The email can not be empty!");
                count++;
            }
            else{
                if(!is_email(email)){
                    jQuery("#email_alert").html("Email format error");
                    count++;
                }
                else {
                    jQuery("#email_alert").html("");
                }
            }
            if(message.length<=0){
                jQuery("#message_alert").html("Consulting content cannot be empty!");
                count++;
            }
            else{
                jQuery("#message_alert").html("");
            }
            var code_char = jQuery("#code_char").val();
            jQuery.ajax({
                type: "POST",
                url: "/verification",
                async:false,
                data: {code:code_char},
                success: function(data){

                    if(data==1){
                        jQuery("#code_char_alert").html("");
                    }else{
                        count++;
                        jQuery("#code_char_alert").html("Verification code error");
                    }
                }
            });
            if(count>0){
                return false;
            }
            else{
                jQuery("#inbut").html('<h5 style="color:#F00;">Please wait</h5>');

                return true;
            }
        },
        Trims:function(){
            return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        },
        is_email:function(){
            return (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(str));
        }
    }
    return {
        inquiry_item: inquiry_item
    };
});