function allowDrop(ev){
    ev.preventDefault()
}
function drag(ev){
    ev.dataTransfer.setData("text",ev.target.id)
}
function  drop(ev){
    let data=ev.dataTransfer.getData("text")
    if(ev.target.children.length<1) {ev.target.appendChild(document.getElementById(data));}
    else alert("满了哦，换一个地方吧")
}
