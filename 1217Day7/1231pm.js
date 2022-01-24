function hello() {
  const result = fetch('https://randomuer.me/api')
  console.log(result);
}

hello()

async function hello() {
  const result = await fetch('https://randomuer.me/api')
  console.log(result);
}

hello()