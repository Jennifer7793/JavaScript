document.addEventListener("DOMContentLoaded", function() {
  const link = document.querySelector("#link");

  link.addEventListener("click", function (e) {
    e.preventDefault
    console.log("go!");
  });
});
