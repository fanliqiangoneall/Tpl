require.config(
{
	baseUrl:'/',
	shim:{
		'jquery.validate':{
			deps:['jquery'],
			exports: 'jQuery.fn.validate'
		},
		'tn_code':{
			deps:[],
			exports: 'tncode',
		},	
		'statitics':{
			deps:['jquery'],
			exports: '',
		},
		'layer': {
			deps: ['jquery'],
			exports: "layer"
		},
	},
	paths:{
		'jquery':['Tpl/Wap2/js/jquery-3.4.1.min'],
		'swiper':['Tpl/Wap2/js/swiper.min'],
		'jquery.validate':['Tpl/Wap2/js/validation/jquery.validate.min'],
		'tn_code':['Tpl/Wap2/yanzheng/tn_code'],
		'statitics':['Tpl/Wap2/js/statitics'],
		'layer': ['Tpl/Wap2/layer/layer'],
		'lightBox':['Tpl/Wap2/js/jquery.lightbox-0.5.min']
		
	},
	
	waitSeconds: 0
}
);









