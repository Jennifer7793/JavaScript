document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById('selectAll')
  btn.addEventListener("click", function () {
    const el = document.createElement("div");
    el.innderText = "hi";
    el.className = "say_hi";
    const container = document.querySelector("#say_hi");
    container.appendChild(el)
  });
});

