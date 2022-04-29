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