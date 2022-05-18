/* mento - lecture.jsp  멘토별 공부법 특강 조회 */
function getMentoList_func(seq){
	$("input[name=prof_id]").val(seq);
	document.doMento.submit();
}


/* mento - column.jsp  멘토별 학습컬럼 조회 */
function getColumnList_func(seq){
	document.listForm.prof_id.value = seq;
	document.listForm.search_keyword.value = '';
	document.listForm.type.value = '';
	document.listForm.pageIndex.value = 1;
	document.listForm.submit();
}


/* mento - column.jsp에서 해당 글 조회 */
function getColumnView_func(seq, cd){
	document.listForm.select_key.value = seq;
	document.listForm.type.value = cd;
	document.listForm.submit();
}


/* 고민상담서비스 분류 선택 */
function selectCounseCode(cd, obj){
	document.selectForm.search_code_cd_value.value = cd;
	/*$("#tabhighm").show();
	$(".tabhigh ul li").removeClass("on");
	$(obj).addClass("on");*/
	$(".off").removeClass("on");
	$(obj).addClass("on");
}


/* 고민상담서비스 맨토 선택 1 */
function getCounselList_func(type, prof){
	if(document.selectForm.search_code_cd_value.value==''){
		alert('분류를 먼저 선택해 주세요');
	} else {
		document.selectForm.prof_id.value = prof;
		document.selectForm.type.value = type;
		document.selectForm.submit();
	}
}

/* 고민상담서비스 맨토 선택 2(콤보박스용) */
function getCounselList2_func(type, obj){
	if(document.selectForm.search_code_cd_value.value==''){
		alert('분류를 먼저 선택해 주세요');
	} else {
		document.selectForm.prof_id.value = $(obj).val();
		document.selectForm.type.value = type;
		document.selectForm.submit();
	}	
}


/* 고민상담서비스 글 조회, 수정 */
function getCounselView_func(seq, cd){
	document.listForm.select_key.value = seq;
	document.listForm.type.value = cd;
	document.listForm.submit();
}


/* 고민상담서비스 글 작성 */
function getCounselReg_func(cd){
	document.listForm.type.value = cd;
	document.listForm.submit();
}


/* 고민상담서비스 강좌 정보 */
function getLecturesList_func(obj){
	if($(obj).val()!=null){
		document.listForm.prof_id.value = $(obj).val();
		document.listForm.type.value = 'write';
		document.listForm.submit();
		
	}
	
}