
window.onload=function(){
	
	/*自定义按ID选取元素*/
	var pick= function(id) { 
		return document.getElementById(id); 
	}

	/*左右切换按钮*/
	var d=0;
	pick('next').onclick=function(){
		if(d>-600) d=d-300;
		distance=d+"px";
		pick("content").style.transform="translate("+distance+",0)";
	}
	pick('pre').onclick=function(){
		if(d<0) d=d+300;
		distance=d+"px";
		pick("content").style.transform="translate("+distance+",0)";
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
	
	var likeBtn=document.getElementsByClassName('likeBtn');
	for(var i=0;i<likeBtn.length;i++){
		likeBtn[i].onclick=function(ev){
			var oEvent=ev || event;   
			var obj=oEvent.srcElement?oEvent.srcElement:oEvent.target;
			obj.style.background="url(images/Ilike.png)";
			obj.style.backgroundSize='cover';
		}
	}
	
	var commentBtn=document.getElementsByClassName('commentBtn');
	var flag="true";
	for(var i=0;i<commentBtn.length;i++){
		commentBtn[i].onclick=function(ev){
			if(flag=='true'){
				var oEvent=ev || event;   
				var obj=oEvent.srcElement?oEvent.srcElement:oEvent.target;
				while(!(comment=obj.nextSibling.nodeType==1)){
					obj=obj.nextSibling;
				}	
				comment=obj.nextSibling;
				comment.style.display="block";
				comment.style.bottom="18px";
				flag="false";
			}else{
				var oEvent=ev || event;   
				var obj=oEvent.srcElement?oEvent.srcElement:oEvent.target;
				while(!(comment=obj.nextSibling.nodeType==1)){
					obj=obj.nextSibling;
				}
				comment=obj.nextSibling;
				comment.style.display="none";
				flag="true";
			}
			
		}
	}
}

