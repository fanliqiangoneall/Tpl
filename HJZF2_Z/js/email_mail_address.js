$(function () {
    $('#bottom_20_submit').submit(function () {
        return false;
    });
});
function is_email_bottom(str) {
    return (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(str));
};
function Trims(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};
function yzsubmitb20() {
    var language = '<?php echo $lan_submit;?>';
    if (language == 'cn' || language == 'zh') {
		var error_name = '姓名不能为空！';
        var error_email = '*邮箱格式有误！';
		var error_wate = '请稍候';
    } else {
		var error_name = 'The name cannot be empty!';
        var error_email = '*The email format is wrong!';
        var error_email_emp = '*E-mail can not be empty!';
        var error_wate = 'Please wait';
    };
	var linkname = Trims(jQuery("#linknamea").val());
	if (linkname.length <= 0) {
		jQuery("#linknamea_20_alert").html(error_name);
		count++;
	}
	else {
		jQuery("#linknamea_20_alert").html("");
	}
    var count = 0;
    var email = Trims($("#emaila_20").val());

    if (email.length > 0 && !is_email_bottom(email)) {
        $("#emaila_20_alert").html(error_email);
        count++;
    } else if (email.length == 0) {
        $("#emaila_20_alert").html(error_email_emp);
        count++;
    } else {
        $("#emaila_20_alert").html("");
    };
    if (count > 0) {
        return false;
    } else {
        $("#inbut").html('<h5 style="color:#F00;">' + error_wate + '</h5>');
        return true;
    };
};