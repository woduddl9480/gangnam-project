var STARPLAYER_APP_IPHONE_URL = "https://itunes.apple.com/kr/app/axis-starplayer/id598865744?mt=8";
var STARPLAYER_APP_IPAD_URL = "https://itunes.apple.com/kr/app/axis-starplayerhd/id599892711?mt=8";
var STARPLAYER_APP_INSTALL_ANDROID_URL = "market://details?id=com.axissoft.starplayer";
var STARPLAYER_APP_INSTALL_CONFIRM = "[ StarPlayer App 설치 ]\n\n설치 페이지로 이동 하시겠습니까?\n\n기존에 앱이 설치되어 있다면\n '취소'버튼을 선택해 주세요.";
var DataType = {};
DataType.URL = 1;
DataType.DATA = 2;
var StarPlayerApp = {};
var uagent = navigator.userAgent.toLocaleLowerCase();
StarPlayerApp.android = (uagent.search("android") > -1 || navigator.platform
		.toLocaleLowerCase().search("linux") > -1);
StarPlayerApp.ios = (uagent.search("iphone") > -1 || uagent.search("ipod") > -1 || uagent
		.search("ipad") > -1);
StarPlayerApp.iphone = (uagent.search("iphone") > -1 || uagent.search("ipod") > -1);
StarPlayerApp.ipad = (uagent.search("ipad") > -1);
StarPlayerApp.safari = (uagent.search("safari") > -1);
StarPlayerApp.chrome = (uagent.search("chrome") > -1 || uagent.search("crios") > -1);
StarPlayerApp.opera = (uagent.search("opera") > -1);
StarPlayerApp.executeApp = function(d, b) {
	StarPlayerApp.referer = window.location.href;
	var a = this.urlscheme(d, b);
	//checkInstalled2();
	if (this.android) {
		alert("동영상 서비스 품질향상을 위해 개선작업이 진행중 입니다.\n곧 정상적인 서비스로 돌아오겠습니다.");
		/*var c = "intent://?" + a + "#Intent;";
		c += "scheme=starplayer;";
		c += "action=android.intent.action.VIEW;";
		c += "category=android.intent.category.BROWSABLE;";
		c += "package=com.axissoft.starplayer;end";
		window.parent.location.href = c*/
	} else {
		alert("동영상 서비스 품질향상을 위해 개선작업이 진행중 입니다.\n곧 정상적인 서비스로 돌아오겠습니다.");
		
		/*if (this.ios) {
			if (this.opera) {
				alert("사용하고 계신 환경(OS)에서는 지원되지 않습니다.")
			} else {
				window.location.href = a
			}
		}*/
	}
};
StarPlayerApp.urlscheme = function(c, b) {
	if (typeof b === "undefined") {
		b = DataType.URL
	}
	if (typeof this.license === "undefined") {
		alert("license 값이 설정되지 않았습니다.");
		return
	}
	if (typeof c === "undefined") {
		alert("data 값이 설정되지 않았습니다.");
		return
	}
	var a = "";
	if (b == DataType.URL) {
		a = this.url(c)
	} else {
		if (b == DataType.DATA) {
		}
	}
	return a
};
StarPlayerApp.url = function(c) {
	var a = "";
	if (!this.android) {
		a += "starplayer://?"
	}
	a += "license=" + encodeURIComponent(this.license) + "&url="
			+ encodeURIComponent(c);
	if (typeof this.referer !== "undefined") {
		a += "&referer=" + encodeURIComponent(this.referer)
	}
	if (typeof this.debug !== "undefined") {
		a += "&debug=" + this.debug
	} else {
		a += "&debug=false"
	}
	var b = false;
	if (this.android) {
		if (typeof this.android_version !== "undefined") {
			a += "&version=" + this.android_version;
			b = true
		}
	} else {
		if (typeof this.ios_version !== "undefined") {
			a += "&version=" + this.ios_version;
			b = true
		}
	}
	if (b == false) {
		if (typeof this.version !== "undefined") {
			a += "&version=" + this.version
		} else {
			a += "&version=1.0.0"
		}
	}
	if (typeof this.pmp !== "undefined") {
		a += "&pmp=" + this.pmp
	} else {
		a += "&pmp=true"
	}
	if (StarPlayerApp.chrome) {
		a += "&from=chrome"
	} else {
		if (StarPlayerApp.safari) {
			a += "&from=safari"
		} else {
			if (StarPlayerApp.opera) {
				a += "&from=opera"
			} else {
				a += "&from=none"
			}
		}
	}
	return a
};
var checkInstalled = function() {
};
var checkInstalled2 = function() {
	//if (StarPlayerApp.ios || (StarPlayerApp.android && StarPlayerApp.opera)) {
	if (StarPlayerApp.android && StarPlayerApp.opera){
		var a = new Date();
		setTimeout(
			function() {
				var b = new Date();
				if (b - a < 1100) {
					if (confirm(STARPLAYER_APP_INSTALL_CONFIRM)) {
						if (StarPlayerApp.iphone === true) {
							window.location.href = STARPLAYER_APP_IPHONE_URL
						} else {
							if (StarPlayerApp.ipad === true) {
								window.location.href = STARPLAYER_APP_IPAD_URL
							} else {
								if (StarPlayerApp.android === true) {
									window.location.href = STARPLAYER_APP_INSTALL_ANDROID_URL
								}
							}
						}
					}
				}
			}, 1000)
	}
};


//<![CDATA[
StarPlayerApp.license = "129DF1DE-87AC-4ABF-AEF3-EFA1F078A099"; 
//StarPlayerApp.debug = "false"; 
//StarPlayerApp.version = "1.0.0"; 
function app(info_url){	
	checkInstalled(); StarPlayerApp.executeApp(info_url); 
} 