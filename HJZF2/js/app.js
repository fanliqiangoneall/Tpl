requirejs.config({
	baseUrl:'/',
	paths:{
		'jquery':['Tpl/HJZF2/js/jquery-1.8.3.min','http://code.jquery.com/jquery-1.8.3.min.js'],
		'swiper':['Tpl/HJZF2/js/swiper.min','https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js'],
		'lightBox': 'Tpl/HJZF2/js/jquery.lightbox-0.5.min',
		'proDetail': 'Tpl/HJZF2/js/proDetail',
		'jqueryzoom':'Tpl/HJZF2/js/jqueryzoom',
		'CountUp' :'Tpl/HJZF2/js/jquery.countup.min',
		'waypoints':'Tpl/HJZF2/js/jquery.waypoints.min',
		'demo':'Tpl/HJZF2/js/demo',
		'themepunchR':'Tpl/HJZF2/js/jquery.themepunch.revolution.min',
		'themepunchT':'Tpl/HJZF2/js/jquery.themepunch.tools.min',
		'slick':'Tpl/HJZF2/js/slick.min',
		'countTo':'Tpl/HJZF2/js/jquery_mouse_numgd',
		'imgSwitch':'Tpl/HJZF2/js/imgSwitch.min',
		'wow':'Tpl/HJZF2/js/wow.min',
		'velocity':['Tpl/HJZF2/js/velocity.min','https://raw.githubusercontent.com/julianshapiro/velocity/master/velocity.min.js'],
		'timelinr': 'Tpl/HJZF2/js/jquery.timelinr-0.9.6',
		'floatAD': 'Tpl/HJZF2/js/floatAD',
		'lazyload':'Tpl/HJZF2/js/jquery.lazyload',
		'move_port':['Tpl/HJZF2/js/move_port']
        },
	shim: {
		"velocity": {
			deps: [ "jquery" ]
		}
	},
	waitSeconds: 0
});









