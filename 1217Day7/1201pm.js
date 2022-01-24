function fetchScore(n) {
  const score = new Promise(function(resolve, reject) {
    if (n.length > 10) {
      resolve ({ msg: 'msg' })
    } else {
      reject({ msg: 'err' })
    }
  })
  return score
}

//if String.length more than 10, use catch otherwise use then
fetchScore("aaacc").then(msg => {
  console.log(msg);
}).catch(err => {
  console.log(err);
})