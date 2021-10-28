const boxs = document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxs)

function checkBoxs(){
    const triggerBottom = window.innerHeight / 5 * 4
    boxs.forEach(box=>{
        const boxtop = box.getBoundingClientRect().top //到顶部的距离
        if(boxtop < triggerBottom){
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}
checkBoxs()
