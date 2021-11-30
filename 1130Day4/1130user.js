document.addEventListener("DOMContentLoaded", function() {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => {
      return response.json();
    })
    .then(({results}) => {
      results.forEach((u) => {
        console.log(u.email);
      })    
    })
    .catch((err) => {
      console.log(hi);
    });
// document.addEventListener("DOMContentLoaded", function() {
//   const f = fetch("https://randomuser.me/api/?results=5");
//   const t = f.then((x) => {
//     // return 123
//     return x.json()
//   });

//   const z = t.then(y => {
//     // console.log(y);
//   })
//   console.log(z);
  // console.log(t);
  // console.log(f);
  // .then((res) => {
  //   const rr = res.body.getReader();
  //   console.log(rr);
  // });
});

//fetch會回傳promise，用then接，每一個then會再回傳新的promise