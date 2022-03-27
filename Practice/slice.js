const engineer = ['Ken', 'Seth', 'Lilith', 'Roy', 'Liz', 'Jen'];

console.log(engineer.slice(2)); //['Lilith, 'Roy', 'Liz', 'Jen']
// 以index[2]為開始，印出後面的值

console.log(engineer.slice(2, 4)); //['Lilith', 'Roy']
// 以index[2]為開始，印到index(4-1)

console.log(engineer.slice(1, 5)); //['Seth', 'Lilith', 'Roy', 'Liz']
// 以index[1]為開始，印到index(5-1)

console.log(engineer.slice(-2)); //['Liz', 'Jen']
// 以index[-2]為開始，逐一印出後面的值

console.log(engineer.slice(2, -1)); //['Lilith', 'Roy', 'Liz']
// 以index[2]為開始，印到index(-1-1)

console.log(engineer.slice()); //['Ken', 'Seth', 'Lilith', 'Roy', 'Liz', 'Jen']
// 印出原本的陣列