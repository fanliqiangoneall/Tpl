require(['jquery'], function ($) {
    $(function () {
        function Trims(str) {
            return str.replace(/(^\s*)|(\s*$)/g, '');
        };
        function yzsubmitb20() {
            var language = '<?php echo $lan_submit;?>';
            if (language == 'cn' || language == 'zh') {
                var error_phone = '*号码有误！';
                var error_wate = '请稍候';
            } else {
                var error_tel = '*The phone cannot be empty!';
                var error_phone = '*The phone number is wrong!';
                var error_wate = 'Please wait';
            };
            var count = 0;
            var phone = Trims(jQuery("#phone_mb").val());

            var str = /[\u4E00-\u9FA5a-zA-Z]/;
            console.log(str.test(phone));
            if (phone.length <= 0) {
                jQuery("#phone_mb_alert").html(error_tel);
                count++;
            } else if (str.test(phone)) {
                jQuery("#phone_mb_alert").html(error_phone);
                count++;
            } else {
                jQuery("#phone_mb").html("");
            }
            console.log(count);
            if (count > 0) {
                return false;
            } else {
                $("#inbut").html('<h5 style="color:#F00;">' + error_wate + '</h5>');
                return true;
            };
        };
        
        $('#form_submit_other_106 input').click(function () {
            var flag = yzsubmitb20();
            console.log(flag);
            if (flag) {
                console.log($('#other_106_form'));
                $('#other_106_form').submit();
            }
        });

    });


})