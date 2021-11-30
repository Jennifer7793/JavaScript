document.addEventListener("DOMContentLoaded", function() {
  const out_div = document.querySelector(".out");
  const in_div = document.querySelector(".in");
  // const inner_div = document.querySelector(".inner");

  out_div.addEventListener("click", () => {
    console.log(target, e.target);
 
});

// document.addEventListener("DOMContentLoaded", function() {
//   const out_div = document.querySelector(".out");
//   const in_div = document.querySelector(".in");
//   const inner_div = document.querySelector(".inner");

//   out_div.addEventListener("click", () => {
//     console.log('out clicked');
//   }, true
//   );

//   in_div.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log('in clicked');
//   });

//   inner_div.addEventListener("click", () => {
//     console.log('inner clicked');
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const out_div = document.querySelector(".out");
//   const in_div = document.querySelector(".in");

//   out_div.addEventListener("click", () => {
//     console.log('out clicked');
//   },
//   true
//   );
//   in_div.addEventListener("click", () => {
//     console.log('in clicked');
//   }, true
//   );
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const out_div = document.querySelector(".out");
//   const in_div = document.querySelector(".in");

//   out_div.addEventListener("click", () => {
//     console.log('out clicked');
//   });
//   in_div.addEventListener("click", () => {
//     console.log('in clicked');
//   });
// });