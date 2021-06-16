<?php
return array(
	'SHOW_RUN_TIME'=>false,			// 运行时间显示 关闭Process: 0.0305s ( Load:0.0072s Init:0.0142s Exec:0.0010s Template:0.0081s ) | UseMem:2,261 kb
	'SHOW_ADV_TIME'=>false,			// 显示详细的运行时间
	'SHOW_DB_TIMES'=>false,			// 显示数据库查询和写入次数
	'SHOW_CACHE_TIMES'=>false,		// 显示缓存操作次数
	'SHOW_USE_MEM'=>false,			// 显示内存开销
	'SHOW_ERROR_MSG'=>false,    // 显示错误信息
	'LOG_RECORD'=>false,  // 进行日志记录
	'LOG_EXCEPTION_RECORD'  =>false,    // 是否记录异常信息日志
	'LOG_LEVEL'  =>'EMERG,ALERT,CRIT,ERR,WARN,NOTIC,INFO,DEBUG,SQL',// 允许记录的日志级别
	'DB_FIELDS_CACHE'=> false, // 字段缓存信息
	'SHOW_PAGE_TRACE'=>false			//显示调试信息
);
?>