function hello (n, m) {
  console.log(n, m)
  console.log(this)
}

const hero = {
  name: 'jen',
  power: 100,
}

hello(hero, 123, 456)
hello.call(hero, 123, 456)
hello.apply(hero, [123, 456])