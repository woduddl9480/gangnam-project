
	//고3/N수 공지사항 이벤트 번호
	var Ntime = 1;

	//고3/N수 공지사항 이벤트
    function nStep() {
    	if(Ntime == 1)
    		$('#notice-list ul').css("top", "0px");     	
    	
    	$('#notice-list ul').animate({"top": -35*Ntime+"px"}, 500);

    	Ntime = Ntime + 1;
    	if(Ntime == 11)
    		Ntime = 1;
    }    
    
  	//고3/N수 공지사항 이벤트 시작
    var noticeTimer = window.setInterval(nStep, 4000);
    
  //롤링 공지사항
    function rollNotice() {

    	  var noticeroll = $('#noticeroll');

    	  noticeroll.animate({marginTop:'-50px'}, 700, null, function() {

    	  noticeroll.css('marginTop', '0px').append(noticeroll.find('> li:first'));

      });
    }