var day = new Date().getDay();
switch (day) {
  case 6:
    console.log('Today is Sat so is off day');
    break;
  case 0:
    console.log('It\'s Sun is off day');
    break;
  default:
    console.log('Today is weekday so no off');
}