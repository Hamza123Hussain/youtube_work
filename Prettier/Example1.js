function add(a, b) {
  return a + b
}
function subtract(a, b) {
  if (a > b) {
    return a - b
  } else {
    return b - a
  }
}
const multiply = (x, y) => {
  return x * y
}
const numbers = [1, 2, 3, 4, 5]
const results = numbers.map((num) => {
  return multiply(num, 2)
  console.log(num)
})
console.log(results)
function sayHello(name) {
  console.log('Hello, ' + name + '!')
}
sayHello('Alice')
sayHello('Bob')
sayHello('Charlie')
sayHello('David')
