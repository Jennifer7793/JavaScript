function myFetch() {
	const p = new Promise(function(resolve, reject) {
    if (n > 10) {
      resolve({result: 'ok', age: 18})
    } else {
      reject("hey")
    }
  })
  return p
}

const cc = myFetch(20)
cc.then(({age, result}) => {
  console.log(resutlt, age)
}).catch(err => {

})
