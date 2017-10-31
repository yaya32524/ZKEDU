var Motion=new Object();

Motion.getStyle=function(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}

Motion.movesStart=function(obj,name,times,finde){
        clearInterval(obj.timer);
		obj.timer=setInterval(function(){
        var off=true;
        for (var i in name) {
            var cur=parseInt(Motion.getStyle(obj,i));
            var speed=(name[i]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(i=="opacity"){
                cur=(Motion.getStyle(obj,i))*100;
                speed=(name[i]-cur)/6;
                obj.style.filter="alpha("+(speed+cur)+")";
                obj.style[i]=(speed+cur)/100;
            }else{
                obj.style[i]=speed+cur+'px';
            }
            if(cur!=name[i]){
                off=false
            }else{
              off=true;
            }
            if(off){
                clearInterval(obj.timer);
                if(finde){
                    finde();
                }
            }
        }
    },times)
}
 Motion.MoveBox=function(start,tims,speed,dian,left,right,names,oImgBox,box,funs){
                var now=start; //第几张图
                var timer;
                auto();
                function auto(){
                    clearInterval(timer);
                    timer=setInterval(next,tims);
                }
                function next(){
                    now++;
                    tab(speed);
                }
                if (dian) {
                    for (var k=0;k<dian.length; k++) {
                        dian[k].index=k;
                        dian[k].addEventListener('mouseover',function(){
                           now=this.index;
                           tab(speed);
                        },false);
                    }
                }
                
                right.addEventListener('click', function(e){
                    next();
                }, false);
                left.addEventListener('click',function(e){
                    now--;
                    tab(speed);
                },false);
                function tab(speed){
                    if (dian) {  
                        if(now==-1){
                            now=dian.length-1;
                        }
                        if (now==dian.length) {
                            now=0;
                        }
                        for (var d=0; d<dian.length; d++) {
                            dian[d].className="";
                        }
                        dian[now].className=names;
                    }else{
                        if(now==-1){
                        now=names.length-1;
                        }
                        if (now==names.length) {
                            now=0;
                        }
                    }
                    Motion.movesStart(oImgBox,{left:(speed*now)},30)
                } 
                box["onmouseover"]=function(){
                    clearInterval(timer);
                }
                box["onmouseout"]=function(){
                    auto();
                }
                if(funs){
                    funs();
                }


}
 
