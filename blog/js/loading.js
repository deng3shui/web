function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
    ev.preventDefault();
    let data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    window.location.href="../html/index.html"
    alert("着陆成功")}

