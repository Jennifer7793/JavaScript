//Today 2022/5/8 (Sun)
var day = new Date().getDay();

//------below will return 'It's Sun so is off day'------
// if (day == 6) {
//   console.log('Today is Sat so is off day');
// } else if (day == 0) {
//   console.log('It\'s Sun so is off day');
// } else {
//   console.log('It\'s weekday so gotta work');
// }

//------below will return 'Today is not Sat' coz the condition is true so won't go further------
// if (day == 6) {
//   console.log('Today is Sat so is off day');
// } else if (day != 6) {
//   console.log('Today is not Sat');
// } else if (day == 0) {
//   console.log('It\'s Sun so is off day');
// } else {
//   console.log('It\'s weekday so gotta work');
// }

//------below will return 'It's Sun so is off day'------
// if (day == 6) {
//   console.log('Today is Sat so is off day');
//   if (day != 0) {
//     console.log('And today confirm not Sun');
//   }  
// } else if (day == 0) {
//   console.log('It\'s Sun so is off day');
// } else {
//   console.log('It\'s weekday so gotta work');
// };