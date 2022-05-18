var CmmUiFun = {
    tkcrLtr: {
        default: {
            btn: '.mytkcTggBtn',
            div: '.mytkcTggBox',
            scr: '.mytkcScrollBar'
        },
        opt: {},
        init: function (opt) {
            this.opt = $.extend(true, this.default, opt);
            this.scrFun();
            this.bind();
        },
        scrFun: function () {
            $(this.opt.scr).each(function () {
                $(this).customScrollBar();
            });
        },
        bind: function () {
            var _this = this;
            $(this.opt.btn).off().on({
                'click': function () {
                    _this.togg($(this));
                    return false;
                },
            });
        },
        togg: function ($this) {
            if (!$this.is('.active')) {
                $(window).scrollTop(0);
            }
            $this.toggleClass('active');
            $(this.opt.div).toggleClass('active');
        },
    },
    laypop: {
        init: function (el, btn, callb) {
            this.el = $(el);
            this.btn = $(btn);
            this.close = this.el.find('.layPopBtnClose');
            this.callb = callb;
            this.bind();
        },
        bind: function () {
            var _this = this;
            this.btn.off().on({
                'click': function () {
                    _this.show();
                },
            });
            this.close.off().on({
                'click': function () {
                    _this.el.hide();
                    $('body').removeClass('scrollX');
                },
            });
        },
        show: function () {
            this.el.show();
            if (typeof this.callb === 'function') {
                this.callb();
            }
            this.align();
        },
        align: function () {
            $('body').addClass('scrollX');
            var $width = this.el.find('.laypop_in').outerWidth();
            var $height = this.el.find('.laypop_in').outerHeight();
            this.el.find('.laypop_in').css({
                'margin-left': -$width / 2,
                'margin-top': -$height / 2,
            });
        },
    },
    nav: {
        init: function () {
            var _this = this;
            var $li = $('.navUl > li');
            var $liHei = [];
            this.max = null;
            var menu1;
            $li.each(function () {
                var $thisHei = $(this).find('.sub_nav').outerHeight();
                $liHei.push($thisHei);
            });
            this.max = Math.max.apply(null, $liHei);
            $('.nav_wrap').off().on({
                'mouseenter': function () {
                	menu1 =  setTimeout(function(){
                		_this.show(true);
                	}, 300);;
                },
                'mouseleave': function () {
                	clearTimeout(menu1);
                	_this.show(false);
                }
            });
        },
        show: function (bool) {
            if (bool) {
                $('.subNavBg , .subNav').stop().animate({
                    'height': this.max
                });
            } else {
                $('.subNavBg , .subNav').stop().animate({
                    'height': '0'
                });
            }
        },
    },
    sideNav: {
        el: '.asideMenuLst',
        depEl: '.asideMenuDepLst',
        init: function () {
            this.li = $(this.el).find('>li');
            this.liDep = this.li.find(this.depEl + '>li');
            this.bind();
        },
        bind: function () {
            var _this = this;
            this.li.off().on({
                'click': function () {
                    var $this = $(this);
                    _this.show($this);
                   // return false;
                },
            });
        },
        show: function ($this) {
            if ($this.is('.active')) {
                this.li.removeClass('active');
                $(this.depEl).stop().slideUp();
                return;
            }
            this.li.removeClass('active');
            $(this.depEl).stop().slideUp();
            $this.addClass('active');
            $this.find(this.depEl).stop().slideDown();
        },
    },
};
