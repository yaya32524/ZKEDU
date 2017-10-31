var oHeader=document.getElementById("header");

//登录、注册页面
var oCloseBox=document.getElementsByClassName("close-box");
var oLoginBoxBg=document.getElementById("login-box-bg");
var oRegistBoxBg=document.getElementById("regist-box-bg");
var oHeaderRegist=document.getElementById("header-regist");
var oHeaderLogin=document.getElementById("header-login");
var oTzLogin=document.getElementById("tz-login");
var oTzRegist=document.getElementById("tz-regist");
oCloseBox[0].onclick=oCloseBox[1].onclick=function(){
    oLoginBoxBg.style.display="none";
    oRegistBoxBg.style.display="none";
}
oHeaderLogin.onclick=function(){
    oLoginBoxBg.style.display="block";
}
oHeaderRegist.onclick=function(){
    oRegistBoxBg.style.display="block";
}
oTzLogin.onclick=function(){
    oLoginBoxBg.style.display="block";
    oRegistBoxBg.style.display="none";
}
oTzRegist.onclick=function(){
    oLoginBoxBg.style.display="none";
    oRegistBoxBg.style.display="block";
}

//登录、注册验证
var oUser=document.getElementById("user");
var oPwd=document.getElementById("pwd");
var ErroIcon=document.getElementById("erro-icon");
var LoginTishi=document.getElementById("login-user");
var oLoginBtn=document.getElementById("login-btn");
var oLoginMm=document.getElementById("login-mm");
var oUserClear=document.getElementById("user-clear");
var oLoginYan=document.getElementById("login-yan");
var y=true;
oLoginYan.onclick=function(){
    if(y){
        oPwd.type="text";
        oLoginYan.style.backgroundPosition="-346px -12px";
        y=false;
    }else{
        oPwd.type="password";
        oLoginYan.style.backgroundPosition="";
        y=true;
    }
}

oUser.oninput=function(){
//  oUser.value=oUser.value.replace(/\s+/g,"");   光标会回到最后
    if(oUser.value.length>=1){
        oUserClear.style.display="block";
    }else{
        oUserClear.style.display="none";
    }  
}
oUserClear.onclick=function(){
    oUser.value="";
}

oLoginBtn.onclick=function(){
    userPwd();
}

oUser.onblur=function(){
   userPwd();
   setTimeout(function(){
    oUserClear.style.display="";
   },500);
}
oPwd.onblur=function(){
    if(userPwd()){
        if(!checkPwd(oPwd)){
           oLoginMm.style.display="block";
           oPwd.style.border="1px solid #ef8767";
        }else{
           oLoginMm.style.display="";
           oPwd.style.border="";
        }
    }
}
oPwd.onfocus=function(){
    oLoginMm.style.display="none";
    oPwd.style.border="";
}
function userPwd(){
    var us=false;
    if(checkUser(oUser)){
       ErroIcon.style.display="block";
       ErroIcon.style.background="url('../ZKEDU/img/zhucedui.png') no-repeat left center";
       oUser.style.border="";
       LoginTishi.style.display="";
       us=true;
    }else{
       ErroIcon.style.display="block";
       ErroIcon.style.background="";
       oUser.style.border="1px solid #ef8767";
       LoginTishi.style.display="block";
       us=false;
    }
    return us;
}
oUser.onfocus=function(){
    ErroIcon.style.display="none";
}
function checkPwd(obj){
//obj.value=obj.value.replace(/\s+/g,"");  光标回到最后
    var bo=false;
    if(obj.value.length>=6){
        bo=true;
    }
    return bo;
}
function checkUser(obj){
//  obj.value=obj.value.replace(/\s+/g,"");
    var bo=false;
    if((/^1[3|4|5|8][0-9]\d{8}$/.test(obj.value)) || /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(obj.value)){
        bo=true;
    }
    return bo;
}


//注册页面
var oYzm=document.getElementById("yzm");
var oHuoQu=document.getElementById("huoqu");
var oRegPhone=document.getElementById("reg-phone");
var oRegErroIco=document.getElementById("reg-erro-icon");
var oRegistUser=document.getElementById("regist-user");
var oRegUserClear=document.getElementById("reg-user-clear");
var oHuoQu=document.getElementById("huoqu");
var oRegitMm=document.getElementById("regit-mm");
var oRegitPwd=document.getElementById("regitPwd");
var oRegistYan=document.getElementById("regist-yan");
oHuoQu.disabled="disabled";

oRegistYan.onclick=function(){
    if(y){
        oRegitPwd.type="text";
        oRegistYan.style.backgroundPosition="-346px -12px";
        y=false;
    }else{
        oRegitPwd.type="password";
        oRegistYan.style.backgroundPosition="";
        y=true;
    }
}

oHuoQu.onclick=function yzm(){
    var min=60;
    var timer;
    oHuoQu.style.background="#ccc";
    oHuoQu.disabled="disabled";
    clearInterval(timer);
    timer=setInterval(function(){
        min--;
        if (min==0) {
            oHuoQu.style.background="";
        	oHuoQu.value="获取验证码"
        	clearInterval(timer);
            oHuoQu.disabled="";
        }
        oHuoQu.value=min+"s";
    },1000);
}

oRegPhone.oninput=function(){
//  oRegPhone.value=oRegPhone.value.replace(/\s+/g,"");
    if(oRegPhone.value.length>=1){
        oRegErroIco.style.display="none";
        oRegUserClear.style.display="block";
    }else{
        oRegUserClear.style.display="";
    }  
    oRegUserClear.style.display="block";
}

oRegitPwd.onblur=function(){
    if(checkReturn()){
        if(!checkPwd(oRegitPwd)){
           oRegitMm.style.display="block";
           oRegitPwd.style.border="1px solid #ef8767";
        }else{
           oRegitMm.style.display="";
           oRegitPwd.style.border="";
        }
    }
}
oPwd.onfocus=function(){
    oLoginMm.style.display="none";
    oPwd.style.border="";
}


oRegUserClear.onclick=function(){
    oRegPhone.value="";
}
oRegPhone.onblur=checkReturn;
function checkReturn(){
    var t=false;
    setTimeout(function(){
        oRegUserClear.style.display="";
    },500);
    if(checkPhone(oRegPhone)){
       oRegErroIco.style.display="block";
       oRegErroIco.style.background="url('../ZKEDU/img/zhucedui.png') no-repeat left center";
       oRegPhone.style.border="";
       oRegistUser.style.display="";
       oHuoQu.disabled="";
       t=true;
    }else{
        oRegistUser.style.display="block";
        oRegErroIco.style.background="";
        oRegPhone.style.border="1px solid #ef8767";
        oRegErroIco.style.display="block";
        t=false;
    }
    return t;
}

function checkPhone(obj){
//  obj.value=obj.value.replace(/\s+/g,"");
    var bo=false;
    if((/^1[3|4|5|8][0-9]\d{8}$/.test(obj.value))){
        bo=true;    
    }
    return bo;
} 

oYzm.onfocus=function(){
    oHuoQu.style.color="#0099ff";
}
oYzm.onblur=function(){
    oHuoQu.style.color="";
}

//页面滚动头部变化
window.onscroll=function(){
   var scroll=window.scrollY;
   if(scroll>=60){
       oHeader.style.backgroundColor="#fff";
       oHeader.style.transition="all 0.5s";    
       oHeader.style.boxShadow="0px 1px 3px rgba(0,0,0,0.2)";
    }else{
       oHeader.style.backgroundColor="";
       oHeader.style.boxShadow="";
    }
   adv();
 }

var oRightAdv=document.getElementById("right-adv");
var oAdvTop=document.getElementById("top");
oAdvTop.onclick=function(){
    document.documentElement.scrollTop=document.body.scrollTop=0;
}
window.onload=adv();
function adv(){
    var oRightAdv=document.getElementById("right-adv");
    var scroll=document.documentElement.scrollTop || document.body.scrollTop;
    var viwTop=(document.documentElement.clientHeight-oRightAdv.offsetHeight)/2+scroll;
    oRightAdv.style.top=viwTop-2+"px";
}

//记住密码按钮
var oCheckIcon=document.getElementsByClassName("check-icon")[0];
var h=true;
oCheckIcon.onclick=function(){
    if (h) {
        oCheckIcon.style.backgroundPosition="-32px 0px";
        h=false;
    } else{
        oCheckIcon.style.backgroundPosition="";
        h=true;
    }
}




