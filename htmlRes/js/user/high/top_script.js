
function messagePop() {
	var win = popupWindow('/NGLMS/MemberMessagePop.do', 'messagePop', '800px', '700px', 'scrollbars=yes', 'LEFTTOP');
	win.focus();
}

function myLearning(serverURL){
	jQuery.ajax({
		type:"POST",
		data : "type=myLearning",
		url:"/NGLMS/Member.do?serverURL="+serverURL,
		success:function(data){
			$("#myLearning_List").html(data);			
		}, 
		error: function(xhr,status,error){
		}
	}); 
}