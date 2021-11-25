document.addEventListener("DOMContentLoaded", function() {
  const f = document.querySelector("#user_form");

  const form = document.querySelector(".user_form");

  form.addEventListener("submit", (e) => {
    if (document.querySelector(".user_id").value === "") {
      e.preventDefault();
      alert("填起乃");
    }
  });
})