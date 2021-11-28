document.addEventListener("DOMContentLoaded", function() {
  const course = document.querySelectorAll("li");
  const btn = document.querySelector("#selectAll")

    btn.addEventListener("click", () => {
      for (let i = 0; i < course.length; i++) {
        if (course[i].innerText.length >= 4) {
        course[i].children[0].checked = true;
        }
      }
    });
});