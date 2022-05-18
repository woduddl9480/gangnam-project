//좌측 메뉴
function setLeftMenu(aData) {
	var dataindex = aData.indexOf("-");
	var dataArray;
	var data = aData;
	if(dataindex > -1){
		dataArray = aData.split("-");
		data = dataArray[0];
		$('#sub-menu'+aData).attr('class',"on");
	}
	
	var attrName = $('#sub-menu'+data).attr('class');
	if(attrName == 'has-sub'){	
		$('#sub-menu'+data).attr('class',attrName + " active");
		$("li#sub-menu"+data).find("ul").eq(0).css("display","block");
	}else{
		$('#sub-menu'+data).attr('class',attrName + " active");
		//$('#sub-menu'+data).attr('class',attrName + " on");
	}
}

//좌측 메뉴2
function setLeftMenu2(dep1,dep2) {
	var attrName = $('#sub-menu'+dep1).attr('class');
	$('#sub-menu'+dep1).attr('class',attrName + " active");
	$("li#sub-menu"+dep1).find("ul").eq(0).css("display","block");
	$('#sub-menu'+dep1+'-'+dep2).attr('class',"on");
}

$(document).ready(function(){
	//하단 고등 고객센터 탭
	var highchkopen = 0;
	$('.highCustomer .bot_close').click(function(){
		if(highchkopen == 0){
			$(".highCustomer").animate({
				height : '35px'
				}, 1000, function() {
					$(".highCustomer .bot_close img").attr("src","/htmlRes/images/user/new_main/KNhigh_btn_open.gif");
					$(".highCustomer .bot_close img").attr("alt","펼쳐보기");
			});
			highchkopen = 1;
		}else if(highchkopen == 1){
			$(".highCustomer").animate({
				height : '233px'
				}, 1000, function() {
					$(".highCustomer .bot_close img").attr("src","/htmlRes/images/user/new_main/KNhigh_btn_close.gif");
					$(".highCustomer .bot_close img").attr("alt","닫기");
			});
			highchkopen = 0;
		}
		return false;
	});
	//하단 중등 고객센터 탭
	var chkopen = 0;
	$('.middleCustomer .bot_close').click(function(){
		if(chkopen == 0){
			$(".middleCustomer").animate({
				height : '35px'
				}, 1000, function() {
					$(".middleCustomer .bot_close img").attr("src","/htmlRes/images/user/new_main/KN_btn_open.gif");
					$(".middleCustomer .bot_close img").attr("alt","펼쳐보기");
			});
			chkopen = 1;
		}else if(chkopen == 1){
			$(".middleCustomer").animate({
				height : '233px'
				}, 1000, function() {
					$(".middleCustomer .bot_close img").attr("src","/htmlRes/images/user/new_main/KN_btn_close.gif");
					$(".middleCustomer .bot_close img").attr("alt","닫기");
			});
			chkopen = 0;
		}
		return false;
	});
});


!function ($) {

	  "use strict"; // jshint ;_;


	 /* MODAL CLASS DEFINITION
	  * ====================== */

	  var Modal = function (element, options) {
	    this.options = options
	    this.$element = $(element)
	      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
	    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
	  }

	  Modal.prototype = {

	      constructor: Modal

	    , toggle: function () {
	        return this[!this.isShown ? 'show' : 'hide']()
	      }

	    , show: function () {
	        var that = this
	          , e = $.Event('show')

	        this.$element.trigger(e)

	        if (this.isShown || e.isDefaultPrevented()) return

	        this.isShown = true

	        this.escape()

	        this.backdrop(function () {
	          var transition = $.support.transition && that.$element.hasClass('fade')

	          if (!that.$element.parent().length) {
	            that.$element.appendTo(document.body) //don't move modals dom position
	          }

	          that.$element
	            .show()

	          if (transition) {
	            that.$element[0].offsetWidth // force reflow
	          }

	          that.$element
	            .addClass('in')
	            .attr('aria-hidden', false)

	          that.enforceFocus()

	          transition ?
	            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
	            that.$element.focus().trigger('shown')

	        })
	      }

	    , hide: function (e) {
	        e && e.preventDefault()

	        var that = this

	        e = $.Event('hide')

	        this.$element.trigger(e)

	        if (!this.isShown || e.isDefaultPrevented()) return

	        this.isShown = false

	        this.escape()

	        $(document).off('focusin.modal')

	        this.$element
	          .removeClass('in')
	          .attr('aria-hidden', true)

	        $.support.transition && this.$element.hasClass('fade') ?
	          this.hideWithTransition() :
	          this.hideModal()
	      }

	    , enforceFocus: function () {
	        var that = this
	        $(document).on('focusin.modal', function (e) {
	          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
	            that.$element.focus()
	          }
	        })
	      }

	    , escape: function () {
	        var that = this
	        if (this.isShown && this.options.keyboard) {
	          this.$element.on('keyup.dismiss.modal', function ( e ) {
	            e.which == 27 && that.hide()
	          })
	        } else if (!this.isShown) {
	          this.$element.off('keyup.dismiss.modal')
	        }
	      }

	    , hideWithTransition: function () {
	        var that = this
	          , timeout = setTimeout(function () {
	              that.$element.off($.support.transition.end)
	              that.hideModal()
	            }, 500)

	        this.$element.one($.support.transition.end, function () {
	          clearTimeout(timeout)
	          that.hideModal()
	        })
	      }

	    , hideModal: function (that) {
	        this.$element
	          .hide()
	          .trigger('hidden')

	        this.backdrop()
	      }

	    , removeBackdrop: function () {
	        this.$backdrop.remove()
	        this.$backdrop = null
	      }

	    , backdrop: function (callback) {
	        var that = this
	          , animate = this.$element.hasClass('fade') ? 'fade' : ''

	        if (this.isShown && this.options.backdrop) {
	          var doAnimate = $.support.transition && animate

	          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
	            .appendTo(document.body)

	          this.$backdrop.click(
	            this.options.backdrop == 'static' ?
	              $.proxy(this.$element[0].focus, this.$element[0])
	            : $.proxy(this.hide, this)
	          )

	          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	          this.$backdrop.addClass('in')

	          doAnimate ?
	            this.$backdrop.one($.support.transition.end, callback) :
	            callback()

	        } else if (!this.isShown && this.$backdrop) {
	          this.$backdrop.removeClass('in')

	          $.support.transition && this.$element.hasClass('fade')?
	            this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
	            this.removeBackdrop()

	        } else if (callback) {
	          callback()
	        }
	      }
	  }


	 /* MODAL PLUGIN DEFINITION
	  * ======================= */

	  var old = $.fn.modal

	  $.fn.modal = function (option) {
	    return this.each(function () {
	      var $this = $(this)
	        , data = $this.data('modal')
	        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
	      if (!data) $this.data('modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option]()
	      else if (options.show) data.show()
	    })
	  }

	  $.fn.modal.defaults = {
	      backdrop: true
	    , keyboard: true
	    , show: true
	  }

	  $.fn.modal.Constructor = Modal


	 /* MODAL NO CONFLICT
	  * ================= */

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	 /* MODAL DATA-API
	  * ============== */

	  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this = $(this)
	      , href = $this.attr('href')
	      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
	      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

	    e.preventDefault()

	    $target
	      .modal(option)
	      .one('hide', function () {
	        $this.focus()
	      })
	  })

	}(window.jQuery);



	//입시정보 리사이즈

	function resizeFrameHeight(height) {
		$("#iframe_uway").css("height", height+"px");
	}