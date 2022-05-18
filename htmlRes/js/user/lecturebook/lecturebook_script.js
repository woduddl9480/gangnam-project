
function selectLectureBook(lec_cd){
	$("input[name=search_class_cd]").val(lec_cd);
	$("input[name=search_keyword]").val("");
	$("select[name=search_key] > option[value=01]").attr("selected", "ture");
	userSearchPaging_func(1);
}

function viewBookInfo_func(seq){

	$.ajax({
	    type : "POST" 
	    , url : '/NGLMS/High/LectureBook/BookInfo.do'
	    , async : true 
	    , cache : false 
	    , data : "book_seq="+seq
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

function bookInfoTab_func(num){
	$(".scol").hide();
	$(".scol"+num).show();
	$(".bookInfoTab").removeClass("on");
	$(".bookInfoTab"+num).addClass("on");
}