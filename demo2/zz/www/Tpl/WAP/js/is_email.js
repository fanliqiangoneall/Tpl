
function Trims(str)
{
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function is_email(str)
{
	return (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(str));
}
var str=/[\u4E00-\u9FA5a-zA-Z]/;