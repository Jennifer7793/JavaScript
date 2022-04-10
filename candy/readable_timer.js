function humanReadableTimer(seconds) {
  // const result = new Date(seconds * 1000).toISOString().slice(11, 19);
  // console.log(result);
  var hr = Math.floor(seconds/3600)
  var min = Math.trunc(Math.floor(seconds % 3600)/60) //round down to the nearest whole num
  var sec = ((seconds % 3600) % 60)
  if hr < 10 || min < 10 || sec < 10 {
    return "0" + `${hr}`
  }
  return `${hr}:${min}:${sec}`   
}

// function humanReadableTimer(seconds) {
//   var hrs = seconds.getHours().toString().padStart(2, '0')
//   var mins = seconds.getMinutes().toString().padStart(2, '0')
//   var secs = seconds.getSeconds().toString().padStart(2, '0')

//   return `${hrs}:${mins}:${secs}`
// }

console.log(humanReadableTimer(0))      // 印出 00:00:00
console.log(humanReadableTimer(59))     // 印出 00:00:59
console.log(humanReadableTimer(60))     // 印出 00:01:00
console.log(humanReadableTimer(90))     // 印出 00:01:30
console.log(humanReadableTimer(3599))   // 印出 00:59:59
console.log(humanReadableTimer(3600))   // 印出 01:00:00
console.log(humanReadableTimer(45296))  // 印出 12:34:56
console.log(humanReadableTimer(86399))  // 印出 23:59:59
console.log(humanReadableTimer(86400))  // 印出 24:00:00
console.log(humanReadableTimer(359999)) // 印出 99:59:59