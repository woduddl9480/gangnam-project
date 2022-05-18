var winClassroom; // 윈도우 창 닫는 전역변수


//학습창 닫을대 팝업 변수 초기화

//closeWin = function() {

//	winClassroom = false;

//}





/*******************************************************************************

 * popupWindow(url, winname, width, height, options, position) 팝업창

 */

function popupWindow(url, winname, width, height, options, position) {	

	var posX = 0;

	var posY = 0;

	switch (position) {

	case "CENTER":

		posX = Math.ceil((window.screen.width - width) / 2);

		posY = Math.ceil((window.screen.height - height) / 2);

		break;

	case "LEFTTOP":

		posX = 0;

		posY = 0;

		break;

	case "LEFTMIDDLE":

		posX = 0;

		posY = Math.ceil((window.screen.height - height) / 2);

		break;

	case "LEFTBOTTOM":

		posX = 0;

		posY = Math.ceil(window.screen.height - height);

		break;

	case "RIGHTTOP":

		posX = Math.ceil(window.screen.width - width);

		posY = 0;

		break;

	case "RIGHTMIDDLE":

		posX = Math.ceil(window.screen.width - width);

		posY = Math.ceil((window.screen.height - height) / 2);

		break;

	case "RIGHTBOTTOM":

		posX = Math.ceil(window.screen.width - width);

		posY = Math.ceil(window.screen.height - height);

		break;

	case "POPS":

		posX = 200;

		posY = 200;		

		break;	

	default:

		posX = Math.ceil((window.screen.width - width) / 2);

		posY = Math.ceil((window.screen.height - height) / 2);

		break;

	}

	var popupWin = window.open(url, winname, '"left= ' + posX + ', top=' + posY + ', width=' + width + ', height=' + height + ', options"', position);
		
		/*window.open(url, winname, 'left=' + posX + ',top=' + posY

			+ ',width=' + width + ',height=' + height + ',' + options);
*/
	popupWin.focus();

	return popupWin;

}



function Edit() {	

	var win = popupWindow('../../edit/', 'pop_zipcode', '580', '380', 'scrollbars=0', 'CENTER');

	win.focus();

}



/**

 * 학생 찾기

 * 

 * @param callback

 * @return

 */

function fnPopUser() {

	var f = $('Form.popup');

	var nm = 'pop_user';

	var win = popupWindow('', nm, '400px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'mng';

	f.action = context + '/UserPopAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}





/**

 * 학생 찾기

 * 

 * @param callback

 * @return

 */

function fnPopStd() {

	var f = $('Form.popup');

	var nm = 'pop_std';

	var win = popupWindow('', nm, '400px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'mng';

	f.action = context + '/StdPopAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}



function fnPopStdType1() {

	var f = $('Form.popup');

	var nm = 'pop_std';

	var win = popupWindow('', nm, '550px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['type'].value = '1';

	f.elements['cmd'].value = 'mng';

	f.action = context + '/StdPopAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}



/**

 * 학교 찾기

 * 

 * @param callback

 * @return

 */



function fnPopFrSchool() {

	var f = $('Form.popup');

	var nm = 'pop_school';

	var win = popupWindow('', nm, '550px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'mng';

	f.action = context + '/SchoolPopFrAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}



/**

 * 교재 찾기

 * 

 * @param callback

 * @return

 */

function fnPopTextBook() {

	var f = $('Form.popup');

	var nm = 'pop_textbook';

	var win = popupWindow('', nm, '550px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'mng';

	f.action = context + '/TextBookfPopAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}





function fnPopBestLecture() {

	var f = $('Form.popup');

	var nm = 'pop_lecture';

	var win = popupWindow('', nm, '850px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'mng';

	f.elements['type'].value = 'best';

	f.action = context + '/LecturePopAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}

function fnPopBookLecture() {

	var f = $('Form.popup');

	var nm = 'pop_lecture';

	var win = popupWindow('', nm, '850px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'mng';

	f.elements['type'].value = 'book';

	f.action = context + '/LecturePopAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}



function fnPopGangGroup(mst_cd) {

	var f = $('Form.popup');

	var nm = 'pop_lecture';

	var win = popupWindow('', nm, '850px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['lec'].value = mst_cd;

	f.elements['cmd'].value = 'popMng';

	f.action = context + '/GangAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}



function userGroupList() {

	var f = $('Form.popup');

	var nm = 'pop_lecture';

	var win = popupWindow('', nm, '850px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'mngs';

	f.elements['type'].value = 'userList';

	f.action = context + '/GroupAction.do';

	f.target = nm;

	f.submit();

	win.focus();

}







/**

 * 시험 첨삭

 * 

 * @param callback

 * @return

 */

function fnPopCorrectExam(exam_seq, stud_id) {

	var win = popupWindow(context

			+ '/CorrectExamCorrectAction.do?cmd=mng&exam_seq=' + exam_seq

			+ '&stud_id=' + stud_id, 'popup_correctexam', '650px', '550px',

			'scrollbars=yes', 'CENTER');

	win.focus();

}



/**

 * 팝업

 * 

 * @return

 */

function fnNotePop(action, cmd) {

	var f = $('Form.popup');

	var nm = 'popup';

	var win = popupWindow('', nm, '735px', '595px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = cmd;

	f.action = fnAction(action);

	f.target = nm;

	f.submit();

	win.focus();

}



/**

 * 수강후기 등록 팝업

 * 

 * @param action

 * @param cmd

 * @param user_id

 * @return

 */

function fnPostPop(action, cmd, user_id, lec) {

	if (user_id == '') {

		alert("로그인 후 이용이 가능한 서비스입니다.");

		return;

	}

	var f = $('Form.popup');

	var nm = 'pop_post';

	var win = popupWindow('', nm, '900px', '600px', 'scrollbars=no', 'CENTER');

	f.elements['cmd'].value = cmd;

	f.elements['lec'].value = lec;

	f.action = fnAction(action);

	f.target = nm;

	f.submit();

	win.focus();

}



/**

 * 강좌분류 찾기

 * 

 * @param collback

 * @return

 */

function popGetLectureClass(collback) {

	var url = fnAction('LectureClassAction');

	var winname = "selectLectureClass";

	var width = "500";

	var height = "400";

	var options = "";

	var position = "CENTER";



	setMethod = collback;



	url += "?cmd=popupTree";



	popupWindow(url, winname, width, height, options, position);

}



/**

 * 분류 찾기 팝업

 * 

 * @param collback

 * @return

 */

function popGetLectureFrClass(collback) {

	var url = fnAction('LectureClassFrAction');

	var winname = "selectLectureClass";

	var width = "500";

	var height = "400";

	var options = "";

	var position = "CENTER";



	setMethod = collback;



	url += "?cmd=popupTree";



	popupWindow(url, winname, width, height, options, position);

}



/**

 * 학습평가

 */

popTest = function(lecture_cd) {

	var f = $('Form.test');

	var nm = 'testpopup';

	var win = popupWindow('', nm, '720px', '600px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'classTest';

	f.elements['lecture_cd'].value = lecture_cd;

	f.action = fnAction('ClassroomAction');

	f.target = nm;

	f.submit();

	win.focus();

};





doEmail = function(){

	if (getCheckList($('Form.list')))

		return;



	var f = $('Form.list');

	var nm = 'pop_mail';

	var win = popupWindow('', nm, '811px', '581px', 'scrollbars=no', 'CENTER');

	f.elements['cmd'].value = 'mailpop';

	f.action = context + '/EtcServiceSmsMailAdminAction.do';

	f.target = nm;

	f.submit();

	win.focus();

};



// 문자

doSms = function(t) {

	if (t && getCheckList($('Form.list')))

		return;



	var f = $('Form.list');

	var nm = 'pop_sms';

	var win = popupWindow('', nm, '390px', '840px', 'scrollbars=no', 'CENTER');

	f.elements['cmd'].value = 'smspopinfo';

	f.action = context + '/EtcServiceSmsMailAdminAction.do';

	f.target = nm;

	f.submit();

	win.focus();

};

// 쪽지

doMemo = function() {

	if (getCheckList($('Form.list')))

		return;



	var f = $('Form.list');

	var nm = 'pop_note';

	var win = popupWindow('', nm, '500px', '360px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'notepopinfo';

	f.action = context + '/EtcServiceSmsMailAdminAction.do';

	f.target = nm;

	f.submit();

	win.focus();

};



// 문자

doSmsIn = function() {

	if (getCheckList($('Form.list')))

		return;



	var f = $('Form.list');

	var nm = 'pop_sms';

	var win = popupWindow('', nm, '370px', '840px', 'scrollbars=no', 'CENTER');

	f.elements['cmd'].value = 'smspopinfo';

	f.action = context + '/EtcServiceSmsMailAdminAction.do';

	f.target = nm;

	f.submit();

	win.focus();

};



// 쪽지

doMemoIn = function() {

	if (getCheckList($('Form.list')))

		return;



	var f = $('Form.list');

	var nm = 'pop_note';

	var win = popupWindow('', nm, '500px', '400px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'notepopinfo';

	f.action = context + '/EtcServiceSmsMailAdminAction.do';

	f.target = nm;

	f.submit();

	win.focus();

};



/**

 * 강좌 맛보기

 */



doClassroomPreview = function(type, example_time, lecture_nm, gang_nm, vod, intro, prof_nm, folder_addr) {

	var f = $('Form.classroom.ex');

	var nm = 'popClassroomEx';

	var browserName = navigator.userAgent;

	var widthpx = '';

	var hightpx = '';

	

	if (browserName.indexOf("Firefox") != -1) {

		f.elements['cmd'].value = 'classFxPreview';

		if (type == 'low') {

			widthpx = '505px';

			hightpx = '460px';

		}

		if (type == 'high') {

			widthpx = '750px';

			hightpx = '660px';

		}

	} else if (browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1) {

		f.elements['cmd'].value = 'classCsPreview';

		if (type == 'low') {

			widthpx = '520px';

			hightpx = '350px';

		}

		if (type == 'high') {

			widthpx = '750px';

			hightpx = '660px';

		}

	} else {

		f.elements['cmd'].value = 'classPreview';

		if (type == 'low') {

			widthpx = '485px';

			hightpx = '480px';

		}

		if (type == 'high') {

			widthpx = '735px';

			hightpx = '660px';

		}

	}	

	

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=no','CENTER');

	f.elements['type'].value = type;

	f.elements['example_time'].value = example_time;

	f.elements['lecture_nm'].value = lecture_nm;

	f.elements['gang_nm'].value = gang_nm;

	f.elements['vod'].value = vod;

	f.elements['intro'].value = intro;

	f.elements['prof_nm'].value = prof_nm;

	f.elements['folder_addr'].value = folder_addr;

	f.action = context + '/ClassroomAction.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

};



/**

 * 관리자 강 미리보기

 */



doAdminPreview = function(type, lecture_nm, lecture_cd, gang_seq, gang_nm, vod, folder_addr, adm_gb) {



	var f = $('Form.gang.list');

	var nm = 'popClassroomEx';

	widthpx = '735px';

	hightpx = '680px';

	

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=no','resizable=no','CENTER');

	f.elements['cmd'].value = 'admPreview';

	f.elements['type'].value = type;

	f.elements['example_time'].value = 'all';

	f.elements['lecture_nm'].value = lecture_nm;

	f.elements['lecture_cd'].value = lecture_cd;

	f.elements['gang_seq'].value = gang_seq;

	f.elements['gang_nm'].value = gang_nm;

	f.elements['vod'].value = vod;

	f.elements['folder_addr'].value = folder_addr;

	f.elements['adm_gb'].value = adm_gb;

	f.action = context + '/GangAction.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

};



/**

 * 교재소개 팝업 으로 이동

 * 

 * @param book_seq

 * @param seq

 * @return

 */

doPopView = function(action, book_seq) {

	var f = $('Form.pop.book');

	var nm = 'pop_bookinfo';

	var win = popupWindow('', nm, '800px', '700px', 'scrollbars=yes', 'CENTER');

	f.elements['book_seq'].value = book_seq;

	f.elements['cmd'].value = 'popbookinfo';

	f.action = fnAction(action);

	f.target = nm;

	f.submit();

	win.focus();

};



/**

 * 학습창

 */

doClassroom = function(user_gb, type, lecture_nm, gang_nm, vod, intro, prof_nm, gang_seq, prof_id, lecture_cd, folder_addr, index) {

	if (user_gb == '') {

		alert("로그인 정보가 없습니다.\n로그인 하셔야 합니다.");

		return;

	} else if (user_gb == 'R' || user_gb == 'A') {

		var f = $('Form.classroom');

		var nm = 'popClassroomEx';

		var widthpx = '770px';

		var hightpx = '485px';

		if (type == 'high') {

			widthpx = '1010px';

			hightpx = '680px';

		}

		winClassroom = popupWindow('', nm, widthpx, hightpx,'resizable = yes','CENTER');

		

		var browserName = navigator.userAgent;

		if (browserName.indexOf("Firefox") != -1) {

			f.elements['cmd'].value = 'classFxPopup';			

		} else if (browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1) {

			f.elements['cmd'].value = 'classCsPopup';

		} else {

			f.elements['cmd'].value = 'classPopup';

		}		

		f.elements['type'].value = type;

		f.elements['lecture_nm'].value = lecture_nm;

		f.elements['gang_nm'].value = gang_nm;

		f.elements['vod'].value = vod;

		f.elements['intro'].value = intro;

		f.elements['prof_nm'].value = prof_nm;

		f.elements['gang_seq'].value = gang_seq;

		f.elements['search_prof_id'].value = prof_id;

		f.elements['lecture_cd'].value = lecture_cd;

		f.elements['folder_addr'].value = folder_addr;

		f.elements['index'].value = index;

		

		f.action = context + '/ClassroomAction.do';

		f.target = nm;

		f.submit();

		winClassroom.focus();

	} else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}

};



/**

 * 강의 스크랩 학습창

 */

doScrapClassroom = function(user_gb, type, lecture_nm, gang_nm, vod, intro, prof_nm, gang_seq, prof_id, lecture_cd, folder_addr, start_time, end_time) {

	if (user_gb == '') {

		alert("로그인 정보가 없습니다.\n로그인 하셔야 합니다.");

		return;

	} else if (user_gb == 'R') {

		var f = $('Form.classroom');

		var nm = 'popClassroomEx';

		var widthpx = '770px';

		var hightpx = '485px';

		if (type == 'high') {

			widthpx = '1500px';

			hightpx = '1100px';

		}

		winClassroom = popupWindow('', nm, widthpx, hightpx,'resizable=yes','CENTER');

		var browserName = navigator.userAgent;

		if (browserName.indexOf("Firefox") != -1) {

			f.elements['cmd'].value = 'classFxPopup';

			alert('explorer가 아니면 정상 동작하지 않을 수 있습니다.');

		} else if (browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1) {

			f.elements['cmd'].value = 'classCsPopup';

			alert('explorer가 아니면 정상 동작하지 않을 수 있습니다.');

		} else {

			f.elements['cmd'].value = 'classPopup';

		}		

		f.elements['type'].value = type;

		f.elements['lecture_nm'].value = lecture_nm;

		f.elements['gang_nm'].value = gang_nm;

		f.elements['vod'].value = vod;

		f.elements['intro'].value = intro;

		f.elements['prof_nm'].value = prof_nm;

		f.elements['gang_seq'].value = gang_seq;

		f.elements['search_prof_id'].value = prof_id;

		f.elements['lecture_cd'].value = lecture_cd;

		f.elements['folder_addr'].value = folder_addr;

		f.elements['start_time'].value = start_time;

		f.elements['end_time'].value = end_time;

		f.action = context + '/ClassroomAction.do';

		f.target = nm;

		f.submit();

		winClassroom.focus();

	} else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}

};





/**

 * 학습창 강명으로 이동

 */

doClassroomMove = function(user_gb, type, lecture_nm, gang_nm, vod, intro,

		prof_nm, gang_seq, prof_id, lecture_cd, hak_time, folder_addr) {

	if (user_gb == '') {

		alert("로그인 정보가 없습니다.\n로그인 하셔야 합니다.");

		return;

	} else if (user_gb == 'R') {

		var f = $('Form.move');

		var nm = 'popClassroomEx';

		var widthpx = '770px';

		var hightpx = '485px';

		if (type == 'high') {

			widthpx = '1010px';

			hightpx = '680px';

		}

		winClassroom = popupWindow('', nm, widthpx, hightpx, 'resizable=yes','CENTER');

		var browserName = navigator.userAgent;

		if(browserName.indexOf("Firefox") != -1){

			f.elements['cmd'].value = 'classFxPopup';			

		} else if(browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1){

			f.elements['cmd'].value = 'classCsPopup';

		} else {

			f.elements['cmd'].value = 'classPopup';

		}

		f.elements['type'].value = type;

		f.elements['lecture_nm'].value = lecture_nm;

		f.elements['gang_nm'].value = gang_nm;

		f.elements['vod'].value = vod;

		f.elements['intro'].value = intro;

		f.elements['prof_nm'].value = prof_nm;

		f.elements['gang_seq'].value = gang_seq;

		f.elements['search_prof_id'].value = prof_id;

		f.elements['lecture_cd'].value = lecture_cd;

		f.elements['hak_time'].value = hak_time;

		f.elements['folder_addr'].value = folder_addr;

		f.action = context + '/ClassroomAction.do';

		f.target = nm;

		f.submit();

		winClassroom.focus();

	} else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}

};





//공신선배 프로필

doPopProfProfile = function(prof_id) {

	var f = $('Form.prof.profile');

	var nm = 'pop_Profprofile';

	var win = popupWindow('', nm, '500px', '500px', 'scrollbars=yes', 'CENTER');

	f.elements['search_prof_id'].value = prof_id;

	f.elements['cmd'].value = 'popProfProfile';

	f.action = fnAction('PopProfFrAction');

	f.target = nm;

	f.submit();

	win.focus();

};



// 선생님 tcc

function doPopTeacherTcc(prof_id,tcc_path){

	var win;

	if( navigator.appName.indexOf("Microsoft") > -1 ){ // IE?

		win = popupWindow("/NGLMS/ingangPalyer/PopTeacherTcc.do?forword_prof_id="+prof_id+"&tcc_path="+tcc_path, 'tccPop', '720px', '500px', 'scrollbars=no','resizable=no','CENTER');

	}else{

		win = popupWindow("/NGLMS/ingangPalyer/PopTeacherTcc.do?forword_prof_id="+prof_id+"&tcc_path="+tcc_path, 'tccPop', '720px', '546px', 'scrollbars=no','resizable=no','CENTER');

	}

	win.focus();

}



function doVodInfo_nologin(seq, type) {
	
	var isChrome = window.chrome && !navigator.userAgent.match(/Opera|OPR\//);
	var isEdge = navigator.appVersion.indexOf("Edge/12") != -1 ? true : false;
	if (isChrome || isEdge) {
		new_doVodInfo_nologin(seq, type);
	} else {
		browser_doVodInfo_nologin(seq, type);
	}
		
};

	
new_doVodInfo_nologin = function(seq, type) {
	
	var _url = "http://"+ document.domain +"/NGLMS/ingangPalyer/ExamVodPlayer.do?";
	_url += "vod_seq=" + seq + "&type=" + type;
	
	var exe = StarPlayerExe;
	exe.install = STARPLAYER_SETUP_URL;
	exe.url = _url;
	exe.width = "710px"; 
	exe.height = "490px";
	exe.run();
	
//	console.log(url + result.folder_addr + result.file_nm);
//	console.log(_url);
//	exe.url = "http://dev.starplayer.net/test_.asp?url=http://vod.axissoft.co.kr/1_.mp4";
//	exe.topmost = true; 
//	exe.resizing = true;
	return false;

};
	


browser_doVodInfo_nologin = function(seq, type) {
	
	var win = popupWindow("/NGLMS/ingangPalyer/ExamVodPlayer.do?vod_seq="+seq+"&type="+type, 'vodPop', '710px', '490px', 'scrollbars=no','resizable=no','CENTER');
	win.focus();
};




// 뉴스 / 홍보동영상 팝업

newsPop = function(path) {

	if(path != ""){

		var f = $('Form.search');

		var nm = 'news';

		var widthpx = '760px';

		var hightpx = '560px';

		var win = popupWindow('', nm, widthpx, hightpx, 'scrollbars=yes', 'CENTER');

		f.elements['cmd'].value = 'newsPop';

		f.elements['path'].value = path;

		f.elements['csPath'].value = path;

		var browserName = navigator.userAgent;

		if(browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1){

			f.elements['csPath'].value = '';

		}

		f.action = fnAction('PopBBSComFrAction');

		f.target = nm;

		f.submit();

		win.focus();

	} else {

		alert("준비중 입니다.");

	}

};







// 학습 완료 강좌 수료증

doPopDiploma = function(lecture_cd) {

	var f = $('Form.completion.diploma');

	var nm = 'pop_diploma';

	var win = popupWindow('', nm, '850px', '1000px', 'scrollbars=no', 'CENTER');

	f.elements['lecture_cd'].value = lecture_cd;

	f.elements['cmd'].value = 'popDiploma';

	f.action = fnAction('CompletionFrAction');

	f.target = nm;

	f.submit();

	win.focus();

};



// 연간 커리큘럼 팝업

doCrclmGangSa = function() {

	var f = $('Form.location');

	var nm = 'pop_crclm';

	var win = popupWindow('', nm, '1000px', '700px', 'scrollbars=yes', 'CENTER');

	f.elements['cmd'].value = 'mng';

	f.action = fnAction('LectureCrclmGangSaFrAction');

	f.target = nm;

	f.submit();

};



// 수능/모평/학평 학습창

doVodView = function(vod_file_nm, seq, type, title) {

	

	var f = $('Form.classroom.ex');

	var nm = 'popClassroomEx';

	var browserName = navigator.userAgent;

/*	if (browserName.indexOf("Firefox") != -1) {

		f.elements['cmd'].value = 'vod';

		if (type == 'low') {

			var widthpx = '750px';

			var hightpx = '546px';

		}

		if (type == 'high') {

			widthpx = '750px';

			hightpx = '546px';

		}

	} else if (browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1) {

		f.elements['cmd'].value = 'vod';

		if (type == 'low') {

			var widthpx = '750px';

			var hightpx = '546px';

		}

		if (type == 'high') {

			widthpx = '750px';

			hightpx = '546px';

		}

	} else {

		f.elements['cmd'].value = 'vod';

		if (type == 'low') {

			widthpx = '750px';

			hightpx = '546px';		

			}

		if (type == 'high') {

			widthpx = '750px';

			hightpx = '546px';

		}

	}	

*/

	

	f.elements['cmd'].value = 'vod';

	widthpx = '750px';

	hightpx = '546px';		

	

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=no','CENTER');

	f.elements['vod'].value = vod_file_nm;

	f.elements['vod_seq'].value = seq;

	f.elements['type'].value = type;

	f.elements['example_time'].value = 'all';

	f.elements['lecture_nm'].value = title;

	f.elements['gang_nm'].value = '';

	f.elements['intro'].value = 'A';

	f.elements['prof_nm'].value = '';

	f.elements['folder_addr'].value = '';

	f.action = context + '/VodFrAction.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

};



doLecInfo = function(stud_id){

	var f = $('Form.popup');

	var nm = 'popProgress';

	popupWindow('', nm, '900px', '700px', 'scrollbars=no','CENTER');

	f.elements['cmd'].value = 'mng';

	f.elements['stud_id'].value = stud_id;

	f.action = context + '/PopProgressAction.do';

	f.target = nm;

	f.submit();

};



doEtc = function(s, q, i, o){

	var f = $('Form.popup.survey');

	var nm = 'popSurveyEtc';

	popupWindow('', nm, '800px', '700px', 'scrollbars=no','CENTER');

	f.elements['cmd'].value = 'mng';

	f.elements['survey_seq'].value = s;

	f.elements['qst_seq'].value = q;

	f.elements['item_no'].value = i;

	f.elements['tech_id'].value = encodeURIComponent(o);

	f.action = context + '/PopSurveyAction.do';

	f.target = nm;

	f.submit();

};



/**

 * HD 학습창

 */

newClassroom = function(user_gb, type, lecture_nm, gang_nm, vod, intro, prof_nm, gang_seq, prof_id, lecture_cd, folder_addr, index, last_row) {

	if (user_gb == '') {

		alert("로그인 정보가 없습니다.\n로그인 하셔야 합니다.");

		return;

	} else if (user_gb == 'R' || user_gb == 'A') {

		var f = $('Form.classroom');

		var nm = 'popClassroomEx';

		var widthpx = '1045px';

		var hightpx = '586px';



		winClassroom = popupWindow('', nm, widthpx, hightpx,'resizable = no','CENTER' );

		

		var browserName = navigator.userAgent;

/*		if (browserName.indexOf("Firefox") != -1) {

			f.elements['cmd'].value = 'classNewPopup';			

		} else if (browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1) {

			f.elements['cmd'].value = 'classNewPopup';

		} else {

			f.elements['cmd'].value = 'classNewPopup';

		}		*/

		f.elements['cmd'].value = 'classNewPopup';

		f.elements['type'].value = type;

		f.elements['lecture_nm'].value = lecture_nm;

		f.elements['gang_nm'].value = gang_nm;

		f.elements['vod'].value = vod;

		f.elements['intro'].value = intro;

		f.elements['prof_nm'].value = prof_nm;

		f.elements['gang_seq'].value = gang_seq;

		f.elements['search_prof_id'].value = prof_id;

		f.elements['lecture_cd'].value = lecture_cd;

		f.elements['folder_addr'].value = folder_addr;

		f.elements['index'].value = index;

		f.elements['last_row'].value = last_row;

		

		f.action = context + '/ClassroomAction.do';

		f.target = nm;

		f.submit();

		winClassroom.focus();

	} else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}

};



/**

 * HD 학습창 강명으로 이동

 */

newClassroomMove = function(user_gb, type, lecture_nm, gang_nm, vod, intro,

		prof_nm, gang_seq, prof_id, lecture_cd, hak_time, folder_addr,index, last_row) {



	if (user_gb == '') {

		alert("로그인 정보가 없습니다.\n로그인 하셔야 합니다.");

		return;

	} else if (user_gb == 'R') {

		var f = $('Form.move');

		var nm = 'popClassroomEx';

		var widthpx = '1045px';

		var hightpx = '586px';

		

		winClassroom = popupWindow('', nm, widthpx, hightpx, 'resizable=no','CENTER');

		var browserName = navigator.userAgent;

		/*if(browserName.indexOf("Firefox") != -1){

			f.elements['cmd'].value = 'classNewPopup';			

		} else if(browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1){

			f.elements['cmd'].value = 'classNewPopup';

		} else {

			f.elements['cmd'].value = 'classNewPopup';

		}*/

		f.elements['cmd'].value = 'classNewPopup';

		f.elements['type'].value = type;

		f.elements['lecture_nm'].value = lecture_nm;

		f.elements['gang_nm'].value = gang_nm;

		f.elements['vod'].value = vod;

		f.elements['intro'].value = intro;

		f.elements['prof_nm'].value = prof_nm;

		f.elements['gang_seq'].value = gang_seq;

		f.elements['search_prof_id'].value = prof_id;

		f.elements['lecture_cd'].value = lecture_cd;

		f.elements['hak_time'].value = hak_time;

		f.elements['folder_addr'].value = folder_addr;

		f.elements['index'].value = index;

		f.elements['last_row'].value = last_row;

		f.action = context + '/ClassroomAction.do';

		f.target = nm;

		f.submit();

		winClassroom.focus();

	} else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}

}



/**

 * 강좌 맛보기

 */



newClassroomPreview = function(type, example_time, lecture_nm, gang_nm, vod, intro, prof_nm, folder_addr) {

	var f = $('Form.classroom.ex');

	var nm = 'popClassroomEx';

	var browserName = navigator.userAgent;



	var widthpx = '750px';

	var hightpx = '546px';

	f.elements['cmd'].value = 'classNewPreview';

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=no','CENTER');

	f.elements['type'].value = type;

	f.elements['example_time'].value = example_time;

	f.elements['lecture_nm'].value = lecture_nm;

	f.elements['gang_nm'].value = gang_nm;

	f.elements['vod'].value = vod;

	f.elements['intro'].value = intro;

	f.elements['prof_nm'].value = prof_nm;

	f.elements['folder_addr'].value = folder_addr;

	f.action = context + '/ClassroomAction.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

};







//수능/모평/학평 학습창

newVodView = function(vod_file_nm, seq, type, title) {

	var f = $('Form.classroom.ex');

	var nm = 'popClassroomEx';

	var browserName = navigator.userAgent;

/*	if (browserName.indexOf("Firefox") != -1) {

		f.elements['cmd'].value = 'fxvod';

		if (type == 'low') {

			var widthpx = '505px';

			var hightpx = '460px';

		}

		if (type == 'high') {

			widthpx = '750px';

			hightpx = '660px';

		}

	} else if (browserName.indexOf("Chrome") != -1 || browserName.indexOf("Safari") != -1) {

		f.elements['cmd'].value = 'csvod';

		if (type == 'low') {

			var widthpx = '505px';

			var hightpx = '460px';

		}

		if (type == 'high') {

			widthpx = '750px';

			hightpx = '660px';

		}

	} else {

		f.elements['cmd'].value = 'vod';

		if (type == 'low') {

			var widthpx = '485px';

			var hightpx = '460px';

		}

		if (type == 'high') {

			widthpx = '735px';

			hightpx = '660px';

		}

	}	*/



	var widthpx = '750px';

	var hightpx = '546px';

	f.elements['cmd'].value = 'classNewPreview';

	

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=no','CENTER');

	f.elements['vod'].value = vod_file_nm;

	f.elements['vod_seq'].value = seq;

	f.elements['type'].value = type;

	f.elements['example_time'].value = 'all';

	f.elements['lecture_nm'].value = title;

	f.elements['gang_nm'].value = '';

	f.elements['intro'].value = 'A';

	f.elements['prof_nm'].value = '';

	f.elements['folder_addr'].value = '';

	f.action = context + '/VodFrAction.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

};

















/**

 *	팝업 스크립트 새로 변경/추가

**/





/**

 * 강사 찾기

 * 

 * @param callback

 * @return

 */

function fnPopProf() {

	var win = popupWindow('../ingangPopup/prof.do', 'pop_prof', '870px', '600px', 'scrollbars=no', 'CENTER');

	win.focus();

}



/**

 * 강사 찾기2

 * 

 * @param callback

 * @return

 */

function fnPopProf2() {

	var win = popupWindow('../ingangPopup/prof2.do', 'pop_prof', '795px', '600px', 'scrollbars=no', 'CENTER');

	win.focus();

}



/**

 * 강사 찾기3

 * 

 * @param callback

 * @return

 */

function fnPopProf3() {

	var win = popupWindow('../ingangPopup/prof3.do', 'pop_prof', '795px', '600px', 'scrollbars=no', 'CENTER');

	win.focus();

}



/**

 * 인기짱 강사 찾기

 * 

 * @param callback

 * @return

 */

function fnPopularProfPop() {

	var win = popupWindow('../ingangPopup/popularProfPop.do', 'popularProfPop', '795px', '600px', 'scrollbars=yes', 'CENTER');

	win.focus();

}





/**

 * 강좌 분류

 * 

 * @param callback

 * @return

 */

function lecturePop() {

	var win = popupWindow('/NGLMS/ingangPopup/lectureClassPop.do', 'lecturePop', '380px', '450px', 'scrollbars=yes', 'CENTER');

	win.focus();

}



/**

 * 교재 관리

 * 

 * @param callback

 * @return

 */

function textbookPop() {

	var win = popupWindow('/NGLMS/ingangPopup/textbookPop.do', 'textbookPop', '800px', '740px', 'scrollbars=yes', 'CENTER');

	win.focus();

}



/**

 * 정회원전환

 * 

 * @param callback

 * @return

 */

function regulrPop() {
	
	var win = popupWindow('/NGLMS/ingangMain/payment_regulrpop.do?view_type=list', 'regulrpop', '845px', '473px', 'scrollbars=no', 'CENTER');

	win.focus();

}



/**

 * 정회원전환2

 * 

 * @param callback

 * @return

 */

function regulrPop2(user_id,user_nm,login_id) {

	var win = popupWindow('/NGLMS/ingangMain/payment_regulrpop.do?view_type=view&user_id='+user_id+'&user_nm='+user_nm+'&login_id='+login_id, 'regulrpop', '770px', '390px', 'scrollbars=no', 'CENTER');

	win.focus();

}



/**

 * 강좌 찾기

 * 

 * @param callback

 * @return

 */

function fnPopLecture(type){

	var win = popupWindow('/NGLMS/ingangPopup/lecturePop.do?type='+type,'pop_lecture','1180px','800px','scrollbars=no','CENTER');

	win.focus();

}



/**

 * 미오픈 강좌 찾기

 * 

 * @param callback

 * @return

 */

function fnPopLectureNotOpen(type){

	var win = popupWindow('/NGLMS/ingangPopup/lecturePopNotOpen.do?type='+type,'pop_lecture','1095px','800px','scrollbars=no','CENTER');

	win.focus();

}



/**

 * 회원 준회원처리/수강기간 변경

 * 

 * @param callback

 * @return

 */

function regulrSavePop(paction,stud_id) {

	var win = popupWindow('/NGLMS/ingangMain/payment_associatepop.do?paction='+paction+'&stud_id='+stud_id, 'regulrpop', '740px', '340px', 'scrollbars=no', 'CENTER');

	win.focus();

}



/**

 * 기간연장 환불처리

 * 

 * @param callback

 * @return

 */

function regulrSavePop2(paction,sdate,edate,stud_id) {

	var win = popupWindow('/NGLMS/ingangMain/payment_associatepop.do?paction='+paction+'&search_start_dt='+sdate+'&search_end_dt='+edate+'&stud_id='+stud_id, 'regulrpop', '740px', '340px', 'scrollbars=no', 'CENTER');

	win.focus();

}



/**

 * 쿠폰발행

 * 

 * @param callback

 * @return

 */

function couponSavePop() {

	var win = popupWindow('/NGLMS/ingangMain/payment_couponpop.do','couponpop_save', '740px', '430px', 'scrollbars=no', 'CENTER');

	win.focus();

}





/**

 * 우편번호 찾기

 * 

 * @param callback

 * @return

 */

function fnPopZipcode() {

	var win = popupWindow('/NGLMS/zipcode.do', 'pop_zipcode', '450px', '550px', 'scrollbars=0', 'CENTER');

	win.focus();

}





function fnPopNewZipcode() {

	var win = popupWindow('/NGLMS/NewZipcode.do', 'pop_zipcode', '450px', '550px', 'scrollbars=0', 'CENTER');

	win.focus();

}


function fnPopZipcodeUser() {

	var win = popupWindow('/NGLMS/zipcodeUser.do', 'pop_zipcode', '450px', '550px', 'scrollbars=0', 'CENTER');

	win.focus();

}




function jusoCallBack(roadAddrPart1,addrDetail, zipNo){
	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
	document.infoForm.addr1.value = roadAddrPart1;
	document.infoForm.addr2.value = addrDetail;
	document.infoForm.zipcode.value = zipNo;
}

//우편번호 5자리 신규 추가
function fnPopZipcodeNew() {
	/*
	//이전버전 혹시모를 상황을 대비하여 남겨둠
	var win = popupWindow('/NGLMS/ZipcodeNew.do', 'pop_zipcode', '450px', '690px', 'scrollbars=0', 'CENTER');
	win.focus();
	*/
	var win = window.open("/NGLMS/JusoZipcode.do","pop_zipcode","width=570,height=420, scrollbars=yes, resizable=yes"); 
	win.focus();
}


function fnPopNewZipcodeUser() {

	var win = popupWindow('/NGLMS/NewZipcodeUser.do', 'pop_zipcode', '450px', '550px', 'scrollbars=0', 'CENTER');

	win.focus();

}

/**

 * 쪽지 수신함

 * 

 * @param callback

 * @return

 */

function fnPopMyMSG() {

	var win = popupWindow('/NGLMS/ingangPopup/myMSGList.do', 'mymsg', '800px', '600px', 'scrollbars=0', 'CENTER');

	win.focus();

}







function fnPopAllUserList() {

	var win = popupWindow('/NGLMS/ingangPopup/allUserList.do', 'userlist', '550px', '700px', 'scrollbars=0', 'CENTER');

	win.focus();

}



function fnPopUserIdTelList() {

	var win = popupWindow('/NGLMS/ingangPopup/userIdTelList.do', 'pop_userlist', '800px', '740px', 'scrollbars=0', 'CENTER');

	win.focus();

}





function frontPopAllUserList() {

	var win = popupWindow('/NGLMS/ingangPopup/frontUserList.do', 'front_userlist', '550px', '700px', 'scrollbars=0', 'CENTER');

	win.focus();

}



/**

 * 학교 찾기

 * 

 * @param callback

 * @return 

 */

function fnPopSchool() {

	var win = popupWindow('/NGLMS/ingangPopup/schoolList.do', 'schoollist', '550px', '700px', 'scrollbars=yes', 'CENTER');

	win.focus();

}







/**

 * 관리자 찾기

 * 

 * @param callback

 * @return

 */

function fnPopAdm() {

	var win = popupWindow('/NGLMS/ingangPopup/adminUserList.do', 'adminUserList', '800px', '700px', 'scrollbars=yes', 'CENTER');

	win.focus();

}





/**

 * 학습창 통합

 */

/*newStudPlay = function(type, gang_seq, layout_gb, example_yn, stud_id) {
	
	var isChrome = window.chrome && !navigator.userAgent.match(/Opera|OPR\//);
	var isEdge = navigator.appVersion.indexOf("Edge/12") != -1 ? true : false;
	if (isChrome || isEdge) {
		browser_popup(type, gang_seq, layout_gb, example_yn, stud_id);
	} else {
		browser_popup(type, gang_seq, layout_gb, example_yn, stud_id);
	}
		
};
*/
	
new_popup = function(type, gang_seq, layout_gb, example_yn, stud_id) {

	var f = document.listGang;
	
	f.elements['type'].value = type;	
	f.elements['gang_seq'].value = gang_seq;
	f.elements['example_yn'].value = example_yn;
	f.elements['layout_gb'].value = layout_gb;
	f.elements['stud_id'].value = stud_id;


	if(stud_id == undefined){
		stud_id = '';
	}
	
	
		if(example_yn == 'Y'){
			
			widthpx = '725px';
			hightpx = '490px';	

		}else{

			widthpx = '1045px';
			hightpx = '586px';

		}	

		var exe = StarPlayerExe;

		
		var _url = "http://"+ document.domain +"/NGLMS/ViewPlayer.do?";
		_url += "gang_seq=" + gang_seq + "&example_yn=" + example_yn + "&stud_id=" + stud_id + "&layout_gb=" + layout_gb + "&type=" + type;

		exe.install = STARPLAYER_SETUP_URL;
//		exe.url = "http://dev.starplayer.net/test_.asp?url=http://vod.axissoft.co.kr/1_.mp4";
//		exe.url = "http://"+ document.domain +"/NGLMS/newPlayer.do?url=http://hdvod-1m-stream.ingang.go.kr/LMS/hvod/1Ms/011/002/6811/고전하지 않는 고전(첫 고전문학 기본완성) 1강_600k(c).mp4&gang_seq=69742&example_yn=Y&type=high";
		exe.url = _url;
		exe.width = widthpx; 
		exe.height = hightpx; 
//		exe.topmost = true; 
//		exe.resizing = true;
		exe.run();
	
	return false;

};
	


newStudPlay = function(type, gang_seq, layout_gb, example_yn, stud_id, user_gb) {
	var f = document.listGang;
	var nm = 'popClassroom';

	if(example_yn == 'Y'){
		
		widthpx = '715px';
		hightpx = '495px';	

	}else{

		widthpx = '1045px';
		hightpx = '586px';

	}	

	if(example_yn != 'Y'){
		if(user_gb != 'R'){
			alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");
			return;
		}
	}
	
	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');

	f.elements['type'].value = type;	
	f.elements['gang_seq'].value = gang_seq;
	f.elements['example_yn'].value = example_yn;
	f.elements['layout_gb'].value = layout_gb;
	f.elements['stud_id'].value = stud_id;
	f.action = '/NGLMS/ViewPlayer.do';
	f.target = nm;
	f.submit();
	
	winClassroom.focus();

};

// 콜러스플레이어 플레이
newStudPlayKol = function(type, gang_seq, layout_gb, example_yn, stud_id, user_gb, subtitle) {
	var f = document.listGang;
	var nm = 'popClassroom';

	if(example_yn == 'Y'){
		
		widthpx = '715px';
		hightpx = '495px';	

	}else{

		widthpx = '1045px';
		hightpx = '600px';

	}	

	if(example_yn != 'Y'){
		if(user_gb != 'R'){
			alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");
			return;
		}
	}
	
	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0,resizable=yes','CENTER');
	//winClassroom = window.open('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');
	
	if(subtitle == 'F' ){
		f.elements['subtitle'].value = 'F';
	}else{
		f.elements['subtitle'].value = '';
	}
	
	f.elements['type'].value = type;	
	f.elements['gang_seq'].value = gang_seq;
	f.elements['example_yn'].value = example_yn;
	f.elements['layout_gb'].value = layout_gb;
	f.elements['stud_id'].value = stud_id;
	f.action = 'https://' + window.location.hostname + '/NGLMS/ViewPlayerKol.do';
	f.target = nm;
	f.submit();
	
	winClassroom.focus();

};

//콜러스 맛보기 강좌 
newFreePlayKol = function(type, gang_seq, layout_gb, example_yn, subtitle) {
	var f = document.listGang;
	var nm = 'popClassroom';

		widthpx = '1045px';
		hightpx = '600px';

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0,resizable=yes','CENTER');
	//winClassroom = window.open('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');
	
	if(subtitle == 'F' ){
		f.elements['subtitle'].value = 'F';
	}else{
		f.elements['subtitle'].value = '';
	}

	f.elements['type'].value = type;	
	f.elements['gang_seq'].value = gang_seq;
	f.elements['example_yn'].value = 'N';
	f.elements['layout_gb'].value = layout_gb;
	f.action = 'https://' + window.location.hostname + '/NGLMS/ViewPlayerKol.do';
	f.target = nm;
	f.submit();
	
	winClassroom.focus(); 

};

//콜러스 맛보기 강좌(모바일)
newFreePlayKolMobile = function(type, gang_seq, layout_gb, example_yn, jwt_full_url) {
	
	var broswerInfo = navigator.userAgent;
	// 모바일 웹  or 앱 구분
	if(broswerInfo.indexOf("NGLMS_APP_OUT")> -1 ){
		var c = "intent://path?";
		c += "url=" + jwt_full_url;
		c += "#Intent;";
		c += "scheme=kollus;";
		c += "action=android.intent.action.VIEW;";
		c += "category=android.intent.category.BROWSABLE;";
		c += "package=com.kollus.media;end;";
		window.location.href = c;
	}else{
		var f = document.listGang;
		var nm = 'popClassroom';
	
		widthpx = '1045px';
		hightpx = '586px';
	
		
		winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');
	
		f.elements['type'].value = type;	
		f.elements['gang_seq'].value = gang_seq;
		f.elements['example_yn'].value = 'N';
		f.elements['layout_gb'].value = layout_gb;
		f.action = '/NGLMS/ViewPlayerKolMobile.do';
		f.target = nm;
		f.submit();
		
		winClassroom.focus();
	}	
};

examPlayKol = function(type, vod_seq, layout_gb, example_yn) {
	var f = document.listGang;
	var nm = 'popClassroom';

		widthpx = '1045px';
		hightpx = '600px';

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');
	//winClassroom = window.open('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');

	f.elements['type'].value = type;	
	f.elements['vod_seq'].value = vod_seq;
	f.elements['layout_gb'].value = layout_gb;
	f.action = '/NGLMS/ExamPlayerKol.do';
	f.target = nm;
	f.submit();
	
	winClassroom.focus();

};

//콜러스플레이어 플레이(모바일)
newStudPlayKolMobile = function(type, gang_seq, layout_gb, example_yn, stud_id, user_gb,lecture_cd, jwt_full_url) {
	//alert(jwt_full_url);
	if(example_yn != 'Y'){
		if(user_gb != 'R'){
			alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");
			return;
		}
	}
	var broswerInfo = navigator.userAgent;
	
	// 모바일 웹  or 앱 구분
	if(broswerInfo.indexOf("NGLMS_APP_OUT")> -1 ){
		
		var c = "intent://path?";
		c += "url=" + jwt_full_url;
		c += "#Intent;";
		c += "scheme=kollus;";
		c += "action=android.intent.action.VIEW;";
		c += "category=android.intent.category.BROWSABLE;";
		c += "package=com.kollus.media;end;";
		c += "param=type=" + type;						// 화질  : low 
		c += "&gang_seq=" + gang_seq;					// 강의 번호
		c += "&example_yn=" + example_yn;				// 맛보기 강의 인지 아닌지
		c += "&layout_gb=" + layout_gb;					// 레이아웃 구분 : class
		c += "&stud_id=" + stud_id;						// 유저아이디
		c += "&lecture_cd=" + lecture_cd;		// 강의 코드
		window.location.href = c;
	}else{
		var f = document.listGang;
		var nm = 'popClassroom';
	
		if(example_yn == 'Y'){
			
			widthpx = '715px';
			hightpx = '495px';	
	
		}else{
	
			widthpx = '1045px';
			hightpx = '586px';
	
		}	
		
		winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');
	
		f.elements['type'].value = type;	
		f.elements['gang_seq'].value = gang_seq;
		f.elements['example_yn'].value = example_yn;
		f.elements['layout_gb'].value = layout_gb;
		f.elements['stud_id'].value = stud_id;
		f.elements['lecture_cd'].value = lecture_cd;
		f.action = '/NGLMS/ViewPlayerKolMobile.do';
		f.target = nm;
		f.submit();
		
		winClassroom.focus();
	}	
};

newStudPlay1 = function(type, gang_seq, layout_gb, example_yn, stud_id, user_gb) {
	var f = document.listGang;
	var nm = 'popClassroom';

	if(example_yn == 'Y'){
		
		widthpx = '715px';
		hightpx = '495px';	

	}else{

		widthpx = '1045px';
		hightpx = '586px';

	}	

	if(example_yn != 'Y'){
		if(user_gb != 'R'){
			alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");
			return;
		}
	}
	
	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');

	f.elements['type'].value = type;	
	f.elements['gang_seq'].value = gang_seq;
	f.elements['example_yn'].value = example_yn;
	f.elements['layout_gb'].value = layout_gb;
	f.elements['stud_id'].value = stud_id;
	f.action = '/NGLMS/popup/kollus/play-video.jsp';
	f.target = nm;
	f.submit();
	
	winClassroom.focus();

};

newSubtitleStudPlay = function(type, gang_seq, layout_gb, example_yn, stud_id, user_gb) {
	var f = document.listGang;
	var nm = 'popClassroom';

	if(example_yn == 'Y'){
		
		widthpx = '715px';
		hightpx = '495px';	

	}else{

		widthpx = '1045px';
		hightpx = '586px';

	}	

	if(example_yn != 'Y'){
		if(user_gb != 'R'){
			alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");
			return;
		}
	}
	
	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');

	f.elements['type'].value = type;	
	f.elements['gang_seq'].value = gang_seq;
	f.elements['example_yn'].value = example_yn;
	f.elements['layout_gb'].value = layout_gb;
	f.elements['stud_id'].value = stud_id;
	f.action = '/NGLMS/SubtitleViewPlayer.do';
	f.target = nm;
	f.submit();
	
	winClassroom.focus();

};

newStudPlayIntro = function(type, intro_nm, layout_gb, example_yn, stud_id) {
	var f = document.listGang;
	var nm = 'popClassroom';
	
	if(example_yn == 'Y'){
		widthpx = '716px';
		hightpx = '495px';	
	}
	
	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');
	f.action = '/NGLMS/ViewPlayerLecIntro.do?intro_nm='+intro_nm;
	f.target = nm;
	f.submit();
	
	winClassroom.focus();
	
};








//홍보

newPromotionPlay = function(pro_nm) {



	var f = document.listGang;

	var nm = 'popPromotion';

	widthpx = '720px';

	hightpx = '500px';

	

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');



	f.elements['gang_seq'].value = 0;

	f.elements['vod_file_nm'].value = pro_nm;

	f.action = '/NGLMS/ProPlayer.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

};











/**

 * PMP DRM Down

 */





maxTimeout = 5;

win= null;

var user_gbt = null;

var folder_addrt = null;

var vod_file_nm_2t = null;

var vod_file_nm_5t = null;

var lectureclass_nmt = null;

var gang_seqt = null;

var content_codet = null;

var file_not = null;





function SendData(cntTimeout)

{ 

	var downUrl = null;

	var location = null;

	var file_nm = null;

	var  _file_nm = null;

	

	if (win.procFrm)

	{ 

		if (file_not == 1){

			downUrl="http://dn-ingang.x-cdn.com/asfroot/LMS/vod/500kd/2006";

			file_nm = vod_file_nm_2t;			

		} else if (file_not == 2){

			downUrl="http://vod-500k-down.ingang.go.kr/LMS/vod/500kd/2006";

			file_nm = vod_file_nm_5t;			

		} else {

			downUrl="http://edu.ingang.go.kr";

			file_nm = vod_file_nm_5t;

		}

		 _file_nm = file_nm + ".MS";

		location = "/"+folder_addrt+_file_nm;

		var str = content_codet+"|"+downUrl+location+"|"+_file_nm+"|"+_file_nm+"|"+"0";



		win.AppendProc(str);

		

	}

	else

	{

		//alert('the function do NOT exist');

		

		if (cntTimeout < maxTimeout)

		{

			cntTimeout++;

			window.setTimeout("SendData(" + cntTimeout + ")", 500);

		}

		else

		{

			alert("Error!!\n\nCan NOT send data!!!(Timeout)\n\n(MainPage_SendData)\n\n");

			

			// release resource

			if (win && !win.closed) win.close();

			win = null;

		}

	}

	

	return false;

}



function  OpenWin(){

	var ret = false;

	

	var features="width=530,height=560";

	//var features="width=530,height=700,status=yes,resizable=yes,location=no";



	win = window.open("", "TSync_DNFileWin", features);

	

	try

	{

		// 새창이 떠 있나 확인한다.

		if (win.mainFrm)

		{

			//alert('the newin exists');

		}

		else

		{

			//alert('create a newin');

			win.location = "/NGLMS/pmp/DNWinFrm.jsp";

		}

		ret = true;

	}

	catch(e) 

	{

		// 2009년 3월 16일 오한빈 수정

		// 팝업창 생성 에러시

		alert('Error!!\n\n팝업창을 생성할 수 없습니다.\n툴바나 익스플로러에서 팝업 방지 옵션이 켜져있는지\n확인해주세요.\n\n' + e);

		if (win && !win.closed)

		{

			win.close();

			win = null;

		}

	}

	



	return ret;

}

function ProcData()

{

	// 새창이 생성되어 있나 확인

	if (OpenWin())

	{		

		SendData(0);	

	}

	return false;

}



newPmpDown = function(user_id, user_gb, folder_addr, vod_file_nm_2, vod_file_nm_5, gang_seq, content_code, file_no) {

	

	/*

	 * 다운로드 중지

	 * */ 

	//if (user_id != 'lsy820814') {

	//	alert("홈페이지 개편으로 다운로드 서비스가 일시중지 중입니다.");

	//	return;

	//}

	var features = "top=100,left=200,width=530,height=560";

	

	user_gbt = user_gb;

	folder_addrt = folder_addr;

	vod_file_nm_2t = vod_file_nm_2;

	vod_file_nm_5t = vod_file_nm_5;	

	gang_seqt = gang_seq;

	content_codet = content_code;

	file_not = file_no;



	if (user_gb == '') {

		alert("로그인 후 이용이 가능한 서비스 입니다.");

		return;

	} else if (user_gb == 'R') {

		if(DetectActiveXControl()) {	

			ProcData();

		}else{			

			window.open("/NGLMS/pmp/AgentInstall.jsp", "TSync_DNFileWin", features);

		}		

		

	/* 다운로드 인설트 부분

	 * var f = document.pmpDown;		

		f.elements['cmd'].value = 'mng2';

		f.elements['folder_addr'].value = folder_addr;

		f.elements['vod_file_nm_2'].value = vod_file_nm_2;

		f.elements['vod_file_nm_5'].value = vod_file_nm_5;		

		f.elements['gang_seq'].value = gang_seq;

		f.elements['content_code'].value = content_code;

		f.elements['file_no'].value = file_no;

		f.action = fnAction('PmpPopFrAction');

		f.target = 'hiddenframe';

		f.submit();*/

		

		

		var params = "";

			   

		if(file_no == 1){

			 params = folder_addr+vod_file_nm_2;

			 doownloadLogWrite(folder_addr, vod_file_nm_2);

		}else{

			 params = folder_addr+vod_file_nm_5;

			 doownloadLogWrite(folder_addr, vod_file_nm_5);

		}

		

		//getHscdn(params);

		

		

	} else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}



};	

/* 수능/학평/모평 콜러스 플레이어 다운로드 */
newVodDownKol = function(vod_seq, file_no) {
	
	//화면가운데로 띄우기
	var popupX = (window.screen.width / 2) - (200 / 2);
	var popupY= (window.screen.height /2) - (300 / 2);
 	var gsWin = window.open('about:blank',vod_seq,'status=no, height=400, width=400, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
 	var form = document.createElement("form");
  
    form.setAttribute("charset", "UTF-8");
    form.setAttribute("method", "Post");  //Post 방식
    form.setAttribute("action", "https://" + window.location.hostname + "/NGLMS/DownloadVodPlayer.do"); //요청 보낼 주소
    form.setAttribute("target", vod_seq); 
    
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "vod_seq");
    hiddenField.setAttribute("value", vod_seq);
    form.appendChild(hiddenField);

    hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "file_no");
    hiddenField.setAttribute("value", file_no);
    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();

};


newPmpDownKol = function(user_id, user_gb, folder_addr, vod_file_nm_2, vod_file_nm_5, gang_seq, content_code, file_no) {

	
	if (user_gb == '') {

		alert("로그인 후 이용이 가능한 서비스 입니다.");

		return;

	} else if (user_gb == 'R') {	

			//화면가운데로 띄우기
			var popupX = (window.screen.width / 2) - (200 / 2);
			var popupY= (window.screen.height /2) - (300 / 2);
		 	var gsWin = window.open('about:blank',gang_seq,'status=no, height=400, width=400, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
		 	var form = document.createElement("form");
		  
	        form.setAttribute("charset", "UTF-8");
	        form.setAttribute("method", "Post");  //Post 방식
	        form.setAttribute("action", "https://" + window.location.hostname + "/NGLMS/DownloadPlayer.do"); //요청 보낼 주소
	        form.setAttribute("target", gang_seq); 
	        
	        var hiddenField = document.createElement("input");
	        hiddenField.setAttribute("type", "hidden");
	        hiddenField.setAttribute("name", "gang_seq");
	        hiddenField.setAttribute("value", gang_seq);
	        hiddenField.setAttribute("stud_id", user_id);
	        form.appendChild(hiddenField);

	        hiddenField = document.createElement("input");
	        hiddenField.setAttribute("type", "hidden");
	        hiddenField.setAttribute("name", "file_no");
	        hiddenField.setAttribute("value", file_no);
	        form.appendChild(hiddenField);

	        document.body.appendChild(form);
	        form.submit();
		}else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}

};	

newPmpDownKolMobile = function(user_id, user_gb, folder_addr, vod_file_nm_2, vod_file_nm_5, gang_seq, content_code, file_no,gubun, jwt_full_url) {

	if (user_gb == '') {

		alert("로그인 후 이용이 가능한 서비스 입니다.");

		return;

	} else if (user_gb == 'R') {
		var broswerInfo = navigator.userAgent;
		
		// 모바일 웹  or 앱 구분
		if(broswerInfo.indexOf("NGLMS_APP_OUT")> -1 ){
			
			var c = "intent://download?";
			c += "url=" + jwt_full_url;
			c += "#Intent;";
			c += "scheme=kollus;";
			c += "action=android.intent.action.VIEW;";
			c += "category=android.intent.category.BROWSABLE;";
			c += "package=com.kollus.media;end;";
			c += "param=gang_seq=" + gang_seq;				// 강의 번호
			c += "&stud_id=" + user_id;						// 유저아이디
			window.location.href = c;
		}else{
			//화면가운데로 띄우기
			/*var popupX = (window.screen.width / 2) - (200 / 2);
			var popupY= (window.screen.height /2) - (300 / 2);
		 	var gsWin = window.open('about:blank',gang_seq,'status=no, height=400, width=400, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);*/
		 	var form = document.createElement("form");
		  
	        form.setAttribute("charset", "UTF-8");
	        form.setAttribute("method", "Post");  //Post 방식
	        form.setAttribute("action", "/NGLMS/DownloadPlayer.do"); //요청 보낼 주소
	        form.setAttribute("target", gang_seq); 
	        
	        var hiddenField = document.createElement("input");
	        hiddenField.setAttribute("type", "hidden");
	        hiddenField.setAttribute("name", "gang_seq");
	        hiddenField.setAttribute("value", gang_seq);
	        hiddenField.setAttribute("stud_id", user_id);
	        form.appendChild(hiddenField);

	        hiddenField = document.createElement("input");
	        hiddenField.setAttribute("type", "hidden");
	        hiddenField.setAttribute("name", "file_no");
	        hiddenField.setAttribute("value", file_no);
	        form.appendChild(hiddenField);
	        
	        hiddenField = document.createElement("input");
	        hiddenField.setAttribute("type", "hidden");
	        hiddenField.setAttribute("name", "gubun");
	        hiddenField.setAttribute("value", gubun);
	        form.appendChild(hiddenField);

	        document.body.appendChild(form);
	        form.submit();
		} 
	}else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}

};	

newPmpDownAdmin = function(user_gb, folder_addr, vod_file_nm_2, vod_file_nm_5, gang_seq, content_code, file_no) {

	var features = "top=100,left=200,width=530,height=560";

	

	user_gbt = user_gb;

	folder_addrt = folder_addr;

	vod_file_nm_2t = vod_file_nm_2;

	vod_file_nm_5t = vod_file_nm_5;	

	gang_seqt = gang_seq;

	content_codet = content_code;

	file_not = file_no;



	if (user_gb == '') {

		alert("로그인 후 이용이 가능한 서비스 입니다.");

		return;

	} else if (user_gb == 'R') {

		if(DetectActiveXControl()) {	

			ProcData();

		}else{			

			 window.open("/NGLMS/pmp/AgentInstall.jsp", "TSync_DNFileWin", features);

		}	

		

	} else {

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}



};	



newFreePmpDown = function(user_id, user_gb, folder_addr, vod_file_nm_2, vod_file_nm_5, gang_seq, content_code, file_no) {

	

	

	/*

	 * 다운로드 중지

	 * */

	//if (user_id != 'lsy820814') {

	//	alert("홈페이지 개편으로 다운로드 서비스가 일시중지 중입니다.");

	//	return;

	//}

		

	var features = "top=100,left=200,width=530,height=560";

	

	user_gbt = user_gb;

	folder_addrt = folder_addr;

	vod_file_nm_2t = vod_file_nm_2;

	vod_file_nm_5t = vod_file_nm_5;	

	gang_seqt = gang_seq;

	content_codet = content_code;

	file_not = file_no;



	if (user_gb == '') {

		alert("로그인 후 이용이 가능한 서비스 입니다.");

		return;

	}else{

		

		if(DetectActiveXControl()) {		

			ProcData();

		}else{			

			window.open("/NGLMS/pmp/AgentInstall.jsp", "TSync_DNFileWin", features);

		}		

		

	/* 다운로드 인설트 부분

	 * var f = document.pmpDown;		

		f.elements['cmd'].value = 'mng2';

		f.elements['folder_addr'].value = folder_addr;

		f.elements['vod_file_nm_2'].value = vod_file_nm_2;

		f.elements['vod_file_nm_5'].value = vod_file_nm_5;		

		f.elements['gang_seq'].value = gang_seq;

		f.elements['content_code'].value = content_code;

		f.elements['file_no'].value = file_no;

		f.action = fnAction('PmpPopFrAction');

		f.target = 'hiddenframe';

		f.submit();*/

		var params = "";

			   

		if(file_no == 1){

			 params = folder_addr+vod_file_nm_2;

			 doownloadLogWrite(folder_addr, vod_file_nm_2);

		}else{

			 params = folder_addr+vod_file_nm_5;

			 doownloadLogWrite(folder_addr, vod_file_nm_5);

		}

		//getHscdn(params);

		

	}



};



nologin_down = function(folder_addr, vod_file_nm_5, lectureclass_nm) {

	

	/*

	 * 다운로드 중지

	 * */

	//alert("홈페이지 개편으로 다운로드 서비스가 일시중지 중입니다.");

	//return;

	

	var features = "top=100,left=200,width=530,height=560";

	

	folder_addrt = folder_addr;

	vod_file_nm_5t = vod_file_nm_5;

	lectureclass_nmt = lectureclass_nm;

	content_codet = lectureclass_nm;

	file_not = 2;



	if(DetectActiveXControl()) {			

		ProcData();

	}else{

		 window.open("/NGLMS/pmp/AgentInstall.jsp", "TSync_DNFileWin", features);

	}		



	var params = folder_addr+vod_file_nm_5;

	

	//getHscdn(params);

	var paramFolder = folder_addr + lectureclass_nm;

	doownloadLogWrite(paramFolder, vod_file_nm_5);

	

};



mobilPmpDown = function(user_gb, cd, seq) {

	

	/*

	var downUrl = null;

	var location = null;

	var file_nm = null;

	var _file_nm = null;

	 */



	if (user_gb == '') {

		alert("로그인 후 이용이 가능한 서비스 입니다.");

		return;

	} else if (user_gb == 'R') {

		

		window.parent.location.href = "nglmsdownload:cd="+cd+"&gang_seq="+seq;

		

		/*

		if (file_not == 1){

			downUrl="http://dn-ingang.x-cdn.com/asfroot/LMS/vod/500kd/2006";

			file_nm = vod_file_nm_2;			

		} 

		else {  

			downUrl="http://vod-500k-down.ingang.go.kr/LMS/vod/500kd/2006";

			file_nm = vod_file_nm_5;			

		}		

	    _file_nm = file_nm;

		location = "/"+folder_addr+_file_nm;

		var str = downUrl+location;					

		alert("user_id:"+user_id+", user_gb:"+user_gb+", downUrl:"+str+", gang_seq:"+gang_seq+", content_code:"+content_code+", content_nm:"+content_nm+", gang_nm:"+gang_nm);			

		*/

		

	}else{

		alert("정회원으로 전환 후 사용가능합니다. \n정회원의 만료일이 지났는지 확인해 주시기 바랍니다.");

		return;

	}

	

};



function doownloadLogWrite(folder, filename) {

	var datas = {};

	datas["folder"] = folder;

	datas["filename"] = filename;

	datas["device"] = "pc";

	

	$.ajax({

		cache : false ,

        type : "POST",

        url: "/NGLMS/common/downloadLogWrite.jsp",

        data : datas,

        success : function(data){

        	

        },

       	error: function( jqXHR, textStatus, errorThrown ){

       		

       	}

    });

}



var xhr;

function createXHR(){ /* XMLHttpRequest객체를 생성한다 */

  if(window.ActiveXObject){    // IE5.0, IE6.0

   xhr = new ActiveXObject("Microsoft.XMLHTTP");

  }else if(window.XMLHttpRequest){  //IE7.0, FireFox, Safari, Opera

   xhr = new XMLHttpRequest();

  }

 }





function getHscdn(params)  {

	

	createXHR();

	xhr.onreadystatechange = resultProcess; // response handler

	xhr.open("GET", "/NGLMS/common/RSSReader.jsp?contents="+params, "true");// 요청설정

	xhr.send("output=rss"); // 요청전송, GET방식은 null로 설정하고 POST방식일 경우 파라미터 문자열을 설정한다	

}



function getHscdnTest(params)  {

	var paramsdata = "contents=" + encodeURIComponent(params) + "&device=pc&callback=?";

	$.ajax({

        crossDomain : true,

        type : "GET",

        //url : "http://report.hscdn.com/stat4/api/kangnam/hits.xml",

        dataType: 'xml',

        url: "http://report.hscdn.com/stat4/api/kangnam/hits.xml",

        data : {'contents' : params , 'device' : "pc"},

        success : function(data){

        	alert("su");

        },

       	error: function( jqXHR, textStatus, errorThrown ){

       		alert("error :" + jqXHR + "," + textStatus + "," + errorThrown);

       	},    

        beforeSend:function(x){

    		if(x && x.overrideMimeType){

    			x.overrideMimeType("application/xml;charset=UTF-8");

    		}

        }

    });

}



function getHscdnMobileWeb(folder_addr, file_nm)  {

	var params = folder_addr + file_nm;

	

	/*$.ajax({

        crossDomain:true,

        type: "GET",

        url: "http://report.hscdn.com/stat4/api/kangnam/hits.xml?contents=" + encodeURIComponent(params) + "&device=mobileweb",

        data: {url:document.URL},

        success: function(data){},

       	error: function( jqXHR, textStatus, errorThrown ){}    

    });*/

}



function getHscdnMobileApp(folder_addr, file_nm)  {

	var params = folder_addr + file_nm;

	

/*	$.ajax({

        crossDomain:true,

        type: "GET",

        url: "http://report.hscdn.com/stat4/api/kangnam/hits.xml?contents=" + encodeURIComponent(params) + "&device=mobileapp",

        data: {url:document.URL},

        success: function(data){},

       	error: function( jqXHR, textStatus, errorThrown ){}    

    });*/

}





function resultProcess(){

	  if(xhr.readyState==4){

	   if(xhr.status==200){

	   /* 서버로부터 XML문서를 받아서 DOM Tree로 변환한다 */

	  // var xml = xhr.responseXML.documentElement; 

	   var xml = xhr.responseXML; // DOM Tree

	   /* DOM Tree로부터 특정 태그를 얻고 태그의 텍스트를 구한다 

	  태그 이름을 이용하여 엘리먼트를 얻는 경우는 다수개의 엘리먼트가

	  리턴될 가능성이 있기 때문에 리턴값이 배열이라는 것에 주의한다.

	   또, 다수개의 엘리먼트를 구한다는 의미로 getElementsByTagName()함수의

	  이름에 's'가 포함되어 있다는 것도 주의해야 한다.

	    */

	   // var rtMsg = xml.getElementsByTagName("rtMsg")[0].firstChild.nodeValue;	   

	   }

	  }

	 }

	 



/**

 * 강남구청 인트로 동영상 (강의)

 */

newStudIntroPlay = function(type, gang_seq, layout_gb, example_yn, stud_id) {



	var f = document.listGang;

	var nm = 'popClassroom';

	widthpx = '715px';

	hightpx = '405px';	

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');

	

	f.elements['type'].value = type;	

	f.elements['gang_seq'].value = gang_seq;

	f.elements['example_yn'].value = example_yn;

	f.elements['layout_gb'].value = layout_gb;

	f.elements['stud_id'].value = stud_id;

	f.action = 'http://' + window.location.hostname + '/NGLMS/IntroPlayer.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

};



/**
 * 수능/학평/모평 콜러스 플레이어
 */
vodPlayerKol = function(type, vod_seq, layout_gb, example_yn) {
	
	var f = document.listExamVod;
	var nm = 'popClassroom';

		widthpx = '1045px';
		hightpx = '600px';

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0,resizable=yes','CENTER');

	f.elements['type'].value = type;	
	f.elements['vod_seq'].value = vod_seq;
	f.elements['layout_gb'].value = layout_gb;
	f.action = 'https://' + window.location.hostname + '/NGLMS/ViewVODPlayerKol.do';
	f.target = nm;
	f.submit();
	
	winClassroom.focus(); 

};


/**
 * 수능/학평/모평 콜러스 플레이어(모바일)
 */
vodPlayerKolMobile = function(type, vod_seq, layout_gb, example_yn) {
	
	var f = document.listExamVod;
	var nm = 'popClassroom';

	widthpx = '715px';
	hightpx = '495px';	
	
	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');

	f.elements['type'].value = type;	
	f.elements['vod_seq'].value = vod_seq;
	f.elements['layout_gb'].value = layout_gb;
	f.action = '/NGLMS/ViewVODPlayerKolMobile.do';
	f.target = nm;
	f.submit();
	
	winClassroom.focus();

};


function examVodIntroPlayer(seq, type, layout_gb) {

	var f = document.listExamVod;

	var nm = 'popExamVod';

	widthpx = '715px';

	hightpx = '405px';	

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');

	

	f.elements['type'].value = type;	

	f.elements['vod_seq'].value = seq;

	f.elements['layout_gb'].value = layout_gb;

	f.action = 'http://' + window.location.hostname + '/NGLMS/IntroExamPlayer.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

	

	

	//var win = popupWindow("/NGLMS/IntroExamPlayer.do?vod_seq="+seq+"&type="+type+"&layout_gb=" + layout_gb, 'vodPop', '715px', '405x', 'scrollbars=no','resizable=no','CENTER');

	//win.focus();	

}





function examVodPlayer(seq, type, layout_gb) {

	var f = document.listExamVod;

	var nm = 'popExamVod';

	widthpx = '715px';

	hightpx = '495px';	

	winClassroom = popupWindow('', nm, widthpx, hightpx, 'scrollbars=0','CENTER');

	

	f.elements['type'].value = type;	

	f.elements['vod_seq'].value = seq;

	f.elements['layout_gb'].value = layout_gb;

	f.action = 'http://' + window.location.hostname + '/NGLMS/ExamVodPlayer.do';

	f.target = nm;

	f.submit();

	winClassroom.focus();

	

	//var win = popupWindow("/NGLMS/ExamVodPlayer.do?vod_seq="+seq+"&type="+type+"&layout_gb=" + layout_gb, 'vodPop', '715px', '495px', 'scrollbars=no','resizable=no','CENTER');

	//win.focus();	

}	 

allCheck = function(){
	
	
	if($('input:checkbox[id="check0"]').is(":checked") == true){
		$("input[name=checkbox]").prop("checked", true);
	}else{
		$("input[name=checkbox]").prop("checked", false);
	}		
}

appPlay = function(jwt){
	//var link = 'http://v.kr.kollus.com/s?jwt='+jwt+'&custom_key=6526a4a46fb1a8879c1030d0ea23e5f9c625c463d2ef63a57420ada152063a87&';
	$.ajax({
	    type : "GET" 
	    , url :  'http://v.kr.kollus.com/s?jwt='+jwt+'&custom_key=6526a4a46fb1a8879c1030d0ea23e5f9c625c463d2ef63a57420ada152063a87&'
	    , cache : false 
	    ,success : function(response, status, request) {
	    	if ( $.browser.msie ) {
				window.opener='self';
				window.open('','_parent','');
				window.close();
    	    } else {
				window.close(); // 일반적인 현재 창 닫기
				window.open('about:blank','_self').self.close();  // IE에서 묻지 않고 창 닫기
    	    }
	    }
	});
}