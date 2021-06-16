<?php

class IndexAction extends CommonAction {	


//获取二维码
public function getewm(){
$pid=$this->_request('pid');
import('@.ORG.Util.Erweima');
// 二维码数据 
$value = C('imgpath')."/product/pid/".$pid.".html";

$errorCorrectionLevel = 'L';
$matrixPointSize = 4;

return QRcode::png($value, false, $errorCorrectionLevel, $matrixPointSize);
}




//定制化模块
//单页面子菜单
function othercate(){
	$data=I();
	$othername=$_GET['othername'];
	if(!$othername){
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}	
	$intro_class=M('intro_class')->WHERE(' webid='.C('webid').' and othername="'.$othername.'"')->find();
	$this->assign('intro_class',$intro_class);
	$seo=othercateseo($intro_class['classid']);
	$this->getothernav($intro_class['classid']);
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$web_navigations=M('web_navigation')->field('id,nav_belong')->where('introclassid='.$intro_class['classid'])->find();
	$this->getbanner(0,$this->getnavparentid($web_navigations));
	$this->assign('allclass',$allclass);//全部分类
		
		if(isMobile()&&gethaswap()){
		  $this->display('WAP/othercate');
		}
		else{
		  $this->display('ZERO/othercate');	
		}
			
}

function getnavparentid($web_navigations){
	if($web_navigations['nav_belong']!=0){
		return 	$web_navigations['nav_belong'];
	}else{
		return 	$web_navigations['id'];
	}

}



//单页面公司介绍的数据控制
function aboutus(){
	$othername="aboutus";
	if(!$othername){
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}	
	$intro_class=M('intro_class')->WHERE(' webid='.C('webid').' and othername="'.$othername.'"')->find();
	$this->assign('intro_class',$intro_class);
	$seo=othercateseo($intro_class['classid']);
	$this->getothernav($intro_class['classid']);	
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$web_navigations=M('web_navigation')->field('id')->where('introclassid='.$intro_class['classid'])->find();
	$this->getbanner(0,$this->getnavparentid($web_navigations));
	$this->assign('allclass',$allclass);//全部分类

	if($this->isstatic($_GET['static'])){
		$this->buildHtml("aboutus",'',"ZERO/othercate");	
	}

		
		if(isMobile()&&gethaswap()){
		  $this->display('WAP/othercate');
		}
		else{
		  $this->display('ZERO/othercate');	
		}
			
}


//单页联系我们
function contactus(){
	$othername="contactus";
	if(!$othername){
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}	
	$intro_class=M('intro_class')->WHERE(' webid='.C('webid').' and othername="'.$othername.'"')->find();
	$this->assign('intro_class',$intro_class);
	$seo=othercateseo($intro_class['classid']);
	$this->getothernav($intro_class['classid']);
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$web_navigations=M('web_navigation')->field('id')->where('introclassid='.$intro_class['classid'])->find();
	$this->getbanner(0,$this->getnavparentid($web_navigations));
	$this->assign('allclass',$allclass);//全部分类
		
		if(isMobile()&&gethaswap()){
		  $this->display('WAP/contactus');
		}
		else{
		  $this->display('ZERO/contactus');	
		}
}



//定制化模块


//读取导航上相关的单页面网址
function getothernav($introclassid){

$nav=M('web_navigation')->where('introclassid='.$introclassid)->find();
if($nav['nav_belong']!=0){
	$navparentid=$nav['nav_belong'];
	$navrs=M('web_navigation')->where('nav_belong='.$nav['nav_belong'].' and webid='.C('webid').' and isdeleted=0')->order('nav_ordey')->select();
}else{
	$navrs=M('web_navigation')->where('nav_belong='.$nav['id'].' and webid='.C('webid').' and isdeleted=0')->order('nav_ordey')->select();
	$navparentid=$nav['id'];
}
$navparentname=M('web_navigation')->where('id='.$navparentid)->getfield('title');
$this->assign('navparentid',$navparentid);
$this->assign('navparentname',$navparentname);
$url=get_url();
if($url){
	if(strstr($url,'/demo/')){$flag='/demo/';}	
	if(!$flag){	
		$flag=strstr($url,'192.168.1.8');
		if(strstr($url,'192.168.1.8')){$flag='192.168.1.8';}		
	}
}else{
	$flag='';
}
$websites=M('websites')->where('id='.C('webid'))->field('url,demourl')->find();
foreach($navrs as $key=>$val){

			if($flag=='/demo/'){
				$navrs[$key]['url']=str_replace($websites['url'],$websites['demourl'],$val['url']);
			}elseif($flag=='192.168.1.8'){
				$demourl=str_replace("http://yun.one-all.com/demo/","http://192.168.1.8:8080/",$websites['demourl']);
				$navrs[$key]['url']=str_replace($websites['url'],$demourl,$val['url']);
			}
			if($this->istranslategoogle()){
				$navrs[$key]['title']=$this->addlable('<h3>','</h3>',$val['title']);
			}else{
				$navrs[$key]['title']=$val['title'];
			}
}

$this->assign('navrs',$navrs);

}



//获取banner 参数是banner类型0是其他栏目单页1是首页3是新闻4是产品5是下载7是招聘
function getbanner($type,$nav_weizhi=''){
	$comtus=C("Comtus");
	$webid=C("webid");
	$yuming=C("yuming");
	if($type!=0){	
		$banner=M('ad')->where('webid='.$webid.' and adtypes='.$type.' and lasttime=0 and isused =1 and isdeleted=0 or (webid='.$webid.' and isdeleted=0 and adtypes='.$type.' and lasttime>'.time().')')->order('sort asc')->select();	
	}else{
		$banner=M('ad')->where('webid='.$webid.' and isdeleted=0 and  nav_weizhi='.$nav_weizhi.' and lasttime=0 or (webid='.$webid.' and isused =1 and isdeleted=0 and nav_weizhi='.$nav_weizhi.' and lasttime>'.time().')')->order('sort asc')->select();	

	}
	$this->assign('banner',$banner);//banner信息	
}



//会员模块

//会员登入1.验证用户名密码，写入session
function login(){
		 $allclass=$this->allclass();
		 $this->showpublic();
		 $seo=getheaderseo();	
		 $this->assign('seo',$seo);//seo的信息
		 $this->assign("allclass",$allclass);	
		if(isMobile()&&gethaswap()){
		  $this->display('WAP/login');
		}
		else{
		  $this->display('ZERO/login');	
		}	
		exit;
}
//会员登入1.验证用户名密码，写入session
function auth(){
		 $allclass=$this->allclass();
		 $this->showpublic();
		 $seo=getheaderseo();	
		 $this->assign('seo',$seo);//seo的信息
		 $this->assign("allclass",$allclass);	
	$data=I();
	if($data['name']&&$data['password']){
		$map['webid']=C('webid');
		$map['name']=$data['name'];
		$map['password']=$data['password'];
		$map['is_use']=1;
		$count=M('vipm')->where($map)->count();
		if($count>0){
			session('vip',$data['name']);
			cookie('vip',$data['name']);
			$this->success('登入成功！',U('/index'));		
				
		}else{
			$this->error('登入失败！！');		
		}
	}else{
		if(session('vip')||cookie('vip')){
			if(session('vip')){return session('vip');}else{return cookie('vip');}
		}else{
			if(isMobile()&&gethaswap()){
			  $this->display('WAP/login');
			}
			else{
			  $this->display('ZERO/login');	
			}
		}
	}

}


function classauth($classid='',$type='',$name=''){
	//判断客户有没有启用这个功能有没有
	$auth=M('websites')->where('id='.C('webid'))->find();
	$useauth=$auth['useauth'];
	if($useauth==0){
		//开启了这个功能
		//判断有没有登陆		
		if(session('vip')||cookie('vip')){
			//判断这个新闻分类有没有权限
			return $this->getauth($classid,$type,$name);
		}else{
		//没有登陆就要登陆
			if($type==1){
				$nologin=explode(',',$auth['auth']);
			}
			elseif($type==2){
				$nologin=explode(',',$auth['auth1']);
			}
			elseif($type==3){
				$nologin=explode(',',$auth['auth2']);
			}
			elseif($type==4){
				$nologin=explode(',',$auth['auth3']);				
			}			
			if(in_array($classid,$nologin)){
				return true;
			}else{
				$this->login();
			}		
			
		}
	
		
		
	}else{
	
	}

}

function overtime($time){
	if($time<time()){
		$this->error('无权访问！此号已过期');
	}

}

function getauth($classid='',$type='',$name=''){
// 1是 新闻  2是下载
	if(!session('vip')){ session('vip',cookie('vip'));}
	if($type==1){
		$vipgroup=M('vipm')->join('vipgroup on vipm.vipgroup=vipgroup.classid and vipm.is_use=1 and vipm.name="'.session('vip').'" and vipm.webid='.C('webid'))->find();
		$vipgrouparr=explode(',',$vipgroup['auth']);
		if(!in_array($classid,$vipgrouparr)){
			file_get_contents("http://yun.one-all.com/Admin/index.php/Vipapi/viplog/type/".$type."/typeid/".$classid."/name/".$name."/createtime/".time()."/ip/".get_client_ip()."/vipname/".session('vip')."/flag/0/actionid/1/webid/".C('webid').'/wap/'.isMobile());
			$this->error('无权访问！');
		}else{
			$this->overtime($vipgroup['endtime']);
			$this->assign('authstauts',1);
			return true;
		}
	}elseif($type==2){
		$vipgroup=M('vipm')->join('vipgroup on vipm.vipgroup=vipgroup.classid')->where('vipm.name="'.session('vip').'" and vipm.is_use=1 and vipm.webid='.C('webid'))->find();
		$vipgrouparr=explode(',',$vipgroup['auth1']);
		if(!in_array($classid,$vipgrouparr)){
			file_get_contents("http://yun.one-all.com/Admin/index.php/Vipapi/viplog/type/".$type."/typeid/".$classid."/name/".$name."/createtime/".time()."/ip/".get_client_ip()."/vipname/".session('vip')."/flag/0/actionid/1/webid/".C('webid').'/wap/'.isMobile());
			$this->error('无权访问！');
		}else{
			$this->overtime($vipgroup['endtime']);
			$this->assign('authstauts',1);
			return true;
		}		
	}
	elseif($type==3){
			$vipgroup=M('vipm')->join('vipgroup on vipm.vipgroup=vipgroup.classid and vipm.is_use=1 and vipm.name="'.session('vip').'" and vipm.webid='.C('webid'))->find();
			$vipgrouparr=explode(',',$vipgroup['auth2']);
			if(!in_array($classid,$vipgrouparr)){
				file_get_contents("http://yun.one-all.com/Admin/index.php/Vipapi/viplog/type/".$type."/typeid/".$classid."/name/".$name."/createtime/".time()."/ip/".get_client_ip()."/vipname/".session('vip')."/flag/0/actionid/1/webid/".C('webid').'/wap/'.isMobile());
				$this->error('无权访问！');
			}else{
				$this->overtime($vipgroup['endtime']);
				$this->assign('authstauts',1);
				return true;
			}		
		}	
	elseif($type==4){
			$vipgroup=M('vipm')->join('vipgroup on vipm.vipgroup=vipgroup.classid and vipm.is_use=1 and vipm.name="'.session('vip').'" and vipm.webid='.C('webid'))->find();
			$vipgrouparr=explode(',',$vipgroup['auth3']);
			if(!in_array($classid,$vipgrouparr)){
				file_get_contents("http://yun.one-all.com/Admin/index.php/Vipapi/viplog/type/".$type."/typeid/".$classid."/name/".$name."/createtime/".time()."/ip/".get_client_ip()."/vipname/".session('vip')."/flag/0/actionid/1/webid/".C('webid').'/wap/'.isMobile());
				$this->error('无权访问！');
			}else{
				$this->overtime($vipgroup['endtime']);
				$this->assign('authstauts',1);
				return true;
			}		
		}		
}


function loginout(){
	 $allclass=$this->allclass();
		 $this->showpublic();
		 $seo=getheaderseo();	
		 $this->assign('seo',$seo);//seo的信息
		 $this->assign("allclass",$allclass);	
	session('vip',null); 
	cookie('vip',null);
	$this->success('退出成功！');
}

function register(){
		 $allclass=$this->allclass();
		 $this->showpublic();
		 $seo=getheaderseo();	
		 $this->assign('seo',$seo);//seo的信息
		 $this->assign("allclass",$allclass);	
			if(isMobile()&&gethaswap()){
			  $this->display('WAP/register');
			}
			else{
			  $this->display('ZERO/register');	
			}	
}

function editpassword(){
		 $allclass=$this->allclass();
		 $this->showpublic();
		 $seo=getheaderseo();	
		 $this->assign('seo',$seo);//seo的信息
		 $this->assign("allclass",$allclass);	
	$this->send_mail($feed_email,$content,$subject);	
	if(isMobile()&&gethaswap()){
	  $this->display('WAP/editpassword');
	}
	else{
	  $this->display('ZERO/editpassword');	
	}	
}

	function findpw() {
		 $allclass=$this->allclass();
		 $this->showpublic();
		 $seo=getheaderseo();	
		 $this->assign('seo',$seo);//seo的信息
		 $this->assign("allclass",$allclass);		
		$data=I('post.');
		$content='点击链接修改密码<a href="'.C('imgpath').'/updatepw/name/'.$data['name'].'">'.C('imgpath').'/updatepw/name/'.$data['name'].'</a>';
		$subject='密码修改:';
		$count=M('vipm')->where('name="'.$data['name'].'" and webid='.C('webid'))->count();
		if($count>0){
			$this->send_mail($data['name'],$content,$subject);
			$this->success('发送成功！请至邮箱查看！');
		}else{
			$this->error('无此用户，或没有通过审核！');
		}

	}

function updatepw(){
		 $allclass=$this->allclass();
		 $this->showpublic();
		 $seo=getheaderseo();	
		 $this->assign('seo',$seo);//seo的信息
		 $this->assign("allclass",$allclass);	
	if(isMobile()&&gethaswap()){
	  $this->display('WAP/updatepw');
	}
	else{
	  $this->display('ZERO/updatepw');	
	}	
}

function updatepws(){
	$data=I();
	$map['password']=$data['password'];
	M('vipm')->where('name="'.$data['name'].'" and webid='.C('webid'))->save($map);
	exit;
}

function loginstauts(){
	if(!session('vip')){ session('vip',cookie('vip'));}	
    echo session('vip');
}



function new_detail(){
	if($_GET['nid']){
		$nid=$_GET['nid'];
	}else{
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}
	$this->getbanner(3);	
	$seo=newdetailseo($nid);
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$this->assign('allclass',$allclass);//全部分类
	$allnewclass=$this->getallnewsclass();
	$news=M('news')->WHERE('nid='.$nid.' and webid='.C('webid').' and isdeleted=0 and is_use=1')->find();
	if(!$news){
		$this->_empty();
		exit;	
	}
	//dump($news['news_class']);
	$this->classauth($news['news_class'],1,$news['title']);
	
	
	if($news['news_class']){
	$newclass=M('news_class')->where('classid='.$news['news_class'])->field('class_name,classid')->find();
	$this->assign('newclass',$newclass);
	}
	$newnext=M('news')->where('created<'.$news['created'].' and is_use=1  and isdeleted=0 and news_class='.$news['news_class'])->order('created desc,nid desc')->limit(1)->select();
	$newprev=M('news')->where('created>'.$news['created'].' and is_use=1  and isdeleted=0 and news_class='.$news['news_class'])->order('created asc,nid asc')->limit(1)->select();
	
	//获取标签数据
/*	if($news['label']){
		$arr=explode(',',$news['label'])	;
		$newlabel=$arr;
		foreach($arr as $key=>$val ){
			if($val==''){unset($newlabel[$key]);
			
			}	
		}
		foreach($newlabel as $key=>$val){
		$newslable=M('prolabel')->where('prolabel.pnid!='.$nid.' and prolabel.labelid='.$val.' and  prolabel.type=0 and prolabel.webid='.C("webid"))->join('news on news.nid=prolabel.pnid' )->select();	
		$newslink[$key]=$newslable;
		$proslable=M('prolabel')->where('prolabel.labelid='.$val.' and  prolabel.type=1 and prolabel.webid='.C("webid"))->join('product on product.pid=prolabel.pnid')->select();
		echo M('prolabel')->getlastsql();
		$proslink[$key]=$proslable;
			}
		
	}*/
	//
	//记录新闻点击次数
	$news_click = M('news');
			
			$news_click->click_num = $news['click_num']+1;
			$news_click->where('nid='.$nid)->save();
	
		//评论列表
	    $model111=M("news_comment");
		$commentlist=$model111->where("nid=".$nid." and status=1 and is_delete=0")->limit(5)->select();	
		$this->assign("commentlist",$commentlist); 
	
		//获取关联产品
	if($news["label"]!=""){
	$labelname=explode(",",Ltrim(Rtrim($news["label"],","),","));
	foreach($labelname as $val){
		$where.=" label like '%,".$val.",%' or";
	}
	$where=Rtrim($where,"or");
   
	$labelprod_arr=array();
	$labelmodel=M("product");
	$labelprodlist=$labelmodel->Field("pid,main_img,proalt,pro_name")->where("(".$where.")"." and is_use=1 and isdeleted=0")->limit(4)->select();
	}

	$this->assign("labelprodlist",$labelprodlist);
		//获取关联新闻
	if($news["label"]!=""){
	$labelnames=explode(",",Ltrim(Rtrim($news["label"],","),","));
	//dump($labelnames);
	foreach($labelnames as $vals){
		$wheres.=" label like '%,".$vals.",%' or";
	}
	$wheres=Rtrim($wheres,"or");
   //dump($wheres);
	$labelprod_arr=array();
	$labelmodel=M("news");
	$labelnewlists=$labelmodel->Field("nid,title,changed")->where("(".$wheres.") and nid!=".$nid." and is_use=1 and isdeleted=0")->limit(4)->select();
	}	
	$this->assign("labelnewlists",$labelnewlists);
	//dump($labelnewlists);
	//dump($labelmodel->getlastsql());	
	//dump($newslink);
	//dump($proslink);
	M('label')->where()->find();
	$this->assign('news',$news);
	$this->assign('allnewclass',$allnewclass);//新闻全部分
	$this->assign('newnext',$newnext);
	$this->assign('newprev',$newprev);


	
		if(isMobile()&&gethaswap()){
		  $this->display('WAP/new_detail');
		}
		else{
		  $this->display('ZERO/new_detail');	
		}		
			

}


//下载详细
function download_detail(){
	if($_GET['id']){
		$id=$_GET['id'];	
	}else{
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}
	$alldownloadclass=$this->getalldownloadclass();
	$download=M('download')->WHERE('id='.$id.' and isdeleted=0')->find();
	$this->classauth($download['file_type'],2,$download['title']);
	$this->showpublic();
	$seo=downloaddetailseo($id);
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$this->getbanner(5);
	$this->assign('allclass',$allclass);//全部分类	
	$this->assign('download',$download);//全部下载信息
	$this->assign('alldownloadclass',$alldownloadclass);//全部下载分类信息
	if(isMobile()&&gethaswap()){
		  $this->display('WAP/download_detail');
		}
		else{
		  $this->display('ZERO/download_detail');	
		}		
}








//验证产品会员

//单个详细产品信息
function product_detail($pid){
	$path="";
	//伪静态判断
	if(!is_numeric($pid)){
		$pidrs=M('product')->WHERE('webid='.C("webid").'  and isdeleted=0  and staticname= "'.$pid.'"')->field('pid')->find();
		$pid=$pidrs['pid'];
	}
	
	$parentclass=progetparentid($pid);	
	$system_set=M('system_set')->WHERE(' webid='.C('webid'))->find();
	$pro_newpro_num=$system_set['pro_newpro_num'];
	$hotpro=M('product')->WHERE('webid='.C('webid').' and is_use=1 and is_hot=1 and isdeleted=0')->limit($pro_hotpro_num)->order('hotrootid asc,sort asc,created desc')->select();
	$newpro=M('product')->WHERE('webid='.C('webid').' and is_use=1 and is_new=1 and isdeleted=0')->limit($pro_newpro_num)->order('newrootid asc,sort asc,created desc')->select();		
	$allclass=$this->allclass();
	$product=M('product')->where('webid='.C("webid").' and pid='.$pid)->order('sort asc')->find();
	if($parentclass==$pid){
		$parentclass=$product['class_id'] ;
	}
	$this->classauth($parentclass,3,$product['pro_name']);	
	
	
	
	
	if(!$product){ 
		$this->_empty();
		exit;
	//$this->error('NO FIND！');
	}	
	
	
	
	
	if($vo['linkpros']){
		$linkproarr=explode(',',$product['linkpros']);
		foreach($linkproarr as $k=>$arry){
			$linkproarrs[$k]=M('product')->where('pid='.$arry.' and isdeleted=0')->find();
		}	
		$this->assign('linkproduct',$linkproarrs);
	}
		
	$procate=M('products_category')->where('pcid='.$product['class_id'])->order('sort asc')->find();
	if($product){
		$proimg=M('pro_img')->where('isdeleted=0 and entity_id='.$pid)->order('sort asc')->select();
	}
	$otherpro=M('product')->where(' webid='.C("webid").' and is_use=1 and isdeleted=0  and class_id='.$product['class_id'].' and pid <>'.$pid)->field('pid,pro_name,main_img,proalt')->order('newrootid asc,sort asc,created desc')->limit(8)->select();		
	$seo=prodetailseo($pid);
	$this->assign('hotpro',$hotpro);//热品	
	$this->assign('otherpro',$otherpro);//其他
	$this->assign('newpro',$newpro);//新品	
	$this->assign('seo',$seo);//seo的信息
	$this->assign('parentclass',$parentclass);//父类id		
	$this->showpublic();
	$this->getbanner(4);
	$this->assign('allclass',$allclass);//全部分类
		//记录产品点击次数
		
			
			$product_click = M('product');
			
			$product_click->click_no = $product['click_no']+1;
			$product_click->where('pid='.$pid)->save();
//导航

	if($product){
		if($product['parent_path']){
			$parent_path=explode(',',$product['parent_path']);
			if($parent_path){
				foreach($parent_path as $key=>$val){
					if($val==""){unset($parent_path[$key]);}
					}
					//添加网址
					
					
					//添加导航名字
					
			}
		}
	}
	if($parent_path){
		foreach($parent_path as $key=>$val){
			$rs=M('products_category')->where('pcid='.$val)->field('pcid,class_name')->find();	
			$path[$key]['pcid']=$rs['pcid'];
			$path[$key]['class_name']=$rs['class_name'];
		}
	}
	if($proimg){
		$this->assign('proimg',$proimg);//辅助图
	}
	
	
		//评论列表
	    $model111=M("product_comment");
		$commentlist=$model111->where("prod_id=".$pid." and status=1 and is_delete=0")->limit(5)->select();
		
		
		//获取关联产品
		if($product["label"]!=""){
		$labelname=explode(",",Ltrim(Rtrim($product["label"],","),","));
	    foreach($labelname as $val){
		    $where.=" label like '%,".$val.",%' or";
		}
		$where=Rtrim($where,"or");
	   
		$labelprod_arr=array();
		$labelmodel=M("product");
        $labelprodlist=$labelmodel->Field("pid,main_img,proalt,pro_name")->where("(".$where.") and pid!=".$pid." and is_use=1 and isdeleted=0")->limit(4)->select();
		$this->assign("labelprodlist",$labelprodlist);
		}
		else{
		$this->assign("labelprodlist","");
		}
		//获取关联新闻
	if($product["label"]!=""){
	$labelnames=explode(",",Ltrim(Rtrim($product["label"],","),","));
	//dump($labelnames);
	foreach($labelnames as $vals){
		$wheres.=" label like '%,".$vals.",%' or";
	}
	$wheres=Rtrim($wheres,"or");
   //dump($wheres);
	$labelprod_arr=array();
	$labelmodel=M("news");
	$labelnewlists=$labelmodel->Field("nid,title,changed")->where("(".$wheres.")"." and is_use=1 and isdeleted=0")->limit(4)->select();
	}	
	
	//获取关联案例
	if($product["label"]!=""){
	$labelname=explode(",",Ltrim(Rtrim($product["label"],","),","));
	foreach($labelname as $val){
		$where.=" label like '%,".$val.",%' or";
	}
	$where=Rtrim($where,"or");   
	$labelprod_arr=array();
	$labelmodel=M("cates");
	$labelcaselists=$labelmodel->Field("nid,title,changed")->where("(".$wheres.")"." and is_use=1 and isdeleted=0")->limit(4)->select();
	$this->assign("labelcaselists",$labelcaselists);
	}
	else{
	$this->assign("labelcaselists","");
	}	
	
	
	
	$this->assign("labelnewlists",$labelnewlists);	
        $this->assign("commentlist",$commentlist);    
		$this->assign('path',$path);//面包屑导航
		$this->assign('proimg',$proimg);//辅助图			
		$this->assign('product',$product);//产品信息
		$this->assign('procate',$procate);//产品信息
    if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/product_detail');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/product_detail');
		}
		else{
		  $this->display('ZERO/product_detail');	
		}
		
		
}
//案例

function case_detail(){
	if($_GET['nid']){
		$nid=$_GET['nid'];
	}else{
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}
	$this->getbanner(3);	
	$seo=casedetailseo($nid);
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$this->assign('allclass',$allclass);//全部分类
	$allnewclass=$this->getallcasesclass();
	$news=M('cates')->WHERE('nid='.$nid.' and webid='.C('webid').' and isdeleted=0 and is_use=1')->find();
	if(!$news){
		$this->_empty();
		exit;	
	}
	$this->classauth($news['cates_class'],4,$news['title']);	
	if($news['cates_class']){
	$newclass=M('cates_class')->where('classid='.$news['cates_class'])->field('class_name,classid')->find();
	$this->assign('newclass',$newclass);
	}
	$newnext=M('cates')->where('created<'.$news['created'].' and is_use=1  and isdeleted=0 and cates_class='.$news['cates_class'])->order('created desc,nid desc')->limit(1)->select();
	$newprev=M('cates')->where('created>'.$news['created'].' and is_use=1  and isdeleted=0 and cates_class='.$news['cates_class'])->order('created asc,nid asc')->limit(1)->select();
	
		//获取关联产品
	if($news["label"]!=""){
	$labelname=explode(",",Ltrim(Rtrim($news["label"],","),","));
	foreach($labelname as $val){
		$where.=" label like '%,".$val.",%' or";
	}
	$where=Rtrim($where,"or");
   
	$labelprod_arr=array();
	$labelmodel=M("product");
	$labelprodlist=$labelmodel->Field("pid,main_img,proalt,pro_name")->where("(".$where.")"." and is_use=1 and isdeleted=0")->limit(4)->select();
	}

	$this->assign("labelprodlist",$labelprodlist);
		//获取关联新闻
	if($news["label"]!=""){
	$labelnames=explode(",",Ltrim(Rtrim($news["label"],","),","));
	//dump($labelnames);
	foreach($labelnames as $vals){
		$wheres.=" label like '%,".$vals.",%' or";
	}
	$wheres=Rtrim($wheres,"or");
   //dump($wheres);
	$labelprod_arr=array();
	$labelmodel=M("news");
	$labelnewlists=$labelmodel->Field("nid,title,changed")->where("(".$wheres.") and nid!=".$nid." and is_use=1 and isdeleted=0")->limit(4)->select();
	}	
	$this->assign("labelnewlists",$labelnewlists);
	//dump($labelnewlists);
	//dump($labelmodel->getlastsql());	
	//dump($newslink);
	//dump($proslink);
	//获取关联案例
	if($news["label"]!=""){
	$labelname=explode(",",Ltrim(Rtrim($news["label"],","),","));
	foreach($labelname as $val){
		$where.=" label like '%,".$val.",%' or";
	}
	$where=Rtrim($where,"or");   
	$labelprod_arr=array();
	$labelmodel=M("cates");
	$labelcaselists=$labelmodel->Field("nid,title,changed")->where("(".$wheres.")"." and is_use=1 and isdeleted=0")->limit(4)->select();
	$this->assign("labelcaselists",$labelcaselists);
	}
	else{
	$this->assign("labelcaselists","");
	}	
	//
	//记录新闻点击次数

	$this->assign('news',$news);
	$this->assign('allnewclass',$allnewclass);//新闻全部分
	$this->assign('newnext',$newnext);
	$this->assign('newprev',$newprev);


	
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/case_detail');
				}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/case_detail');
		}
		else{
		  $this->display('ZERO/case_detail');	
		}		
			

}







}




?>