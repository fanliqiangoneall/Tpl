<?php

//网站的本地地址

//8080是本地情况
//8081是本地情况
//8082是本地情况
//8083是本地情况
$prots=array('8080','8081','8082','8083','8084');


//
if(strstr($_SERVER['HTTP_HOST'],"808")){
	foreach($prots as $prot){
		if(strstr($_SERVER['HTTP_HOST'],$prot)){
			//是不是上线了
			define('PCPORT',$prot);
			define('DEMOURL',"192.168.1.8:".$prot."/Pc");
			define('ONLINE',false);	
			define('IMGDEMOPATH',"http://yun.one-all.com");	
			require './webinfo/demopc'.$prot.'.one-all.com.php';	
		}	
	}
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc200")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc200.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc200.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc201")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc201.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc201.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc202")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc202.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc202.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc203")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc203.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc203.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc204")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc204.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc204.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc205")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc205.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc205.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc206")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc206.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc206.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc207")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc207.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc207.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc208")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc208.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc208.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],"demopc209")){
	define('ONLINE',false);	
	define('DEMOURL',"demopc209.one-all.com");
	define('IMGDEMOPATH',"http://yun.one-all.com");
	require './webinfo/demopc209.one-all.com.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],".pc.one-all.cn")){
	define('ONLINE',false);	
	define('DEMOURL',"http://".$_SERVER['HTTP_HOST']);
	define('IMGDEMOPATH',"http://yun.one-all.com");
	//ywwm
	$keys=array('y'=>1,'m'=>2,'c'=>3,'n'=>4,'z'=>5,'i'=>6,'g'=>7,'h'=>8,'x'=>9,'w'=>0);
	//要解析的内容
	$oneall_key=str_replace('.pc.one-all.cn','',$_SERVER['HTTP_HOST']);
	//$oneall_key=str_replace('pc','',$oneall_key);
	foreach($keys as $k=>$key){
		$oneall_key=str_replace($k,$key,$oneall_key);
	}
	
	if($oneall_key==='1' or $oneall_key==='87' or $oneall_key==='78' or $oneall_key ==='427' or $oneall_key ==='428'or $oneall_key ==='554' or $oneall_key ==='668' or $oneall_key ==='683' or $oneall_key ==='784' or $oneall_key==='1142' or $oneall_key==='1266' or $oneall_key==='1269' or $oneall_key==='1270' or $oneall_key==='1271' or $oneall_key==='1272' or $oneall_key==='1276' or $oneall_key==='1277' or $oneall_key==='1284'or $oneall_key==='1285' or $oneall_key === '1286' or $oneall_key ==='1288' or $oneall_key ==='1289' or $oneall_key ==='1290' or $oneall_key ==='1291' or $oneall_key ==='1292' or $oneall_key ==='1293' or $oneall_key ==='1297' or $oneall_key ==='1298' or $oneall_key ==='1299' or $oneall_key ==='1300' or $oneall_key ==='1301' or $oneall_key ==='1302' or $oneall_key ==='1304' or $oneall_key ==='1306' or $oneall_key ==='1307' or $oneall_key ==='1310' or $oneall_key ==='1311' or $oneall_key ==='1313' or $oneall_key ==='1314' or $oneall_key ==='1315' or $oneall_key ==='1316' or $oneall_key ==='1318' or $oneall_key ==='1319' or $oneall_key ==='1342'){		
		define('VERSION','2');
	}
	
	require './webinfo/one-all.cn.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],".pc.wdhhz.com")){
	define('ONLINE',false);	
	define('DEMOURL',"http://".$_SERVER['HTTP_HOST']);
	define('IMGDEMOPATH',"http://www.wdhhz.com");
	//ywwm
	$keys=array('y'=>1,'m'=>2,'c'=>3,'n'=>4,'z'=>5,'i'=>6,'g'=>7,'h'=>8,'x'=>9,'w'=>0);
	//要解析的内容
	$oneall_key=str_replace('.pc.wdhhz.com','',$_SERVER['HTTP_HOST']);
	//$oneall_key=str_replace('pc','',$oneall_key);
	foreach($keys as $k=>$key){
		$oneall_key=str_replace($k,$key,$oneall_key);
	}
	require './webinfo/one-all.cn.php';
}
elseif(strstr($_SERVER['HTTP_HOST'],".demopc.one-all.cn")){
	define('ONLINE',true);	
	define('DEMOURL',"http://".$_SERVER['HTTP_HOST']);
	define('IMGDEMOPATH',"http://yun.one-all.com");
	//ywwm
	$keys=array('y'=>1,'m'=>2,'c'=>3,'n'=>4,'z'=>5,'i'=>6,'g'=>7,'h'=>8,'x'=>9,'w'=>0);
	//要解析的内容
	$oneall_key=str_replace('.demopc.one-all.cn','',$_SERVER['HTTP_HOST']);
	//$oneall_key=str_replace('pc','',$oneall_key);
	foreach($keys as $k=>$key){
		$oneall_key=str_replace($k,$key,$oneall_key);
	}
	
	if($oneall_key==='1' or $oneall_key==='87' or $oneall_key==='78' or $oneall_key ==='427' or $oneall_key ==='428'or $oneall_key ==='554' or $oneall_key ==='668' or $oneall_key ==='683' or $oneall_key ==='784' or $oneall_key==='1142' or $oneall_key==='1266' or $oneall_key==='1269' or $oneall_key==='1270' or $oneall_key==='1271' or $oneall_key==='1272' or $oneall_key==='1276' or $oneall_key==='1277' or $oneall_key==='1284'or $oneall_key==='1285' or $oneall_key === '1286' or $oneall_key ==='1288' or $oneall_key ==='1289' or $oneall_key ==='1290' or $oneall_key ==='1291' or $oneall_key ==='1292' or $oneall_key ==='1293' or $oneall_key ==='1297' or $oneall_key ==='1298' or $oneall_key ==='1299' or $oneall_key ==='1300' or $oneall_key ==='1301' or $oneall_key ==='1302' or $oneall_key ==='1304' or $oneall_key ==='1306' or $oneall_key ==='1307' or $oneall_key ==='1310' or $oneall_key ==='1311' or $oneall_key ==='1313' or $oneall_key ==='1314' or $oneall_key ==='1315' or $oneall_key ==='1316' or $oneall_key ==='1318' or $oneall_key ==='1319' or $oneall_key ==='1342'){		
		define('VERSION','2');
	}
	
	require './webinfo/demopc.one-all.cn.php';
}

else{
	//是不是上线了
	define('ONLINE',true);	
	require './webinfo/'.$_SERVER['HTTP_HOST'].'.php';
}
	

	require './ThinkPHP/ThinkPHP.php';
	
		
	
	
	
?>