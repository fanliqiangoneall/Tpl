<?php
namespace app\spider\controller;
use think\Db;
use QL\QueryList;



class Getnews

{



function login_post($url, $cookie, $post,$headers=""){
$headerArr = array(); 
foreach( $headers as $n => $v ) { 
    $headerArr[] = $n .':' . $v;  
}
	

$ch = curl_init(); //初始化curl模块
curl_setopt($ch, CURLOPT_URL, $url); //登录提交的地址


curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检查

curl_setopt ($ch, CURLOPT_HTTPHEADER , $headerArr );  //构造IP

curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0); // 从证书中检查SSL加密算法是否存在

curl_setopt($ch, CURLOPT_SSLVERSION, 1);//设置SSL协议版本号
curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC); //代理认证模式  
curl_setopt($ch, CURLOPT_PROXY, "192.168.1.220"); //代理服务器地址   

curl_setopt($ch, CURLOPT_PROXYPORT,'8888'); //代理服务器端口

curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie); //设置cookie信息保存在指定的文件夹中


curl_setopt($ch, CURLOPT_POST, 1); //以POST方式提交
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));//要执行的信息
$rs=curl_exec($ch);	//执行CURL
var_dump(curl_error($ch)); 
curl_close($ch);

var_dump($rs);
exit;
}

function get(){
	//post 参数
	$post = array(
	'userName' => '15161193976',
	'userPwd' => 'qun6564213',	
	'Remember' => 'true'
	);
	//伪造的header
	$headers['Origin'] = 'https://www.yizhuan5.com'; 
	$headers['X-Requested-With'] = 'XMLHttpRequest';
	$headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36';
	$headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	$headers['Referer'] = 'https://www.yizhuan5.com/';
	$headers['Accept-Encoding'] = 'gzip, deflate, br';
	$headers['Accept-Language'] = 'zh-CN,zh;q=0.9';	
	$url = "https://www.yizhuan5.com/Account/Login/LoginIn";	//登录地址， 和原网站一致
	$cookie = dirname(__FILE__).'/yizhuan5.txt'; //设置cookie保存的路径
	$this->login_post($url, $cookie, $post,$headers);	//调用模拟登录
}

function get_content($url, $cookie){
$ch = curl_init(); //初始化curl模块
curl_setopt($ch, CURLOPT_URL, $url); //登录提交的地址
curl_setopt($ch, CURLOPT_HEADER, 0); //是否显示头信息
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //是否自动显示返回的信息
curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie);//设置cookie信息保存在指定的文件夹中
$rs = curl_exec($ch);	//执行curl转去页面内容
curl_close($ch);
return $rs; //返回字符串
}
}
