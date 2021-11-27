document.addEventListener("DOMContentLoaded", function() {
  const check = document.querySelectorAll(".cb");
  const btn = document.querySelector("#selectAll");

    btn.addEventListener("click", () => {
    check.forEach((x) => {
      x.checked = true;
    });
  });
});