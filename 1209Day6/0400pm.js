var hero = {
  name: '悟空',
  sayMyName: function() {
    console.log(this.name);
  }
};

hero.sayMyName();   // A: 悟空

var speakOut = hero.sayMyName;
speakOut();         // B: 沒有人呼叫，this全域變數，沒有就是undefined

const someone = { name: '路人' }

hero.sayMyName.call(someone);  // C: call改變指向，路人

function here() {
  console.log(this);
}

const there = () => {
  console.log(this);
}

here();   // D: global
there();  // E: global

//A: 悟空 B: undefine C: 路人 D: global