//�좎뙃�숈삕�좎룞�� �좎룞��
function viewBoard_func(seq, type){
	document.listForm.seq.value = seq;
	document.listForm.type.value = type;
	document.listForm.submit();
}
		
//�좎뙃�숈삕�좎룞�� �좎룞��
function viewReviewBoard_func(seq, type){
	document.listForm.select_user.value = seq;
	document.listForm.type.value = type;
	document.listForm.submit();
}

//�좎떛釉앹삕�� �좎룞��
function viewEvent_func(seq){
	var gsWin = window.open("about:blank","eventView");
	
	document.listForm.seq.value = seq;
	document.listForm.type.value = 'view';
	
	//�좎떇�곗삕�좎룞�쇿룴�좎룞�쇿뜝�숈삕�좑옙
	var actionNm = document.listForm.action;
	document.listForm.action = actionNm.split("?")[0];
	document.listForm.target="eventView";
	document.listForm.submit();
}

//�좎떛釉앹삕�� �좎룞�쇿뜝占� �좎룞��
function viewEventTalk_func(seq,flag){
	var gsWin = window.open("about:blank","eventView");
    
	document.listForm.seq.value = seq;
	document.listForm.type.value = 'view';
	
	//�좎떇�곗삕�좎룞�쇿룴�좎룞�쇿뜝�숈삕�좑옙
	var actionNm = document.listForm.action;
	if(flag == "H"){
		document.listForm.action = "/NGLMS/High/Community/EventTalk.do";
	}else if(flag == "M"){
		document.listForm.action = "/NGLMS/Middle/Community/EventTalk.do";
	}
	//document.listForm.method="post";
	document.listForm.target="eventView";
	document.listForm.submit();
}

//�좎룞�쇿뜝�숈삕 �좎떛釉앹삕�� �좎룞��
function viewMainEvent_func(seq, type, url){
	document.mainEventForm.seq.value = seq;
	document.mainEventForm.type.value = type;
	document.mainEventForm.action = url;
	document.mainEventForm.submit();
}
//�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕 �좎룞��
function viewMainBoard_func(seq, type, url){
	document.mainListForm.seq.value = seq;
	document.mainListForm.type.value = type;
	document.mainListForm.action = url;
	document.mainListForm.submit();
}
//�좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕 �좎룞��
function viewMainBoard_func_schedule(url){
	document.mainListForm.seq.value = "72197";
	document.mainListForm.type.value = "view";
	document.mainListForm.action = url;
	document.mainListForm.submit();
}

//�좎룞�쇿뜝�숈삕�좎룞�� �좎떕�몄삕 �좎룞�쇿뜝�숈삕�� �좎룞�쇿뜝�숈삕 �좎룞�쇿뜝占�
function subpagePaging_func(pageNum){			
	document.subListForm.subPageIndex.value = pageNum;				
	document.subListForm.type.value = 'view';							
   	document.subListForm.submit();
}


//�좎뙃�쒓퉵�� �좎룞�쇿뜝�숈삕
function deleteBoard_func(seq, type) {		
	if(!confirm('�좎룞�쇿뜝�숈삕�좎떦�쒓쿋�숈삕�좎떦源띿삕?')) return;
	document.listForm.type.value = type;
	document.listForm.seq.value = seq;
	
	$.ajax({
	    type : "POST" 
	    , async : true   		    
	    , cache : false 
	    , data : $("#listForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {	    	
	    	alert("�좎룞�쇿뜝�숈삕�좎떎�듭삕�좎룞�쇿뜝�밸뙋��.");	    		
	    	viewBoard_func('', '');
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});		
}




//�좎떛釉앹삕�� �좎룞��
function eventTab_func(cd, postYn){
	document.listForm.search_key.value = cd;
	document.listForm.post_yn.value = postYn;
	userSearchPaging2_func(1);
}



/*�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕�좎룞�� �좎룞�� �좎룞�쇿뜝�숈삕�좎떕占�*/
function view_doGangList(id, search_reg_start_dt ,search_reg_end_dt ){	
	
	$.ajax({
	    type : "POST" 
	    , async : true   
	    , url : "/NGLMS/High/MyPage/StatsLectureReg.do"
	    
	    , cache : false 
	    , data : "prof_id=" + id +"&search_reg_start_dt=" + search_reg_start_dt + "&search_reg_end_dt=" + search_reg_end_dt + "&lec_target=" + '0'+"&paction=VIEW"
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#pop").html(response);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});	
			
}

/*�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕�좎룞�� �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�살룞�쇿뜝�숈삕��*/
function view_doRegionLectureList(lecture_cd){	
	$.ajax({
	    type : "POST" 
	    , async : true   
	    , url : "/NGLMS/High/MyPage/StatsRegionLecture.do"
	    
	    , cache : false 
	    , data : "lecture_cd=" + lecture_cd +"&paction=VIEW"
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#pop").html(response);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});	
			
}


function view_doRegionLectureList2(lecture_cd){	
	$.ajax({
	    type : "POST" 
	    , async : true   
	    , url : "/NGLMS/Middle/MyPage/StatsRegionLecture.do"
	    
	    , cache : false 
	    , data : "lecture_cd=" + lecture_cd +"&paction=VIEW"
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#pop").html(response);
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});	
			
}




//�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕�좎룞�� - �좎뙃�쒓퉵�� �좎룞�쇿뜝�숈삕�� �좎룞�쇿뜝�숈삕
function boardListDelete_func() {	
	var arr = [];
	
	$(".select_cb:checked").each(function() {
		var data = $(this).val();		
		arr.push(data);	
	});
		
	if(arr.length!=0){
		if(confirm("�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕�좎떦�쒓쿋�숈삕�좎떦源띿삕?")){
			document.listForm.type.value = 'delete';
			document.listForm.seqs.value = arr;
			
			$.ajax({
			    type : "POST" 
			    , async : true 
			    , cache : false 
			    , data : $("#listForm").serialize()
			    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
			    , error : function(request, status, error) {
			    }
			    , success : function(response, status, request) {
			    	alert("泥섇뜝�숈삕�좎떎�듭삕�좎룞�쇿뜝�밸뙋��.");
			    	document.listForm.pageIndex.value = '1';
					document.listForm.type.value = '';
			    	document.listForm.submit();
			    }
			    , beforeSend: function() {}
			    , complete: function() {}
			});	
		}
	} else {
		alert("�좎룞�쇿뜝�숈삕�좎떦�숈삕 �좎룞�쇿뜝�숈삕�좑옙 �좎룞�쇿뜝�숈삕�좎룞�� �좎뙇�쎌삕�좎룞��");
	}		
}

//�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕�좎룞�� �좎뙃�쒓퉵�� �좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕
function boardDelete_func(seq){
	
	if(confirm("�좎룞�쇿뜝�숈삕 �좎룞�쇿뜝�숈삕 �좎떦�쒓쿋�숈삕�좎떦源띿삕?")){
		document.listForm.seqs.value = seq;
		document.listForm.type.value = 'delete';
		
		$.ajax({
		    type : "POST" 
		    , async : true 
		    , cache : false 
		    , data : $("#listForm").serialize()
		    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
		    , error : function(request, status, error) {
		    }
		    , success : function(response, status, request) {
		    	alert("泥섇뜝�숈삕�좎떎�듭삕�좎룞�쇿뜝�밸뙋��.");
		    	document.listForm.pageIndex.value = '1';
				document.listForm.type.value = '';
		    	document.listForm.submit();
		    }
		    , beforeSend: function() {}
		    , complete: function() {}
		});	
	} 
}


function viewUway_func(target, url){
	document.uway_form.action = "/NGLMS/Middle/Examinfo/" + target + ".do";
	document.uway_form.type.value = "uway";
	document.uway_form.url.value = url;
	document.uway_form.submit();
}

function viewHighUway_func(target, url){
	document.uway_form.action = "/NGLMS/High/Examinfo/" + target + ".do";
	document.uway_form.type.value = "uway";
	document.uway_form.url.value = url;
	document.uway_form.submit();
}

function viewJongro_func(target, url){
	document.uway_form.action = "/NGLMS/Middle/Examinfo/" + target + ".do";
	document.uway_form.type.value = "Jongro";
	document.uway_form.url.value = url;
	document.uway_form.submit();
}

function search_change_code(v){
	if(v.value == '01'){    
		$("#search_lecture_cd").attr("disabled", false); 
		$("#search_lecture_cd").show();			
	} else {
		$('#search_lecture_cd').value = '';
		$("#search_lecture_cd").hide();		
		$("#search_lecture_cd").attr("disabled", true); 
	}
}

/* �좎룞�쇿뜝�쒙퐦�쇿뜝占� �좎뙥怨ㅼ삕 */
function addFavorite(){
	strUrl = "http://edu.ingang.go.kr/"; // �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕�좎룞�� url
	window.external.AddFavorite(strUrl,'�좎룞�쇿뜝�숈삕�좎떥怨ㅼ삕');
}

/* �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕�좎룞�� �좎룞�쇿뜝�숈삕 */
function setStartPage(Obj){
	strUrl = "http://edu.ingang.go.kr/"; // �좎룞�쇿뜝�숈삕�좎룞�쇿뜝�숈삕�좎룞�� url
	document.body.style.behavior ='url(#default#homepage)';
	document.body.setHomePage(strUrl);
}