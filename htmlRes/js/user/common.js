
//페이징 처리 + 검색
function userSearchPaging_func(pageNum){			
	if(pageNum==null || pageNum==''){
		pageNum = 1;
	}
	document.listForm.pageIndex.value = pageNum;				
   	document.listForm.submit();
}	

//페이징 처리 + ajax텝 
function userAjaxPaging_func(pageNum){	
	
	if(pageNum==null || pageNum==''){
		pageNum = 1;
	}
	var gubun = $("input[name=gubun]").val();	
	selectMyPageBpardTab(pageNum,gubun);					
   	
}	


//페이징처리 +검색 + type초기화
function userSearchPaging2_func(pageNum){			
	if(pageNum==null || pageNum==''){
		pageNum = 1;
	}
	document.listForm.pageIndex.value = pageNum;
	document.listForm.type.value = '';				
   	document.listForm.submit();
}	


//목록 버튼
function userSearchPaging3_func(){
	document.listForm.type.value = '';				
   	document.listForm.submit();
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


/* 숫자 유효성 검사 */
function validateNumber(num) {	
	if (/[^0123456789]/g.test(num.value)) {
		alert("숫자만 입력 가능합니다.");
		num.value = "";
		num.focus();
		return false;
	}
}




/* 이메일 입력 체크 */
function directInput_func(check){
	if(check==''){
		$("input[name=email2]").val("");
		$("input[name=email2]").show();
	} else {
		$("input[name=email2]").hide();
		$("input[name=email2]").val(check);
	}
	
}


/* 이메일 유효성 검사 */
function validateEmail(email){
	if((/^[\w-]{4,}@[\w-]+(\.\w+){1,3}$/).test(email)) {
		return true;
	} else {
        alert('이메일 주소가 유효하지 않습니다');
		return false;
	}
}


/* 
 * Textarea 1000자 제한 
 * 단, 숫자 표시 부분의 id 값은 checkText라고 하여야 현재 글자수가 매칭됨
 * */
function checkTextLength(obj){
	var text = $(obj).val();
	$("#checkText").html(text.length);
	if(text.length > 1000){
		alert('댓글은 최대 1000자까지 작성 가능합니다.');
		$(obj).val(text.substring(0, 1000));
		$("#checkText").html("1000");
	}
}




function disableActive() {
	$(".disableDiv").fadeIn();
	popresizep("#loadingDiv");
}

function reset() {	
	$("#title").val("");
	$("#contents").val("");
	var attach_idx = $(":input:hidden[name=attach_idx]").val();
	
	if (attach_idx == undefined || attach_idx == "") {
	} else {
		$.ajax({          
		  type: "POST",	 
		  url: "/NGLMS/fileDeleteList.do", 
		  data: "attach_idx="+attach_idx+"&file_seq=1&attach_mode=append",				  
		  success: function(data) {			 
				  $('#file_'+data+'_'+attach_idx).remove(); 	
				  //if(multi_type == 'false'){
				      $('#fileupload_'+attach_idx).fadeIn('fast');
				      $('#pickfiles_'+attach_idx).css('visibility', 'visible');	
				  //}						
		 } 
	  });
	}
	
	$(".disableDiv").fadeOut();
}


//강좌찾기
function disableActive2() {
	$(".layer_lecture").fadeIn();
	/*popresizep(".loadingDiv2");
	searchType("Lec");*/
}
//교재찾기
function disableActive7() {
	$(".layer_book").fadeIn();
	/*popresizep(".loadingDiv2");
	searchType("Lec");*/
}
function reset2() {
	$(".disableDiv2").fadeOut();
}

//교재강좌찾기 2016 리뉴얼
function disableActive3() {
	$(".layer_lecture").fadeIn();
	/*popresizep(".loadingDiv2");
	searchType("Lec");*/
}
function reset3() {
	$(".layer_lecture").fadeOut();
}

//교재정보
function disableActive3() {	
	$(".disableDiv3").fadeIn();
	popresizep(".loadingDiv3");
}
function reset3() {
	$(".disableDiv3").fadeOut();
}

//교재정보
function disableActive4() {	
	$(".disableDiv4").fadeIn();
	popresizep(".loadingDiv4");
}
function reset4() {
	$(".disableDiv4").fadeOut();
}

//교재정보
function disableActive5() {	
	$(".disableDiv5").fadeIn();
	popresizep(".loadingDiv5");
}
function reset5() {
	$(".disableDiv5").fadeOut();
}

//수강중인강좌바로가기
function disableActive6(serverURL) {	
	$(".disableDiv6").fadeIn();
	popresizep(".loadingDiv6");
	myLearning(serverURL);
}
function reset6() {
	$(".disableDiv6").fadeOut();
}


//자주하는질문 탭메뉴
$(function(){ 
	$(".tabMenuB li").click(function () {
	  $(".tabMenuB li").removeClass("on");
	  $(this).addClass("on");
		var $boxVar = $(this).index() + 1;
		$(".faqtabcnt").css("display","none");
		$(".faqtabbox"+$boxVar).css("display","block");
	});
})

//초보자가이드 탭메뉴
$(document).ready(function() {
	$(".guidetabcnt").css("display","none");
	$(".guidetabbox1").css("display","block");
});
$(function(){ 
	$(".tabMenuG li").click(function () {
	  $(".tabMenuG li").removeClass("on");
	  $(this).addClass("on");
		var $boxVar = $(this).index() + 1;
		$(".guidetabcnt").css("display","none");
		$(".guidetabbox"+$boxVar).css("display","block");
	});
})

function high_change_parent_url(sel){
	 if (sel != "") {		 
		 window.location.href = "/NGLMS/High/Classroom/Study.do?lecture_cd=" + sel;
	 }else{
		 alert('수강중인 강좌를 선택해주세요.');
	}
}

function middle_change_parent_url(sel){
	 if (sel != "") {		 
		 window.location.href = "/NGLMS/Middle/Classroom/Study.do?lecture_cd=" + sel;
	 }else{
		 alert('수강중인 강좌를 선택해주세요.');
	}
}

function change_parent_url(url){
	document.location=url;
}