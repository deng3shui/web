let arr = document.getElementsByClassName("slide");
const BOXWIDTH=1000;

onload=function(){

    for(let i=0;i<arr.length;i++){
        arr[i].style.left = i*BOXWIDTH+"px";
    }
}
function LeftMove(){
    for(let i=0; i<arr.length; i++){
        let left = parseFloat(arr[i].style.left);
        left-=2;
        if(left<=-BOXWIDTH){
            left=(arr.length-1)*BOXWIDTH;//当图片完全走出显示框，拼接到末尾
            clearInterval(moveId)
        }
        arr[i].style.left = left+"px";
    }

}
moveId=setInterval(LeftMove,1);//设置一个1毫秒定时器
function a (){
    clearInterval(moveId)              //清除定时器叠加造成的变快、变慢
    moveId=setInterval(LeftMove,1);//设置一个1毫秒定时器
}
timeId=setInterval(a,6000);//设置一个3秒的定时器。
function stop(){
    clearInterval(timeId);
}
function start(){
    clearInterval(timeId);
    timeId=setInterval(a,6000);
}
