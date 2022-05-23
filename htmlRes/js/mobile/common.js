
//占쏙옙占쏙옙징 처占쏙옙 + 占싯삼옙
function userSearchPaging_func(pageNum){			
	if(pageNum==null || pageNum==''){
		pageNum = 1;
	}
	document.listForm.pageIndex.value = pageNum;				
   	document.listForm.submit();
}	

//占쏙옙占쏙옙징 처占쏙옙 + ajax占쏙옙 
function userAjaxPaging_func(pageNum){	
	
	if(pageNum==null || pageNum==''){
		pageNum = 1;
	}
	var gubun = $("input[name=gubun]").val();	
	selectMyPageBpardTab(pageNum,gubun);					
   	
}	


//占쏙옙占쏙옙징처占쏙옙 +占싯삼옙 + type占십깍옙화
function userSearchPaging2_func(pageNum){			
	if(pageNum==null || pageNum==''){
		pageNum = 1;
	}
	document.listForm.pageIndex.value = pageNum;
	document.listForm.type.value = '';				
   	document.listForm.submit();
}	


//占쏙옙占� 占쏙옙튼
function userSearchPaging3_func(){
	document.listForm.type.value = '';				
   	document.listForm.submit();
}	


//占싯억옙
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


/* 占쏙옙占쏙옙 占쏙옙효占쏙옙 占싯삼옙 */
function validateNumber(num) {	
	if (/[^0123456789]/g.test(num.value)) {
		alert("占쏙옙占쌘몌옙 占쌉뤄옙 占쏙옙占쏙옙占쌌니댐옙.");
		num.value = "";
		num.focus();
		return false;
	}
}




/* 占싱몌옙占쏙옙 占쌉뤄옙 체크 */
function directInput_func(check){
	if(check==''){
		$("input[name=email2]").val("");
		$("input[name=email2]").show();
	} else {
		$("input[name=email2]").hide();
		$("input[name=email2]").val(check);
	}
	
}


/* 占싱몌옙占쏙옙 占쏙옙효占쏙옙 占싯삼옙 */
function validateEmail(email){
	if((/^[\w-]{4,}@[\w-]+(\.\w+){1,3}$/).test(email)) {
		return true;
	} else {
        alert('占싱몌옙占쏙옙 占쌍소곤옙 占쏙옙효占쏙옙占쏙옙 占십쏙옙占싹댐옙');
		return false;
	}
}


/* 
 * Textarea 1000占쏙옙 占쏙옙占쏙옙 
 * 占쏙옙, 占쏙옙占쏙옙 표占쏙옙 占싸븝옙占쏙옙 id 占쏙옙占쏙옙 checkText占쏙옙占� 占싹울옙占쏙옙 占쏙옙占쏙옙 占쏙옙占쌘쇽옙占쏙옙 占쏙옙칭占쏙옙
 * */
function checkTextLength(obj){
	var text = $(obj).val();
	$("#checkText").html(text.length);
	if(text.length > 1000){
		alert('占쏙옙占쏙옙占� 占쌍댐옙 1000占쌘깍옙占쏙옙 占쌜쇽옙 占쏙옙占쏙옙占쌌니댐옙.');
		$(obj).val(text.substring(0, 1000));
		$("#checkText").html("1000");
	}
}




function disableActive() {
	$(".disableDiv").fadeIn();
	popresizep(".loadingDiv");
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


//占쏙옙占썹강占쏙옙찾占쏙옙
function disableActive2() {
	$(".layer_lecture").fadeIn();
	/*popresizep(".loadingDiv2");
	searchType("Lec");*/
}
function reset2() {
	$(".disableDiv2").fadeOut();
}

//占쏙옙占썹강占쏙옙찾占쏙옙 2016 占쏙옙占쏙옙占쏙옙
function disableActive3() {
	$(".layer_lecture").fadeIn();
	/*popresizep(".loadingDiv2");
	searchType("Lec");*/
}
function reset3() {
	$(".layer_lecture").fadeOut();
}

//占쏙옙占쏙옙占쏙옙占쏙옙
function disableActive3() {	
	$(".disableDiv3").fadeIn();
	popresizep(".loadingDiv3");
}
function reset3() {
	$(".disableDiv3").fadeOut();
}

//占쏙옙占쏙옙占쏙옙占쏙옙
function disableActive4() {	
	$(".disableDiv4").fadeIn();
	popresizep(".loadingDiv4");
}
function reset4() {
	$(".disableDiv4").fadeOut();
}

//占쏙옙占쏙옙占쏙옙占쏙옙
function disableActive5() {	
	$(".disableDiv5").fadeIn();
	popresizep(".loadingDiv5");
}
function reset5() {
	$(".disableDiv5").fadeOut();
}

//占쏙옙占쏙옙占쏙옙占싸곤옙占승바로곤옙占쏙옙
function disableActive6(serverURL) {	
	$(".disableDiv6").fadeIn();
	popresizep(".loadingDiv6");
	myLearning(serverURL);
}
function reset6() {
	$(".disableDiv6").fadeOut();
}


//占쏙옙占쏙옙占싹댐옙占쏙옙占쏙옙 占실메댐옙
$(function(){ 
	$(".tabMenuB li").click(function () {
	  $(".tabMenuB li").removeClass("on");
	  $(this).addClass("on");
		var $boxVar = $(this).index() + 1;
		$(".faqtabcnt").css("display","none");
		$(".faqtabbox"+$boxVar).css("display","block");
	});
})

//占십븝옙占쌘곤옙占싱듸옙 占실메댐옙
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
		 alert('占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙占승몌옙 占쏙옙占쏙옙占쏙옙占쌍쇽옙占쏙옙.');
	}
}

function middle_change_parent_url(sel){
	 if (sel != "") {		 
		 window.location.href = "/NGLMS/Middle/Classroom/Study.do?lecture_cd=" + sel;
	 }else{
		 alert('占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙占승몌옙 占쏙옙占쏙옙占쏙옙占쌍쇽옙占쏙옙.');
	}
}

function change_parent_url(url){
	document.location=url;
}