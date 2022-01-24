
// Create show class when toggle
// document.addEventListener("DOMContentLoaded", ()=> {
//   const items = document.querySelector("#itemList");
//   items.addEventListener("click", (e) => {
//     const item = e.target.innerText
//     e.target.classList.toggle("show") 
//     console.log(e.target);
//     console.log(item);
//   })
// });

// // api url
// const api_url =
// 	"https://randomuser.me/api/?results=10";

// // Defining async function
// async function getapi(url) {
	
// 	// Storing response
// 	const response = await fetch(url);
	
// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;
	
// 	// Loop to access all rows

// 	// Setting innerHTML as tab variable
// 	document.getElementById("itemList").innerHTML = tab;
// }

async function fetchUsers() {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const json = await response.json();
  return json;
}
console.log(fetchUsers());

async function getItems() {
  const content = document.querySelector('#itemList')
  const contentItem = await fetchUsers()
  contentItem.forEach((e) => {
    console.log(content);
  })
}

document.addEventListener("DOMContentLoaded", ()=> {
  const items = document.querySelector("#itemList th");
  items.addEventListener("mouseenter", (e) => {
    e.target.classList.add("show") 
  })
  items.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("show")
  })
  items.addEventListener("click", (e) => {
    e.target.classList.add("select")
  })
});
