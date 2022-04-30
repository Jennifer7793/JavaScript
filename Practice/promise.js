function promise() {
  return new Promise((resolve, reject) => {
    // random pick 0 or 1
    const num = Math.random() > 0.5 ? 1 : 0;
    
    // 1 execute resolve, otherwise reject
    if (num) {
      resolve('success');
    }
    reject('failed')
  });
}

promise()
  .then((success) => {
    console.log(success);
  }, (fail) => {
    console.log(fail);
  });

~async function { //~can direct execute the function
  const delay = (s) => {
    return new Promise(function(resolve){
      setTimeout(resolve, s);
    });
  };

  console.log(1);
  await delay(1000);
  console.log(2);
  await delay(2000)
  console.log(3);
}(); //with ending () to call function 

  // const delay = (s) => {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, s);
  //   });
  // };

  // delay().then(() => {
  //   console.log(1);
  //   return delay(1000);
  // }).then(() => {
  //   console.log(2);
  //   return delay(2000);
  // }).then(()=> {
  //   console.log(3);
  // })