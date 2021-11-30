function randomHex() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".mainColumn");
  const addItem = document.querySelector("#addItem");

  container.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName == "BUTTON") {
      e.target.parentNode.remove();
    }
  });

  addItem.addEventListener("click", () => {
    const color = randomHex();
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `#${color}`;
    el.style.backgroundColor = `#${color}`;
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "X";
    el.append(closeBtn);

    container.insertAdjacentElement("afterbegin", el);
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const container = document.querySelector(".mainColumn");
//   const btn = document.querySelector('#addItem')

//   container.addEventListener("click", (e) => {
//     if (e.target && e.target.nodeName == "BUTTON") {
//       e.target.parentNode.remove();
//     }
//   });

//   btn.addEventListener("click", function () {
//     const el = document.createElement("div");
//     el.innderHTML = "123";
//     el.className = "add_123";
//     const closeBtn = document.createElement("button");
//     closeBtn.innerText = "X"
//     el.append(closeBtn);

//     container.insertAdjacentElement("afterbegin", el)
//   });
// });

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

  // function randomHex () {
  //   return
  //   Math.floor(Math.random() * 255).toString(16).padStart(2, '0') + 
  //   Math.floor(Math.random() * 255).toString(16).padStart(2, '0') + 
  //   Math.floor(Math.random() * 255).toString(16).padStart(2, '0')
  // }