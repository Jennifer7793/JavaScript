$().ready(function () {
  const userList = document.querySelector("#userList");
  $.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function({ results }) {
      results.forEach((user) => {
        let { first, last } = user.name;
        let { thumbnail } = user.picture;
        console.log(`${first} ${last}`);

        const el = document.createElement('li')
        el.innerHTML = `<img src=" ${thumbnail}" />${first} ${last}`;
        userList.appendChild(el);
      }) 
    }
  });
});

// $().ready(function () {
//   $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
// });

// $().ready(function () {
//   $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
// });

// $().ready(function () {
//   $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(d) {
//       let { first, last } = d.results[0].name
//       console.log(`${first} ${last}`);
//     }
//   });
// });

// $().ready(function () {
//   $('#abc').text('ZZZ');
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const r = fetch("https://randomuser.me/api/");
//   console.log(r);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   fetch("https://randomuser.me/api/").then((res) => {
//     console.log(res);
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   fetch("https://randomuser.me/api/").then((res) => {
//     const rr = res.body.getReader();
//     console.log(rr);
//   });
// });