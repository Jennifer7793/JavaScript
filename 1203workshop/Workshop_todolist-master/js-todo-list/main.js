// TO DO
document.addEventListener("DOMContentLoaded", ()=> {
  const ul = document.querySelector("ul");
  ul.addEventListener("click", (e) => {
    console.log(e.target.parentNode);
    if (e.target.className !== "checked") {
      e.target.classList.add("checked")
    }
    else {
      e.target.classList.remove("checked")
    }
    if (e.target.nodeName === "SPAN") {
      e.target.parentNode.remove()
    }
  })

  const addBtn = document.querySelector("#addBtn")
  const input = document.querySelector("#input")

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      const liInput = document.createElement("li")
      const closeBtn = document.createElement("span")
      liInput.innerText = input.value 
      closeBtn.className = "close"
      closeBtn.innerHTML = "x"
      liInput.append(closeBtn)
      ul.append(liInput)
      input.value = ""
    }
  })

  addBtn.addEventListener("click", (e) => {
    if (input.value.trim() !== "") {
      const liInput = document.createElement("li")
      const closeBtn = document.createElement("span")
      liInput.innerText = input.value 
      closeBtn.className = "close"
      closeBtn.innerHTML = "x"
      liInput.append(closeBtn)
      ul.append(liInput)
      input.value = ""
    }
  })
});