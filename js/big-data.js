var oViewBox=document.getElementById("view-box");
var oBottomLisBox=document.getElementById("big-data-box");
var oBigDataLeft=document.getElementById("big-data-left");
var oBigDataRight=document.getElementById("big-data-right");
var oBottomLisBoxLis=document.getElementById('bottom-lis-box').getElementsByTagName("li");


Motion.MoveBox(0,2000,-1200,oBottomLisBoxLis,oBigDataLeft,oBigDataRight,"dianbg",oBottomLisBox,oViewBox);

oViewBox.onmouseenter=function(){
    oBigDataLeft.style.display='block';
    oBigDataRight.style.display='block';
}
oViewBox.onmouseleave=function(){
    oBigDataLeft.style.display='';
    oBigDataRight.style.display='';
}
