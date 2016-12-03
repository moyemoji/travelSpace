var index=0;
var btn=document.getElementById("popLogin");
var loginFrame=document.getElementById("loginFrame");

//点击按钮，弹出登录框
btn.onclick=function () {
	if(index%2==0)
	{
		loginFrame.style.visibility="visible";
		loginFrame.style.transform="translate(-380px,0)";
	}
	else{
		loginFrame.style.transform="translate(0,0)";
		loginFrame.style.visibility="hidden";
	}
	index++;
}

//判断用户名、密码是否输入
var userName;
var password;
var sub=document.getElementById("submit");
sub.onclick=function () {
    userName=document.getElementById("userName").value;
    password=document.getElementById("password").value;
   if(userName==""||password=="")
	{
	   aler("为空");
	}
	else{
       alert(name+","+psd);
	}
}
