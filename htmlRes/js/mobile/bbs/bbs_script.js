//占쌉쏙옙占쏙옙 占쏙옙
function viewBoard_func(seq, type){
	document.listForm.seq.value = seq;
	document.listForm.type.value = type;
	document.listForm.submit();
}

function viewBoard_func2(seq, type, action_url){
	document.listForm.seq.value = seq;
	document.listForm.type.value = type;
	document.listForm.select_user.value = seq;
	document.listForm.action = action_url;
	document.listForm.submit();
}
		
//占쌉쏙옙占쏙옙 占쏙옙
function viewReviewBoard_func(seq, type){
	document.listForm.select_user.value = seq;
	document.listForm.type.value = type;
	document.listForm.submit();
}

function viewReviewBoard_func2(seq, type,action_url){
	document.listForm.select_user.value = seq;
	document.listForm.type.value = type;
	document.listForm.action = action_url;
	document.listForm.submit();
}

//占싱븝옙트 占쏙옙
function viewEvent_func(seq){
	var gsWin = window.open("about:blank","eventView");
	
	document.listForm.seq.value = seq;
	document.listForm.type.value = 'view';
	
	//占식띰옙占쏙옙叩占쏙옙占쏙옙占�
	var actionNm = document.listForm.action;
	document.listForm.action = actionNm.split("?")[0];
	document.listForm.target="eventView";
	document.listForm.submit();
}

//占싱븝옙트 占쏙옙占� 占쏙옙
function viewEventTalk_func(seq,flag){
	var gsWin = window.open("about:blank","eventView");
    
	document.listForm.seq.value = seq;
	document.listForm.type.value = 'view';
	
	//占식띰옙占쏙옙叩占쏙옙占쏙옙占�
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

//占쏙옙占쏙옙 占싱븝옙트 占쏙옙
function viewMainEvent_func(seq, type, url){
	document.mainEventForm.seq.value = seq;
	document.mainEventForm.type.value = type;
	document.mainEventForm.action = url;
	document.mainEventForm.submit();
}
//占쏙옙占쏙옙 占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙
function viewMainBoard_func(seq, type, url){
	document.mainListForm.seq.value = seq;
	document.mainListForm.type.value = type;
	document.mainListForm.action = url;
	document.mainListForm.submit();
}
//占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙 占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙
function viewMainBoard_func_schedule(url){
	document.mainListForm.seq.value = "72197";
	document.mainListForm.type.value = "view";
	document.mainListForm.action = url;
	document.mainListForm.submit();
}

//占쏙옙占쏙옙占쏙옙 占싫울옙 占쏙옙占쏙옙트 占쏙옙占쏙옙 占쏙옙占�
function subpagePaging_func(pageNum){			
	document.subListForm.subPageIndex.value = pageNum;				
	document.subListForm.type.value = 'view';							
   	document.subListForm.submit();
}


//占쌉시깍옙 占쏙옙占쏙옙
function deleteBoard_func(seq, type) {		
	if(!confirm('占쏙옙占쏙옙占싹시겠쏙옙占싹깍옙?')) return;
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
	    	alert("占쏙옙占쏙옙占실억옙占쏙옙占싹댐옙.");	    		
	    	viewBoard_func('', '');
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});		
}




//占싱븝옙트 占쏙옙
function eventTab_func(cd, postYn){
	document.listForm.search_key.value = cd;
	document.listForm.post_yn.value = postYn;
	userSearchPaging2_func(1);
}



/*占쏙옙占쏙옙 占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙 占쏙옙占쏙옙占싫�*/
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

/*占쏙옙占쏙옙 占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙占쏙옙占싻쏙옙占쏙옙황*/
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




//占쏙옙占쏙옙 占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙 - 占쌉시깍옙 占쏙옙占쏙옙트 占쏙옙占쏙옙
function boardListDelete_func() {	
	var arr = [];
	
	$(".select_cb:checked").each(function() {
		var data = $(this).val();		
		arr.push(data);	
	});
		
	if(arr.length!=0){
		if(confirm("占쏙옙占쏙옙 占쏙옙占쏙옙占싹시겠쏙옙占싹깍옙?")){
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
			    	alert("처占쏙옙占실억옙占쏙옙占싹댐옙.");
			    	document.listForm.pageIndex.value = '1';
					document.listForm.type.value = '';
			    	document.listForm.submit();
			    }
			    , beforeSend: function() {}
			    , complete: function() {}
			});	
		}
	} else {
		alert("占쏙옙占쏙옙占싹쏙옙 占쏙옙占쏙옙占� 占쏙옙占쏙옙占쏙옙 占쌍쇽옙占쏙옙");
	}		
}

//占쏙옙占쏙옙 占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙 占쌉시깍옙 占쏙옙占쏙옙 占쏙옙占쏙옙
function boardDelete_func(seq){
	
	if(confirm("占쏙옙占쏙옙 占쏙옙占쏙옙 占싹시겠쏙옙占싹깍옙?")){
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
		    	alert("처占쏙옙占실억옙占쏙옙占싹댐옙.");
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

/* 占쏙옙占시ｏ옙占� 占쌩곤옙 */
function addFavorite(){
	strUrl = "http://edu.ingang.go.kr/"; // 占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙 url
	window.external.AddFavorite(strUrl,'占쏙옙占쏙옙占싸곤옙');
}

/* 占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙 */
function setStartPage(Obj){
	strUrl = "http://edu.ingang.go.kr/"; // 占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙 url
	document.body.style.behavior ='url(#default#homepage)';
	document.body.setHomePage(strUrl);
}