var day = new Date().getDay();
for (var i = 0; i < 7; i++) {
  switch (i) {
    case 6:
  case 0:
    console.log('It\'s weekend so is off day');
    break;
  default:
    console.log('Today is weekday so no off');
  }
}
// above returns as below: 
// It's weekend so is off day
// Today is weekday so no off
// Today is weekday so no off
// Today is weekday so no off
// Today is weekday so no off
// Today is weekday so no off
// It's weekend so is off day
  
// switch (day) {
//   case 6:
//   case 0:
//     console.log('It\'s weekend so is off day');
//     break;
//   default:
//     console.log('Today is weekday so no off');
// }

// switch (day) {
//   case 6:
//     console.log('Today is Sat so is off day');
//     break;
//   case 0:
//     console.log('It\'s Sun is off day');
//     break;
//   default:
//     console.log('Today is weekday so no off');
// }

// ---- below if took away break, it will continue executing. ----
// switch (day) {
//   case 6:
//     console.log('Today is Sat so is off day');
//     break;
//   case 0:
//     console.log('It\'s Sun is off day');
//   //  break;
//   default:
//     console.log('Today is weekday so no off');
// }