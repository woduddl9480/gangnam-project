
function fileUpload(params){		
	
    var x=params;
    var y=x.split(',');
    
    multi_type = y[0];	 
    width = y[1];
    height = y[2];
    allow_filetype = y[3];
    deny_filetype = y[4];
    limit_size = y[5];				
    save_attach_idx = y[6];
    attach_type = y[7];
    save_path = y[8];
    attach_mode = y[9]; 			
    user_id = y[10]; 	 
    view_id = y[11];

    if(multi_type == 'false'){
        multi = false;
    }else{
        multi = true;
    }
    
    from = 'uploader_'+save_attach_idx;
    button = 'pickfiles_'+save_attach_idx;
    
    $('#uploadPopup_'+save_attach_idx).fadeIn('fast');
    
   $(function() {
       
       var uploader = new plupload.Uploader({
           runtimes : 'html5,flash,silverlight',
           browse_button : button,
           multi_selection: multi,			
           container : from,
           max_file_size: limit_size,                
           url : '/NGLMS/fileUpload.do',
           flash_swf_url : '/htmlRes/images/common/flash/progressbar/plupload.flash.swf',
           silverlight_xap_url : '/htmlRes/images/common/progressbar/flash/plupload.silverlight.xap'				

       });		  

       if(width != 0 && height != 0){
           uploader.settings.resize = {width: width, height: height, quality: 90};		
       }
       
       if(allow_filetype == 'img'){
           uploader.settings.filters = [{title : "jpg,jpeg,gif,png,bmp", extensions : "jpg,jpeg,gif,png,bmp"}];		
       }else if(allow_filetype == 'doc'){
           uploader.settings.filters = [{title : "hwp,pdf,doc,ppt,pptx,xls,xlsx,zip", extensions : "hwp,pdf,doc,ppt,pptx,xls,xlsx,zip"}];			
       }else if(allow_filetype == 'hwp'){
           uploader.settings.filters = [{title : "hwp", extensions : "hwp"}];			
       }else if(allow_filetype == 'xls'){
           uploader.settings.filters = [{title : "xls,xlsx", extensions : "xls,xlsx"}];
       }else if(allow_filetype == 'xml'){
           uploader.settings.filters = [{title : "xml", extensions : "xml"}];
       }else if(allow_filetype == 'all'){
           uploader.settings.filters = [{title : "*.*", extensions : "jpeg,jpg,gif,png,bmp,hwp,pdf,doc,ppt,pptx,xls,xlsx,zip,txt,mp3,wma,wav,mp4,avi,wmv"}];
       }else if(allow_filetype == 'htm'){
           uploader.settings.filters = [{title : "htm,html", extensions : "htm, html"}];	
       }else{
           uploader.settings.filters = [{title : "jpg,jpeg,gif,png,bmp", extensions : "jpg,jpeg,gif,png,bmp"},{title : "hwp,pdf,doc,ppt,pptx,xls,xlsx,zip", extensions : "hwp,pdf,doc,ppt,pptx,xls,xlsx,zip"},{title : "mp3,wma,wav", extensions : "mp3,wma,wav"}];					
       }

       
       
       // RUNTIME
       uploader.bind('Init', function(up, params) {		
           //$('#runtime_'+save_attach_idx).text(params.runtime);
       });

       $('#uploadfiles_'+save_attach_idx).click(function(e) {
           uploader.settings.multipart_params = { "save_path": save_path, "attach_idx": save_attach_idx, "reg_id":user_id, "attach_mode":attach_mode };				
           uploader.start();
           e.preventDefault();			
           
           
       });

       uploader.init();

       uploader.bind('FilesAdded', function(up, files) {
           decodeURIComponent(files);
            if(multi_type == 'false'){				
                    $('#pickfiles_'+save_attach_idx).css('visibility', 'hidden');
             }
           
           $.each(files, function(i, file) {
               if(multi_type == 'false'){
                   var addCnt = $('.addedFile').length;
                   if (addCnt >= 1) {
                       uploader.removeFile(uploader.getFile(file.id));	
                       return;
                   }
               }
               
               
               $('#filelist_'+save_attach_idx).append('<div class="addedFile" id="' + file.id + '">' + file.name +'('+ plupload.formatSize(file.size)+')' + '<a id="' + file.id + '" class="delbt btn btn-mini btn-danger removeFile">Delete</a>' + '</a>');
           });		
       });

       $('a.removeFile').on('click', function(e) {
           if(multi_type == 'false'){
               $('#pickfiles_'+save_attach_idx).css('visibility', 'visible');			   
           }
           uploader.removeFile(uploader.getFile(this.id));		
           $('#'+this.id).remove();
           e.preventDefault();			
       });
       
       $('#btnClosex').on('click', function(e) {
           if(multi_type == 'false'){
               $('#pickfiles_'+save_attach_idx).css('visibility', 'visible');		   
           }
           $('#filelist_'+save_attach_idx).html("");
           uploader.removeAllFile();	 
            uploader.destroy();
            uploader.refresh();	
            uploader.unbindAll();		
       });
       
       $('#btnClose').on('click', function(e) {
           if(multi_type == 'false'){
               $('#pickfiles_'+save_attach_idx).css('visibility', 'visible');				   
           }
           $('#filelist_'+save_attach_idx).html("");
           uploader.removeAllFile();	 
            uploader.destroy();
            uploader.refresh();	
            uploader.unbindAll();		
            
       });

       uploader.bind('UploadProgress', function(up, file) {				
       /*	var progressBarValue = up.total.percent;
           $('#progressbar_'+save_attach_idx).fadeIn().progressbar({
               value: progressBarValue
           });
           $('#progressbar_'+save_attach_idx+' .ui-progressbar-value').html('<span class="progressTooltip">' + up.total.percent + '%</span>');*/
           $('#progressbar_'+save_attach_idx).fadeIn();
           $('#progressbar_'+save_attach_idx).html('<img src="/htmlRes/images/common/upload/progressbar.gif" alt="첨부파일 로딩">');
       });


       uploader.bind('UploadComplete', function(e,files) {			
           alert("파일 업로드가 완료되었습니다.");
           doGetFilelistUploader(save_attach_idx,view_id,multi_type,attach_mode);
           $('#progressbar_'+save_attach_idx).fadeOut('slow');
           $('#uploadPopup_'+save_attach_idx).fadeOut('fast');
           $(".player").css('margin-left', 0+'px');
                $.each(files, function(i, file) {								
                       $('#'+file.id).remove();					
                   });			 
            uploader.removeAllFile();	 
            uploader.destroy();
            uploader.refresh();	
            uploader.unbindAll();
            
            if (typeof(window["openReg"]) == "function") {
                openReg(2, 1);
            }
            
       });		
          

       $('.upload-form .close').on('click', function(e) {
           $('.upload-form').fadeOut('slow');
           e.preventDefault();
       });			

   }); 
}

//파일 업로드 목록
doGetFilelistUploader = function(attach_idx,view_id,multi_type,attach_mode) {	

var auth = 0;
     $.ajax({          
         type: "POST",	 
         url: "/NGLMS/fileUploadList.do", 
         data: "attach_idx="+attach_idx,		
         error: function(xhr,status,error) {
             alert("오류가 발생하였습니다.("+error+")");
         },
         success: function(xml) {			
             $(xml).find("item").each(		
                    
                     function(){
                         
                         if(multi_type == 'false'){							
                               $('#fileupload_'+attach_idx).fadeOut('fast');									
                         }	
                         
                         $('#file_'+ $(this).find("value").text()+'_'+attach_idx).remove();  							
                         $('#myModal_'+attach_idx).modal('hide');
                         $('#'+view_id).append('<div class=\"filelist\" id=file_'+ $(this).find("value").text()+'_'+attach_idx+'><input type="hidden" name="fileCk_'+view_id+'\" value=\"'+ $(this).find("value").text() + '\"/><a id=\"attachIdxFileName\" href=\"javascript:doDownLoadUploader(\'' + attach_idx + '\',\'' + $(this).find("value").text() + '\',\'' + auth + '\',\'' +  attach_mode + '\');\">'+$(this).find("name").text()+'</a><a class=\"delbt btn btn-mini btn-inverse\" onclick=\"doDeleteUploader(\'' + attach_idx + '\',\'' + $(this).find("value").text() + '\',\'' + multi_type + '\',\'' + attach_mode + '\');\">Delete</a></div>');
                         
                         if (typeof(window["openReg"]) == "function") {
                            openReg(2, 1);
                         }
                   });		
            }
     
     });
     
     if (typeof(window["openReg"]) == "function") {
        openReg(2, 1);
     }
}; 

//파일 다운로드
doDownLoadUploader = function(attach_idx, file_seq, auth, attach_mode ){
   var url = '/NGLMS/downLoad.do?attach_idx=' + attach_idx + '&file_seq=' + file_seq + '&e=' + auth+'&attach_mode='+attach_mode;
    window.open(url);
};

doDeleteUploader = function(attach_idx,file_seq,multi_type,attach_mode) {
    result = confirm("첨부파일을  삭제하시겠습니까?");

   if (typeof(window["openReg"]) == "function") {
       openReg(2, 1);
   }
    
   if(result == true) {   
        $.ajax({          
             type: "POST",	 
             url: "/NGLMS/fileDeleteList.do", 
             data: "attach_idx="+attach_idx+"&file_seq="+file_seq+"&attach_mode="+attach_mode,		
             error: function(xhr,status,error) {
                 alert("오류가 발생하였습니다.("+error+")");
             },
             success: function(data) {			 
                     $('#file_'+data+'_'+attach_idx).remove(); 	
                     if(multi_type == 'false'){
                         $('#fileupload_'+attach_idx).fadeIn('fast');
                         $('#pickfiles_'+attach_idx).css('visibility', 'visible');
                     }						
            }
         
         });
   }   
};