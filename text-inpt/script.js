const textEl = document.getElementById("text")
const speedEl = document.getElementById('speed')
const text = "改革春风吹满地~中国人民真争气~"
let i =1
let speed = 400/ speedEl.value
 function inputText(){
    textEl.innerText = text.slice(0,i)
     i++
     setTimeout(inputText,speed)
     if(text.length<i)
         i = 1
 }
inputText()
speedEl.addEventListener('input',(e)=>speed=300/e.target.value)
