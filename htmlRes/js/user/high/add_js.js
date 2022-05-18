/*lnb*/
( function( $ ) {
	$( document ).ready(function() {
		$('#submenu > ul > li > a').click(function() {
		  $('#submenu li').removeClass('active');
		  $(this).closest('li').addClass('active');	
		  var checkElement = $(this).next();
		  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			$(this).closest('li').removeClass('active');
			checkElement.slideUp('normal');
		  }
		  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('#submenu ul ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
		  }
		  if($(this).closest('li').find('ul').children().length == 0) {
			return true;
		  } else {
			return false;	
		  }		
		});
	});
} )( jQuery );


/* 우측 퀵메뉴 */
$(window).scroll(function(){
	var head = 226,
		quick = $(".subQuick"),
		quickHeight = quick.height(),
		contentsHeight = $("#kn_container").height(),
		limit = contentsHeight - quickHeight,
		winscrolltop = $(window).scrollTop() - head ; 
		winscrolltop2 = $(window).scrollTop() + 0 ;
	
	if (winscrolltop > 0) {
//		console.log(winscrolltop);
		$(quick).css({"position" : "absolute","top" : winscrolltop2 + "px"});
	} else {
		$(quick).css({"position" : "absolute","top" : "226px"});
	}
});



