// document.addEventListener("DOMContentLoaded", function () {
//   const f = document.querySelector('#user_form');
//   const content = document.querySelector('#user_id').value;
//   f.addEventListener("submit", function (e) {
//     if (content === "") {
//     e.preventDefault();
//     f.innerText = "Kindly let us know wru";
//     }    
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const f = document.querySelector("#user_form");
  
  f.addEventListener("submit", (e) => {
    if (document.querySelector("#user_id").value === "") {
      e.preventDefault();
      alert("賣造");
    }
  }); 
});
  

// document.addEventListener("DOMContentLoaded", function() {
//   const f = document.querySelector("#user_form");

//   f.addEventListener("submit", function (e) {
//     e.preventDefault()
//     console.log("stop!");
//   });
// });
