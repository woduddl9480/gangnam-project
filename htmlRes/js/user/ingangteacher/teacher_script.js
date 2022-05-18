function doViewBoard(seq){	
	document.listForm.action = document.listForm.action+"?type=view&seq="+seq;
	document.listForm.submit();
}

function teacherSearch_func(cd, cd2){
	document.listForm.action = "/NGLMS/High/IngangTeacher/Main.do";
	document.listForm.class_cd.value = cd; 
	document.listForm.class_cd2.value = cd2; 
	document.listForm.submit();		
}

function middleTeacherSearch_func(cd){
	document.listForm.action = "/NGLMS/Middle/IngangTeacher/Main.do";
	document.listForm.class_cd.value = cd;  
	document.listForm.submit();		
}

function doPopTeacherProfile(prof_id){	
	$.ajax({
	    type : "POST" 
	    , url : "/NGLMS/IngangTeacher/TeacherProfile.do?forword_prof_id="+prof_id
	    , async : true 
	    , cache : false 
	    , contentType : "application/x-www-form-urlencoded;charset=utf-8"
	    , error : function(request, status, error) {
	    }
	    , success : function(response, status, request) {
	    	$("#pop").html(response);	 
	    	popresizep(".loadingDiv"); 
	    }
	    , beforeSend: function() {}
	    , complete: function() {}
	});
	
	
}


function showTeacherList_func(){
	$(".teabox").animate({"height": "45px"}, 500);
	$(".tea_list").animate({"margin-top": "20px"}, 100);
	$(".tea_list").animate({"margin-bottom": "10px"}, 100);
	$(".hannunDiv").hide();
	$(".hannunDivOn").show();
	$(".onshow").hide();
	$(".offshow").show();
}

function showTeacherInfoList_func(){
	$(".hannunDiv").show();
	$(".hannunDivOn").hide();
	$(".teabox").animate({"height": "198px"}, 500);
	$(".tea_list").animate({"margin-top": "40px"}, 500);
	$(".tea_list").animate({"margin-bottom": "40px"}, 500);
	$(".offshow").hide();
	$(".onshow").show();
}

