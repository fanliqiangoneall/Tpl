<?php
$siteconfig	=	require './siteconfig.inc.php';
$config	= array(
	/*
	 * 0:普通模式 (采用传统癿URL参数模式 )
	 * 1:PATHINFO模式(http://<serverName>/appName/module/action/id/1/)
	 * 2:REWRITE模式(PATHINFO模式基础上隐藏index.php)
	 * 3:兼容模式(普通模式和PATHINFO模式, 可以支持任何的运行环境, 如果你的环境不支持PATHINFO 请设置为3)
	 */
    'URL_MODEL'=>2,
	'DB_TYPE'=>'mysql',
	'DB_HOST'=>'47.97.165.200',
	'DB_NAME'=>'yun',
	'DB_USER'=>'oneall',
	'DB_PWD'=>'zhonghuan123',
	'DB_PORT'=>'3306',
	'DB_PREFIX'=>'',

	'APP_AUTOLOAD_PATH'=>'@.TagLib',
	'SESSION_AUTO_START'=>true,
	'VAR_PAGE'=>'pageNum',

	'USER_AUTH_ON'=>true,
	'USER_AUTH_TYPE'=>1,		// 默认认证类型 1 登录认证 2 实时认证
	'USER_AUTH_KEY'=>'authId',	// 用户认证SESSION标记
    'ADMIN_AUTH_KEY'=>'administrator',
	'USER_AUTH_MODEL'=>'User',	// 默认验证数据表模型
	'AUTH_PWD_ENCODER'=>'md5',	// 用户认证密码加密方式
	'USER_AUTH_GATEWAY'=>'/Public/login',	// 默认认证网关
	'NOT_AUTH_MODULE'=>'Public',		// 默认无需认证模块
	'REQUIRE_AUTH_MODULE'=>'',		// 默认需要认证模块
	'NOT_AUTH_ACTION'=>'',		// 默认无需认证操作
	'REQUIRE_AUTH_ACTION'=>'',		// 默认需要认证操作
    'GUEST_AUTH_ON'=>false,    // 是否开启游客授权访问
    'GUEST_AUTH_ID'=>0,     // 游客的用户ID

    'DB_LIKE_FIELDS'=>'title|remark',
	'RBAC_ROLE_TABLE'=>'role',
	'RBAC_USER_TABLE'=>'role_user',
	'RBAC_ACCESS_TABLE'=>'access',
	'RBAC_NODE_TABLE'=>'node',
	'TAGLIB_LOAD'=> true,//加载标签库打开
	'APP_AUTOLOAD_PATH'=>'@.TagLib',
	'TAGLIB_BUILD_IN'=>'Cx,Pc',
	'TMPL_ACTION_ERROR' => 'ZERO/success',
 	'TMPL_ACTION_SUCCESS' =>'ZERO/success',

);

return array_merge($config,$siteconfig);
?>