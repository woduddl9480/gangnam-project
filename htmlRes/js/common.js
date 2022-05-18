/**
 * 사용자 공통함수 모음.
 */

 function getCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;

	while (x <= document.cookie.length) {
		var y = (x + nameOfCookie.length);
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf("", x) + 1;
		if (x == 0)
			break;
	}
	return "";
}

function chkUserConnectOut() {
	// TODO(kalipso) : IE에서만 작동됨.가능하면 FF등에서도 동작하도록 수정할 것
	if (self.screenTop > 9000) {
		setCookie("userConnect", "N", "-1");
	}
}

function getDomainFromUrl(urlstr) {
	var returnStr = urlstr;
	var idx1 = 0;
	var idx2 = 0;

	if (returnStr.length > 0) {
		returnStr = returnStr.replace(/(http(s)?:\/\/)?/g, "");
		idx1 = returnStr.indexOf("/");
		idx2 = returnStr.indexOf("#");

		if (idx1 > -1) {
			returnStr = returnStr.substring(0, idx1);
		}

		if (idx2 > -1) {
			returnStr = returnStr.substring(0, idx2);
		}
	}

	return returnStr;
}

function getUserAgentInfo(userAgentStr, info_gb) {
	var returnStr = "";
	var idx1 = 0;
	var idx2 = 0;
	var idx3 = 0;
	var idx4 = 0;

	info_gb = info_gb.toLowerCase();

	if (userAgentStr.indexOf(";") > -1) {
		idx1 = userAgentStr.indexOf(";");
		idx2 = userAgentStr.indexOf(";", idx1 + 1);
		idx3 = userAgentStr.indexOf(";", idx2 + 1);
		idx4 = userAgentStr.indexOf(")");
		idx5 = userAgentStr.lastIndexOf("(");

		
			if (info_gb == 'browser') {
				returnStr = userAgentStr.substring(idx1 + 2, idx2);
			} else if (info_gb == 'os_div') {
				returnStr = userAgentStr.substring(idx2 + 2, idx3);
			}

	}

	return returnStr;
}


function getCheckList(f) {
	var b = true;
	var chkbox = f.elements['checkkey'];
	if(chkbox != undefined){
		if (chkbox.length > 0) {
			for (i = 0; i < chkbox.length; i++) {
				if (f.elements['checkkey'][i].checked) {
					b = false;
					break;
				}
			}
		} else {
			if (f.elements['checkkey'].checked) {
				b = false;
			}
		}
		if (b) {
			alert('선택된 데이터가 없습니다.');
		}
	}else{
		alert('데이터가 없습니다.');
	}
	return b;
}

/**
 * 숫자만 입력받기
 * 
 * @param element
 * @return
 */
function isNumber(element) {
	Element.setStyle(element, {
		imeMode : "disabled"
	});
	Event.observe(element, "keydown", onlyNumber.bindAsEventListener(element));
}

/**
 * 레이어 달력을 만든다. fnOpenCalendar({elementID : 'sample.date_type', format :
 * '${appDateCalendar}'});
 */
function fnOpenCalendar(param) {
	var formday = $(param.elementID).value;
	var selectedDate = fnGetYMD( {
		format : param.format,
		value : formday
	});

	var cal = new Calendar( {
		clickAfter : param.clickAfter
	});
	cal.layer( {
		elementID : param.elementID,
		dateFormat : param.format,
		selected : selectedDate
	});
}


/**
 *  오늘날짜 구하기 
 **/
function getTodayDate(gubun) {
	var _date = new Date();
	var _year = _date.getFullYear();
	var _month = "" + (_date.getMonth() + 1);
	var _day = "" + _date.getDate();
	if (_month.length == 1)
		_month = "0" + _month;
	if ((_day.length) == 1)
		_day = "0" + _day;

	var tmp = _year+gubun+_month+gubun+_day;
	return tmp;
}
 

/**
 * 아이디 체크
 * 
 * @return
 */ 
function IdCheck_func(id) {
	var check_id = id.val();
	if (check_id.length < 4) {
		alert('아이디를 4자 이상 입력하세요.');
		return;
	}
	
	$.ajax({
	    type : "POST" 
	    , async : true 
	    , url : "/NGLMS/ingangMember/idCheck.do"
	    , cache : false 
	    , data : "login_id="+check_id 
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	if(check_id==response){
	    		alert(check_id+"은 사용가능한 아이디입니다.");
	    		$('input[name=idcheck_yn]').val("Y");
	    		//$(id.attr("readonly", "readonly"));
	    	} else {
	    		alert(check_id+"은 사용 불가능한 아이디입니다.");
	    		$('input[name=idcheck_yn]').val("N");
	    	}
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});	

	
}

/**
 * 비밀번호 초기화
 * 
 * @return
 */ 
function resetPW_func(sid, slid, id) {
	if(confirm("비밀번호를 초기화 하시겠습니까?")){
		$.ajax({
		    type : "POST" 
		    , async : true 
		    , url : "/NGLMS/ingangMember/resetPW.do"
		    , cache : false 
		    , data : "stud_id="+sid+"&login_id="+slid+"&user_id="+id 
		    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
		    , error : function(request, status, error) {
		    }
		    , success : function(response, status, request) {
		    	alert("초기화가 완료되었습니다.");
		    	
		    }
		    , beforeSend: function() {}
		    , complete: function() {}
		});
	}

	
}





/**
 * 아이디 체크
 * 
 * @return
 */ 
var lastKeyword;
function sendId() {
	var f = $('Form.write');
	 if (loopSendKeyword == false) return;
	
	 var keyword = f.login_id.value;
	 		
		if(keyword.length < 4){
			   f.elements['setlogin_id'].value = "";
			   document.getElementById('checkMsg').style.color = "red";
			   document.getElementById('checkMsg').innerHTML = "아이디를 4자이상 입력하세요.";
		}else if(/(\w)\1\1\1/.test(keyword)) {
			   f.elements['setlogin_id'].value = "";
			   document.getElementById('checkMsg').style.color = "red";
			   document.getElementById('checkMsg').innerHTML = "아이디에 같은 문자를 4번 이상 사용하실 수 없습니다.";
		}else{
			 if(keyword != lastKeyword){
				 lastKeyword = keyword;
				 var ajax_request = new Ajax.Request(fnAction('UserAction'), {
						method : "post",
						parameters : {
							'cmd' : 'idcheck',
							'login_id' : f.elements['login_id'].value
						},
						onSuccess : function(data) {
							if (trim(data.responseText) == 'X') {
								f.elements['setlogin_id'].value = f.elements['login_id'].value;
								  document.getElementById('checkMsg').style.color = "black";
								  document.getElementById('checkMsg').innerHTML = f.elements['login_id'].value + '는 사용이 가능한 아이디 입니다.';
								   
							} else {
								f.elements['setlogin_id'].value = "";
								document.getElementById('checkMsg').style.color = "red";
								document.getElementById('checkMsg').innerHTML = f.elements['login_id'].value + '는 사용이 불가능한 아이디 입니다.';
								f.elements['login_id'].focus();
							}
						}
					});
			 }
		}
	
	setTimeout("sendId();", 500);
	
}

/**
 * 패스워드 초기화
 * 
 * @return
 */
function fnPwdReset(user_id) {
	if (!confirm('비밀번호를 초기화 하시겠습니까?')) {
		return;
	}
	var ajax_request = new Ajax.Request(context + '/UserAction.do', {
		method : "post",
		parameters : {
			'cmd' : 'pwdreset',
			'user_id' : user_id
		},
		onComplete : function(data) {
			if (trim(data.responseText) == 'Y') {
				alert('초기화되었습니다.')
			} else {
				alert('초기화 할 수 없습니다.')
			}
		}
	});
}

/**
 * 숫자를 mm:ss 식으로 변환하는 함수
 */
time_paser = function(i_time) {
	var PlyTime, PlyCl, PlyMin, PlySec, temp;
	PlyTime = i_time;
	temp = Math.floor(PlyTime / 60);
	PlySec = Math.floor(PlyTime % 60);
	PlyClk = Math.floor(temp / 60);
	PlyMin = Math.floor(temp % 60);
	if (PlyMin < 10) {
		PlyMin = '0' + PlyMin;
	}
	if (PlySec < 10) {
		PlySec = '0' + PlySec;
	}
	if (PlyClk == 0) {
		r_TimeText = PlyMin + ':' + PlySec;
	} else {
		r_TimeText = PlyClk + ':' + PlyMin + ':' + PlySec;
	}
	return r_TimeText;
}

/**
 * 시험 미리보기
 */
popExamPreview = function(exam_seq){
	var f = $('Form.exam.preview');
	var nm = 'exampreviewpopup';
	var win = popupWindow('', nm, "700px", "750px", 'scrollbars=no', 'CENTER');
	f.elements['cmd'].value = 'view';
	f.elements['exam_seq'].value = exam_seq;
	f.action = fnAction('ExamFrAction');
	f.target = nm;
	f.submit();
	win.focus();
}


/**
 * 새로운 강좌 상세
 */
doNewLecView = function (action, data, data1) {
	var f = $('Form.new.gang');
	f.elements['lecture_cd'].value = data;
	f.elements['class_cd'].value = data1;
	f.elements['cmd'].value = 'view';
	f.action = fnAction(action);
	f.target = '_self';
	f.submit();
}

/**
 * HOT Clip
 */
var banner_cPage = 1;
var banner_oldPage = 1;
doBannerNext = function(o, cnt){
	banner_oldPage = banner_cPage;
	
	if(o == '-'){
		banner_cPage --;
	} else {
		banner_cPage ++;
	}

	if(banner_cPage > cnt){
		banner_cPage = 1;
	} else if (banner_cPage < 1) {
		banner_cPage = cnt;
	}
	
	$('banner_cPage').innerHTML = banner_cPage;
	$('banner' + banner_oldPage).hide();
	$('banner' + banner_cPage).show();
}
doBanner = function(page){
	banner_oldPage = page + 1;
	banner_cPage = page + 1
	$('banner_cPage').innerHTML = banner_cPage;
	$('banner' + banner_cPage).show();
}

/**
 * 이벤트
 */
var event_cPage = 1;
var event_oldPage = 1;
doEventNext = function(o, cnt){
	event_oldPage = event_cPage;
	
	if(o == '-'){
		event_cPage --;
	} else {
		event_cPage ++;
	}

	if(event_cPage > cnt){
		event_cPage = 1;
	} else if (event_cPage < 1) {
		event_cPage = cnt;
	}
	
	$('event_cPage').innerHTML = event_cPage;

	$('event' + event_oldPage).hide();
	$('event' + event_cPage).show();
}

/**
 * 이벤트 이동
 */
doGoEvent = function(seq) {
	var f = $('Form.event');
	f.elements['cmd'].value = "view";
	f.elements['event_seq'].value = seq;
	f.action = fnAction('HomePageEventFrAction');
	f.target = '_self';
	f.submit();
}

/**
 * 주목받는강좌
 */
var attlec_cPage = 1;
var attlec_oldPage = 1;
doAttLecNext = function(o, cnt){
	attlec_oldPage = attlec_cPage;
	
	if(o == '-'){
		attlec_cPage --;
	} else {
		attlec_cPage ++;
	}

	if(attlec_cPage > cnt){
		attlec_cPage = 1;
	} else if (attlec_cPage < 1) {
		attlec_cPage = cnt;
	}
	
	$('attlec_cPage').innerHTML = attlec_cPage;
	$('attlec' + attlec_oldPage).hide();
	$('attlec' + attlec_cPage).show();
}
doAttLec = function(page){
	attlec_cPage = page + 1;
	attlec_oldPage = page + 1;
	$('attlec_cPage').innerHTML = attlec_cPage;
	$('attlec' + attlec_cPage).show();
}

/**
 * 입시정보
 */
var ent_cPage = 1;
var ent_oldPage = 1;
doEntNext = function(o, cnt){
	ent_oldPage = ent_cPage;
	
	if(o == '-'){
		ent_cPage --;
	} else {
		ent_cPage ++;
	}
	
	if(ent_cPage > cnt){
		ent_cPage = 1;
	} else if (ent_cPage < 1) {
		ent_cPage = cnt;
	}
	
	$('ent_cPage').innerHTML = ent_cPage;
	$('ent' + ent_oldPage).hide();
	$('ent' + ent_cPage).show();
}
doEnt = function(page){
	ent_oldPage = page + 1;
	ent_cPage = page + 1;
	$('ent_cPage').innerHTML = ent_cPage;
	$('ent' + ent_cPage).show();
}

resizePromotion = function(size){
	$('promotionFrame').style.height = size + 'px';
}

//메인 탭 선택 변수
var tabno;



/* 메뉴별 페이지 이동 스크립트 2013.02.01추가*/
function viewBody(url, parent_seq, menu_seq, disp_ord, depth, low_authmenu_cnt){
	if(low_authmenu_cnt==0 && depth!=1){	
		return;
	} else {	
		$('#loadingView').css("display", "block");	
		$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');		
		document.admin_topForm.action = '../ingangMain/adminMain.do';
		document.admin_topForm.menu_seq.value = menu_seq;
		document.admin_topForm.parent_seq.value = parent_seq;
		document.admin_topForm.disp_ord.value = disp_ord;
		document.admin_topForm.url.value = url;
		document.admin_topForm.depth.value = depth;
	   	document.admin_topForm.submit();
	}
}	

function viewBody2(url, parent_seq, menu_seq, disp_ord, depth){
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');		
	document.admin_topForm.action = '../ingangMain/adminMain.do';
	document.admin_topForm.menu_seq.value = menu_seq;
	document.admin_topForm.parent_seq.value = parent_seq;
	document.admin_topForm.disp_ord.value = disp_ord;
	document.admin_topForm.depth.value = depth;
	document.admin_topForm.url.value = url;
   	document.admin_topForm.submit();	
}	

function viewBody3(url, parent_seq, menu_seq, disp_ord, depth, pageIndex){
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');		
	document.admin_topForm.action = '../ingangMain/adminMain.do';
	document.admin_topForm.menu_seq.value = menu_seq;
	document.admin_topForm.parent_seq.value = parent_seq;
	document.admin_topForm.disp_ord.value = disp_ord;
	document.admin_topForm.depth.value = depth;
	document.admin_topForm.url.value = url;
	document.admin_topForm.pageIndex.value = pageIndex;
   	document.admin_topForm.submit();	
}	

/* 하위메뉴 disp_ord 파라미터 추가. 2021.11.05 추가*/
function viewBodySub(url, parent_seq, menu_seq, disp_ord, disp_ord_sub, depth, low_authmenu_cnt){
	if(low_authmenu_cnt==0 && depth!=1){
		return;
	} else {	
		$('#loadingView').css("display", "block");	
		$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');		
		document.admin_top_subForm.action = '../ingangMain/adminMain.do';
		document.admin_top_subForm.menu_seq.value = menu_seq;
		document.admin_top_subForm.parent_seq.value = parent_seq;
		document.admin_top_subForm.disp_ord.value = disp_ord;
		document.admin_top_subForm.disp_ord_sub.value = disp_ord_sub;
		document.admin_top_subForm.url.value = url;
		document.admin_top_subForm.depth.value = depth;
	   	document.admin_top_subForm.submit();
	}
}

reloadQuery = function(){
	
	 $.ajax({          
		  type: "POST",	 
		  url: "/NGLMS/initsSystem.do",
		  error: function(xhr,status,error) {
		  },
		  success: function(data) {			 
			if(data != '0'){
				 alert("오류가 발생하였습니다.");
			}else{
				alert("시스템 초기화가 완료되었습니다.");
			}
		 }
	  
	  });
};

regenerateHTML = function(){
	
	 $.ajax({          
		  type: "POST",	 
		  url: "/NGLMS/htmlSystem.do",
		  error: function(xhr,status,error) {
			  alert(error);
		  },
		  success: function(data) {	
			if(data != '0'){
				alert("오류가 발생하였습니다.("+data+")");
			}else{
				alert("HTML Regenerated.");
			}
		 }	  
	  });
};


function selectPagingReload(){			
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');		
	document.listForm.submit();
}	

//페이징 처리 + 검색
function selectPaging_func(pageNum){			
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');		
	document.listForm.pageIndex.value = pageNum;				
   	document.listForm.submit();
}	

//목록버튼을 통해 기존 검색 폼 유지
function selectPaging_func2(){			
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');			
	document.listForm.view_type.value = '';							
   	document.listForm.submit();
}

//새로 추가한 페이징 처리 + 검색 (view_type변수 초기화 스크립트 추가)
function selectPaging_func3(pageNum){			
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');		
	document.listForm.pageIndex.value = pageNum;				
	document.listForm.view_type.value = '';							
   	document.listForm.submit();
}

//페이지 안에 리스트 있을 경우
function selectPaging_func4(pageNum){			
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');		
	document.subListForm.subPageIndex.value = pageNum;				
	document.subListForm.view_type.value = 'V';							
   	document.subListForm.submit();
}

function selectPaging_func5(pageNum){			
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');	
	document.listForm.pageIndex.value = pageNum;				
	document.listForm.type.value = '';							
   	document.listForm.submit();
}

//ajax list 페이징
function paging_func(pageNum){			
	$('#loadingView').css("display", "block");	
	$('#loadingImg').html('<img src="/htmlRes/images/loading/loader.gif"/>');					
	var frm = $("form#listForm")[0];
	frm.type.value = 'list';
	frm.pageIndex.value = pageNum;		
	$form = $("form[name=listForm]").serialize();
	list($form);
}	



//목록으로 이동
function doViewNext(){
	 frm = $("form#searchfrom")[0];
	 var url = frm.url.value.split('?');
	 frm.action = url[0];  
	 frm.target = '';
	 frm.submit();
}

//검색 
function doSearch(form){	
	var frm = $("form#"+form)[0];
	frm.pageIndex.value = 1;
	frm.target = ''; 
	frm.submit(); 
}

//교재정보
function disableActive5() {	
	$(".disableDiv5").fadeIn();
	popresizep(".loadingDiv5");
}
function reset5() {
	$(".disableDiv5").fadeOut();
}


//팝업
$(window).resize(function() {
	var regs = $(".resizepop");
	var arr = [];

	$(regs).each(function(idx){
		var obj_type=$(regs[idx]);					
		var data = $(obj_type).css("display");
		
		if(data=='block'){
			popresizep(obj_type);
		}	
	});

});


function popresizep(divname) {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf ( "MSIE " );
	if ( msie > 0 )      // If Internet Explorer, return version number
	{
		 var body_height = document.body.clientHeight;
	}
	else                 // If another browser, return 0
	{
		 var body_height = window.innerHeight;
	}
	
	var pop_height = $(divname).height();
	var poptop = (body_height - pop_height)/2;
	$(divname).animate({'top':poptop}, 'slow');
}


function goHighMyLecture(sel) {
	if (sel.value != "") {
		window.location.href = "/NGLMS/High/Classroom/Study.do?lecture_cd=" + sel.value;
	}
}

function goMiddleMyLecture(sel) {
	if (sel.value != "") {
		window.location.href = "/NGLMS/Middle/Classroom/Study.do?lecture_cd=" + sel.value;
	}
}
//]]>