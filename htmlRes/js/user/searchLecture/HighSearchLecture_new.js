//height

function srh_box_height(){
    srh_btmtab_height= $("div.srh_btmtab").height()-78;
    $("#srh_tlisttitList_Lec").css('height', srh_btmtab_height);
}

function srhbook_box_height(){
    srhbook_btmtab_height= $("div.srhbook").height()-78;
    $("#srh_tlisttitList_Book").css('height', srhbook_btmtab_height);
}

var searchNm;

var tabNumCK;
var menuNum1;
var menuNum2;
var menuNum3;
var menuNum4;
var menuNum5;
var profNum;

function searchType(type,ck) {
   if(ck == ''){
       if($(".li02").hasClass('on')){	
           type = 'Book';
       }
       if($(".li03").hasClass('on')){	
           type = 'Lec';
       }
   }	
   searchNm = type;
   
   if(type == "Lec"){				
       $('#class_nm1_Book').val("학년타입 선택");
       $('#class_nm2_Book').val("과목별 선택");
       $('#prof_nm_Book').val("인강선생님 선택");
       $('#code_study_nm_Book').val("학습단계 선택");
       $('#class_cd').val("");
       $('#searchProf_id').val("");
       $('#code_study_level').val("");
       $('#class_cd1').val("");
       $('#class_cd2').val("");
       $('#class_cd3').val("");
       $('#class_cd4').val("");				
       $("#srh_tchlist_Book").html("");
       $("#srh_tchlist_Book1").html("");	
       $("#srh_typebox_Book1").html("<li><a>상단 학년탭을 선택해 주세요.</a></li>");	
       $("#srh_typebox_Book2").html("<li><a>학년별 메뉴를 먼저 선택해 주세요.</a></li>");
       $("#srh_tchlist_Book").html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");	
       $("#srh_tchlist_Book1").html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");	
       $("#srh_typebox_Book4").html("<li><a>상단 학습단계탭을 선택해주세요.</a></li>");	
       $("#srh_tlisttitList_Book").html("");		
       searchTab('1');
   }else{				
       $('#class_nm1_Lec').val("학년타입 선택");
       $('#class_nm2_Lec').val("과목별 선택");
       $('#prof_nm_Lec').val("인강선생님 선택");
       $('#code_study_nm_Lec').val("학습단계 선택");
       $('#class_cd').val("");
       $('#searchProf_id').val("");
       $('#code_study_level').val("");
       $('#class_cd1').val("");
       $('#class_cd2').val("");
       $('#class_cd3').val("");
       $('#class_cd4').val("");		
       $("#srh_tchlist_Lec").html("");	
       $("#srh_tchlist_Lec1").html("");	
       $("#srh_typebox_Lec1").html("<li><a>상단 학년탭을 선택해 주세요.</a></li>");	
       $("#srh_typebox_Lec2").html("<li><a>학년별 메뉴를 먼저 선택해 주세요.</a></li>");	
       $("#srh_tchlist_Lec").html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");	
       $("#srh_tchlist_Lec1").html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");	
       $("#srh_typebox_Lec4").html("<li><a>상단 학습단계탭을 선택해주세요.</a></li>");	
       $("#srh_tlisttitList_Lec").html("");
       searchTab('1');
   }			
}


function searchTab(tabNum) {	
   var class_cd = '';
   var ck = '0';
   for(var i=1; i<=4; i++){
       if(i == tabNum){			
           $("#search"+searchNm+"Tab"+i).addClass("on");	
           if(tabNum == '2'){
               if($('#class_cd1').val() == ''){		
                   $("#srh_typebox_"+searchNm+tabNum).html("<li><a>학년별 메뉴를 먼저 선택해 주세요.</a></li>");					
                   ck = '1';					
               }else{
                   class_cd = $('#class_cd1').val();
               }
           }	
       }else{
           $("#search"+searchNm+"Tab"+i).removeClass("on");
       }
   }
   if(ck == '0'){
       searchMenu(tabNum,class_cd);
   }
   tabNumCK = tabNum;	
}

function searchMenu(tabNum,class_cd){	
   if(tabNum == '1' || tabNum == '2' || tabNum == '4'){
       jQuery.ajax({
           type:"POST",
           data : "type=Hightab"+tabNum+"&class_cd="+class_cd,
           url:"/NGLMS/SearchLecture.do",
           success:function(data){
               $("#srh_typebox_"+searchNm+tabNum).html(data);			
           }, 
           error: function(xhr,status,error){
           }
       }).done(function () {
           if(tabNumCK == "1"){
               searchGrade1("","");				
           }else if(tabNumCK == "2"){
               searchGrade2("","");
           }else if(tabNumCK == "4"){
               searchGrade5("","");
           }
       });	
           
   }else if(tabNum == '3'){
       if($("#class_cd").val() == ""){			
           searchProfMenu(tabNum);
       }else{			
           var class_cd = $('#class_cd2').val();	
           if(class_cd == ""){				
               searchProfMenu(tabNum);
           }else{				
               $("#srh_typebox_"+searchNm+tabNum).html("");
               profList("L1"+class_cd.substring(2,4),tabNum);
           }			
       }	
   }
   
}

function searchProfMenu(tabNum){
   jQuery.ajax({
       type:"POST",
       data : "type=Hightab"+tabNum+"&class_cd=",
       url:"/NGLMS/SearchLecture.do",
       success:function(data){
           $("#srh_typebox_"+searchNm+tabNum).html(data);			
       }, 
       error: function(xhr,status,error){
       }
   }).done(function () {
       var class_cd = $('#class_cd4').val();	
       if(class_cd != ""){			
           searchGrade4(class_cd,menuNum4);	
       }else{
           profList("");
       }		
   });	
}

function searchGrade1(class_cd,num) {	
   var li_size = $(".srh_typebox > li").size();	
   var searchClass = "";

   var menuNum; 
   if(class_cd != ""){
       menuNum1 = num;
       menuNum = num;
       searchClass = class_cd;		
       $("#srh_typebox_Tab1_L"+menuNum).addClass('on');		
       $("#class_nm1_"+searchNm).val($("#srh_typebox_Tab1_L"+menuNum).attr("title"));		
       if(searchClass == 'L3'){
           searchClass = 'L8';
       }
       $("#class_cd1").val(searchClass);
       $("#class_cd").val(searchClass);	
       $("#class_nm2_"+searchNm).val("과목별 선택");
       $("#class_cd2").val("");
       $("#class_cd3").val("");
       $("#prof_nm_"+searchNm).val("인강선생님 선택");
       $("#searchProf_id").val("");
       menuNum2 = "";
       menuNum3 = "";
       menuNum4 = "";
       profNum = "";
       searchTab('2');
       $("#searchProf_id").val("");				
       $("#srh_tchlist_"+searchNm).html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");
   }else{		
       menuNum = menuNum1;
   }	
   menuOn(li_size,menuNum);	
   if($('#class_cd').val() != ""){		
       searchLecture();
   }
}

function searchGrade2(class_cd,num) {		
   var li_size = $(".srh_typebox > li").size();	
   var menuNum; 
   if(class_cd != ""){
       menuNum2 = num;
       menuNum = num;
       menuNum3 = "";
       $("#class_nm2_"+searchNm).val($("#srh_typebox_Tab2_L"+menuNum).attr("title"));		
       $("#class_cd2").val(class_cd);
       $("#class_cd").val(class_cd);
       //searchTab('2');		
       $("#searchProf_id").val("");	
       searchTab('3');
       searchProf("","");		
   }else{		
       menuNum = menuNum2;
   }	
   menuOn2(li_size,menuNum);		
   if($("#class_cd2").val() != ""){
       subjectList();
   }
   $("#srh_tchlist_"+searchNm+"1").html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");
}

function searchGrade3(class_cd,num) {		
   $("#class_cd3").val(class_cd);
   $("#class_cd").val(class_cd);
   $("#Subject_"+menuNum3).removeClass("on");	
   $("#Subject_"+num).addClass("on");	
   menuNum3 = num;
   $("#srh_tchlist_"+searchNm+"1").html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");
   //searchTab('2');
   $("#searchProf_id").val("");	
   searchTab('3');
   searchProf("","");
   searchLecture();		
}

function searchGrade4(class_cd,num) {			
   var li_size = $(".srh_typebox > li").size();		
   
   if(class_cd != $('#class_cd4').val()){
       profNum = "";
   }	
   $('#class_cd4').val(class_cd);	
   menuNum4 = num;
   menuOn4(li_size,num);
   profList(class_cd);
}

function searchGrade5(code_study_level,num) {		
   var li_size = $(".srh_typebox > li").size();	
   var menuNum; 
   if(code_study_level != ""){
       menuNum5 = num;
       menuNum = num;
       $("#code_study_nm_"+searchNm).val($("#srh_typebox_Tab4_L"+menuNum).attr("title"));		
       $("#code_study_level").val(code_study_level);
   }else{		
       menuNum = menuNum5;
   }	
   menuOn5(li_size,menuNum);	
   if($('#code_study_level').val() != ""){
       searchLecture();		
   }
}

function searchProf(prof_id,num) {		
   $("#searchProf_id").val(prof_id);
   $("#prof_nm_"+searchNm).val($("#profInfo_"+num).attr("title"));		

   $("#profInfo_"+profNum).removeClass("on");	
   $("#profInfo_"+num).addClass("on");	
   profNum = num;
   searchLecture();	
}


function menuOn(li_size,menuNum){
   for(var i=1; i<=li_size; i++){
       if(i == menuNum){			
           $("#srh_typebox_Tab1_L"+i).addClass("on");	
       }else{
           $("#srh_typebox_Tab1_L"+i).removeClass("on");
       }		
   }
}

function menuOn2(li_size,menuNum){
   for(var i=1; i<=li_size; i++){
       if(i == menuNum){			
           $("#srh_typebox_Tab2_L"+i).addClass("on");	
       }else{
           $("#srh_typebox_Tab2_L"+i).removeClass("on");
       }		
   }
}

function menuOn4(li_size,menuNum){
   for(var i=1; i<=li_size; i++){
       if(i == menuNum){			
           $("#srh_typebox_Tab3_L"+i).addClass("on");	
       }else{
           $("#srh_typebox_Tab3_L"+i).removeClass("on");
       }		
   }
}

function menuOn5(li_size,menuNum){
   for(var i=1; i<=li_size; i++){
       if(i == menuNum){			
           $("#srh_typebox_Tab4_L"+i).addClass("on");	
       }else{
           $("#srh_typebox_Tab4_L"+i).removeClass("on");
       }		
   }
}

function profList(class_cd){	
   jQuery.ajax({
       type:"POST",
       data : "type=profList&class_cd="+class_cd,
       url:"/NGLMS/SearchLecture.do",
       success:function(data){
           $("#srh_tchlist_"+searchNm+'1').html(data);		
           
       }, 
       error: function(xhr,status,error){
       }
   }).done(function () {
       $("#srh_tchlist_"+searchNm+'1').css('display','block');	
       $("#profInfo_"+profNum).addClass("on");	
       srh_box_height();
       srhbook_box_height();
   });		
}

function subjectList(){		
   var searchClass = $('#class_cd2').val();
   jQuery.ajax({
       type:"POST",
       data : "type=subjectList&class_cd="+searchClass,
       url:"/NGLMS/SearchLecture.do",
       success:function(data){
           $("#srh_tchlist_"+searchNm).html(data);
           searchLecture();
       }, 
       error: function(xhr,status,error){
       }
   }).done(function () {
       $("#srh_tchlist_"+searchNm).css('display','block');			
       $("#Subject_"+menuNum3).addClass("on");	
       srh_box_height();
       srhbook_box_height();
   });				
}

function searchLecture(){
   
   var frm = $("form#searchLectureAndBook")[0]; 
   
   if(searchNm == 'Lec'){		
       frm.type.value = 'searchCalss'; 		
   }else if(searchNm == 'Book'){
       frm.type.value = 'searchBook'; 
   }	
   
   $form = $("form[name=searchLectureAndBook]").serialize();		
   $('#srh_tlisttitList_'+searchNm).empty();
   $('#srh_tlisttitList_'+searchNm).html("<center style=\"padding-top: 72px\"><img src=\"/htmlRes/images/loading/ajax-loader.gif\" width=\"32px\" height=\"32px\"></center>");
   jQuery.ajax({
       type:"POST",
       data : $form,
       url:"/NGLMS/SearchLecture.do",
       success:function(data){
           $("#srh_tlisttitList_"+searchNm).html(data);			
       }, 
       error: function(xhr,status,error){
       }
   });			
}


function classNext(lecture_cd){
   var class_nm = $("input[name=class_nm1_Lec]").val();
   var class_url = "High3";
   if(class_nm == "고3/N수"){
       class_url = "High3";
   }else if(class_nm == "고2/1"){
       class_url = "High2";
   }else if(class_nm == "대입논술"){		
       class_url = "High3";
   }	
   location.replace("/NGLMS/High/"+class_url+"/Class.do?lecture_cd="+lecture_cd);
}

function searchLectureReset(){
   
   tabNumCK = "";
   menuNum1 = "";
   menuNum2 = "";
   menuNum3 = "";
   menuNum4 = "";
   menuNum5 = "";
   profNum = "";
   
   $('#class_nm1_'+searchNm).val("학년타입 선택");
   $('#class_nm2_'+searchNm).val("과목별 선택");
   $('#prof_nm_'+searchNm).val("인강선생님 선택");
   $('#code_study_nm_'+searchNm).val("학습단계 선택");
   $('#class_cd').val("");
   $('#searchProf_id').val("");
   $('#code_study_level').val("");
   $('#class_cd1').val("");
   $('#class_cd2').val("");
   $('#class_cd3').val("");
   $('#class_cd4').val("");
   
   /*$("#srh_tchlist_"+searchNm).css('display','none');		
   $("#srh_tchlist_"+searchNm+'1').css('display','none');	*/
   $("#srh_tchlist_"+searchNm).html("");	
   $("#srh_typebox_"+searchNm+'1').html("<li><a>상단 학년탭을 선택해 주세요.</a></li>");	
   $("#srh_typebox_"+searchNm+'2').html("<li><a>학년별 메뉴를 먼저 선택해 주세요.</a></li>");
   $("#srh_tchlist_"+searchNm).html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");
   $("#srh_tchlist_"+searchNm+'1').html("<li><a>과목별 메뉴를 먼저 선택해 주세요.</a></li>");	
   $("#srh_typebox_"+searchNm+'4').html("<li><a>상단 학습단계탭을 선택해주세요.</a></li>");	
   $("#srh_tlisttitList_"+searchNm).html("");	
   /*$(".tchlistLec").css("display", "none");
   $(".tchlist").css("display", "none");*/
   searchTab('0');
}