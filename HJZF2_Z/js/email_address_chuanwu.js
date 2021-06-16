    jQuery(function () {
        $('#bottom_bottom_HJ10_submit').submit(function () {
            return false;
        });
    });
    function is_email_bottom(str) {
        return (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(str));
    };
    function Trims(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };
    function yzsubmitb_bottom_hj10() {
        var language = '<?php echo $lan_submit;?>';
        var time = new Date();
        $('#messagea_bottom_HJ10').append(time);
        if (language == 'cn' || language == 'zh') {
            var error_email = '*邮箱格式有误！';
            var error_wate = '请稍候';
        } else {
            var error_email = '*The email format is wrong!';
            var error_email_emp = '*E-mail can not be empty!';
            var error_wate = 'Please wait';
        };
        var count = 0;
        var email = Trims(jQuery("#emaila_bottom_HJ10").val());

        if (email.length > 0 && !is_email_bottom(email)) {
            jQuery("#emaila_bottom_HJ10_alert").html(error_email);
            count++;
        } else if (email.length == 0) {
            jQuery("#emaila_bottom_HJ10_alert").html(error_email_emp);
            count++;
        } else {
            jQuery("#emaila_bottom_HJ10_alert").html("");
        };
        if (count > 0) {
            return false;
        } else {
            jQuery("#inbut").html('<h5 style="color:#F00;">' + error_wate + '</h5>');
            return true;
        };
    };