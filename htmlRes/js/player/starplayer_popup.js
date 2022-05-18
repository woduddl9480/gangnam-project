var STARPLAYER_EXE_NOT_INSTALLED="StarPlayer가 설치되어 있지 않습니다.";var STARPLAYER_EXE_WANT_TO_INSTALL="설치하시겠습니까?";var STARPLAYER_UNKNOWN_INSTALLED="StarPlayer가 정상적으로 실행되었습니까?";var StarPlayerExe={};StarPlayerExe.run=function(){if(typeof this.url=="undefined"){alert("undefined url");return}var a=this;StarPlayerLaunchUri(a.getUrl(),function(){a.result(true,a.install)},function(){a.result(false,a.install)},function(){a.unKnownResult(a.install)})};StarPlayerExe.getUrl=function(){var a="<url>"+this.url+"<width>"+this.width+"<height>"+this.height+"<topmost>"+this.topmost+"<resizing>"+this.resizing+"<caption>"+Base64.encode(encodeURIComponent(this.caption));return"starplayer://"+encodeURIComponent(a)};StarPlayerExe.result=function(a,c){if(a==false){var b=confirm(STARPLAYER_EXE_NOT_INSTALLED+"\n"+STARPLAYER_EXE_WANT_TO_INSTALL);if(b==true){window.location.href=c}}};StarPlayerExe.unKnownResult=function(b){if(COOKIE.get("starplayer_installed")!="true"){var a=confirm(STARPLAYER_UNKNOWN_INSTALLED);if(a==true){COOKIE.set("starplayer_installed","true",60)}else{window.location.href=b}}};function StarPlayerLaunchUri(g,d,b,o){var s,k,a,j,n,l,m,h,r;function f(e){if(typeof e==="function"){e()}}function p(t){var e;if(!t){t=document.body}e=document.createElement("iframe");e.style.display="none";t.appendChild(e);return e}function c(e){if(!j){return}if(!e){e=document.body}e.removeChild(j);j=null}var i=navigator.appVersion.indexOf("Edge/12")!=-1?true:false;r={isChrome:false,isFirefox:false,isIE:false,isSafari:false};if(window.chrome&&!navigator.userAgent.match(/Opera|OPR\//)){r.isChrome=true}else{if(typeof InstallTrigger!=="undefined"){r.isFirefox=true}else{if(i||"ActiveXObject" in window){r.isIE=true}else{if(navigator.userAgent.match(/Safari\//)){r.isSafari=true}}}}if(navigator.msLaunchUri){navigator.msLaunchUri(g,d,b)}else{if(r.isChrome||r.isSafari){m=function(){window.clearTimeout(l);window.removeEventListener("blur",m);f(d)};h=function(){window.removeEventListener("blur",m);f(b)};window.addEventListener("blur",m);l=window.setTimeout(h,1000);window.location.href=g}else{if(r.isFirefox){j=p();try{j.contentWindow.location.href=g;f(d)}catch(q){if(q.name==="NS_ERROR_UNKNOWN_PROTOCOL"){f(b)}else{f(o)}}finally{c()}}else{if(r.isIE){a=window.open("","launcher","width=0,height=0");a.location.href=g;try{a.location.href="about:blank";f(d);n=window.setInterval(function(){a.close();if(a.closed){window.clearInterval(n)}},500)}catch(q){a=window.open("about:blank","launcher");a.close();f(b)}}else{j=p();j.contentWindow.location.href=g;window.setTimeout(function(){c(k);f(o)},1000)}}}}}var COOKIE={set:function(g,b,d,c){var a=new Date();var f;switch(c){case"day":a.setDate(a.getDate()+d);break;case"hour":a.setTime(a.getTime()+(d*60*60*1000));break;default:a.setDate(a.getDate()+d)}if(d){f=escape(b)+"; expires="+a.toGMTString()}else{f=escape(b)}document.cookie=g+"="+f+"; path=/"},get:function(g){var e=document.cookie.split(";");var d,c,f,b,a;b=e.length;for(d=0;d<b;d++){a=e[d].indexOf("=");c=e[d].substr(0,a);f=e[d].substr(a+1);c=c.replace(/^\s+|\s+$/g,"");if(c==g){return unescape(f)}}},del:function(a){this.set(a,"",-1)}};var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(c){var a="";var k,h,f,j,g,e,d;var b=0;c=Base64._utf8_encode(c);while(b<c.length){k=c.charCodeAt(b++);h=c.charCodeAt(b++);f=c.charCodeAt(b++);j=k>>2;g=((k&3)<<4)|(h>>4);e=((h&15)<<2)|(f>>6);d=f&63;if(isNaN(h)){e=d=64}else{if(isNaN(f)){d=64}}a=a+this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(e)+this._keyStr.charAt(d)}return a},decode:function(c){var a="";var k,h,f;var j,g,e,d;var b=0;c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(b<c.length){j=this._keyStr.indexOf(c.charAt(b++));g=this._keyStr.indexOf(c.charAt(b++));e=this._keyStr.indexOf(c.charAt(b++));d=this._keyStr.indexOf(c.charAt(b++));k=(j<<2)|(g>>4);h=((g&15)<<4)|(e>>2);f=((e&3)<<6)|d;a=a+String.fromCharCode(k);if(e!=64){a=a+String.fromCharCode(h)}if(d!=64){a=a+String.fromCharCode(f)}}a=Base64._utf8_decode(a);return a},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");var a="";for(var e=0;e<b.length;e++){var d=b.charCodeAt(e);if(d<128){a+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);a+=String.fromCharCode((d&63)|128)}else{a+=String.fromCharCode((d>>12)|224);a+=String.fromCharCode(((d>>6)&63)|128);a+=String.fromCharCode((d&63)|128)}}}return a},_utf8_decode:function(a){var b="";var d=0;var e=c1=c2=0;while(d<a.length){e=a.charCodeAt(d);if(e<128){b+=String.fromCharCode(e);d++}else{if((e>191)&&(e<224)){c2=a.charCodeAt(d+1);b+=String.fromCharCode(((e&31)<<6)|(c2&63));d+=2}else{c2=a.charCodeAt(d+1);c3=a.charCodeAt(d+2);b+=String.fromCharCode(((e&15)<<12)|((c2&63)<<6)|(c3&63));d+=3}}}return b}};