document.addEventListener("DOMContentLoaded", function() {
  const link = document.querySelector("#link");

  link.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("go!");
  });

  // const txt = document.getElementById('hi')
  // txt[].innerText = "World";
  // }
  // const ABC = document.getElementsByClassName('hi')
  // for (var a = 0; a < 3; a = a+1 ) {
  // ABC[a].innerText = "Z";
  // }
});