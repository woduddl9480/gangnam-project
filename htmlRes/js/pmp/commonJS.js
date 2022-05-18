objData = null;
maxTimeout = 5;

tmpWin = null;

function SendData(cntTimeout)
{
	if (tmpWin.procFrm)
	{
		//alert('procFrm frame exists');
		document.frm.method = 'post';
		document.frm.target = 'procFrm';
		document.frm.action = 'procFrm.jsp';
		document.frm.submit();
		// 2008-04-01 양반석 추가
		// 팝업창으로의 데이터 전송이 되지 않는 경우
		tmpWin.AppendProc();
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
			if (tmpWin && !tmpWin.closed) tmpWin.close();
			tmpWin = null;
		}
	}
	
	return false;
}

function OpenWin()
{
	var ret = false;
	
	var features="width=530,height=560";
	//var features="width=530,height=700,status=yes,resizable=yes,location=no";

	tmpWin = window.open("", "TSync_DNFileWin", features);
	
	try
	{
		// 새창이 떠 있나 확인한다.
		if (tmpWin.mainFrm)
		{
			//alert('the newin exists');
		}
		else
		{
			//alert('create a newin');
			tmpWin.location = "/NGLMS/pmp/DNWinFrm.jsp";
		}
		ret = true;
	}
	catch(e) 
	{
		// 2009년 3월 16일 오한빈 수정
		// 팝업창 생성 에러시
		alert('Error!!\n\n팝업창을 생성할 수 없습니다.\n툴바나 익스플로러에서 팝업 방지 옵션이 켜져있는지\n확인해주세요.\n\n' + e);
		if (tmpWin && !tmpWin.closed)
		{
			tmpWin.close();
			tmpWin = null;
		}
	}
	

	return ret;
}

function ProcData()
{
	// 새창이 생성되어 있나 확인
	if (OpenWin())
	{
		// 전송할 오브젝트를 전역변수에 담아 놓는다.
		// setTimeout에서 호출될 함수에 오브젝트 변수를 넘겨줄 수 없기 때문에
		//objData = obj;

		// 데이타 전달
		SendData(0);	
	}
	return false;
}


function CheckSelected( obj )
{
	var lenObj = obj.length;
	
	if (lenObj > 1)
	{
		for(var i=0; i < lenObj; i++)
		{
			if (obj[i].checked)
				return true;
		}
	}
	else
	{
		if (obj.checked)
			return true;
	}
	
	return false;
}


function AddFile()
{
	var features = "top=100,left=200,width=530,height=560";
		// 2006.11.13 양반석 추가
		// Agent 설치 체크
	if(DetectActiveXControl()) {
		ProcData();
	} else {
		window.open("/NGLMS/pmp/AgentInstall.jsp", "TSync_DNFileWin", features);
	}
	
	return false;
}

// 2006.11.13 양반석 추가
// ActiveXControl 설치 체크
function DetectActiveXControl()
{
	var progid = "NEWMSDOWNLOAD.NewMSDownloadCtrl.1";
	
	try
	{
		var xObj = new ActiveXObject(progid);

		if(xObj)
			Installed = true;
		else
			Installed = false;
	}
	
	catch(MSDown)
	{
		Installed = false;
	}
	
	if(Installed == true)
	{
		return true;
	} else {
		return false;
	}
}