require(['jquery', 'mousewheel'], function ($) {
    $(function () {
        var top_len = $('.head_hj10').height();
        $(window).scroll(function () {
            var top = $(window).scrollTop();
            if (top > top_len) {
                $('.head_hj10').addClass('open');
                $('.head_hj10_fix').addClass('open');
            } else {
                $('.head_hj10').removeClass('open');
                $('.head_hj10_fix').removeClass('open');
            }
        });
        var top = $(window).scrollTop();
        if (top > top_len) {
            $('.head_hj10').addClass('open');
            $('.head_hj10_fix').addClass('open');
        } else {
            $('.head_hj10').removeClass('open');
            $('.head_hj10_fix').removeClass('open');
        };

        $('.head_hj10_search img').click(function () {
            $(".mobile_search_content ").toggleClass("active");
        });
        $('.search-alert .close').click(function () {
            $('.head_hj10_search_fixed').removeClass('open');
        });
        
        
        "use strict";
        function _instanceof(left, right) {
            if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
                return !!right[Symbol.hasInstance](left);
            } else {
                return left instanceof right;
            }
        };
        function _classCallCheck(instance, Constructor) {
            if (!_instanceof(instance, Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        };
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            };
        };
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        };
        // 特效 start
        {
            setTimeout(function () {
                return document.body.classList.add('render');
            }, 60);
            var navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
            var total = navdemos.length;
            var current = navdemos.findIndex(function (el) {
                return el.classList.contains('demo--current');
            });

            var navigate = function navigate(linkEl) {
                document.body.classList.remove('render');
                document.body.addEventListener('transitionend', function () {
                    return window.location = linkEl.href;
                });
            };

            navdemos.forEach(function (link) {
                return link.addEventListener('click', function (ev) {
                    ev.preventDefault();
                    navigate(ev.target);
                });
            });
            document.addEventListener('keydown', function (ev) {
                var keyCode = ev.keyCode || ev.which;
                var linkEl;

                if (keyCode === 37) {
                    linkEl = current > 0 ? navdemos[current - 1] : navdemos[total - 1];
                } else if (keyCode === 39) {
                    linkEl = current < total - 1 ? navdemos[current + 1] : navdemos[0];
                } else {
                    return false;
                }
                navigate(linkEl);
            });
        };
        var ease = {
            exponentialIn: function exponentialIn(t) {
                return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
            },
            exponentialOut: function exponentialOut(t) {
                return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
            },
            exponentialInOut: function exponentialInOut(t) {
                return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
            },
            sineOut: function sineOut(t) {
                var HALF_PI = 1.5707963267948966;
                return Math.sin(t * HALF_PI);
            },
            circularInOut: function circularInOut(t) {
                return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
            },
            cubicIn: function cubicIn(t) {
                return t * t * t;
            },
            cubicOut: function cubicOut(t) {
                var f = t - 1.0;
                return f * f * f + 1.0;
            },
            cubicInOut: function cubicInOut(t) {
                return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
            },
            quadraticOut: function quadraticOut(t) {
                return -t * (t - 2.0);
            },
            quarticOut: function quarticOut(t) {
                return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
            }
        }; 
        var ShapeOverlays = /*#__PURE__*/ function () {
            function ShapeOverlays(elm) {
                _classCallCheck(this, ShapeOverlays);
                this.elm = elm;
                this.path = elm.querySelectorAll('path');
                this.numPoints = 4;
                this.duration = 800;
                this.delayPointsArray = [];
                this.delayPointsMax = 180;
                this.delayPerPath = 70;
                this.timeStart = Date.now();
                this.isOpened = false;
                this.isAnimating = false;
            };
            _createClass(ShapeOverlays, [{
                key: "toggle",
                value: function toggle() {
                    this.isAnimating = true;
                    var range = Math.random() * Math.PI * 2;
                    for (var i = 0; i < this.numPoints; i++) {
                        var radian = i / (this.numPoints - 1) * Math.PI * 2;
                        this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
                    }
                    if (this.isOpened === false) {
                        this.open();
                    } else {
                        this.close();
                    }
                }
            }, {
                key: "open",
                value: function open() {
                    this.isOpened = true;
                    this.elm.classList.add('is-opened');
                    this.timeStart = Date.now();
                    this.renderLoop();
                }
            }, {
                key: "close",
                value: function close() {
                    this.isOpened = false;
                    this.elm.classList.remove('is-opened');
                    this.timeStart = Date.now();
                    this.renderLoop();
                }
            }, {
                key: "updatePath",
                value: function updatePath(time) {
                    var points = [];
                    for (var i = 0; i < this.numPoints; i++) {
                        points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100;
                    }
                    var str = '';
                    str += this.isOpened ? "M 0 0 V ".concat(points[0], " ") : "M 0 ".concat(points[0], " ");

                    for (var i = 0; i < this.numPoints - 1; i++) {
                        var p = (i + 1) / (this.numPoints - 1) * 100;
                        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;
                        str += "C ".concat(cp, " ").concat(points[i], " ").concat(cp, " ").concat(points[i + 1], " ").concat(p, " ").concat(points[i + 1], " ");
                    }
                    str += this.isOpened ? "V 0 H 0" : "V 100 H 0";
                    return str;
                }
            }, {
                key: "render",
                value: function render() {
                    if (this.isOpened) {
                        for (var i = 0; i < this.path.length; i++) {
                            this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
                        }
                    } else {
                        for (var i = 0; i < this.path.length; i++) {
                            this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
                        }
                    }
                }
            }, {
                key: "renderLoop",
                value: function renderLoop() {
                    var _this = this;

                    this.render();

                    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
                        requestAnimationFrame(function () {
                            _this.renderLoop();
                        });
                    } else {
                        this.isAnimating = false;
                    }
                }
            }]);
            return ShapeOverlays;
        }();
        (function () {
            var elmHamburger = document.querySelector('.hamburger');
            var gNavItems = document.querySelectorAll('.global-menu__item');
            var elmOverlay = document.querySelector('.shape-overlays');
            var overlay = new ShapeOverlays(elmOverlay);
            function fn() {
                var flag = $('.head_hj10').hasClass('open');
                $('.head_hj10_nav_xiala').toggleClass('open');
                if (!flag) {
                    $('.head_hj10_fix').toggleClass('open');
                }
                if (overlay.isAnimating) {
                    return false;
                }
                overlay.toggle();
                if (overlay.isOpened === true) {
                    elmHamburger.classList.add('is-opened-navi');

                    for (var i = 0; i < gNavItems.length; i++) {
                        gNavItems[i].classList.add('is-opened');
                    }
                } else {
                    elmHamburger.classList.remove('is-opened-navi');

                    for (var i = 0; i < gNavItems.length; i++) {
                        gNavItems[i].classList.remove('is-opened');
                    }
                }
            }
            elmHamburger.addEventListener('click', fn);
            $('.head_hj10_nav_flex .head_hj10_menu').click(fn);
        })(); // 特效 end


        // 手机端特效
        /*移动端导航栏*/
        $(".dt-mobile-menu-icon").click(function () {
            $(".mobile-sticky-header-overlay").toggleClass("active");
        });
        //手机侧边导航层点击阻止冒泡
        $("#mobile-menu-Sidebar").click(function (event) {
            event.stopPropagation();
        });
        $(".mobile-menu-Sidebar-close").click(function () {
            $(".mobile-sticky-header-overlay").toggleClass("active");
        });
        $(".next-level-button").click(function () {
            $(this).toggleClass("active");
            $(this).next(".hj_navbar_nav_dropdown-menu").slideToggle();
        });
        //阴影层点击
        $(".mobile-sticky-header-overlay").click(function (event) {
            $(".mobile-sticky-header-overlay").removeClass("active");
            event.stopPropagation();
        });
        /*移动端搜索框*/
        $(".mobile_searchbutton").click(function () {
            $(".mobile_search_content ").toggleClass("active");
            $(".mobile-sticky-header-overlay").removeClass("active");
            $(".HJZF2__head_hj06_mobile").toggleClass("active");
        });
        $(".mobile_search_close").click(function () {
            $(".mobile_search_content ").toggleClass("active");
            $(".HJZF2__head_hj06_mobile").toggleClass("active");
        });
        /*移动端语言版本切换*/
        $(".mobile_languagebutton").click(function () {
            $(this).toggleClass("active");
            $(".mobile_languagelist").toggleClass("active");
        });

    })


})