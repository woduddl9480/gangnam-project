
function doView(data, cs) {
	var param = "?lecture_cd="+data;
	document.search.action = "/NGLMS/Mobile/High/High"+cs+"/Class.do"+param;
	document.search.target = '_self';
	document.search.submit();
}

function doView2(data) {
	var param = "?lecture_cd="+data;
	document.search.action = "/NGLMS/Mobile/High/Univer/Class.do"+param;
	document.search.target = '_self';
	document.search.submit();
}

function doView3(data) {
	var param = "?lecture_cd="+data;
	document.search.action = "/NGLMS/Mobile/High/Mento/LectureView.do"+param;
	document.search.target = '_self';
	document.search.submit();
}
 
function doView4(data) {
	var param = "?lecture_cd="+data;
	document.search.action = "/NGLMS/Mobile/High/Classroom/Study.do"+param;
	document.search.target = '_self';
	document.search.submit();
}


function doMiddleView(data, url){
	var param = "?lecture_cd="+data;
	document.search.action = url + param;
	document.search.target = '_self';
	document.search.submit();	
}


function classSearch_func(cd, lv, id, cs){
	var param = "?class_cd="+cd;
	if(lv!='')	param = param + "&code_study_level="+lv;
	if(id!='')	param = param + "&prof_id="+id;
	
	document.search.target = '_self';
	document.search.action = "/NGLMS/Mobile/High/High"+cs+"/ClassList.do"+param;
	document.search.submit();
}

function classComboSearch_func(cd, lv, id, url, type){
	var param = "?class_cd="+cd;
	if(lv!='')	param = param + "&code_study_level="+lv;
	if(id!='')	param = param + "&prof_id="+id;

	document.search.type.value = type;
	document.search.target = '_self';
	document.search.action = url+param;
	document.search.submit();
}

//�좎룞�쇿뜝�깅벝�� �좎뙥怨ㅼ삕
function classComboSearch_func_difficulty(cd, lv, id, code_difficulty, url, type){
	var param = "?class_cd="+cd;
	if(lv!='')	param = param + "&code_study_level="+lv;
	if(id!='')	param = param + "&prof_id="+id;
	if(code_difficulty!='')	param = param + "&code_difficulty="+code_difficulty;
	
	document.search.type.value = type;
	document.search.target = '_self';
	document.search.action = url+param;
	document.search.submit();
}

//�좎뙓紐뚯삕 �좎뙥怨ㅼ삕
function classComboSearch_func2(cd, lv, id, code_difficulty, code_subtitle, url, type){
	var param = "?class_cd="+cd;
	if(lv!='')	param = param + "&code_study_level="+lv;
	if(id!='')	param = param + "&prof_id="+id;
	if(code_difficulty!='')	param = param + "&code_difficulty="+code_difficulty;
	if(code_subtitle!='')	param = param + "&code_subtitle="+code_subtitle;
	
	document.search.type.value = type;
	document.search.target = '_self';
	document.search.action = url+param;
	document.search.submit();
}

function classSearch_func2(cd, lv, id){
	var param = "?class_cd="+cd;
	if(lv!='')	param = param + "&code_study_level="+lv;
	if(id!='')	param = param + "&prof_id="+id;
	
	document.search.target = '_self';
	document.search.action = "/NGLMS/Mobile/High/Univer/ClassList.do"+param;
	document.search.submit();
}


function middleClassSearch_func(cd, lv, id, url){
	var param = "?class_cd="+cd;
	if(lv!='')	param = param + "&code_study_level="+lv;
	if(id!='')	param = param + "&prof_id="+id;
	
	document.search.target = '_self';
	document.search.action = url+param;
	document.search.submit();
}


function classStepSearch_func(cd, lv, id, cs){
	var param = "?class_cd="+cd;
	if(lv!='')	param = param + "&code_study_level="+lv;
	if(id!='')	param = param + "&prof_id="+id;
	
	document.search.target = '_self';
	document.search.action = "/NGLMS/Mobile/High/High"+cs+"/ClassStepList.do"+param;
	document.search.submit();
}



function classInfoTabMenu_func(num){
	
	$(".tabhighm").hide();
	$(".tabhighm"+num).show();
	$(".fl li").removeClass("on");
	$("#high"+num).addClass("on");
	$(".menudepts1").removeClass("on");
	
	if(num == '4'){
		setLeftMenu('2');
	}else if(num == '2'){
		setLeftMenu('3');
	}else if(num == '3'){
		setLeftMenu('4');
	}else{
		setLeftMenu('1');
	}
	
}

function classInfoTabMenu_sm_tab_func(num){
	
	$(".tabhighm").hide();
	$(".tabhighm"+num).show();
	$(".fl li").removeClass("on");
	$("#high"+num).addClass("fst_sm on");
	$(".menudepts1").removeClass("on");
	
}

function classInfoTabMenu_sm_ComTab_func(num){
	
	$(".tabhighm").hide();
	$(".tabhighm"+num).show();
	$(".fl li").removeClass("on");
	$("#high"+num).addClass("fst_sm on");
	$(".menudepts1").removeClass("on");
}



function showLecEpil_func(num){
	$(".lecepil").css('display','none');
	$(".lecepil"+num).css('display','block');
}

function hideLecEpil_func(){
	$(".lecepil").css('display','none');
}


function epilList_func(num){
	
	document.lectureEpilForm.pageIndex.value = num;
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/High/High3/ClassEpil.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureEpilForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#tabhighm2").html(response);
	    	classInfoTabMenu_func(2);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}

function epilList_sm_tab_func(num){
	
	document.lectureEpilForm.pageIndex.value = num;
	
	$.ajax({
		type : "POST" 
			, url : "/NGLMS/Mobile/High/High3/ClassEpil.do"
				, async : true 
				, cache : false 
				, data : $("#lectureEpilForm").serialize()
				, contentType : "application/x-www-form-urlencoded;charset=utf-8"
					, error : function(request, status, error) {
					}
	, success : function(response, status, request) {
		$("#tabhighm2").html(response);
		classInfoTabMenu_sm_tab_func(2);
		
	}
	, beforeSend: function() {}
	, complete: function() {}
	});
}

function epilList_sm_tab_comFunc(num){
	document.lectureEpilForm.pageIndex.value = num;
	
	$.ajax({
		type : "POST" 
			, url : "/NGLMS/Mobile/High/High3/ClassEpil.do"
				, async : true 
				, cache : false 
				, data : $("#lectureEpilForm").serialize()
				, contentType : "application/x-www-form-urlencoded;charset=utf-8"
					, error : function(request, status, error) {
					}
	, success : function(response, status, request) {
		$(".detail_review").html(response);
		classInfoTabMenu_sm_ComTab_func(2);
		
	}
	, beforeSend: function() {}
	, complete: function() {}
	});
}


function epilList_func2(num,gubun){
	
	document.lectureEpilForm.pageIndex.value = num;
	document.lectureEpilForm.type.value = '';
	
	if(gubun != null){
		document.lectureEpilForm.gubun.value = gubun;	
	}
	
	$.ajax({
		type:"POST",
		data:$("#lectureEpilForm").serialize(),
		url:"/NGLMS/Mobile/High/Classroom/ClassEpil.do",
		success:function(data){			
			if(data.messg == '1'){				
				if(serverType == '1'){
	    			top.location.href='http://'+asp_domain+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	    		}else{
	    			if(asp_seq == '336'){							
		    			top.location.href=urlSSl+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	   				}else{
		    			top.location.href='http://'+asp_domain+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	   				}	
	    		}				
			}else{
				$("#tabhighm2").html(data);
		    	classInfoTabMenu_func(2);
			}
		}
		}); 
}



function noteList_func(num){

	document.lectureNoteForm.pageIndex.value = num;
	document.lectureNoteForm.type.value = '';
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/High/High3/ClassNote.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureNoteForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#tabhighm3").html(response);
	    	classInfoTabMenu_func(3);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}


function noteList_sm_tab_func(num){
	
	document.lectureNoteForm.pageIndex.value = num;
	document.lectureNoteForm.type.value = '';
	$.ajax({
		type : "POST" 
			, url : "/NGLMS/Mobile/High/High3/ClassNote.do"
				, async : true 
				, cache : false 
				, data : $("#lectureNoteForm").serialize()
				, contentType : "application/x-www-form-urlencoded;charset=utf-8"
					, error : function(request, status, error) {
					}
	, success : function(response, status, request) {
		$("#tabhighm3").html(response);
		classInfoTabMenu_sm_tab_func(3);
		
	}
	, beforeSend: function() {}
	, complete: function() {}
	});
}

function noteList2_func(num,type){

	document.lectureNoteForm.pageIndex.value = num;
	document.lectureNoteForm.type.value = 'type';
	
	$.ajax({
		type:"POST",
		data:$("#lectureNoteForm").serialize(),
		url:"/NGLMS/Mobile/High/High3/MypageClassNote.do",
		success:function(data){			
			if(data.messg == '1'){				
				if(serverType == '1'){
	    			top.location.href='http://'+asp_domain+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	    		}else{
	    			if(asp_seq == '336'){							
		    			top.location.href=urlSSl+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	   				}else{
		    			top.location.href='http://'+asp_domain+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	   				}	
	    		}				
			}else{
				$(".detail_lectureNote").html(data);
		    	//classInfoTabMenu_func(3);
			}
		}
		}); 
	
}




function noteView_func(seq){
	document.lectureNoteForm.type.value = 'view';
	document.lectureNoteForm.seq.value = seq;
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/High/High3/ClassNote.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureNoteForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#tabhighm3").html(response);
	    	//classInfoTabMenu_func(3);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}


function noteView2_func(seq){
	document.lectureNoteForm.type.value = 'view';
	document.lectureNoteForm.seq.value = seq;
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/High/High3/MypageClassNote.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureNoteForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$(".detail_lectureNote").html(response);
	    	//classInfoTabMenu_func(3);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}

function noteMod_func(seq){
	document.lectureNoteForm.type.value = 'Mod';
	document.lectureNoteForm.seq.value = seq;
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/High/High3/MypageClassNote.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureNoteForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#tabhighm3").html(response);
	    	classInfoTabMenu_func(3);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}


function qnaList_func(num,gubun){
	
	document.lectureQnAForm.pageIndex.value = num;
	document.lectureQnAForm.type.value = '';
	if(gubun!=null){
		document.lectureQnAForm.gubun.value = gubun;	
	}
	$.ajax({
		type:"POST",
		data:$("#lectureQnAForm").serialize(),
		url:"/NGLMS/Mobile/High/Classroom/Qna.do",
		success:function(data){			
			if(data.messg == '1'){				
				if(serverType == '1'){
	    			top.location.href='http://'+asp_domain+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	    		}else{
	    			if(asp_seq == '336'){							
		    			top.location.href=urlSSl+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	   				}else{
		    			top.location.href='http://'+asp_domain+'/NGLMS/userlogin.do?url='+schoolType+'/MyPage/Main.do';
	   				}	
	    		}				
			}else{
				$(".detail_qna").html(data);
				//classInfoTabMenu_func(4);
			}
		}
	}); 
}


function qnaView_func(seq, type, gubun){
	
	document.lectureQnAForm.type.value = type;
	document.lectureQnAForm.gubun.value = gubun;
	if(seq!='')
		document.lectureQnAForm.seq.value = seq;
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/High/Classroom/Qna.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureQnAForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$(".detail_qna").html(response);
	    	//classInfoTabMenu_func(4);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}

function qnaDelete(seq,type) {
	
	if(!confirm('�좎룞�쇿뜝�숈삕�좎떦�쒓쿋�숈삕�좎떦源띿삕?')) return;	
	document.lectureQnAForm.type.value = type;
	document.lectureQnAForm.seq.value = seq;	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/High/Classroom/Qna.do"
	    , data : $("#lectureQnAForm").serialize()
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	alert('�좎룞�쇿뜝�숈삕�좎떎�듭삕�좎룞�쇿뜝�밸뙋��.');
	    	qnaList_func(1);		    	
	    }
	});	
		
}

function doWriteNote_func(mem, seq){
	if(mem!='R')
		alert('�좎룞�숉쉶�좎룞�� �좎룞�쇿뜝占썲뜝�숈삕 �좎뙃琉꾩삕�좎떦�숈삕 �좎룞�� �좎뙇�숈삕�좎떦�먯삕.');
	else
	{
		if(document.doNoteReviewForm.cmnt_conts.value == '')
			alert('�좎룞�쇿뜝�숈삕 �좎룞�숉듃�좎룞�쇿뜝�숈삕 �좎뙃琉꾩삕�좎룞�� �좎뙇�쎌삕�좎룞��');
		else
		{
			if(confirm('�좎룞�쇿뜝�숈삕�좎떦�쒓쿋�숈삕�좎떦源띿삕?'))
			$.ajax({
			    type : "POST" 
			    , url : "/NGLMS/Mobile/High/High3/ClassNote.do"
			    , async : true 
			    , cache : false 
			    , data : $("#doNoteReviewForm").serialize()
			    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
			    , error : function(request, status, error) {
			    }
			    , success : function(response, status, request) {
			    	alert('�좎룞�쇿뜝�숈삕�멨뜝�숈삕�좎룞�숁콆�좑옙');
			    	noteView_func(seq);			    	
			    }
			    , beforeSend: function() {}
			    , complete: function() {}
			});
		}		
	}
}




function lectureReviewMod_func(num){	
	$("#NRList"+num).hide();
	$("#cmnt_conts"+num).show();
	lectureReviewReset_func(num);
}

function lectureReviewReset_func(num){
	$("#modNRList"+num).hide();
	$("#saveNRList"+num).show();
}


function doModifyNote_func(mem, seq, num){
	if(mem!='R')
		alert('�좎룞�숉쉶�좎룞�� �좎룞�쇿뜝占썲뜝�숈삕 �좎룞�쇿뜝�숈삕�좎떦�숈삕 �좎룞�� �좎뙇�숈삕�좎떦�먯삕.');
	else
	{
		if($("#cmnt_conts"+num).val() == '')
			alert('�좎룞�쇿뜝�숈삕 �좎룞�숉듃�좎룞�쇿뜝�숈삕 �좎뙃琉꾩삕�좎룞�� �좎뙇�쎌삕�좎룞��');
		else
		{
			if(confirm('�좎룞�쇿뜝�숈삕�좎떦�쒓쿋�숈삕�좎떦源띿삕?'))
			$.ajax({
			    type : "POST" 
			    , url : "/NGLMS/Mobile/High/High3/ClassNote.do"
			    , async : true 
			    , cache : false 
			    , data : {
			    	type : 'update',
			    	cmnt_seq : $("#cmnt_seq"+num).val(),
			    	mod_id : $("#mod_id"+num).val(),
			    	cmnt_conts : $("#cmnt_conts"+num).val()
			    }
			    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
			    , error : function(request, status, error) {
			    }
			    , success : function(response, status, request) {
			    	alert('�좎룞�쇿뜝�숈삕�좎떎�듭삕�좎룞�쇿뜝�밸뙋��.');
			    	noteView_func(seq);			    	
			    }
			    , beforeSend: function() {}
			    , complete: function() {}
			});
		}		
	}
}



function doDeleteNote_func(mem, seq, num){
	if(mem!='R')
		alert('�좎룞�숉쉶�좎룞�� �좎룞�쇿뜝占썲뜝�숈삕 �좎룞�쇿뜝�숈삕�좎떦�숈삕 �좎룞�� �좎뙇�숈삕�좎떦�먯삕.');
	else
	{
		if(confirm('�좎룞�쇿뜝�숈삕�좎떦�쒓쿋�숈삕�좎떦源띿삕?'))
		$.ajax({
		    type : "POST" 
		    , url : "/NGLMS/Mobile/High/High3/ClassNote.do"
		    , async : true 
		    , cache : false 
		    , data : {
		    	type : 'delete',
		    	cmnt_seq : $("#cmnt_seq"+num).val()
		    }
		    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
		    , error : function(request, status, error) {
		    }
		    , success : function(response, status, request) {
		    	alert('�좎룞�쇿뜝�숈삕�좎떎�듭삕�좎룞�쇿뜝�밸뙋��.');
		    	noteView_func(seq);			    	
		    }
		    , beforeSend: function() {}
		    , complete: function() {}
		});	
	}
}



function doPromotion_func(seq, bbs){
	if(bbs==107)
		document.listForm.action = "/NGLMS/Mobile/High/High3/PromotionView.do?seq="+seq;
	else if(bbs==125) 
		document.listForm.action = "/NGLMS/Mobile/High/High2/PromotionView.do?seq="+seq;
	else if(bbs==105) 
		document.listForm.action = "/NGLMS/Mobile/High/IngangTeacher/PromotionView.do?seq="+seq;
		
	document.listForm.submit();
}


function doMiddlePromotion_func(seq, bbs){
	if(bbs==105) 
		document.listForm.action = "/NGLMS/Middle/IngangTeacher/PromotionView.do?seq="+seq;
	if(bbs==126) 
		document.listForm.action = "/NGLMS/Mobile/Middle/PromotionView.do?seq="+seq;
	
	document.listForm.submit();
}


function getPopupCookieCheck(name) {
	 var prefix = name + "=";
	 var cookieStartIndex = document.cookie.indexOf(prefix);
	 if (cookieStartIndex == -1) return null;
	 var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
	 if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;
	 return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function doDiplomaPrint_func(lec){
	window.open('/NGLMS/Mobile/High/MyPage/DisplomaPrint.do?lecture_cd='+lec, 'pop_diploma', '850', '800', 'scrollbars=0', 'CENTER');
	
}


function deleteMyEpil_func(seq){
	if(!confirm('�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕�좎떦�쒓쿋�숈삕�좎떦源띿삕?')) return;
	document.lectureEpilForm.seq.value = seq;
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/High/Classroom/deleteMyEpil.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureEpilForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	alert("�좎룞�쇿뜝�숈삕 �좎떎�듭삕�좎룞�쇿뜝�밸뙋��.");
	    	epilList_func2(1);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}

function dataList_func(num,id){
	document.lectureDataForm.pageIndex.value = num;
	document.lectureDataForm.type.value = '';
	$.ajax({
	    type : "POST" 
	    , url:"/NGLMS/Mobile/High/Blog/TeacherBlogDataAjax.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureDataForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$(".detail_blogdata").html(response);
	    	//classInfoTabMenu_func(2);
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}