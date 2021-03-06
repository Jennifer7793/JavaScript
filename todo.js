document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.querySelector("#taskInput");
  const todoLists = document.querySelector("#todo-list");

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      //1. todo item
      const todo = document.createElement('div')
      const inputValue = e.target.value.trim();
      
      todo.innerText = e.target.value
      todo.className = "todoItem";
      // 1.5 Delete btn
      const closeBtn = document.createElement("button")
      closeBtn.innerText = "X";

      //1.6 Delet task item
      closeBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      });

      todo.appendChild(closeBtn);

      if (inputValue !== "")
      todoLists.prepend(todo);
      //2. elimate input content
      e.target.value = "";
    }
  });
});
