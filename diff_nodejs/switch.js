var day = new Date().getDay();
switch (day) {
  case 6:
  case 0:
    console.log('It\'s weekend so is off day');
    break;
  default:
    console.log('Today is weekday so no off');
}

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