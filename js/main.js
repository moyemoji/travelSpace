
window.onload=function(){
	
	/*自定义按ID选取元素*/
	var pick = function(id) { 
		return document.getElementById(id); 
	}
	
	/*设置板块宽度自适应屏幕分辨率*/
	var screenWidth=window.screen.width;
	pick('focusImg').style.minWidth=screenWidth-50+'px';
	pick('pFImg').style.minWidth=screenWidth-50+'px';
	pick('footerMask').style.minWidth=screenWidth-50+'px';
	
	/*文本编辑框开启、关闭按钮*/
	pick('write').onclick=function(){
		pick("addLog").style.display='block';
	}
	pick('qx').onclick=function(){
		pick("addLog").style.display='none';
	}
	pick('qd').onclick=function(){
		pick("addLog").style.display='none';
	}
	
	/*文本编辑器功能实现*/
	pick('textArea').contentEditable ="true";
	
	pick('size').onchange = function() {
		var s = parseInt(pick('size').value);
		pick('textArea').focus();
		document.execCommand('FontSize', false, s);
	}
	pick('color').onchange = function() {
		pick('textArea').focus();
		document.execCommand('ForeColor', false, pick('color').value);
	};
	pick('jc').onclick = function() {
		pick('textArea').focus();
		document.execCommand('bold');
	};
	pick('xt').onclick = function() {
		pick('textArea').focus();
		document.execCommand('italic');
	};
	pick('xhx').onclick = function() {
		pick('textArea').focus();
		document.execCommand('underline');
	};
	pick('hxz').onclick = function() { 
	pick('textArea').focus();
		document.execCommand('createLink',true);
	}
	pick('tp').onclick = function() { 
		document.execCommand('InsertImage',true,'images/heart.png');
	}
	pick('align').onchange = function() { 
		pick('textArea').focus();
		document.execCommand(pick('align').value);
	}

	/*根据浏览器内核变换局部样式*/
	var agent = navigator.userAgent.toLowerCase();
	if(agent.indexOf('applewebkit/')>-1){
		pick('size').style.borderRight='1px solid rgba(256,256,256,0.4)';
		pick('color').style.borderRight='1px solid rgba(256,256,256,0.4)';
		pick('align').style.borderRight='1px solid rgba(256,256,256,0.4)';
	}
	
	/*个人签名本地存储*/
	var localSay = window.localStorage?localStorage.getItem("localSay"):Cookie.read("localSay");
	if(localSay!=null){
		pick('ISay').innerHTML=localSay;
	}
	else{
		pick('ISay').innerHTML='Travelling is a happy thing, so it is worth doing it.';
	}
	pick('ISay').onblur=function(){
		var say=pick('ISay').innerHTML;
		if (window.localStorage) {
			localStorage.setItem("localSay",say);	
		} else {
			Cookie.write("localSay",say);	
		}
	}
	
	
	/*相册切换*/
	pick('photoSelect1').onmouseover=function(){
		pick('photo1').style.display="block";
		var t=function(){
			pick('photo1').style.transform="translate(-30px,0)";
		}
		setTimeout(t,50);
		pick('photo2').style.display="none";
		pick('photo3').style.display="none";
		pick('photo4').style.display="none";
	}
	pick('photoSelect1').onmouseout=function(){
		pick('photo1').style.transform="translate(30px,0)";
	}
	pick('photoSelect2').onmouseover=function(){
		pick('photo2').style.display="block";
		var t=function(){
			pick('photo2').style.transform="translate(-30px,0)";
		}
		setTimeout(t,50);
		pick('photo1').style.display="none";
		pick('photo3').style.display="none";
		pick('photo4').style.display="none";
	}
	pick('photoSelect2').onmouseout=function(){
		pick('photo2').style.transform="translate(30px,0)";
	}
	pick('photoSelect3').onmouseover=function(){
		pick('photo3').style.display="block";
		var t=function(){
			pick('photo3').style.transform="translate(-30px,0)";
		}
		setTimeout(t,50);
		pick('photo1').style.display="none";
		pick('photo2').style.display="none";
		pick('photo4').style.display="none";
	}
	pick('photoSelect3').onmouseout=function(){
		pick('photo3').style.transform="translate(30px,0)";
	}
	pick('photoSelect4').onmouseover=function(){
		pick('photo4').style.display="block";
		var t=function(){
			pick('photo4').style.transform="translate(-30px,0)";
		}
		setTimeout(t,50);
		pick('photo1').style.display="none";
		pick('photo2').style.display="none";
		pick('photo3').style.display="none";
	}
	pick('photoSelect4').onmouseout=function(){
		pick('photo4').style.transform="translate(30px,0)";
	}
	
	/*绘制旅行心愿*/
	pick('heart').onclick=function(){
		var flag="true";
		document.onmousedown=function(ev){
			if(flag=="true"){
				var oEvent=ev||event;
				var divHeart=document.createElement('div');
				divHeart.style.position="absolute";
				divHeart.className="heart_edit";
				divHeart.ondblclick=del;
				divHeart.style.width='39px';
				divHeart.style.height='39px';
				divHeart.style.zIndex='2000';
				divHeart.style.left=oEvent.clientX-19.5+15+'px';   
				
				
				var divText=document.createElement('div');
				divText.style.position="absolute";
				divText.contentEditable="true";
				divText.className="text_edit";
				divText.style.width='165px';
				divText.style.height='42px';
				divText.style.zIndex='2000';
				divText.style.background="rgba(0,0,0,0.4)";
				divText.style.borderRadius="6px";
				divText.style.left=oEvent.clientX-19.5+45+15+'px';  
				
				var agent = navigator.userAgent.toLowerCase();
				if(agent.indexOf('applewebkit/')>-1){
					divHeart.style.bottom=document.body.scrollHeight-document.body.scrollTop-oEvent.clientY-60-1.5-30+'px'; 
					divText.style.bottom=document.body.scrollHeight-document.body.scrollTop-oEvent.clientY-60-1.5-30+'px'; 
				}else{
					divHeart.style.bottom=document.body.scrollHeight-document.documentElement.scrollTop-oEvent.clientY-60-1.5-30+'px';
					divText.style.bottom=document.body.scrollHeight-document.documentElement.scrollTop-oEvent.clientY-60-1.5-30+'px'; 
				}
				pick('pastFuture').appendChild(divHeart);
				pick('pastFuture').appendChild(divText);
				flag="false";
			}
		} 	
	}
	
	/*绘制旅行足迹*/
	pick('foot').onclick=function(){
		var flag="true";
		document.onmousedown=function(ev){
			if(flag=="true"){
				
				var oEvent=ev||event;
				var divFoot=document.createElement('div');
				divFoot.style.position="absolute";
				divFoot.className="foot_edit";
				divFoot.ondblclick=del;
				divFoot.style.width='39px';
				divFoot.style.height='39px';
				divFoot.style.zIndex='2000';
				divFoot.style.left=oEvent.clientX-19.5+20+'px';   
				
				
				var divText=document.createElement('div');
				divText.style.position="absolute";
				divText.contentEditable="true";
				divText.className="text_edit";
				divText.style.width='165px';
				divText.style.height='42px';
				divText.style.zIndex='2000';
				divText.style.background="rgba(0,0,0,0.4)";
				divText.style.borderRadius="6px";
				divText.style.left=oEvent.clientX-19.5+38+20+'px';  
				
				var agent = navigator.userAgent.toLowerCase();
				if(agent.indexOf('applewebkit/')>-1){
					divFoot.style.bottom=document.body.scrollHeight-document.body.scrollTop-oEvent.clientY-60-1.5-6+'px'; 
					divText.style.bottom=document.body.scrollHeight-document.body.scrollTop-oEvent.clientY-60-1.5-6+'px'; 
				}else{
					divFoot.style.bottom=document.body.scrollHeight-document.documentElement.scrollTop-oEvent.clientY-60-1.5-6+'px';
					divText.style.bottom=document.body.scrollHeight-document.documentElement.scrollTop-oEvent.clientY-60-1.5-6+'px'; 
				}
				pick('pastFuture').appendChild(divFoot);
				pick('pastFuture').appendChild(divText);
				flag="false";
			}
		} 	
	}
	
	/*删除错误的心愿、足迹*/
	var del=function(ev){
		var oEvent=ev || event;   
		var obj=oEvent.srcElement?oEvent.srcElement:oEvent.target;
		var txt=obj.nextSibling;
		obj.style.display="none";
		txt.style.display="none";
	}
}