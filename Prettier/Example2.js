function calculateCircumference(radius) {
  const pi = 3.14159
  return 2 * pi * radius
}
function findMax(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
const values = [5, 12, 7, 3, 8, 20]
const circumferences = values.map((r) => {
  return calculateCircumference(r)
})
const maxVal = findMax(values)
for (let i = 0; i < circumferences.length; i++) {
  console.log('Circumference: ' + circumferences[i])
}
console.log('Max Value: ' + maxVal)
