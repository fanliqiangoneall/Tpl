<?php
class CommonAction extends Action {
//404.html	
	function _empty(){
		 header("HTTP/1.0 404 Not Found");
		 $allclass=$this->allclass();
		 $this->showpublic();
		 $seo=getheaderseo();	
		 $this->assign('seo',$seo);//seo的信息
		 $this->assign("allclass",$allclass);
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/404');
	}
	elseif(isMobile()&&gethaswap()){
			$this->display('WAP/404');
		}
		else{
			$this->display('ZERO/404');
		}
	}

	public function _initialize()
    {
		$wechatauto=$_SESSION["wechatauto"];
		$userid=$_SESSION["userid"];
		if(!empty($userid)){
		$umodel=M("wechat_user");
		$urs=$umodel->where("id=".$userid)->count();
		  if($urs<=0){
				$_SESSION["wechatauto"]="";
				$_SESSION["openid"]="";
				$_SESSION["userid"]="";  
				$userid="";
		  }
		}

        if($wechatauto!="ok" || empty($userid)){
		if(isMobile()=="wechat"&&gethaswechat()){
	    $url=C("imgpath")."/index.php/GetInfo/wechatauto";
		redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid='.C("appid").'&redirect_uri='.$url.'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect');
	     }
		}
		//print_r($_SESSION);
	}



//建立分类父类
	function build_tree($root_id){
    	global $rows;
		//dump($rows);
    	$childs=$this->findChild($rows,$root_id);
    	if(empty($childs)){
        	return null;
    	}
   		foreach ($childs as $k => $v){
       		$rescurTree=$this->build_tree($v['pcid']);
       		if( null !=   $rescurTree){ 
       		$childs[$k]['childs']=$rescurTree;
       		}
   		}
    	return $childs;
	}
//查找子类	
	function findChild(&$arr,$id){
   
    	$childs=array();
     	foreach ($arr as $k => $v){
         	if($v['parent_id']== $id){
              	$childs[]=$v;         
         	}        
    	}       
    	return $childs; 
	}	
		
	//获取点击信息
	function statistics(){
		$webid=C("webid");
		$post_val=I('post.');
		$title=$post_val['title'];
		$url=$post_val['url'];
		$ref=$post_val['ref_val'];
		$plat=$post_val['plat'];

				$model	 =	 M('statistics_clicks');

					$model->wid = $webid;
					$model->title = $title;
					$model->url = $url;
					$model->from_url = $ref;
					$model->plat = $plat;
					$model->clicktime = time();
					
					$model->ip =$_SERVER["REMOTE_ADDR"];
					
						if($result	 =	 $model->add()) {
							
							$result=true;
						}else{
							$result=false;
						}
			
		echo $result;
	}
	

		//微信获取点击信息
	function wechatstatistics(){
		$webid=C("webid");
		$post_val=I('post.');
		$title=$post_val['title'];
		$url=$post_val['url'];
		$ref=$post_val['ref_val'];
		//$plat=$post_val['plat'];

				$model	 =	 M('wechat_statistics_clicks');

					$model->wid = $webid;
					$model->w_userid = $_SESSION["userid"];
					$model->title = $title;
					$model->url = $url;
					$model->from_url = $ref;
					$model->plat = 2;
					$model->clicktime = time();
					
					$model->ip =$_SERVER["REMOTE_ADDR"];
					$result	 =	 $model->add();

					
						if($result) {
							
							$result=true;
						}else{
							$result=false;
						}
			
		echo $result;
	}
	
	
	
	
	
	
//检查是否为黑名单url
function checkUrlOrigin(){
	
	$UrlOrigin=$_SERVER['HTTP_REFERER'];
	$UrlOrigin=substr($UrlOrigin,7);
	$n=strpos($UrlOrigin,'/');
	$url=$_SERVER['HTTP_REFERER'];
	$flag=0;
		if ($n){ 
		$UrlOrigin=substr($UrlOrigin,0,$n);
		}
		$map_url['isdeleted']=0;
		 $url_value = M('black')->where($map_url)->select();
		
		if($url_value){
			 foreach($url_value as $val){
				 
				 if($val['url']==$UrlOrigin&&$val['url']!=""){
				
				$flag=1;
				break;
				}
				 
			 }
			
		 }
		if($flag==1){
			exit;
			}
		
	}
	













//首页
function index(){
	$comtus=C("Comtus");
	$webid=C("webid");
	$yuming=C("yuming");
	
	//获取class
	$allclass=$this->allclass();
	$system_set=M('system_set')->WHERE(' webid='.$webid)->find();
	$this->assign('system_set',$system_set);
	$index_new_num=	$system_set['index_new_num'];	
	$index_newpro_num=$system_set['index_newpro_num'];
	$index_hotpro_num=$system_set['index_hotpro_num'];
	$indexpro=M('product')->where(' webid='.$webid.' and is_index=1 and is_use=1 and isdeleted=0  ')->field('proalt,pro_name,main_img,pro_description,pid,pro_model,is_new,is_hot')->order('indexrootid asc,created desc')->select();
	$indexnewpro=M('product')->where(' webid='.$webid.' and is_index=1 and is_use=1 and isdeleted=0 and  is_new=1 ')->field('proalt,pro_name,main_img,pro_description,pid,pro_model,is_new,is_hot')->order('newrootid asc,created desc')->limit($index_newpro_num)->select();
	$indehotxpro=M('product')->where(' webid='.$webid.' and is_index=1 and is_use=1 and isdeleted=0 and  is_hot=1 ')->field('proalt,pro_name,main_img,pro_description,pid,pro_model,is_new,is_hot')->order('hotrootid asc,created desc')->limit($index_hotpro_num)->select();	
	
	$newclass=M('news_class')->where('webid='.C('webid').' and isdeleted=0 ')->order('sort asc ,classid asc')->select();
	foreach($newclass as $key=>$val){
	$new=M('news')->where('webid='.$webid.' and is_index=1 and is_use=1  and isdeleted=0 and news_class='.$val['classid'])->field('title,created,nid,news_description,new_pro')->order('created desc')->select();	
	foreach($new as $i=>$n){
	$new[$i]['class_name']=$val['class_name'];
	}
	$news[$val['classid']]=$new;
	}
	//$news=M('news')->where('webid='.$webid.' and is_index=1 and is_use=1  and isdeleted=0 and news_class='.$val['classid'])->field('title,created,nid')->order('sort desc,created desc')->select();	
	$caseclass=M('cates_class')->where('webid='.C('webid').' and isdeleted=0 ')->order('sort asc ,classid asc')->select();
	foreach($caseclass as $key=>$val){
	$case=M('cates')->where('webid='.$webid.' and is_index=1 and is_use=1  and isdeleted=0 and cates_class='.$val['classid'])->field('title,created,nid,news_description,new_pro')->order('created desc')->select();	
	foreach($cases as $i=>$n){
	$cases[$i]['class_name']=$val['class_name'];
	}
	$cases[$val['classid']]=$case;
	}
	$this->assign('windowType',$system_set['windowType']);
	$this->assign('windowUrl',$system_set['windowUrl']);
	$this->assign('windowImg',getpcimgurl($system_set['windowImg']));
	$this->assign('allclass',$allclass);//首页分类	
	$this->assign('indexpro',$indexpro);//首页显示的产品

	
	
	$this->assign('indexnewpro',$indexnewpro);//首页新品显示的产品
	$this->assign('indehotxpro',$indehotxpro);//首页热品显示的产品//拼写错了追加一个正确的	
	$this->assign('indexhotpro',$indehotxpro);//首页热品显示的产品	
	$this->assign('news',$news);//新闻的信息
	$this->assign('newclass',$newclass);//全部分类
	$this->assign('cases',$cases);//新闻的信息
	$this->assign('caseclass',$caseclass);//全部分类		
	$this->showpublic('index');
	$seo=getheaderseo();	
	$this->assign('seo',$seo);//seo的信息		
	$this->getbanner(1);
	

		
	if($this->isstatic($_GET['static'])){
		$this->buildHtml("index",'',"ZERO/index");	
		$this->buildHtml("mindex",'',"WAP/index");
	}
	
	//echo  gethaswap();
    if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/index');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/index');
		}
		else{
		  $this->display('ZERO/index');	
		}
			
}

//分类
function product_category(){
	//伪静态
	$param=$this->_param(2);
	if($param=='classid'){$param=$_GET['classid'];}	
	if(is_numeric($param)){$classid=$param;}
	else{
		$rs=M('products_category')->field('pcid')->where('webid='.C("webid").' and isdeleted=0  and  cateurl="'.$param.'"')->find();
		$classid=$rs['pcid'];			
	}
	$parentclass=getparentid($classid);	
	$comtus=C("Comtus");
	$webid=C("webid");
	$yuming=C("yuming");	
	$allclass=$this->allclass();
	$system_set=M('system_set')->WHERE(' webid='.$webid)->find();
	$pro_list_pro_num=$system_set['pro_list_pro_num'];
	//dump($system_set);
	
	if($classid==""){
		$prolist=M('products_category')->where('webid='.$webid.' and child=0')->order('sort asc')->field('pcid,parent_id,class_name,child,parent_path,readme,fid,banner,cate_profile')->find();
		$classid=$prolist['pcid'];
	}else{
		$prolist=M('products_category')->where('webid='.$webid.' and pcid='.$classid)->field('pcid,parent_id,class_name,child,parent_path,readme,fid,banner,cate_profile')->order('sort asc')->find();		
	}
	if($prolist){
		if($prolist['parent_path']){
			$parent_path=explode(',',$prolist['parent_path']);
			if($parent_path){
				foreach($parent_path as $key=>$val){
					if($val==""){unset($parent_path[$key]);}
					}
					//添加网址
					
					
					//添加导航名字
					
			}
		}
	}else{
		$this->_empty();
		exit;
	}
	if($parent_path){
		foreach($parent_path as $key=>$val){
			$rs=M('products_category')->where('pcid='.$val)->field('pcid,class_name,readme')->find();	
			$path[$key]['pcid']=$rs['pcid'];
			$path[$key]['class_name']=$rs['class_name'];
		}
	}	
	$this->whichpage();// 导入分页类		
	if($prolist['child']>0){
		//有子类的类
		$count      = M('product')->where('webid='.$webid.' and isdeleted=0 and is_use=1  and parent_path like "%,'.$classid.',%" or (webid='.$webid.'  and isdeleted=0 and is_use=1 and other_class_id like "%,'.$classid.',%")')->field('proalt,pro_name,main_img,pro_description,pro_model,is_new,is_hot')->count();// 查询满足要求的总记录数 $map表示查询条件数
		$Page       = new Page($count,$pro_list_pro_num);// 实例化分页类 传入总记录数
		$Page->url = 'product_category/classid/'.$classid.'/pageNum';
		$show       = $Page->show();// 分页显示输出			
		$pro = M('product')->where('webid='.$webid.' and isdeleted=0 and  is_use=1  and parent_path like "%,'.$classid.',%" or (webid='.$webid.'  and isdeleted=0 and is_use=1 and other_class_id like "%,'.$classid.',%")')->field('proalt,pro_name,main_img,pro_description,pid,pro_model,is_new,is_hot')->order('sort asc')->limit($Page->firstRow.','.$Page->listRows)->select();					
	}else{
		$count      =M('product')->where('webid='.$webid.' and isdeleted=0 and is_use=1  and class_id = '.$classid.' or (webid='.$webid.'  and isdeleted=0 and is_use=1 and other_class_id like "%,'.$classid.',%")')->order('sort asc')->field('proalt,pro_name,main_img,pro_description,pro_model,is_new,is_hot')->count();// 查询满足要求的总记录数 $map表示查询条件
		$Page       = new Page($count,$pro_list_pro_num);// 实例化分页类 传入总记录数
		$Page->url = 'product_category/classid/'.$classid.'/pageNum';
		$show       = $Page->show();// 分页显示输出			
		$pro = M('product')->where('webid='.$webid.' and isdeleted=0 and is_use=1  and class_id = '.$classid.' or (webid='.$webid.'  and isdeleted=0 and is_use=1 and other_class_id like "%,'.$classid.',%")')->field('proalt,pro_name,main_img,pro_description,pid,pro_model,is_new,is_hot')->order('sort asc')->limit($Page->firstRow.','.$Page->listRows)->select();		
	}
	$this->assign('page',$show);// 赋值分页输出	
	$seo=procateseo($classid);
	$this->assign('seo',$seo);//seo的信息
		
//模板输出变量
	$proschild=M('products_category')->where('webid='.$webid.' and isdeleted=0 and parent_id='.$classid)->select();
	$this->showpublic();	
	$this->getbanner(4);
	$this->assign('newpro',$newpro);//新品	
	$this->assign('classid',$classid);//classid
	$this->assign('allclass',$allclass);//全部分类
	$this->assign('parentclass',$parentclass);//父类id	
	$this->assign('prochild',$prochild);//子类产品	
	$this->assign('prolist',$prolist);//当前产品子类
	$this->assign('proschild',$proschild);//当前产品分类		
	$this->assign('path',$path);//当前路径
	$this->assign('pro',$pro);//首页显示的产品
	$this->assign('system_set',$system_set);//系统配置




    if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/product_category');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/product_category');
		}
		else{
		  $this->display('ZERO/product_category');	
		}
			

}


//询盘
function inquiry(){
	$seo=getheaderseo();
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$this->getbanner(6);
	$allclass=$this->allclass();	
	$this->assign('allclass',$allclass);//全部分类		
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/inquiry');
	}
	elseif(isMobile()&&gethaswap()){
	$this->display('WAP/inquiry');
	}
	else{
	$this->display('ZERO/inquiry');	
	}
}

//客户反馈
function feedback(){
	$seo=getheaderseo();
	$this->assign('seo',$seo);//seo的信息
	$this->showpublic();
	$allclass=$this->allclass();	
	$this->assign('allclass',$allclass);//全部分类		
	
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/feedback');
	}
	elseif(isMobile()&&gethaswap()){
	$this->display('WAP/feedback');
	}
	else{
	$this->display('ZERO/feedback');	
	}
}

//产品评论列表
function commentlist(){
$pid=$this->_request("pid");
//echo $pid;


$pro_model=M("product");
$pro_name=$pro_model->where("pid=".$pid)->getField("pro_name");
$this->assign('pro_name',$pro_name);
    $seo=getheaderseo();
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();	
	$this->assign('allclass',$allclass);//全部分类	
$model=M("product_comment");
    $this->whichpage();// 导入分页类
    $count      =$model->where("prod_id=".$pid." and status=1 and is_delete=0")->count();// 查询满足要求的总记录数 $map表示查询条件
    $Page       = new Page($count,20);// 实例化分页类 传入总记录数
	$Page->url = 'commentlist/pid/'.$pid.'/pageNum/';
    $show       = $Page->show();// 分页显示输出
    // 进行分页数据查询
    $list = $model->where("prod_id=".$pid." and status=1 and is_delete=0")->limit($Page->firstRow.','.$Page->listRows)->select();
    $this->assign('page',$show);// 赋值分页输出
	$this->assign('page',$show);// 赋值分页输出
	$this->assign('list',$list);
	$this->assign('commentlist',$list);
     
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/commentlist');
	}
	elseif(isMobile()&&gethaswap()){
	$this->display('WAP/commentlist');
	}
	else{
	$this->display('ZERO/commentlist');	
	}
}

//产品列表页
function product(){
	$pid=$this->_param(2);
	if($pid=='pid'){$pid=$_GET['pid'];}
	if($pid&&$pid!='pageNum'){ $this->product_detail($pid); exit;}
	$system_set=M('system_set')->WHERE(' webid='.C('webid'))->find();
	$pro_newpro_num=$system_set['pro_newpro_num'];
	$pro_hotpro_num=$system_set['pro_hotpro_num'];
	$pro_list_pro_num=$system_set['pro_list_pro_num'];
	$allclass=$this->allclass();	
	$this->showpublic();
	$hotpro=M('product')->WHERE('webid='.C('webid').' and is_use=1 and is_hot=1 and isdeleted=0')->limit($pro_hotpro_num)->order('hotrootid asc,sort asc,created desc')->select();
	$newpro=M('product')->WHERE('webid='.C('webid').' and is_use=1 and is_new=1 and isdeleted=0')->limit($pro_newpro_num)->order('newrootid asc,sort asc,created desc')->select();
    $this->whichpage();// 导入分页类
		
    $count      =  M('product')->WHERE('webid='.C('webid').' and is_use=1 and isdeleted=0')->order('created desc')->count();// 查询满足要求的总记录数 $map表示查询条件
	//$count=$this->getnum($count,$pro_list_pro_num);
    $Page       = new Page($count,$pro_list_pro_num);// 实例化分页类 传入总记录数
	$Page->url = "product/pageNum/";
    $show       = $Page->show();// 分页显示输出
	//if($Page->listRows>$count){ echo $Page->listRows=$count;}
    // 进行分页数据查询
    $allpro = M('product')->WHERE('webid='.C('webid').' and is_use=1 and isdeleted=0 ')->order('sort asc,created desc')->limit($Page->firstRow.','.$Page->listRows)->select();
    $this->assign('allpro',$allpro);// 赋值数据集
    $this->assign('page',$show);// 赋值分页输出
	$this->getbanner(4);
	$seo=productseo();
	$this->assign('seo',$seo);//seo的信息	
	$this->assign('system_set',$system_set);//系统配置
	$this->assign('hotpro',$hotpro);//热品	
	$this->assign('newpro',$newpro);//新品
	$this->assign('allclass',$allclass);//全部分类

	if($this->isstatic($_GET['static'])){
		$this->buildHtml("product",'',"ZERO/product");	
	}	

	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/product');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/product');
		}
		else{
		  $this->display('ZERO/product');	
		}	
}





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
		//echo $labelmodel->getlastsql();
	//exit;
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
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$web_navigations=M('web_navigation')->field('id')->where('introclassid='.$intro_class['classid'])->find();
	$this->getbanner(0,$web_navigations['id']);
	$this->assign('allclass',$allclass);//全部分类

	if($this->isstatic($_GET['static'])){
		$this->buildHtml("aboutus",'',"ZERO/othercate");	
	}

		
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/othercate');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/othercate');
		}
		else{
		  $this->display('ZERO/othercate');	
		}
			
}

//单页面人才招聘的数据控制
//人才招聘的数据控制
function jobs(){
	$seo=getheaderseo();
	$this->assign('seo',$seo);//seo的信息		
	$this->getbanner(7);
	$jobs=M('jobs')->where('webid='.C('webid').' and isdeleted=0 and isissue=1')->order('sort asc, jobid desc')->select();
	$this->assign('jobs',$jobs);
	$this->showpublic();
	$allclass=$this->allclass();
	$this->assign('allclass',$allclass);//全部分类

	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/jobs');
	}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/jobs');
	}
	else{
	  $this->display('ZERO/jobs');	
	}			
}

//人才招聘的数据控制
function job(){
	$jobid=$this->_request("jobid");
	if(!$jobid){
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}
	$seo=jobseo($jobid);
	$this->assign('seo',$seo);//seo的信息
	$this->getbanner(7);
	$this->showpublic();
	$allclass=$this->allclass();
	$this->assign('allclass',$allclass);//全部分类	
	$job=M('jobs')->where('webid='.C('webid').' and jobid='.$jobid.' and isdeleted=0 and isissue=1')->find();
	$this->assign('job',$job);

	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/job');
	}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/job');
	}
	else{
	  $this->display('ZERO/job');	
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
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$web_navigations=M('web_navigation')->field('id')->where('introclassid='.$intro_class['classid'])->find();
	$this->getbanner(0,$web_navigations['id']);
	$this->assign('allclass',$allclass);//全部分类
		
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/contactus');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/contactus');
		}
		else{
		  $this->display('ZERO/contactus');	
		}
}


//单页面的数据控制
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
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();
	$web_navigations=M('web_navigation')->field('id')->where('introclassid='.$intro_class['classid'])->find();
	$this->getbanner(0,$web_navigations['id']);
	$this->assign('allclass',$allclass);//全部分类
		
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/othercate');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/othercate');
		}
		else{
		  $this->display('ZERO/othercate');	
		}
			
}

	
function news(){
	$system_set=M('system_set')->WHERE('webid='.C('webid'))->find();	
	$newlist_new_num=$system_set['newlist_new_num'];
	if(!$newlist_new_num){$newlist_new_num=20;}
	$seo=newseo();
	$this->assign('seo',$seo);//seo的信息	
	$allnewclass=$this->getallnewsclass();
	$hotnews=M('news')->where('webid='.C('webid').' and isdeleted=0 and is_hot=1 and is_use=1 ')->order('is_new desc,created desc,nid desc')->select();
	$newnews=M('news')->where('webid='.C('webid').' and isdeleted=0 and is_new=1 and is_use=1 ')->order('created desc,nid desc')->select();
    $this->whichpage();// 导入分页类
    $count      = M('news')->where('webid='.C('webid').' and isdeleted=0 and is_use=1 ')->count();// 查询满足要求的总记录数 $map表示查询条件
	//$count=$this->getnum($count,$system_set['newlist_new_num']);
    $Page       = new Page($count,$newlist_new_num);// 实例化分页类 传入总记录数
	$Page->url = "news/pageNum/";
    $show       = $Page->show();// 分页显示输出
	//if($Page->listRows>$count){ echo $Page->listRows=$count;}
    // 进行分页数据查询
    $allnews = M('news')->where('webid='.C('webid').' and isdeleted=0 and is_use=1 ')->order('is_new desc,created desc,nid desc')->limit($Page->firstRow.','.$Page->listRows)->select();
    $this->assign('allnews',$allnews);// 赋值数据集
    $this->assign('page',$show);// 赋值分页输出
	
	
	
	$allclass=$this->allclass();
	$this->showpublic();
	$this->getbanner(3);
	$this->assign('hotnews',$hotnews);//热点新闻
	$this->assign('newnews',$newnews);//置顶新闻新闻	
	$this->assign('allclass',$allclass);//全部分类		
	$this->assign('allnewclass',$allnewclass);//新闻全部分类

	if($this->isstatic($_GET['static'])){
		$this->buildHtml("news",'',"ZERO/news");	
	}


		
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/news');
	}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/news');
	}
	else{
	  $this->display('ZERO/news');	
	}		

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

	
	M('label')->where()->find();
	$this->assign('news',$news);
	$this->assign('allnewclass',$allnewclass);//新闻全部分
	$this->assign('newnext',$newnext);
	$this->assign('newprev',$newprev);


	
   if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/new_detail');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/new_detail');
		}
		else{
		  $this->display('ZERO/new_detail');	
		}		
			

}
function new_category(){
	$system_set=M('system_set')->WHERE('webid='.C('webid'))->find();
	$newlist_new_num=$system_set['newlist_new_num'];
	if(!$newlist_new_num){$newlist_new_num=20;}	
	if($_GET['classid']){
		$clissid=$_GET['classid'];
	}else{
		header("HTTP/1.0 404 Not Found");
		//$this->_empty();
		//exit;
		//$this->error('NO Find!');
	}
	$this->getbanner(3);	
	$this->showpublic();
	$allclass=$this->allclass();
	$seo=newcateseo($clissid);
	$this->assign('seo',$seo);//seo的信息			
	$this->assign('allclass',$allclass);//全部分类
	$allnewclass=$this->getallnewsclass();
    $this->whichpage();// 导入分页类
    $count      = M('news')->where('news_class='.$clissid.' and isdeleted=0 and is_use=1')->order('created desc,nid desc')->count();// 查询满足要求的总记录数 $map表示查询条件
    $Page       = new Page($count,$newlist_new_num);// 实例化分页类 传入总记录数
	$Page->url = "new_category/classid/".$clissid."/pageNum/";	
    $show       = $Page->show();// 分页显示输出	
    // 进行分页数据查询
    $newscatelist = M('news')->where('news_class='.$clissid.' and isdeleted=0 and is_use=1')->order('created desc,nid desc')->limit($Page->firstRow.','.$Page->listRows)->select();
	if(!$newscatelist){
		//$this->_empty();
		//exit;
		header("HTTP/1.0 404 Not Found");
	}
    $this->assign('newscatelist',$newscatelist);// 赋值数据集
    $this->assign('page',$show);// 赋值分页输出
	$newscate=M('news_class')->where('classid='.$clissid)->find();
	$this->assign('allnewclass',$allnewclass);//新闻全部分
	$this->assign('newscatelist',$newscatelist);//新闻类别列表
	$this->assign('newscate',$newscate);//分类新闻信息
	
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/new_category');
	}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/new_category');
	}
	else{
	  $this->display('ZERO/new_category');	
	}		
				
}

//产品评论列表
function newscommentlist(){
$nid=$this->_request("nid");
//echo $pid;


$pro_model=M("news");
$pro_name=$pro_model->where("nid=".$nid)->getField("title");
$this->assign('pro_name',$pro_name);
    $seo=getheaderseo();
	$this->assign('seo',$seo);//seo的信息	
	$this->showpublic();
	$allclass=$this->allclass();	
	$this->assign('allclass',$allclass);//全部分类	
$model=M("news_comment");
    $this->whichpage();// 导入分页类
    $count      =$model->where("nid=".$nid." and status=1 and is_delete=0")->count();// 查询满足要求的总记录数 $map表示查询条件
    $Page       = new Page($count,20);// 实例化分页类 传入总记录数
	$Page->url = 'commentlist/pid/'.$pid.'/pageNum/';
    $show       = $Page->show();// 分页显示输出
    // 进行分页数据查询
    $list = $model->where("nid=".$nid." and status=1 and is_delete=0")->limit($Page->firstRow.','.$Page->listRows)->select();
    $this->assign('page',$show);// 赋值分页输出
	$this->assign('list',$list);
	$this->assign('commentlist',$list);	

    if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/commentlist');
	}
	elseif(isMobile()&&gethaswap()){
	$this->display('WAP/commentlist');
	}
	else{
	$this->display('ZERO/commentlist');	
	}
}



//下载列表
function download(){
	$seo=getheaderseo();
	$this->assign('seo',$seo);//seo的信息	
	$alldownloadclass=$this->getalldownloadclass();
    $this->whichpage();// 导入分页类
    $count      = M('download')->WHERE('webid='.C('webid').' and isdeleted=0')->count();// 查询满足要求的总记录数 $map表示查询条件
    $Page       = new Page($count,20);// 实例化分页类 传入总记录数
	$Page->url = "download/pageNum/";;
    $show       = $Page->show();// 分页显示输出
    // 进行分页数据查询
    $download = M('download')->WHERE('webid='.C('webid').' and isdeleted=0')->order('update_time desc')->limit($Page->firstRow.','.$Page->listRows)->select();
    $this->assign('download',$download);// 赋值数据集
    $this->assign('page',$show);// 赋值分页输出
	$this->assign('download',$download);//全部下载信息
	$this->assign('alldownloadclass',$alldownloadclass);//全部下载分类信息
	$this->showpublic();
	$allclass=$this->allclass();
	$this->getbanner(5);
	$this->assign('allclass',$allclass);//全部分类
		
	if($this->isstatic($_GET['static'])){
		$this->buildHtml("download",'',"ZERO/download");	
	}		
			
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/download');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/download');
		}
		else{
		  $this->display('ZERO/download');	
		}	
}
//下载分类
function download_category(){
	if($_GET['classid']){
		$classid=$_GET['classid'];	
	}else{
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}
	$alldownloadclass=$this->getalldownloadclass();
    $this->whichpage();// 导入分页类
    $count      = M('download')->WHERE('file_type='.$classid.' and isdeleted=0 and is_member=1 ')->count();// 查询满足要求的总记录数 $map表示查询条件
    $Page       = new Page($count,20);// 实例化分页类 传入总记录数
	$Page->url = "download_category/classid/".$classid."/pageNum/";
    $show       = $Page->show();// 分页显示输出
    // 进行分页数据查询
    $download =M('download')->WHERE('file_type='.$classid.' and isdeleted=0 and is_member=1 ')->order('update_time desc')->limit($Page->firstRow.','.$Page->listRows)->select();	
	$downcate=M('download_class')->where('classid='.$classid)->find();
	$this->assign('download',$download);//全部下载信息
	$this->assign('alldownloadclass',$alldownloadclass);//全部下载分类信息
	$this->showpublic();
	$allclass=$this->allclass();
	$this->getbanner(5);
	$seo=downloadcateseo($classid);
	$this->assign('page',$show);//seo的信息	
	$this->assign('seo',$seo);//seo的信息	
	$this->assign('allclass',$allclass);//全部分类
	$this->assign('downcate',$downcate);//分类信息	
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/download_category');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/download_category');
		}
		else{
		  $this->display('ZERO/download_category');	
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
	$allclass=$this->allclass();
	$this->assign('allclass',$allclass);//全部分类	
	$this->assign('download',$download);//全部下载信息
	$this->assign('alldownloadclass',$alldownloadclass);//全部下载分类信息
	if(isMobile()=="wechat"&&gethaswechat()){
	  $this->display('WECHAT/download_detail');
	}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/download_detail');
		}
		else{
		  $this->display('ZERO/download_detail');	
		}		
}













function allclass(){
		global $rows;
		$map['isdeleted']=0;
		$map['webid']=C("webid");		
		$mould=M('products_category');
		$rs=$mould->where($map)->order('sort asc')->select();
		foreach ($rs as $key=>$val){
			if($this->istranslategoogle()){
				$rs[$key]['class_name']=$this->addlable('<h3>','</h3>',$val['class_name']);
			}else{
				$rs[$key]['class_name']=$val['class_name'];
				}
		}
		//dump($rows);
		$rows=$rs;
		$tree=$this->build_tree(0);
		return $tree;		
}











//公用信息
function showpublic($type=""){
	$comtus=C("Comtus");
	$webid=C("webid");
	$yuming=C("yuming");
	$this->indexmanage();	
	$this->checkUrlOrigin();
	if(isMobile()=="wechat"&&gethaswechat()){
	 	$wechatlogo=M('wechaconfig')->where('webid='.C('webid'))->getfield('fid');
	 	$this->assign('wechatlogo',$wechatlogo);
	}

		
	$url=get_url();//检查是否上线
		if($url){
		if(strstr($url,'/demo/')==false&&strstr($url,':8080')==false){
			$issx=M("websites")->where("id=".$webid)->getField("issx");
			if($issx==0){
				$this->assign("urlString","http://yun.one-all.com/alert.html");
				
			}
		}	
	}
	if($url){
		if(strstr($url,'/demo/')){$flag='/demo/';}	
		if(!$flag){	
			$flag=strstr($url,'192.168.1.8');
			if(strstr($url,'192.168.1.8')){$flag='192.168.1.8';}		
		}
	}else{
		$flag='';
	}	
	$websites=M('websites')->where('id='.$webid)->field('url,demourl')->find();
	//echo M('websites')->getlastsql();
	//dump($websites);
	$about=M('about')->where('webid='.$webid)->find();
	$company_info=M('company_info')->where('webid='.$webid)->find();
	$web_navigation=M('web_navigation')->where('webid='.$webid.' and nav_type=1 and nav_valid=1 and nav_belong=0  ')->order('nav_ordey asc')->select();
	if($web_navigation){
		foreach($web_navigation as $key=>$val){
			//echo $flag."flag<br>";
			if($flag=='/demo/'){
				$web_navigation[$key]['url']=str_replace($websites['url'],$websites['demourl'],$val['url']);
			}elseif($flag=='192.168.1.8'){
				$demourl=str_replace("http://yun.one-all.com/demo/","http://192.168.1.8:8080/",$websites['demourl']);
				$web_navigation[$key]['url']=str_replace($websites['url'],$demourl,$val['url']);
			}
			if($this->istranslategoogle()){
				$web_navigation[$key]['title']=$this->addlable('<h2>','</h2>',$val['title']);
			}else{
				$web_navigation[$key]['title']=$val['title'];
			}
			
			if($val['nav_belong']==0){
				$rs=M('web_navigation')->WHERE('webid='.$webid.' and nav_valid=1 and nav_belong='.$val['id'])->order('nav_ordey asc')->select();
				
				foreach($rs as $k=> $val){
					if($flag=='/demo/'){
						$rs[$k]['url']=str_replace($websites['url'],$websites['demourl'],$val['url']);
					}	
					elseif($flag=='192.168.1.8'){
						$demourl=str_replace("http://yun.one-all.com/demo/","http://192.168.1.8:8080/",$websites['demourl']);
						$rs[$k]['url']=str_replace($websites['url'],$demourl,$val['url']);
					}
					else{
						$rs[$k]['url']=$val['url'];
					}	
					$web_navigation[$key]['child']=$rs;				
				}
		
				
			}
		}	
	}

	//底部友链
	//判断是不是在首页
	if($type=="index"){
		$friend_link=M('friend_link')->where('webid='.$webid.' and is_use =1 and isdeleted=0 and top=0 ')->order('sort asc')->select();
		$friend_linktop=M('friend_link')->where('webid='.$webid.' and is_use =1 and isdeleted=0 and top=1 ')->order('sort asc')->select();
	}else{
		$friend_link=M('friend_link')->where('webid='.$webid.' and is_use =1 and isdeleted=0 and top=0 and only_index=0 ')->order('sort asc')->select();
		$friend_linktop=M('friend_link')->where('webid='.$webid.' and is_use =1 and isdeleted=0 and top=1 and only_index=0 ')->order('sort asc')->select();
	
	}
	
	//底部导航
	$web_navigationfoot=M('web_navigation')->where('webid='.$webid.' and nav_type=2 and nav_valid=1 and nav_belong=0  ')->order('nav_ordey asc')->select();
	if($web_navigationfoot){
		foreach($web_navigationfoot as $key=>$val){
			//echo $flag."flag<br>";
			if($flag){
				$web_navigationfoot[$key]['url']=str_replace($websites['url'],$websites['demourl'],$val['url']);
			}
			//$web_navigationfoot[$key]['title']=$this->addlable('<h2>','</h2>',$val['title']);
			if($val['nav_belong']==0){
				$rs=M('web_navigation')->WHERE('webid='.$webid.' and nav_belong='.$val['id'])->order('nav_ordey asc')->select();
				$web_navigationfoot[$key]['child']=$rs;
			}
		}
	}		
	//dump($web_navigation);
	$logo=getimgurl($company_info['logo_bg']);//logo的地址
	$this->assign('about',$about);//公司联系信息	
	$this->assign('company_info',$company_info);//公司信息
	//dump(C('webid'));
	$logo='<img src="'.$logo.'" alt="'.$company_info['logo_title'].'" title="'.$company_info['logo_title'].'" border="0"/>';
	$nav_newsclass=M('news_class')->where('webid='.$webid.' and isdeleted=0')->order('sort asc ,classid asc')->select();
	if($this->istranslategoogle()){	
	$logo=$this->addlable('<h1>','</h1>',$logo);
	}else{
	$logo=$logo;	
	}
	$this->assign('nav_newsclass',$nav_newsclass);//导航新闻分类
	$this->assign('logo',$logo);//logo的地址
	$this->assign('web_navigation',$web_navigation);//导航列表
	$this->assign('friend_link',$friend_link);//友情列表
	$this->assign('friend_linktop',$friend_linktop);//友情列表
	$this->assign('web_navigationfoot',$web_navigationfoot);//底部导航列表	
		
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



	










	function send_mail($receive_mail,$content,$subject){
	import('@.ORG.Util.Email');
	$smtpserver = "c1.icoremail.net";//SMTP服务器
	$smtpserverport =25;//SMTP服务器端口
	
	$email_arr=array("0"=>array("smtpusermail"=>"service1@one-all.com","smtpuser"=>"service1@one-all.com","smtppass"=>"zhservice1"),
	"1"=>array("smtpusermail"=>"service2@one-all.com","smtpuser"=>"service2@one-all.com","smtppass"=>"zhservice2"),
	"2"=>array("smtpusermail"=>"service3@one-all.com","smtpuser"=>"service3@one-all.com","smtppass"=>"zhservice3"));
	
	$num=rand(0,2);
	
	$smtpusermail = $email_arr[$num]["smtpusermail"];//SMTP服务器的用户邮箱
	$smtpuser = $email_arr[$num]["smtpuser"];//SMTP服务器的用户帐号
	$smtppass = $email_arr[$num]["smtppass"];//SMTP服务器的用户密码

	$smtpemailto = $receive_mail;//发送给谁	
	$mailtitle =  "=?UTF-8?B?".base64_encode($subject)."?=";//邮件主题
	$mailcontent = $content;//邮件内容
	$mailtype = "HTML";//邮件格式（HTML/TXT）,TXT为文本邮件
	//************************ 配置信息 ****************************
	$smtp = new smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);//这里面的一个true是表示使用身份验证,否则不使用身份验证.
	$smtp->debug = false;//是否显示发送的调试信息
	$state = $smtp->sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype);

	if($state==""){
      return false;
	}
	else{
	  return true;
	}
}




//保存询盘
public function saveinquiry(){






	$ip=$_SERVER["REMOTE_ADDR"];

	$plat=isMobile()?1:0;

	if(isMobile()==="wechat"&&gethaswechat()){

		$plat=2;

	}

	else{

	    $plat=$plat;

	}

	$webid=C("webid");

	$model_black=M("black");

	$count=$model_black->where("webid=".$webid." and ip='".$ip."' and isdeleted=0 ")->count();

	

	if(C("language")=='en'){

		$str1='Verification code error!';

		$str2='Consulting the detailed content cannot be empty!';

		$str3='The name cannot be empty!';

		$str4='Incorrect phone range or syntax!';

		$str5='Thanks for your information,we will answer you as soon as possible !';

		$str6='Fail!';		
		//询盘过滤
		$str7='The submitted information contains illegal content. Fail!';	
		
		//新增规则，过滤10分钟重复询盘
		$str8='Fail.There is information submitted within 10 minutes,  please do not submit or resubmit again after 10 minutes!';	
	}else{

		$str1='验证码错误！';	

		$str2='咨询的详细内容不能为空！';

		$str3='姓名不能为空！';	

		$str4='电话有误！';	

		$str5='非常感谢您的询盘,我们已收到您的邮件,我们会尽快联系您!';

		$str6='询盘失败!';
		//询盘过滤
		$str7='提交信息含有违规信息,提交信息失败!';
		
		//新增规则，过滤10分钟重复询盘
		$str8='信息提交失败，10分钟内有过信息提交，请不要重复提交或10分钟后再次提交!';
	}

	if($count==0){

	$this->showpublic();

	$seo=getheaderseo();	

	$this->assign('seo',$seo);//seo的信息	

	$allclass=$this->allclass();	   

	$this->assign('allclass',$allclass);//seo的信息	

header("Content-Type: text/html;charset=utf-8");

   $message=$this->_request("message");

   $linkname=$this->_request("linkname");

   $phone=$this->_request("phone");

   $email=$this->_request("email");

   $code=$this->_request("code");

   $prodid=$this->_request("prodid");
   //if($code!=$_SESSION["helloweba_char"] || $code==""){
//     $this->error($str1);
//   }
   

   if($message==""){		

		$this->error($str2);

	}

	

	if($linkname==""){		

		$this->error($str3);

	}

	

/*	if($phone==""){		

		$this->error('电话不能为空！');

	}*/

	

	$preg= '/[a-zA-Z\x{4e00}-\x{9fa5}]/u'; 

	if(preg_match($preg,$phone)){	

		$this->error($str4);
	}	
	//询盘过滤
	if(stripos($linkname,'href') !== false or stripos($linkname,'http') !== false  or stripos($linkname,'.org') !== false  or stripos($linkname,'.com') !== false or stripos($linkname,'.net') !== false  or stripos($linkname,'.lu') !== false 
	or stripos($message,'href') !== false or stripos($message,'http') !== false  or stripos($message,'.org') !== false  or stripos($message,'.com') !== false or stripos($message,'.net') !== false  or stripos($message,'.lu') !== false 
	){
		
		$this->error($str7);
	}
	
	
	// 新增规则，过滤10分钟重复询盘
	$hasinquiryten = M("feedback")->where(" type='".$plat."' and feed_ip='".get_client_ip()."' and feedback_date>='".(time()-600)."'")->count();
	if($hasinquiryten>0){
		$this->error($str8);
	}
	
	
	// 创建数据对象

		//$data=I('post.');

		$feedback	 =	 M("feedback");

		$data['message']=$message;

		$data['linkname']=$linkname;

		$data['email']=$email;

		$data['phone']=$phone;

		$data['webid']=C("webid");

		$data['language']=C("language");

		$data['feedback_date']=time();

		$data['feed_ip']=get_client_ip();

		$data['type']=$plat;

		if(!$feedback->create()) {

			$this->error($feedback->getError());

		}else{

		

		

	 if($prodid!=0){

	 $mail_model=M("products_category");

	 $proclass=M('product')->where('pid='.$prodid)->getField("class_id");

	 $feed_email=M("products_category")->where("pcid=".$proclass)->getField("feed_email");

/*	 $feed_email=$mail_model->table("products_category as c")

				->join("product as p on p.class_id=c.pcid")

				->where("p.pid=".$prodid." and  p.webid=".C("webid"))->getField("feed_email");*/

	 if($feed_email==""){

	 $mail_model=M("email");

	 $feed_email=$mail_model->where("flag='产品分类询盘' and webid=".C("webid"))->getField("email_url");

		 if($feed_email==""){

		 	$feed_email=$mail_model->where("flag='客户询盘' and webid=".C("webid"))->getField("email_url");

		 }

	 }			

	 }

	 else{

	 $mail_model=M("email");

	 $feed_email=$mail_model->where("flag='客户询盘' and webid=".C("webid"))->getField("email_url");

	 }

		         $content="询盘内容:".$message."<br><br>联系人:".$linkname."<br><br>电话:".$phone."<br><br>邮箱:".$email."<br><br>时间:".date("Y-m-d H:i:s",time())."<br><br>IP:".get_client_ip();

		         $subject="中环互联网提醒您,有来自:".$linkname."(".$phone.")的新询盘，请及时处理，以免错失商机。";

				 //echo $feed_email;

				 $data['sendemail']=$feed_email;

				 $result=$feedback->add($data);	// 写入询盘数据

				 //保存到转化操作收集表

				 if(isMobile()==="wechat"&&gethaswechat()){

				     $statistics_turn	 =	 M("wechat_statistics_turn");

				}

				else{

					$statistics_turn	 =	 M("statistics_turn");

				}

				

				$statistics_turn->url=$_SERVER['HTTP_REFERER'];

				if(isMobile()==="wechat"&&gethaswechat()){

				$statistics_turn->w_userid = $_SESSION["userid"];

				}

				$statistics_turn->wid=C("webid");

				$statistics_turn->clicktime=time();

				$statistics_turn->ip=get_client_ip();

				$statistics_turn->plat=$plat;

				$statistics_turn->type=1;

				$statistics_turn->location=5;

				$statistics_turn->add();

				//$this->send_mail($feed_email,$content,$subject);

			if($result) {

				if(isMobile()==="wechat"&&gethaswechat()){

				  $this->display('WECHAT/success');

				}

				elseif(isMobile()&&gethaswap()){

					$this->display('WAP/success');

				}

				else{

					$this->success($str5);

				}

				

			}else{

				$this->error($str6);

			}

		}	

	}

	else{

		$this->success($str5);

	}
}
public function savefeedback(){
	if(C("language")=='en'){
		$str1='Verification code error!';
		$str2='Content cannot be empty!';
		$str3='The name cannot be empty!';
		$str4='Incorrect phone range or syntax!';
		$str5='Thanks for your information,we will answer you as soon as possible !';
		$str6='Fail!';		
	}else{
		$str1='验证码错误！';	
		$str2='内容不能为空！';
		$str3='姓名不能为空！';	
		$str4='电话有误！';	
		$str5='非常感谢您的询盘,我们已收到您的邮件,我们会尽快联系您!';
		$str6='询盘失败!';
	}	
	
   $ip=$_SERVER["REMOTE_ADDR"];
	$webid=C("webid");
	$count=$model->where("webid=".$webid." and ip='".$ip."' and isdeleted=0")->count();
	if($count==0){
   $message=$this->_request("message");
   $linkname=$this->_request("linkname");
   $phone=$this->_request("phone");
   $email=$this->_request("email");
   $code=$this->_request("code");
   if($code!=$_SESSION["helloweba_char"] || $code==""){
     $this->error($str1);
   }
   
   if($message==""){		
		$this->error('反馈的详细内容不能为空！');
	}
	
	if($linkname==""){		
		$this->error('姓名不能为空！');
	}
	
	if($phone==""){		
		$this->error('电话不能为空！');
	}
	$preg= '/[a-zA-Z\x{4e00}-\x{9fa5}]/u'; 
	if(preg_match($preg,$phone)){	
		$this->error('电话有误！');
	}		
	// 创建数据对象
		//$data=I('post.');
		$feedback	 =	 M("customerfeedback");
		$data['message']=$message;
		$data['linkname']=$linkname;
		$data['email']=$email;
		$data['phone']=$phone;
		$data['webid']=C("webid");
		$data['language']=C("language");
		$data['feedback_date']=time();
		$data['feed_ip']=get_client_ip();
		if(!$feedback->create()) {
			$this->error($feedback->getError());
		}else{
		
		// 写入询盘数据
			if($result	 =	 $feedback->add($data)) {
				$this->success('Thanks for your information,we will answer you as soon as possible !');
			}else{
				$this->error('Fail!');
			}
		}	
   
	}else{
		$this->success('Thanks for your information,we will answer you as soon as possible !');
	}
}	



//保存评论
public function savecontent(){
	$allclass=$this->allclass();	
	$this->showpublic();
	$seo=getheaderseo();	
	$this->assign('seo',$seo);//seo的信息
	$this->assign('allclass',$allclass);//seo的信息	
    $content=$this->_request("content");
	if(C("language")=='en'){
		$str1='Verification code error!';
		$str2='Content cannot be empty!';
		$str3="Success";
		$str4="Fail";	
	}else{
		$str1='验证码错误！';	
		$str2='内容不能为空！';
		$str3="评论成功！";
		$str4="评论失败！";			
	}

   //$code=$this->_request("code2");
//   if($code!=$_SESSION["helloweba_char2"] || $code==""){
//     $this->error($str1);
//   }
   
   if($content==""){		
		$this->error($str2);
	}
	
	
	// 创建数据对象
		//$data=I('post.');
		$comment	 =	 M("product_comment");
		$data['content']=$content;
		$data['adddate']=time();
		$data['webid']=C("webid");
		$data['prod_id']=$this->_request("productid");
		$data['status']=0;
		
		$data['ip']=get_client_ip();
		if(!$comment->create()) {
			$this->error($comment->getError());
		}else{
			// 写入询盘数据
			if($result	 =	 $comment->add($data)) {
				$this->success($str3);
			}else{
				$this->error($str4);
			}
		}	
   
   
}	

//保存评论
public function newssavecontent(){
	if(C("language")=='en'){
		$str1='Verification code error!';
		$str2='Content cannot be empty!';
		$str3="Success";
		$str4="Fail";	
	}else{
		$str1='验证码错误！';	
		$str2='内容不能为空！';
		$str3="评论成功！";
		$str4="评论失败！";			
	}	
	
	$allclass=$this->allclass();
	$this->showpublic();
	$seo=getheaderseo();	
	$this->assign('seo',$seo);//seo的信息
	$this->assign('allclass',$allclass);//seo的信息	
   $content=$this->_request("content");
   $code=$this->_request("code2");
	 //if($code!=$_SESSION["helloweba_char2"] || $code==""){
//	   $this->error($str1);
 //  }
   
   if($content==""){		
		$this->error($str2);
	}
	
	
	// 创建数据对象
		//$data=I('post.');
		$comment	 =	 M("news_comment");
		$data['content']=$content;
		$data['adddate']=time();
		$data['webid']=C("webid");
		$data['nid']=$this->_request("nid");
		$data['status']=0;		
		$data['ip']=get_client_ip();
		if(!$comment->create()) {
			$this->error($comment->getError());
		}else{
			// 写入询盘数据
			if($result	 =	 $comment->add($data)) {
				$this->success($str3);
			}else{
				$this->error($str4);
			}
		}	
   
   
}	


function search(){
	$system_set=M('system_set')->WHERE(' webid='.C('webid'))->find();	
	$this->showpublic();
	if($_GET['keywords']){
		$pro_name=$_GET['keywords'];
	}else{
		$pro_name=$_POST['keywords'];
	}
	if($_REQUEST['pro_name']){
		$pro_name=$_REQUEST['pro_name'];
	}
	if($_GET['cate']){
		$pro_cate=$_GET['cate'];
	}else{
		$pro_cate=$_POST['cate'];
	}
	
	if(!$pro_cate){
	$this->whichpage();// 导入分页类		
	$count      =M('product')->where(' webid='.C('webid').' and (pro_name like "%'.$pro_name.'%" or pro_model like "%'.$pro_name.'%") and isdeleted =0 and is_use =1 ')->count();
	$Page       = new Page($count,$system_set['search_pro_num']);// 实例化分页类 传入总记录
	if($pro_name)
	{
		$Page->url = 'search/keywords/'.$pro_name.'/pageNum';
    }
	else{
		$Page->url = 'search/pageNum';
		}
	$show       = $Page->show();
	$searchpro=M('product')->where(' webid='.C('webid').' and (pro_name like "%'.$pro_name.'%" or pro_model like "%'.$pro_name.'%") and isdeleted =0 and is_use =1 ')->limit($Page->firstRow.','.$Page->listRows)->select();
	}else{
		//有分类的搜索
	$this->whichpage();// 导入分页类		
	$count      =M('product')->DISTINCT(true)->where(' webid='.C('webid').' and (pro_name like "%'.$pro_name.'%" or pro_model like "%'.$pro_name.'%") and isdeleted =0 and is_use =1 and  class_id='.$pro_cate.' or ( isdeleted =0 and is_use =1  and webid= '.C('webid').' and (pro_name like "%'.$pro_name.'%" or pro_model like "%'.$pro_name.'%") and parent_path like "%,'.$pro_cate.',%")')->count();
	$Page       = new Page($count,$system_set['search_pro_num']);// 实例化分页类 传入总记录
	
	if($pro_name)
	{
		$Page->url = 'search/keywords/'.$pro_name.'/pro_cate/'.$pro_cate.'/pageNum';
    }
	else{
		$Page->url = 'search/pro_cate/'.$pro_cate.'/pageNum';
		}
	
	$show       = $Page->show();
	$searchpro=M('product')->DISTINCT(true)->where(' webid='.C('webid').' and (pro_name like "%'.$pro_name.'%" or pro_model like "%'.$pro_name.'%") and isdeleted =0 and is_use =1 and  class_id='.$pro_cate.' or ( isdeleted =0 and is_use =1  and webid= '.C('webid').' and (pro_name like "%'.$pro_name.'%" or pro_model like "%'.$pro_name.'%") and parent_path like "%,'.$pro_cate.',%")')->limit($Page->firstRow.','.$Page->listRows)->select();	
	}
	//echo M('product')->getlastsql();
	$allclass=$this->allclass();		
	$this->assign('allclass',$allclass);//全部分类	
	$seo=getheaderseo();	
	$this->assign('seo',$seo);//seo的信息	
	$this->assign('searchpro',$searchpro);
	$this->assign('system_set',$system_set);
	$this->assign('page',$show);// 赋值分页输出
	
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/search');
				}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/search');
	}
	else{
	  $this->display('ZERO/search');	
	}	
}



//前台ajax判断访问终端
function hasMobile(){
	 if(isMobile()=="wechat"&&gethaswechat()){
		C("wechat");
	}
	elseif(isMobile()&&gethaswap()){
		 echo C("wap");
	}else{
		 echo "www";
	}	
}
function getwater()
{
	$main_img=$_GET['fid'];	
	
	
	$webid=C("webid");
	$fid=M('system_set')->field('shuiyin,shuiyin_img')->WHERE(' webid='.$webid)->find();
	if($fid['shuiyin']==1){
		$water_im=getpcimgurl($fid['shuiyin_img']);
	}else{
		$water_im="";
	}
	
	
	$filemime=M('file_managed')->field('filemime')->WHERE(' fid='.$main_img)->find();
	$im = getpcimgurl($main_img);



	
    import('ORG.Net.MyImage');
	$Image = new Image();
	
	$Image->showImg($im,$water_im);

}
//判断是不是要生成静态
function isstatic($flag){
	if($flag){
		return true;	
	}else{
		return false;
	}	
}
//最大显示个数
function getnum($count,$litmit){
if($count>$litmit){
	return $litmit;
}else{
	return $count;
}	
}



function addlable($h,$wh,$str){
	return $h.$str.$wh;
}


function getallnewsclass(){
	$allnewclass=M('news_class')->where(' webid='.C('webid'). ' and isdeleted=0 ')->order('sort asc ,classid asc')->select();
	foreach($allnewclass as $key=>$val){
		if($this->istranslategoogle()){	
		 $allnewclass[$key]['class_name']=$this->addlable('<h3>','</h3>',$val['class_name']);
		}else{
		 $allnewclass[$key]['class_name']=$val['class_name'];
		}
	}
	return $allnewclass;
}


function getallcasesclass(){
	$allclass=M('cates_class')->where(' webid='.C('webid'). ' and isdeleted=0 ')->order('sort asc ,classid asc')->select();
	foreach($allclass as $key=>$val){
		if($this->istranslategoogle()){	
		 $allclass[$key]['class_name']=$this->addlable('<h3>','</h3>',$val['class_name']);
		}else{
		 $allclass[$key]['class_name']=$val['class_name'];
		}
	}
	return $allclass;
}


function getalldownloadclass(){
	$alldownloadclass=M('download_class')->where('webid='.C('webid').' and isdeleted=0')->order('rootid desc,classid desc')->select();
		foreach($alldownloadclass as $key=>$val){
			if($this->istranslategoogle()){
			 $alldownloadclass[$key]['class_name']=$this->addlable('<h3>','</h3>',$val['class_name']);
			}else{
			$alldownloadclass[$key]['class_name']=$val['class_name'];
			}
		}
		return $alldownloadclass;
}

//所有热品
function all_ishot(){
	$comtus=C("Comtus");
	$webid=C("webid");
	$yuming=C("yuming");	
	$allclass=$this->allclass();
	$system_set=M('system_set')->WHERE(' webid='.$webid)->find();
	$pro_list_pro_num=$system_set['pro_list_pro_num'];
	if(!$pro_list_pro_num){$pro_list_pro_num=20;}	
	$this->whichpage();// 导入分页类	
		//有子类的类
		$count     =M('product')->where(' webid='.$webid.' and  is_use=1 and isdeleted=0 and  is_hot=1 ')->order('hotrootid asc,created desc')->field('proalt,pid,pro_name,main_img,pro_description,pro_model')->count();// 查询满足要求的总记录数 $map表示查询条件
		$Page       = new Page($count,$pro_list_pro_num);// 实例化分页类 传入总记录数
		$Page->url = "all_ishot/pageNum/";
		$show       = $Page->show();// 分页显示输出			
		$pro =M('product')->where(' webid='.$webid.' and  is_use=1 and isdeleted=0 and  is_hot=1 ')->order('hotrootid asc,created desc')->field('proalt,pid,pro_name,main_img,pro_description,pro_model')->limit($Page->firstRow.','.$Page->listRows)->select();		
	$this->assign('page',$show);// 赋值分页输出	
	$seo=procateseo($classid);
	$this->assign('seo',$seo);//seo的信息
	//模板输出变量
	$this->showpublic();	
	$this->getbanner(4);
	$this->assign('allclass',$allclass);//全部分类
	if(C("language")=='en'){
		$type='Hot Products';
	}else{
		$type='热门产品';}
	$this->assign('type',$type);
	$this->assign('pro',$pro);//首页显示的产品
	$this->assign('system_set',$system_set);//系统配置
	
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/all_ishotorall_isnew');
				}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/all_ishotorall_isnew');
	}
	else{
	  $this->display('ZERO/all_ishotorall_isnew');	
	}
}

//所有热品
function all_isnew(){
	$comtus=C("Comtus");
	$webid=C("webid");
	$yuming=C("yuming");	
	$allclass=$this->allclass();
	$system_set=M('system_set')->WHERE(' webid='.$webid)->find();
	$pro_list_pro_num=$system_set['pro_list_pro_num'];
	if(!$pro_list_pro_num){$pro_list_pro_num=20;}	
	$this->whichpage();// 导入分页类	
		//有子类的类
		$count     =M('product')->where(' webid='.$webid.' and  is_use=1 and isdeleted=0 and  is_new=1 ')->order('newrootid asc,created desc')->field('proalt,pid,pro_name,main_img,pro_description,pro_model')->count();// 查询满足要求的总记录数 $map表示查询条件
		$Page       = new Page($count,$pro_list_pro_num);// 实例化分页类 传入总记录数
		$Page->url = "all_isnew/pageNum/";
		$show       = $Page->show();// 分页显示输出			
		$pro =M('product')->where(' webid='.$webid.' and  is_use=1 and isdeleted=0 and  is_new=1 ')->order('newrootid asc,created desc')->field('proalt,pid,pro_name,main_img,pro_description,pro_model')->limit($Page->firstRow.','.$Page->listRows)->select();		
	$this->assign('page',$show);// 赋值分页输出	
	$seo=procateseo($classid);
	$this->assign('seo',$seo);//seo的信息
	if(C("language")=='en'){
	$type='New Products';}else{
	$type='新品推荐';	
	}
	$this->assign('type',$type);	
//模板输出变量



	$this->showpublic();	
	$this->getbanner(4);
	$this->assign('pro',$pro);//新品	
	$this->assign('allclass',$allclass);//全部分类
	$this->assign('parentclass',$parentclass);//父类id	
	$this->assign('system_set',$system_set);//系统配置
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/all_ishotorall_isnew');
				}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/all_ishotorall_isnew');
	}
	else{
	  $this->display('ZERO/all_ishotorall_isnew');	
	}
}

function sitemap(){
	$this->showpublic();
	$seo=getheaderseo();		
	$this->assign('seo',$seo);//seo的信息	
	$allclass=$this->allclass();	
	$this->assign('allclass',$allclass);//全部分类	
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/sitemap');
				}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/sitemap');
	}
	else{
	  $this->display('ZERO/sitemap');	
	}
}
//统计转化情况
function statisticsTurn(){

	
	$webid=C("webid");

	$post_val=I('post.');

	

	$url=$post_val['url'];

	$plat=$post_val['plat'];

	$type=$post_val['type'];

	$location=$post_val['location'];

	

	

	$model	 =	 M('statistics_turn');

	$model->wid = $webid;

	$model->url = $url;

	$model->type = $type;

	$model->location = $location;

	$model->plat = $plat;

	$model->clicktime = time();

	$model->ip =$_SERVER["REMOTE_ADDR"];

	$hasturn = M('statistics_turn')->where("wid=".$webid." and type='".$type."' and plat='".$plat."' and ip='".$_SERVER["REMOTE_ADDR"]."' and  clicktime>='".(time()-1800)."'")->count();

	//新增规则，非询盘类净转化
	$hasturn7 = M('statistics_turn')->where("wid=".$webid." and type=7 and plat='".$plat."' and ip='".$_SERVER["REMOTE_ADDR"]."' and  clicktime>='".strtotime(date("Y-m-d",time())." 00:00:00")."' and clicktime<='".strtotime(date("Y-m-d",time())." 23:59:59")."'")->count();
	
	
	
	if($hasturn==0&&$type!=1){
		if($result	 =	 $model->add()) {
			
			if($hasturn7==0){
				$model->type = 7;
				$model->add();
			}
			
			$result=true;

		}else{

			$result=false;

		}
	}
	

	echo $result;

}
function wechatstatisticsTurn(){
	$webid=C("webid");
	$post_val=I('post.');
	
	$url=$post_val['url'];
	$plat=2;
	$type=$post_val['type'];
	$location=$post_val['location'];
	
	
	$model	 =	 M('wechat_statistics_turn');
	$model->wid = $webid;
	$model->w_userid = $_SESSION["userid"];
	$model->url = $url;
	$model->type = $type;
	$model->location = $location;
	$model->plat = $plat;
	$model->clicktime = time();
	$model->ip =$_SERVER["REMOTE_ADDR"];
	
		if($result	 =	 $model->add()) {
			
			$result=true;
		}else{
			$result=false;
		}
	
	echo $result;
}


//生成feed
function feed(){
$str='<?xml version="1.0" encoding="utf-8" ?>
<rss version="2.0">
<channel>
<title>';
$info=M('company_info')->where('webid='.C("webid"))->find();
$rs=M('about')->where('webid='.C("webid"))->find();
$websites=M('websites')->where('id='.C("webid"))->find();
$str=$str.$websites['company']."
</title>
<link>";
$str=$str.$websites['url'].'
</link>'.'
<managingEditor>'.chaifen($rs['email'],0).'
</managingEditor><description>'.$info['description'].'
</description>
<language>en</language>
<generator>'.$websites['company'].'</generator>';
$class=M('products_category')->where('webid='.C("webid").' and isdeleted=0')->order('pcid asc')->select();
foreach($class as $val){
$str=$str.'
<item>
<title><![CDATA['.$val['class_name'].']]></title>
<link><![CDATA['.$websites['url'].'/product_category/'.getprocatename($val['pcid']).']]></link>
</item>';	
	}	
$str=$str.'</channel>
</rss>';	
$myfile = fopen("./feed.xml", "w") or die("Unable to open file!");
fwrite($myfile,$str);
fclose($myfile);

}
//生成rss
function rss(){
$info=M('company_info')->where('webid='.C("webid"))->find();
$rs=M('about')->where('webid='.C("webid"))->find();
$websites=M('websites')->where('id='.C("webid"))->find();
$str='<?xml version="1.0" encoding="utf-8" ?>
<rss version="2.0">
<channel>
<title>';
$str=$str.$websites['company']."
</title>
<link>";
$str=$str.$websites['url'].'
</link>'.'
<managingEditor>'.chaifen($rs['email'],0).'
</managingEditor><description>'.$info['description'].'
</description>
<language>en</language>
<generator>'.$websites['company'].'</generator>';
$pro=M('product')->where('webid='.C("webid").' and isdeleted=0 and is_use=1 ')->order('sort asc')->select();
foreach($pro as $val){
$str=$str.'<item>
<title><![CDATA['.$val['pro_name'].']]></title>
<link><![CDATA['.$websites['url'].'/product/'.getproname($val['pid']).'.html'.']]></link>
<description><![CDATA[<a href="'.$websites['url'].'/product/">'.getproname($val['pid']).'<img src="'.getpcimgurl($val['main_img']).'" /></a></div>'.htmlspecialchars_decode($val['pro_profile']).']]></description>
</item>';	
	}	
$str=$str.'</channel>
</rss>';

$myfile = fopen("./rss.xml", "w") or die("Unable to open file!");
fwrite($myfile,$str);
fclose($myfile);	

}

//自动完成
function autocomplete(){
	
	echo '[{"label": "博客园", "value": "cnblogs"}, {"label": "囧月", "value": "囧月"}]';
	//$rs=M('product')->where('pro_name like "%'.$what.'%"')->field('pro_name')->limit(5)->select();
	//return json_encode($rs);
	
}

//一个自定义模块的例子
function spapa(){	
$this->display('ZERO/spapa');	
}

//手机站的地图模块	
function map(){
$this->showpublic();
$this->display('WAP/map');
}

function istranslategoogle(){
	//dump($_SERVER);
	$url=$this->_server('HTTP_REFERER');
	if(!$url){
		return true;
	}
	if(strstr($url,'translate.google')){
		return false;
	}else{
		return true;
	
	}
	//return true;
	//return false;
}
	
//判断是否手机访问
function isMobile(){
	if(isset ($_SERVER['HTTP_X_WAP_PROFILE'])) {
 	 return true;
 	}else if(isset ($_SERVER['HTTP_VIA'])) {
 
 	    return stristr($_SERVER['HTTP_VIA'], "wap") ? true : false;
	}else{
		return false;
	}
}

function whichpage(){
	if(C("language")=='en'){
		import('@.ORG.Util.Page');
	}else{
		import('@.ORG.Util.Pagecn');
	}
}

function savejob(){
	if(C("language")=='en'){
		$str1='Verification code error!';
		$str2='Content cannot be empty!';
		$str3='The name cannot be empty!';
		$str4='Incorrect phone range or syntax!';
		$str5='Thanks for your information,we will answer you as soon as possible !';
		$str6='Fail!';		
	}else{
		$str1='验证码错误！';	
		$str2='内容不能为空！';
		$str3='姓名不能为空！';	
		$str4='电话有误！';	
		$str5='非常感谢您的询盘,我们已收到您的邮件,我们会尽快联系您!';
		$str6='发送失败!';
	}		
	$data=I();
	$data['webid']=C("webid");
	$data['time']=time();	
	if($result	 =	 M('savejob')->add($data)) {
		$this->success($str5);
	}else{
		$this->error($str6);
	}	
}

function uploadfileCommon(){
header("Content-Type: text/html;charset=utf-8");
$error = "";
$msg = "";
$fileElementName = 'fileToUpload';
if(!empty($_FILES[$fileElementName]['error']))
{
	switch($_FILES[$fileElementName]['error'])
	{

		case '1':
			$error = '文件大小超过了php.ini定义的upload_max_filesize值';
			break;
		case '2':
			$error = '文件大小超过了HTML定义的MAX_FILE_SIZE值';
			break;
		case '3':
			$error = '文件上传不完全';
			break;
		case '4':
			$error = '无文件上传';
			break;
		case '6':
			$error = '缺少临时文件夹';
			break;
		case '7':
			$error = '写文件失败';
			break;
		case '8':
			$error = '上传被其它扩展中断';
			break;
		case '999':
		default:
			$error = '无有效错误代码';
	}
}elseif(empty($_FILES['fileToUpload']['tmp_name']) || $_FILES['fileToUpload']['tmp_name'] == 'none')
{
	$error = '没有文件上传';
}
	import('ORG.Net.UploadFile');
	$upload = new UploadFile();// 实例化上传类小
	$upload->maxSize  = 1242880;// 设置附件上传大
	$upload->allowExts  = array('doc','docx','pdf');
	$upload->savePath =  './uploadfiles/resume/';// 设置附件上传目录
	if (!is_dir($upload->savePath)){
		$res=mkdir($upload->savePath,0777,true); 
	}
	 if(!$upload->upload()) {// 上传错误提示错误信息
		$msg=($upload->getErrorMsg());
	 }else{// 上传成功 获取上传文件信息
	$info =  $upload->getUploadFileInfo();// 实例化User对象
	//$msg=$file_managed->getlastsql();
	
	//dump($info);
	 }
	if($info){
		if($info[0]['savename'])
		{$msg='上传成功!';
		$jsondata['savename']=$info[0]['savename'];
		}else{
		$error='保存失败!';
		}
	}
	$jsondata['error']=$error;
	$jsondata['msg']=$msg;
	$json_string = json_encode($jsondata);
	echo $json_string;
	
	 // 保存表单数据 包括附件数据

	//$User->add(); // 写入用户数据到数据库
	//$this->success('数据保存成功！');	

	}	
function getjob(){
	$this->display("ZERO/getjob");
}













function cases(){
	$system_set=M('system_set')->WHERE('webid='.C('webid'))->find();	
	$newlist_new_num=$system_set['newlist_new_num'];
	if(!$newlist_new_num){$newlist_new_num=20;}
	$seo=newseo();
	$this->assign('seo',$seo);//seo的信息	
	$allnewclass=$this->getallcasesclass();
	$hotnews=M('cates')->where('webid='.C('webid').' and isdeleted=0 and is_hot=1 and is_use=1 ')->order('is_new desc,created desc,nid desc')->select();
	$newnews=M('cates')->where('webid='.C('webid').' and isdeleted=0 and is_new=1 and is_use=1 ')->order('created desc,nid desc')->select();
    $this->whichpage();// 导入分页类
    $count      = M('cates')->where('webid='.C('webid').' and isdeleted=0 and is_use=1 ')->count();// 查询满足要求的总记录数 $map表示查询条件
	//$count=$this->getnum($count,$system_set['newlist_new_num']);
    $Page       = new Page($count,$newlist_new_num);// 实例化分页类 传入总记录数
	$Page->url = "cases/pageNum/";
    $show       = $Page->show();// 分页显示输出
	//if($Page->listRows>$count){ echo $Page->listRows=$count;}
    // 进行分页数据查询
    $allnews = M('cates')->where('webid='.C('webid').' and isdeleted=0 and is_use=1 ')->order('is_new desc,created desc,nid desc')->limit($Page->firstRow.','.$Page->listRows)->select();
    //dump( M('cates')->getlastsql());
	$this->assign('allnews',$allnews);// 赋值数据集
    $this->assign('page',$show);// 赋值分页输出
	
	
	
	$allclass=$this->allclass();
	$this->showpublic();
	$this->getbanner(3);
	$this->assign('hotnews',$hotnews);//热点新闻
	$this->assign('newnews',$newnews);//置顶新闻新闻	
	$this->assign('allclass',$allclass);//全部分类		
	$this->assign('allnewclass',$allnewclass);//新闻全部分类




		
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/cases');
				}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/cases');
	}
	else{
	  $this->display('ZERO/cases');	
	}		

}
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
function case_category(){
	$system_set=M('system_set')->WHERE('webid='.C('webid'))->find();
	$newlist_new_num=$system_set['newlist_new_num'];
	if(!$newlist_new_num){$newlist_new_num=20;}	
	if($_GET['classid']){
		$clissid=$_GET['classid'];
	}else{
		$this->_empty();
		exit;
		//$this->error('NO Find!');
	}
	$this->getbanner(3);	
	$this->showpublic();
	$allclass=$this->allclass();
	$seo=casecateseo($clissid);
	$this->assign('seo',$seo);//seo的信息			
	$this->assign('allclass',$allclass);//全部分类
	$allnewclass=$this->getallcasesclass();
    $this->whichpage();// 导入分页类
    $count      = M('cates')->where('cates_class='.$clissid.' and isdeleted=0 and is_use=1')->order('created desc,nid desc')->count();// 查询满足要求的总记录数 $map表示查询条件
    $Page       = new Page($count,$newlist_new_num);// 实例化分页类 传入总记录数
	$Page->url = "case_category/classid/".$clissid."/pageNum/";	
    $show       = $Page->show();// 分页显示输出	
    // 进行分页数据查询
    $newscatelist = M('cates')->where('cates_class='.$clissid.' and isdeleted=0 and is_use=1')->order('created desc,nid desc')->limit($Page->firstRow.','.$Page->listRows)->select();
	if(!$newscatelist){
		$this->_empty();
		exit;
	}
    $this->assign('newscatelist',$newscatelist);// 赋值数据集
    $this->assign('page',$show);// 赋值分页输出
	$newscate=M('cates_class')->where('classid='.$clissid)->find();
	$this->assign('allnewclass',$allnewclass);//新闻全部分
	$this->assign('newscatelist',$newscatelist);//新闻类别列表
	$this->assign('newscate',$newscate);//分类新闻信息
	
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/case_category');
				}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/case_category');
	}
	else{
	  $this->display('ZERO/case_category');	
	}		
				
}


//会员登入1.验证用户名密码，写入session
function login(){
		if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/login');
				}
	elseif(isMobile()&&gethaswap()){
		  $this->display('WAP/login');
		}
		else{
		  $this->display('ZERO/login');	
		}	
		exit;
}
//会员登入1.验证用户名密码，写入session
function auth(){
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
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/login');
	}
	elseif(isMobile()&&gethaswap()){
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
				$nologin=explode(',',$useauth['auth']);
			}
			else{
				$nologin=explode(',',$useauth['auth1']);
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
//type 1是 新闻  2是下载
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
	}else{
		$vipgroup=M('vipm')->join('vipgroup on vipm.vipgroup=vipgroup.classid and vipm.is_use=1 and vipm.name="'.session('vip').'" and vipm.webid='.C('webid'))->find();
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
}

function loginout(){
	session('vip',null); 
	cookie('vip',null);
	$this->success('退出成功！');
}

function register(){
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/register');
				}
	elseif(isMobile()&&gethaswap()){
			  $this->display('WAP/register');
			}
			else{
			  $this->display('ZERO/register');	
			}	
}

function editpassword(){
	$this->send_mail($feed_email,$content,$subject);	
	if(isMobile()=="wechat"&&gethaswechat()){
		$this->display('WECHAT/editpassword');
				}
	elseif(isMobile()&&gethaswap()){
	  $this->display('WAP/editpassword');
	}
	else{
	  $this->display('ZERO/editpassword');	
	}	
}

	function findpw() {
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
	if(isMobile()=="updatepw"){
		$this->display('WECHAT/editpassword');
				}
	elseif(isMobile()&&gethaswap()){
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


function emailer(){
	if(isMobile()=="updatepw"){
		$this->display('WECHAT/emailer');
				}
	elseif(isMobile()&&gethaswap()){
			  $this->display('WAP/emailer');
			}
			else{
			  $this->display('ZERO/emailer');	
			}	
}


	function showmes(){
		$code = $_GET["code"];	
		$id = $_GET["id"];
		$getopenidurl="https://api.weixin.qq.com/sns/oauth2/access_token?appid=".C('appid')."&secret=".C('secret')."&code=".$code."&grant_type=authorization_code";
		$tmpInfo2 = $this->vpost($getopenidurl, $data);
		$arr=json_decode($tmpInfo2);
		$openid=$arr->openid;
		$data['id']=$id;	
		$data['openid']=$openid;
		$showurl="http://yun.one-all.com/Admin/index.php/Wechatpublic/showmes";
		if(!$data['id']){
			echo "网络故障请重新尝试";
			exit;					
		}
		$tmpInfo3 = $this->vpost($showurl, $data);
		if($tmpInfo3){
			redirect($tmpInfo3);
		}else{
			echo "网络出现故障请重新尝试";
			exit;
		}
	}

	function vpost($url, $data)
	{ // 模拟提交数据函数
		$curl = curl_init(); // 启动一个CURL会话
		curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE); // 对认证证书来源的检查
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE); // 从证书中检查SSL加密算法是否存在
		curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)'); // 模拟用户使用的浏览器
		// curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
		// curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
		curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
		curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
		curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
		$tmpInfo = curl_exec($curl); // 执行操作
		if (curl_errno($curl)) {
			echo 'Errno' . curl_error($curl);//捕抓异常
		}
		curl_close($curl); // 关闭CURL会话
		return $tmpInfo; // 返回数据
	}


	//获取点击信息
	function landingpage_count(){
		$webid=C("webid");
		$data=I('post.');
		$data['ip']=$_SERVER["REMOTE_ADDR"];
		$data['clicktime']=time();
		$data['wid']=$webid;
		$result=M('statistics_lg_clicks')->add($data);
		//  $.post(lp_urlpath,{title:lp_title,url:lp_url,ref_val:lp_ref,plat:lp_plat,cid:cid},function(date){

					
						if($result	 =	 $model->add()) {
							
							$result=true;
						}else{
							$result=false;
						}
			
		echo $result;
	}

	//获取点击信息
	function landingpage_mcount(){
		//data:{title:lp_title,url:lp_url,ref_val:lp_ref,plat:lp_plat,type:type,tz_url:tz_url,mid:mid}
		$webid=C("webid");
		$data=I('post.');
		$data['ip']=$_SERVER["REMOTE_ADDR"];
		$data['clicktime']=time();
		$data['wid']=$webid;
		$result=M('statistics_lgmodel_clicks')->add($data);
		//  $.post(lp_urlpath,{title:lp_title,url:lp_url,ref_val:lp_ref,plat:lp_plat,cid:cid},function(date){

					
						if($result	 =	 $model->add()) {
							
							$result=true;
						}else{
							$result=false;
						}
			
		echo $result;
	}

function indexmanage(){
	$toolsname=array('navigation','banner','productcategories','products','advantage','service','case','customer','honor','news','bottom','aboutus','characteristics');		
	$hotsearch=M('hotsearch')->where('webid='.C('webid').' and isdeleted=0')->order('sort asc')->select();
	//dump($hotsearch);
	//exit;
	//./www/Tpl/demozq-banner/banner.html
	$this->assign('hotsearch',$hotsearch);
	$rs=M('indexconfig')->where('webid='.C('webid')." and isdeleted=0")->order('sort asc')->select();
	foreach($rs as $k=>$v){
		$this->assign('tpl'.($k+1),'./www/Tpl/'.$v['path'].'-'.$toolsname[$v['type']-1].'/'.$toolsname[$v['type']-1].".html");
	}

	$advantage=M('advantage')->where('webid='.C('webid')." and isdeleted=0")->order('sort')->select();
	$this->assign('advantage',$advantage);//优势

	$service=M('service')->where('webid='.C('webid')." and isdeleted=0")->order('sort')->select();
	$this->assign('service',$service);//优势

	$honor=M('honor')->where('webid='.C('webid')." and isdeleted=0")->order('sort')->select();
	$this->assign('honor',$honor);//优势	

	$companycustomer=M('companycustomer')->where('webid='.C('webid')." and isdeleted=0")->order('sort')->select();
	$this->assign('companycustomer',$companycustomer);//优势
	
}







	
}
?>