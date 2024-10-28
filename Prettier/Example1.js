function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
const numbers = [10, 5, 3, 7, 12]
console.log('Sum:' + sumArray(numbers))
