const hourEl = document.querySelector('.hour')
const  minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const days = ["Sunday", "周一","周二","周三","周四","周五","周六","周日"];
const months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "腊月"];

function setTime(){

    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 12)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,  60)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,  60)}deg)`
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ?`0${minutes}` :minutes}${ampm}`
    dateEl.innerHTML= `${days[day]},${months[month]}`
}
const scale = (num, in_max,  out_max) => {
    return 360*num/in_max}
setTime()

setInterval(setTime, 1000)
