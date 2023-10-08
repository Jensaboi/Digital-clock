function updateTime(){
  let currentDay = new Date()
  let currentHr = currentDay.getHours()
  let currentMin = currentDay.getMinutes()
  let currentSec = currentDay.getSeconds()
  
  let currentSecStr = `${currentSec}`
  if(currentSec < 10){
    currentSecStr = `0${currentSec}`  
  }
  
  let currentMinStr = `${currentMin}`
  if(currentMin < 10){
    currentMinStr = `0${currentMin}`
  }

  document.getElementById("clock").textContent = `${currentHr}:${currentMinStr}:${currentSecStr}`
}

updateTime()

setInterval(updateTime, 1000)
