//头部轮播图
var oBannerBox=document.getElementById("banner");
var oBannerBottom=document.getElementById("banner-bottom").getElementsByTagName("li");
var oBanLeft=document.getElementById("ban-left");
var oBanRight=document.getElementById("ban-right");
var oBox=document.getElementsByClassName("demo-box")[0];
var oHeaderBg=document.getElementById("header-bg");
var oHeaderBgBox=document.getElementsByClassName("header-box")[0];
Motion.MoveBox(0,2500,-1200,oBannerBottom,oBanLeft,oBanRight,"sty",oBannerBox,oBox,function(){
    Motion.MoveBox(0,2500,-1836,oBannerBottom,oBanLeft,oBanRight,"sty",oHeaderBg,oHeaderBgBox);
});

//中间部分老师介绍轮播
var oExpertInfoBox=document.getElementById("expert-info-box");
var oExpertInfo=document.getElementById("expert-info");
var oExpertInfoLis=oExpertInfo.getElementsByTagName("li");
var oExpertLeft=document.getElementById("expert-left");
var oExpertRight=document.getElementById("expert-right");
for (var i = 0; i < oExpertInfoLis.length; i++) {
    oExpertInfoLis[i].style.width=oExpertInfoBox.offsetWidth+"px";
}
oExpertInfo.style.width=oExpertInfoLis.length*oExpertInfoLis[0].offsetWidth+"px";
Motion.MoveBox(0,3000,-oExpertInfoLis[0].offsetWidth,null,oExpertLeft,oExpertRight,oExpertInfoLis,oExpertInfo,oExpertInfoBox);

//课程鼠标事件
ClassMove();
function ClassMove(){
    var oHotLisCont=document.getElementById("hot-lis-cont");
    var oHotLisContLis=oHotLisCont.children;
    var oHotLisClass=document.getElementById("list-class");
    var oClassBox=document.getElementById("class-box");
    var oGifImg=document.getElementById("gif-img");
    var oHotLisClassLis=oHotLisClass.getElementsByTagName("li");
    for (var i=0; i<oHotLisClassLis.length; i++) {
    oHotLisClassLis[i].index=i;
    oHotLisClassLis[i].onmouseover=function(){
        for (var a=0; a<oHotLisContLis.length; a++) {
            oHotLisContLis[a].style.display="none";
        }
        oHotLisCont.style.display="block";
        oHotLisContLis[this.index].style.display="block";
        oGifImg.style.display="block";
    }
    }
    oClassBox.onmouseleave=function(){
        oHotLisCont.style.display="none";
         for (var a=0; a<oHotLisContLis.length; a++) {
            oHotLisContLis[a].style.display="none";
            oGifImg.style.display="none";
        }
    }
}

//轮播图方向箭头显示隐藏
oBannerBox.onmouseout=function(){
    oBanLeft.style.display="";
    oBanRight.style.display="";
}
oBannerBox.onmouseover=oBanRight.onmouseover=oBanLeft.onmouseover=function(){
    oBanLeft.style.display="block";
    oBanRight.style.display="block";
}

//学员
var oStuLeft=document.getElementById("stu-left");
var oStuRight=document.getElementById("stu-right");
var oStuBox=document.getElementById("student-box");
var oStuLi=oStuBox.getElementsByTagName("li");
var oStuPace=oStuBox.getElementsByTagName("img");
var oStuInfo=document.getElementById("student-name");
var stuNameP=oStuInfo.getElementsByTagName('p');
var stuNameSpan=oStuInfo.getElementsByTagName('span');
var names={
    '李培博':'还好班级氛围轻松愉快，不然真的坚持不下去。',
    '李彩云':'我还没学完，希望在这里遇到大家！',
    '李骁姣':'惊喜发现董策老师喜欢骑机车，帅帅滴~',
    '王霜':'我是晓华老师的铁粉！',
    '郑超':'喜欢教班里的程序媛妹子写代码^^'
}
oStuBox.innerHTML+=oStuBox.innerHTML;
oStuBox.style.width=oStuBox.offsetWidth*2+"px";
var index=2;  //第二个开始
oStuLeft.onclick=function(){
    studentName();
    var s=oStuBox.offsetLeft+193;
    index--;
    stuMove(oStuBox,"left",s);
}
oStuRight.onclick=function(){
    studentName();
    index++;
    var s=parseInt(oStuBox.offsetLeft)-193;
    stuMove(oStuBox,"left",s);
}
function studentName(){
    for (var p=0;p<oStuPace.length;p++) {
    	if(oStuPace[p].className=="bigimg"){
    	    var stuName=oStuPace[p].getAttribute("alt");
    	    console.log(stuName,oStuPace[p])
    	    for (var j in names) {
    	    	if(j==stuName){
                    stuNameP[0].innerHTML=j;
                    stuNameSpan[0].innerHTML=names[j];
    	    	}
    	    }

    	}
    }
}
function stuMove(obj,name,value){
    clearInterval(obj.timer)
    if (value<-obj.offsetWidth/2) {
        index=2;
    	obj.style.left=0+"px";
    } else if(value>0){
        index=7;
        obj.style.left=-obj.offsetWidth/2+"px";
    }else{
        obj.timer=setInterval(function(){
            var cur=parseInt(Motion.getStyle(obj,name));
            var speed=(value-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            obj.style[name]=speed+cur+'px';
        },20);
        for (var i=0; i<oStuLi.length; i++) {
        	oStuLi[i].children[0].className="";
        }
    }
    oStuLi[index].children[0].className="bigimg";

}

//学员访谈视频效果
var oStudentAv=document.getElementById("student-av");
var oPlayIcon=document.getElementById("play-icon");
var oCloseVido=document.getElementById("close-vido");
var oVideo=oStudentAv.getElementsByTagName("video")[0];
oPlayIcon.onclick=function(){
    oStudentAv.style.display="block";
    oVideo.style.top=(oStudentAv.offsetHeight-oVideo.offsetHeight)/2+"px";
    oVideo.style.left=(oStudentAv.offsetWidth-oVideo.offsetWidth)/2+"px";
    oCloseVido.style.top=oVideo.offsetTop-oCloseVido.offsetHeight+"px";
    oCloseVido.style.left=oVideo.offsetLeft+oVideo.offsetWidth+"px";
    oVideo.load();
    oVideo.play();
}
oCloseVido.onclick=function(){
    oStudentAv.style.display="";
    var oVideo=oStudentAv.getElementsByTagName("video")[0];
    oVideo.pause();
}



//线下培训中心
var json={
   "北京":{
        "中软国际教育科技集团总部":["北京市海淀区中关村科学院南路2号融科资讯中心C座北楼12层"],
        "中软国际卓越培训中心":["北京市昌平区邓庄北京交通职业技术学院北京市海淀区苏州街26号亿方大厦11层","北京市海淀区苏州街26号亿方大厦11层"],
        "中软总公司计算机培训中心":["北京市海淀区学院南路55号中软大厦B座5层"],
      },
   "长沙":{
        "中软国际卓越培训中心":["长沙市高新区桐梓坡西路229号麓谷国际工业园中软国际"],
   },
   "重庆":{
        "中软国际卓越培训中心":["重庆市西永微电子产业园区研发楼1期B1栋901","重庆市九龙坡区石桥铺未来大厦2102"],
   },
   "大连":{
       "中软国际卓越培训中心":["大连市高新园区广贤路97号"],
   },
   "广州":{
       "中软国际卓越培训中心":["南宁市高新区科园东四路7号远信大厦4楼412","南宁市高新区创新路中关村双创示范基地九号楼2楼"],
   },
   "天津":{
     "中软国际卓越培训中心":['天津经济技术开发区泰达服务外包园4号楼2层',"天津市和平区郑州道18号港澳大厦8层"] ,
   },
   "无锡":{
       "中软国际卓越培训中心":["无锡新区震泽路18号国家软件园处女座B座"],
   },
   "厦门":{
       "中软国际卓越培训中心":["福建省厦门市思明区软件园2期观日路2号"],
   },
   "长春":{
       "中软国际卓越培训中心":["长春市繁荣路388号华洋教育城四层"],
   },
   "成都":{
       "中软国际卓越培训中心":["成都市少城路27号少城大厦13层"],
   },
   "哈尔滨":{
       "中软国际卓越培训中心":["黑龙江省哈尔滨市南岗区建设街51号2层"],
   },
   "杭州":{
       "中软国际卓越培训中心":["杭州市余杭塘路515号矩阵国际5号楼8层"],
   },
   "合肥":{
       "中软国际卓越培训中心":["安徽省合肥市高新区望江西路800号动漫基地创新产业园C3-11层"],
   },
   "南昌":{
       "中软国际卓越培训中心":["南昌市红谷滩新区万达中心B3-15层"],
   },
   "南京":{
       "中软国际卓越培训中心":["南京市雨花台区雨花大道2号邦宁科技园2层"],
   },
   "南宁":{
       "中软国际卓越培训中心":["南宁市高新区科园东四路7号远信大厦4楼412","南宁市高新区创新路中关村双创示范基地九号楼2楼"],
   },
   "青岛":{
       "中软国际卓越培训中心":["青岛市市南区山东路29号银河大厦101室"],
   },
   "上海":{
       "中软国际卓越培训中心":["上海市黄浦区延安东路59号工商联大厦裙楼5层","上海市浦东新区商城路887号波特营创意园A1幢1楼（近世纪大道）","上海徐汇区漕河泾开发区民润大厦1楼"],
   },
   "深圳":{
       "中软国际卓越培训中心":["深圳市南山区科技中二道2号深圳国际软件园一期8栋2层"],
   },
   "沈阳":{
       "中软国际卓越培训中心":["沈阳市和平区南京北街21号远东大厦5层"],
   },
   "武汉":{
       "中软国际卓越培训中心":["武汉市洪山区关山大道光谷软件园F3栋1楼和4楼"],
   },
   "西安":{
       "中软国际卓越培训中心":["西安市碑林区长安北路8号陕西高速经纬大厦3层"],
   },
   "郑州":{
       "中软国际卓越培训中心":["郑州市金水区经三路财富广场5号楼5层"],
   },
}
var oMapAddress=document.getElementById("map-address").getElementsByTagName("li");
var oAddressName=document.getElementById("address-name");
var oMapInfoLis=document.getElementById("map-info-lis");

for (var i=0; i<oMapAddress.length;i++) {
    oMapAddress[i].index=i;
	oMapAddress[i].onclick=function(){
	    var oAddress=this.getAttribute("alt");
            oMapInfoLis.innerHTML="";
            oAddressName.innerText=oAddress+"市";
	    for(var g in json){
	        if(oAddress==g){
                for (var h in json[g]) {
                    oMapInfoLis.innerHTML+="<li><h3>"+h+"</h3><p>"+json[g][h]+"</p></li>";
                }
	        }
	    }
	}
}
