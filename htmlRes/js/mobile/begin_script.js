



/* 강남 인강 인기강좌 - 상단 탭 메뉴(고3,N수/고2,고1/대입논술) 선택 */
function mainMobilePopLec1_func(cd){
	$("input[name=populartch_cd1]").val(cd);
	$("input[name=populartch_cd2]").val("");
	mainMobilePopLec_func();
}

/* 강남 인강 인기강좌 - 과목 메뉴 선택 */
function mainMobilePopLec2_func(cd){
	$("input[name=populartch_cd2]").val(cd);
	mainMobilePopLec_func();
}

function showLecEpil_func(num){
	$(".lecepil").hide();
	$(".lecepil"+num).show();
}

//메인 공지사항 뷰
function viewMainBoard_func(seq, type){
	document.mainListForm.seq.value = seq;
	document.mainListForm.type.value = type;
	document.mainListForm.action = "/NGLMS/Mobile/Notice.do";
	document.mainListForm.submit();
}

//파일 다운로드
doDownLoadUploader = function(attach_idx, file_seq, auth, attach_mode ){
	var url = '/NGLMS/downLoad.do?attach_idx=' + attach_idx + '&file_seq=' + file_seq + '&e=' + auth+'&attach_mode='+attach_mode;
	window.open(url);
};


/* 강남 인강 인기강좌 - 탭/과목 선택이 되었는지 판별 후 없을 경우 랜덤으로 스크립트 실행 */
function mainMobilePopLec_func(){

	if($("input[name=populartch_cd1]").val()==''){
		var rannum = (Math.floor(Math.random() * (3))+1);
		if(rannum==3){
			$("input[name=populartch_cd1]").val('5');
		} else {
			$("input[name=populartch_cd1]").val(rannum);
		}
	}
	
	if($("input[name=populartch_cd2]").val()==''){
		$("input[name=populartch_cd2]").val((Math.floor(Math.random() * (5))+1));
	}

	$.ajax({
	    type : "POST" 
	    , url : '/NGLMS/Mobile/MainPopLecture.do'
	    , async : true 
	    , cache : false 
	    , data : "class_cd=L"+$("input[name=populartch_cd1]").val()+"0"+$("input[name=populartch_cd2]").val()+"&idx_rn=4"
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#populartchForm").html(response);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
	
}



function doMobileView(data) {
	
	if(data == "KIL0001442" 
			|| data == "KIL0001420" 
			|| data == "KIL0002170"
			|| data == "KIL0001547"
			|| data == "KIL0002171"){
		alert("PC 버전에서 확인 부탁드립니다.");
		retrun;
	}
	
	var param = "?lecture_cd="+data;
	document.search.action = "/NGLMS/Mobile/Class.do"+param;
	document.search.target = '_self';
	document.search.type.value = 'view';
	document.search.submit();
	document.search.type.value = '';
	
}






function mobileClassSearch_func(cd, lv){
	var param = "?class_cd="+cd;
	if(lv!='')	param = param + "&code_study_level="+lv;
	
	document.search.target = '_self';
	document.search.action = "/NGLMS/Mobile/Class.do"+param;
	document.search.submit();
}


function mobileClassInfoTabMenu_func(num){
	$(".tabmobilem").hide();
	$(".tabmobilem"+num).show();
	$(".populartab").removeClass("on");
	$("#mtab"+num).addClass("on");
	studyroomsize();
}




function mobileEpilList_func(num){
	
	document.lectureEpilForm.pageIndex.value = num;
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/ClassEpil.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureEpilForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#tabmobilem3").html(response);
	    	mobileClassInfoTabMenu_func(3);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}


function mobileNoteList_func(num){

	document.lectureNoteForm.pageIndex.value = num;
	document.lectureNoteForm.type.value = '';
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/ClassNote.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureNoteForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#tabmobilem4").html(response);
	    	mobileClassInfoTabMenu_func(4);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}




function mobileNoteView_func(seq){
	document.lectureNoteForm.type.value = 'view';
	document.lectureNoteForm.seq.value = seq;
	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/Mobile/ClassNote.do"
	    , async : true 
	    , cache : false 
	    , data : $("#lectureNoteForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#tabmobilem4").html(response);
	    	mobileClassInfoTabMenu_func(4);
	    	
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
}







function doMobilePromotion_func(seq){		
	$("#addlistBTN").show();
	$("#addlistLodingBTN").hide();
	$("#addlistNum").val("2");
	$("#view-count").html("10");		
	document.listForm.action = "/NGLMS/Mobile/Promotion.do?seq="+seq;
	document.listForm.type.value = "view";
	document.listForm.submit();
}


function doAppPromotion_func(seq){		
	$("#addlistBTN").show();
	$("#addlistLodingBTN").hide();
	$("#addlistNum").val("2");
	$("#view-count").html("10");		
	document.listForm.action = "/NGLMS/Mobile/App/Promotion.do?seq="+seq;
	document.listForm.type.value = "view";
	document.listForm.submit();
}


function doMobileStudyRoom(data) {
	var param = "?lecture_cd="+data;
	document.search.action = "/NGLMS/Mobile/StudyRoom.do"+param;
	document.search.target = '_self';
	document.search.submit();
}


function mobileInterestDelete(cd){
	if (confirm("관심강좌를 삭제하시겠습니까?")) {
		document.listFormReg.seq.value = cd;
		document.listFormReg.paction.value = "DELETE";
		$.ajax({
		    type : "POST" 
		    , url : "/NGLMS/Mobile/LectureTab.do"
		    , async : true 
		    , cache : false 
		    , data : $("#listFormReg").serialize()
		    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
		    , error : function(request, status, error) {
		    }
		    , success : function(response, status, request) {
				alert("관심강좌가 삭제되었습니다.");
				document.listFormReg.paction.value = "";
				$("#studyListForm3").html(response);
		    	
		    }
		    , beforeSend: function() {}
		    , complete: function() {}
		});
	}
 }



//더보기
function addPagingEv_func(maxNum){					
	document.listForm.pageIndex.value = $("#addlistNum").val();
	document.listForm.type.value = 'add';		
 	
 	$.ajax({
	    type : "POST" 
	    , async : true   		    
	    , cache : false 
	    , data : $("#listForm").serialize()
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {	
	    	$("#allAddList").append(response);	    	

	    }
	    , beforeSend: function() {
	    	$("#addlistBTN").hide();
	    	$("#addlistLodingBTN").show();
	    }
	    , complete: function() {
	    	$("#addlistBTN").show();
	    	$("#addlistLodingBTN").hide();

	    	if($("#addlistNum").val() == parseInt((parseInt(maxNum)+9)/10)){
	    		$("#addlistBTN").hide();
	    		$("#view-count").html(maxNum);
	    	} else {
	    		$("#view-count").html(parseInt($("#addlistNum").val())*10);
	    	}
	    		
	    	$("#addlistNum").val(parseInt($("#addlistNum").val())+1);
	    }
	});		
}	

//게시판 리셋 후 뷰
function viewResetBoard_func(seq, type){
	$("#addlistBTN").show();
	$("#addlistLodingBTN").hide();
	$("#addlistNum").val("2");
	$("#view-count").html("10");
	document.listForm.seq.value = seq;
	document.listForm.type.value = type;
	document.listForm.pageIndex.value = 1;	
	document.listForm.submit();
}

function mobileMenu(){	
	document.search.action = '/NGLMS/Mobile/Main.do';
	document.search.type.value = 'menu';
	document.search.submit();
}


function mobileLogout(){	
	document.search.action = '/NGLMS/Mobile/Main.do';
	document.search.type.value = 'logout';
	document.search.submit();
}
